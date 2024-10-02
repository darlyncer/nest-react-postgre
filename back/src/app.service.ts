import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'AHHAHA HUISOSI';
  }

  getProfile(): string {
    return "It's my profile";
  }
}
