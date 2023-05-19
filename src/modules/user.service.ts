import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getUserData() {
    return 'data user';
  }
  getUserById(id: string) {
    return id;
  }
}
