import { Controller, Get, Param } from '@nestjs/common';

import { IImage } from './image.interface';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get(':id')
  async getProfile(@Param('id') id: IImage['id']) {
    return await this.imageService.findById(id);
  }
}
