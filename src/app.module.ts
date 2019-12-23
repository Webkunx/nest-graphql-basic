import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SpoonsModule } from './spoons/spoons.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SpoonsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://35.241.169.12:27017/nest-gql'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
