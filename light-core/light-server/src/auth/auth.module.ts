import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GlobalConfigModule } from 'src/global-config/global-config.module';
import { GlobalConfigService } from 'src/global-config/global-config.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [GlobalConfigModule],
      inject: [GlobalConfigService],
      useFactory: (globalConfigService: GlobalConfigService) => ({
        secret: globalConfigService.getJwtSecret(),
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
    GlobalConfigModule,
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
