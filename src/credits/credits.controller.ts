import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { CreateCreditResponseDto } from './dto/create-credit-response.dto';
import { FindCreditsResponseDto } from './dto/find-credits-response.dto';
import { AuthGuard } from '../auth/auth.guard';
import { StatusCountDto } from './dto/status-count.dto';

@ApiTags('credits')
@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new credit request',
  })
  @ApiResponse({
    status: 201,
    type: CreateCreditResponseDto,
  })
  async create(@Body() createCreditDto: CreateCreditDto) {
    return this.creditsService.create(createCreditDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get all credit requests',
  })
  @ApiResponse({
    status: 200,
    type: FindCreditsResponseDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.creditsService.findAll();
  }

  @Get('status-count')
  @ApiResponse({
    status: 200,
    description: 'Returns the count of approved and refused credit requests.',
    type: StatusCountDto,
    isArray: true,
  })
  async getStatusCountProcedure() {
    return this.creditsService.getCreditRequestStatusCountFromProcedure();
  }
}
