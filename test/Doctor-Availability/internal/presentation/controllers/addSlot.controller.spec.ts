import { Test, TestingModule } from '@nestjs/testing';
import { AddSlotController } from 'src/Doctor-Availability/internal/presentation/controllers/addSlot.controller';
import { AddSlotService } from 'src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.service';

describe('AddSlotController', () => {
  let controller: AddSlotController;
  let addSlotService: AddSlotService;

  const mockAddSlotService = {
    createSlot: jest.fn(),
  };

  const mockResponse = {
    status: jest.fn().mockReturnThis(), // allows chaining .status().json()
    json: jest.fn(),
  } as any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddSlotController],
      providers: [
        {
          provide: AddSlotService,
          useValue: mockAddSlotService,
        },
      ],
    }).compile();

    controller = module.get<AddSlotController>(AddSlotController);
    addSlotService = module.get<AddSlotService>(AddSlotService);
  });

  it('should call AddSlotService', async () => {
    const result = await controller.createSlot(
      {
        date: '2025-10-19T12:34:56.789Z',
        cost: 40,
      },
      mockResponse,
    );
    expect(addSlotService.createSlot).toHaveBeenCalled();
  });

  it('should return success code 201 created', async () => {
    await controller.createSlot(
      {
        date: '2025-10-19T12:34:56.789Z',
        cost: 40,
      },
      mockResponse,
    );
    expect(mockResponse.status).toHaveBeenCalledWith(201);
  });

  it('should return success code 500 created', async () => {
    mockAddSlotService.createSlot.mockImplementationOnce(async () => {
      throw new Error('testing error');
    });
    await controller.createSlot(
      {
        date: '2025-10-19T12:34:56.789Z',
        cost: 40,
      },
      mockResponse,
    );
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});
