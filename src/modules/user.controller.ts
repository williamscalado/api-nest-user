import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}
  @Get('userdata')
  getUserData() {
    return this.userService.getUserData();
  }
  @Get('userdata/:id')
  getUserByID() {
    return this.userService.getUserById('20');
  }
}
