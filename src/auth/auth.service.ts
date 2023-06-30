import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/config_jwt';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: RegisterDto) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (checkUserExists) {
      throw new HttpException('User alredy registered', HttpStatus.FOUND);
    }
    data.password = await hash(data.password, 12);
    const createUser = await this.prisma.users.create({
      data: data,
    });
    if (createUser) {
      return {
        statusCode: 200,
        message: 'User created',
      };
    }
  }
  async login(data: LoginDto) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      data.password,
      checkUserExists.password,
    );
    if (checkPassword) {
      const accesToken = this.generateJWT({
        sub: checkUserExists.id,
        name: checkUserExists.name,
        email: checkUserExists.email,
      });
      return {
        statusCode: 200,
        message: 'Login berhasil',
        accesToken: accesToken,
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }
  async profile(user_id: number) {
    const dataProfile = await this.prisma.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        name: true,
        email: true,
        avatar: true,
        tasks: true,
      },
    });
    if (dataProfile) {
      return {
        statusCode: HttpStatus.OK,
        data: dataProfile,
      };
    }
    throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }
  async uploadAvatar(user_id: number, avatar) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        id: user_id,
      },
    });
    if (checkUserExists) {
      const updateAvatar = await this.prisma.users.update({
        data: {
          avatar: avatar,
        },
        where: {
          id: user_id,
        },
      });
      if (updateAvatar) {
        return {
          statusCode: 200,
          message: 'Upload avatar berhasil',
        };
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }
}
