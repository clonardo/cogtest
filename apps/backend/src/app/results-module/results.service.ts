import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Injectable,
  Logger,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RunEntity, ResultEntity } from '../entities';

/**
 * Results storage service
 */
@Injectable()
export class ResultsService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    @InjectRepository(ResultEntity)
    private resultsRepo: Repository<ResultEntity>,
    @InjectRepository(RunEntity)
    private runsRepo: Repository<RunEntity>
  ) {}

  async getAllResults(): Promise<RunEntity[]> {
    return this.runsRepo.find();
  }
}
