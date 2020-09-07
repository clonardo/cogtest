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
import { RunnerService } from './runner.service';
import { RunEntity } from '../entities';
import { ITaskConfig } from '@cogtest/shared-utils';

/**
 * Controller for setting up + persisting runs
 */
@Controller('runner')
export class RunnerController {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly runnerService: RunnerService
  ) {}

  /**
   * Get video urls
   */
  @Get('/urls')
  async Urls(): Promise<string[]> {
    return this.runnerService.GetVideoUrls();
  }

  /**
   * Get full task config
   */
  @Get('/config')
  async GetConfig(): Promise<ITaskConfig> {
    return this.runnerService.GetTaskConfig();
  }
}
