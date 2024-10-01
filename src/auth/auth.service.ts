import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtTokenService: JwtService,
  ) {}

  async login({ email, password }: LoginDto): Promise<string> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(
        'El usuario con el email ingresado no existe',
      );
    }

    const { password: pwd, ...userData } = user;

    const isPasswordValid = await bcrypt.compare(password, pwd);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password incorrecto');
    }

    const token = await this.jwtTokenService.signAsync(userData);

    return token;
  }
}
