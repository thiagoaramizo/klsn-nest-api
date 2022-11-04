import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '151.106.99.8',
      port: 3306,
      username: 'u496775831_api',
      password: 'JtED=nB02v&9',
      database: 'u496775831_klsn_bd',
      //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [Cliente],
      synchronize: true,
    }),
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
