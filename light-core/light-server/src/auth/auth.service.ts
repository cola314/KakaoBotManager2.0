import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GlobalConfigService } from './../global-config/global-config.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly globalConfigService: GlobalConfigService,
  ) {}

  validateUser(username: string, password: string) {
    if (
      username === this.globalConfigService.getAdminUsername() &&
      password === this.globalConfigService.getAdminPassword()
    ) {
      return { username };
    }
    return null;
  }

  login(username: string) {
    return {
      access_token: this.jwtService.sign(username),
    };
  }
}
