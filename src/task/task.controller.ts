import {
  Body,
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Patch,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getTaskById(@Param('id') id) {
    return await this.taskService.getTaskById(+id);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  async updateTask(@Param('id') id, @Body() body: UpdateTaskDto) {
    return await this.taskService.updateTask(+id, body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteTask(@Param('id') id) {
    return await this.taskService.deleteTask(+id);
  }
}
