import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([TasksRepository]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
