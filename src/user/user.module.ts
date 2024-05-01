import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// jjjj
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
