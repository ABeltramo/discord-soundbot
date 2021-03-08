import { Message } from 'discord.js';

import Command from '../base/Command';

export class PingCommand extends Command {
  public readonly triggers = ['ping'];

  public async run(message: Message) {
    await message.edit('Pong!');
  }
}
