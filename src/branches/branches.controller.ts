import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchesService } from './branches.service';
import { BranchResponseDto } from './dto/branch-response.dto';

@ApiTags('branches')
@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @ApiOperation({
    summary: 'Get all branches',
  })
  @ApiResponse({
    status: 200,
    type: BranchResponseDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.branchesService.findAll();
  }
}
