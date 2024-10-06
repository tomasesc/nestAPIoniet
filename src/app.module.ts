import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from "./usuarios/entities/usuario.entity";
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { PreguntasModule } from './preguntas/preguntas.module';
import { PreguntasController } from './preguntas/preguntas.controller';
import { PreguntasService } from './preguntas/preguntas.service';
import { Pregunta } from './preguntas/entities/pregunta.entity';
import { ConfiguracionesModule } from './configuraciones/configuraciones.module';
import { Configuracion } from './configuraciones/entities/configuracione.entity';
import { ConfiguracionesController } from './configuraciones/configuraciones.controller';
import { ConfiguracionesService } from './configuraciones/configuraciones.service';
import { LugaresModule } from './lugares/lugares.module';


@Module({
  imports: [UsuariosModule,
    PreguntasModule,
    ConfiguracionesModule,
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "resolution.com.ar",
      port: 3306,
      username: "resolution_qrdb",
      password: "Fran010204",
      database: "resolution_qrproyecto",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario]),
    TypeOrmModule.forFeature([Pregunta]),
    TypeOrmModule.forFeature([Configuracion]),
    LugaresModule,
  ],
  controllers: [UsuariosController, PreguntasController, ConfiguracionesController],
  providers: [UsuariosService, PreguntasService, ConfiguracionesService],
})
export class AppModule {}
