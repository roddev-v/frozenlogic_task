import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitModel } from '../models/unit.model';
import { MeasurementsService } from '../services/measurements.service';
import { MeasurementController } from '../controllers/measurement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UnitModel])],
  providers: [MeasurementsService],
  controllers: [MeasurementController],
})
export class MeasurementModule {}
