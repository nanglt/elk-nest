import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
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

  @Get('/about')
  getAbout(): string {
    throw new BadRequestException('This is a bad request exception');
  }

  @Get('/contact')
  getContact(): string {
    throw new InternalServerErrorException(
      'This is an internal server error exception',
    );
  }

  @Get('render')
  render(): void {
    this.appService.render();
  }
}
