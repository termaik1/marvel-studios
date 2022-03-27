import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageService } from './image.service';
import { ImageEntity } from './image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity])],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
