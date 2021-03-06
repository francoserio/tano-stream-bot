import { Inject, Injectable } from '@nestjs/common';
import { MessageEmbed, WebhookClient } from 'discord.js';

@Injectable()
export class DiscordService {
  constructor(@Inject('WEBHOOK_CLIENT') private webhookClient: WebhookClient) {}

  async sendWebhookMessage(message: string, embeds: Array<MessageEmbed>) {
    return this.webhookClient.send({
      content: message,
      username: process.env.DISCORD_BOT_USERNAME,
      avatarURL: process.env.DISCORD_BOT_IMAGE,
      embeds,
    });
  }
}
