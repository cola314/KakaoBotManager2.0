import { ApiProperty } from '@nestjs/swagger';

export class CreateWebhookDto {
  @ApiProperty()
  url: string;
}
