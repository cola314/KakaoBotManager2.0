import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalConfigService } from './global-config.service';

@Module({
  imports: [ConfigModule],
  providers: [GlobalConfigService],
  exports: [GlobalConfigService],
})
export class GlobalConfigModule {}
