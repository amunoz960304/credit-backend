import { Test, TestingModule } from '@nestjs/testing';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';

describe('BranchesController', () => {
  let branchesController: BranchesController;
  let branchesService: BranchesService;

  // Mock de BranchesService
  const mockBranchesService = {
    findAll: jest.fn(() => [
      { id: 1, name: 'Branch 1' },
      { id: 2, name: 'Branch 2' },
    ]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BranchesController],
      providers: [{ provide: BranchesService, useValue: mockBranchesService }],
    }).compile();

    branchesController = module.get<BranchesController>(BranchesController);
    branchesService = module.get<BranchesService>(BranchesService);
  });

  it('should return an array of branches', async () => {
    const result = await branchesController.findAll();
    expect(result).toEqual([
      { id: 1, name: 'Branch 1' },
      { id: 2, name: 'Branch 2' },
    ]);
    expect(branchesService.findAll).toHaveBeenCalled();
  });
});
