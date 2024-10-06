import { Module } from '@nestjs/common';
import { ConfiguracionesService } from './configuraciones.service';
import { ConfiguracionesController } from './configuraciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuracion } from './entities/configuracione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configuracion])],
  controllers: [ConfiguracionesController],
  providers: [ConfiguracionesService],
})
export class ConfiguracionesModule {}
