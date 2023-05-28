import {
  Body,
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id) {
    return await this.taskService.getTaskById(+id);
  }

  @Patch('/:id')
  async updateTask(@Param('id') id, @Body() body: UpdateTaskDto) {
    return await this.taskService.updateTask(+id, body);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id) {
    return await this.taskService.deleteTask(+id);
  }
}
