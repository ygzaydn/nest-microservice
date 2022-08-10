import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { todoDTO } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.getAllTodo();
  }
  @Post()
  async addNewTodo(@Body() bodyDTO: todoDTO) {
    return this.todoService.createTodo(bodyDTO);
  }
  @Put('/:id')
  changeTodo(@Param() id: string, @Body() bodyDTO: todoDTO) {
    return this.todoService.editTodo(id, bodyDTO);
  }
  @Delete(':/id')
  deleteTodo(@Param() id: string) {
    console.log(id);
    return `This endpoint will delete todo when we're done`;
  }
}
