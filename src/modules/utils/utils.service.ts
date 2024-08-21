import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilsService {
  constructor(private readonly config: ConfigService) {}

  async makeHash(str) {
    const SOR = this.config.get('SALT_ROUNDS');
    return bcrypt.hash(str, SOR);
  }

  async isStrComparesToHash(str: string, hash: string) {
    return bcrypt.compare(str, hash);
  }
}
