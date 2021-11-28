import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Webhook } from './webhook.entity';
import { WebhookService } from './webhook.service';
import { CreateWebhookDto } from './dto/createWebhook.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Get()
  findAll(): Promise<Webhook[]> {
    return this.webhookService.findAll();
  }

  @Post()
  create(@Body() createWebhookDto: CreateWebhookDto) {
    this.webhookService.create(createWebhookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    this.webhookService.remove(id);
  }
}
