import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitModel } from '../models/unit.model';
import { Repository } from 'typeorm';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(UnitModel) private unitRepository: Repository<UnitModel>,
  ) {}

  async getUnits(): Promise<UnitModel[]> {
    return await this.unitRepository.find();
  }

  async getUnit(id: number): Promise<UnitModel> {
    return await this.unitRepository.findOne(id);
  }

  async post(unit: UnitModel): Promise<UnitModel> {
    return await this.unitRepository.save(unit);
  }

  async put(unit: UnitModel): Promise<UnitModel> {
    const currentUnit = await this.unitRepository.findOne(unit.id);
    this.unitRepository.merge(currentUnit, unit);
    return await this.unitRepository.save(currentUnit);
  }

  async delete(id: number) {
    return await this.unitRepository.delete(id);
  }
}
