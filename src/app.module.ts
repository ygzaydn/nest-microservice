/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo/schemas/todo.schema';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
