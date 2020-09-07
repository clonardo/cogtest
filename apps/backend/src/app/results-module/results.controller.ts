import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Inject,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { ILoginDto, IRegisterDto, IJwtPayload } from '../contracts';
import { ResultsService } from './results.service';
import { RunEntity } from '../entities';

/**
 * Controller for persisting/viewing results
 */
@Controller('results')
export class ResultsController {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly resultsService: ResultsService
  ) {}

  /**
   * Get all runs
   */
  @Get()
  async AllRuns(): Promise<RunEntity[]> {
    return this.resultsService.getAllResults();
  }
}
