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
import { VIDEO_URLS } from './video-file.constants';
import { ITaskConfig } from '@cogtest/shared-utils';
import { TASK_CONFIG } from './section-config.constants';

/**
 * Results storage service
 */
@Injectable()
export class RunnerService {
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

  /**
   * Get all video URLs
   */
  async GetVideoUrls(): Promise<string[]> {
    return VIDEO_URLS;
  }

  /**
   * Get full task config
   */
  async GetTaskConfig(): Promise<ITaskConfig> {
    return TASK_CONFIG;
  }
}
