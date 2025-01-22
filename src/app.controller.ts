import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { tab_wpp } from './Entity/user.entity';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {};

  @Get()
  getUsers(): Promise<tab_wpp[]> {
    return this.appService.getUsers();
  }
}
