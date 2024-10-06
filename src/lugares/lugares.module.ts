import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { lugares } from './entities/lugare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([lugares])],
  controllers: [LugaresController],
  providers: [LugaresService],
})
export class LugaresModule {}
