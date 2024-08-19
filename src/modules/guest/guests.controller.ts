import { Controller, Get, Post, Param } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreatedGuestDto } from './dto/created-guest.dto';
import { Guest } from './entities/guest.entity';

@Controller('guest')
export class GuestsController {
  constructor(private readonly guestService: GuestsService) {}

  @Post()
  create(): Promise<CreatedGuestDto> {
    return this.guestService.create();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Guest> {
    return this.guestService.findOne(id);
  }
}
