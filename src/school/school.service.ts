import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async create(createSchoolDto: CreateSchoolDto) {
    return await this.prisma.schools.create({
      data: createSchoolDto,
    });
  }

  async findAll() {
    return await this.prisma.schools.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.schools.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return await this.prisma.schools.update({
      data: updateSchoolDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    const checkId = await this.prisma.schools.findFirst({
      where: {
        id: id,
      },
    });
    if (!checkId) {
      throw new NotFoundException('id school not found');
    }
    return await this.prisma.schools.delete({
      where: {
        id: id,
      },
    });
  }
}
