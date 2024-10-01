import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({
    summary: 'Generate a new token for authenticate specific endpoints',
  })
  @ApiResponse({
    status: 200,
    content: {
      'application/json': {
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtdWNhOTYwNDAzQGhvdG1haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyNC0wNS0wMVQyMzowNjoxMS45ODlaIiwidXBkYXRlZEF0IjoiMjAyNC0wNS0wMVQyMzowNjoxMS45ODlaIiwiaWF0IjoxNzI3NzQ3MTk0LCJleHAiOjE3Mjc3NTA3OTR9.YgsO8YLfOBU6VxWiNTa9tjAI1W2ApQVGg5t6AkavGT0',
      },
    },
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
