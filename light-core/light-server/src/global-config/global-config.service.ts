import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GlobalConfigService {
  constructor(private configService: ConfigService) {}

  getApiKey() {
    return this.configService.get<string>('API_KEY');
  }

  getJwtSecret() {
    return this.configService.get<string>('JWT_SECRET');
  }

  getAdminUsername() {
    return this.configService.get<string>('ADMIN_USERNAME');
  }

  getAdminPassword() {
    return this.configService.get<string>('ADMIN_PASSWORD');
  }
}
