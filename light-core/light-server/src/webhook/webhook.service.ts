import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWebhookDto } from './dto/createWebhook.dto';
import { Webhook } from './webhook.entity';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhook)
    private webhookRepository: Repository<Webhook>,
  ) {}

  findAll(): Promise<Webhook[]> {
    return this.webhookRepository.find();
  }

  async create(dto: CreateWebhookDto): Promise<void> {
    const webhook = new Webhook();
    webhook.url = dto.url;
    await this.webhookRepository.save(webhook);
  }

  async remove(id: number): Promise<void> {
    await this.webhookRepository.delete(id);
  }
}
