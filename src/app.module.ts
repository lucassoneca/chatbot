import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tab_wpp } from './Entity/user.entity'; //reporta a entidade

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'APIwpp',
      entities: [tab_wpp], //registra a entidade
      synchronize: false,
    }),
    TypeOrmModule.forFeature([tab_wpp]), //adiciona a entidade (tabela) ao módulo
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
