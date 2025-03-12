import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    createTask: jest.fn(dto => ({ id: 'someId', ...dto })),
    getAllTasks: jest.fn(() => []),
    getTaskById: jest.fn(id => ({ id, title: 'Test', description: 'Test desc', status: 'pending' })),
    updateTask: jest.fn((id, dto) => ({ id, ...dto })),
    deleteTask: jest.fn(id => ({ message: 'Task deleted successfully' })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
