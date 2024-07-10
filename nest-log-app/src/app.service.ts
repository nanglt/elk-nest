import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  render(): void {
    Logger.verbose(
      'Reload cache data successfully',
      'SystemCacheIronSourceService - reloadCacheData',
    );

    Logger.error('Error message', 'AppService - getHello');

    Logger.log('Logger message', 'AppService - getHello');

    Logger.verbose('Verbose message', 'AppService - getHello');

    Logger.warn('Warning message', 'AppService - getHello');

    Logger.error('Error message');

    Logger.log('Logger message');

    Logger.verbose('Verbose message');

    Logger.warn('Warning message');
  }
}
