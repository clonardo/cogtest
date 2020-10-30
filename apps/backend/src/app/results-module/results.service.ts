import {
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
    @InjectRepository(RunEntity)
    private runsRepo: Repository<RunEntity>
  ) {}

  async getAllResults(): Promise<RunEntity[]> {
    return this.runsRepo.find();
  }
}
