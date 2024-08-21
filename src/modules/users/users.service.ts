import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly utilsService: UtilsService,
  ) {}

  async create(newUserInfo: CreateUserDto) {
    const newUser = this.usersRepository.create(newUserInfo);
    newUser.password = await this.utilsService.makeHash(newUserInfo.password);
    return this.usersRepository.save(newUser);
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: string, data: UpdateUserDto) {
    if (data?.password) {
      data.password = await this.utilsService.makeHash(data.password);
    }
    return this.usersRepository.update({ id }, data);
  }

  async remove(id: string) {
    return this.usersRepository.delete({ id });
  }

  async checkPassword(pass: string, id: string) {
    const user = await this.findOne(id);
    return this.utilsService.isStrComparesToHash(pass, user.password);
  }
}
