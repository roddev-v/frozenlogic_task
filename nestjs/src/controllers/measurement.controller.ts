import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MeasurementsService } from '../services/measurements.service';
import { UnitModel } from '../models/unit.model';

@Controller('measurements')
export class MeasurementController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @Get()
  async getAll(): Promise<UnitModel[]> {
    return await this.measurementsService.getUnits();
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<UnitModel> {
    return await this.measurementsService.getUnit(id);
  }

  @Post()
  async post(@Body() body: UnitModel): Promise<UnitModel> {
    return await this.measurementsService.post(body);
  }

  @Put()
  async put(@Body() body: UnitModel): Promise<UnitModel> {
    return await this.measurementsService.put(body);
  }

  @Delete()
  async delete(id: number): Promise<any> {
    return await this.measurementsService.delete(id);
  }
}
