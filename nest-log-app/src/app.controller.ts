import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/post')
  getPost(): string {
    Logger.log('Welcome post page', 'AppController');
    return 'Welcome post page';
  }
}
