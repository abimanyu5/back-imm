import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}
  async createTask(data: CreateTaskDto) {
    data.id_user = this.req.user.id;
    if (!data.task_name) {
      return {
        statusCode: 400,
        message: 'parameter tidak ditemukan',
      };
    }
    const createData = await this.prisma.tasks.create({
      data: data,
    });
    return {
      statusCode: 200,
      data: createData,
    };
  }
  async getAllTask() {
    const getAllData = await this.prisma.tasks.findMany({
      where: { id_user: this.req.user.id },
    });
    return {
      statusCode: 200,
      data: getAllData,
    };
  }

  async getTaskById(id: number) {
    const getTaskById = await this.prisma.tasks.findFirst({
      where: {
        id: id,
        id_user: this.req.user.id,
      },
    });
    if (getTaskById === null) {
      return {
        statusCode: 400,
        message: 'data tidak ditemukan',
      };
    }
    return {
      statusCode: 200,
      data: getTaskById,
    };
  }

  async updateTask(id, data: UpdateTaskDto) {
    try {
      data.id_user = this.req.user.id;
      const updateData = await this.prisma.tasks.update({
        data: data,
        where: {
          id: id,
        },
      });
      return {
        statusCode: 200,
        data: updateData,
      };
    } catch {
      return {
        statusCode: 500,
        message: 'data tidak ditemukan',
      };
    }
  }

  async deleteTask(id) {
    const deleteData = await this.prisma.tasks.delete({
      where: {
        id: id,
      },
    });
    return {
      statusCode: 200,
      data: deleteData,
    };
  }
}
