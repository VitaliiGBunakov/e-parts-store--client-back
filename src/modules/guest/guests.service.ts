import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatedGuestDto } from './dto/created-guest.dto';
@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest) private readonly db: Repository<Guest>,
  ) {}

  async create(): Promise<CreatedGuestDto> {
    const guest = this.db.create();
    return this.db.save(guest).then((createdGuest) => {
      return {
        id: createdGuest.id,
      };
    });
  }

  async findOne(id: string): Promise<Guest> {
    return this.db.findOne({ where: { id } });
  }
}
