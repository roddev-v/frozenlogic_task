import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/config';
import { MeasurementModule } from './modules/measurement.module';

const typeOrm: DynamicModule = TypeOrmModule.forRoot(config);

@Module({
  imports: [typeOrm, MeasurementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
