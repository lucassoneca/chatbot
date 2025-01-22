import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { tab_wpp } from './Entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(tab_wpp) private tab_wppRepository: Repository<tab_wpp>,
  ) {}

  async getUsers(): Promise<tab_wpp[]> {
    return this.tab_wppRepository.find();
  }
}