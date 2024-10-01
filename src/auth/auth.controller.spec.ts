import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    login: jest.fn((loginDto: LoginDto) => {
      return { accessToken: 'token', user: { email: loginDto.email } }; // Mock del resultado
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return an access token and user information on successful login', async () => {
      const loginDto: LoginDto = {
        email: 'muca960403@hotmail.com',
        password: 'admin123',
      };

      const result = await authController.login(loginDto);

      expect(result).toEqual({
        accessToken: 'token',
        user: { email: loginDto.email },
      });
      expect(authService.login).toHaveBeenCalledWith(loginDto);
    });
  });
});
