import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { todoDTO } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  private readonly todos: todoDTO[] = [];

  getAllTodo() {
    return `This service will handle get request`;
  }

  async createTodo(todo: todoDTO): Promise<Todo> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  editTodo(id: string, todo: todoDTO) {
    console.log(id);
    console.log(todo);
    return `This endpoint will edit todo when we're done`;
  }
}
