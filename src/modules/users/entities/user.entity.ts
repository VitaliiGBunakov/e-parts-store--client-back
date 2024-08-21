import { Guest } from '../../guest/entities/guest.entity';
import { Column, Entity } from 'typeorm';
// import { CreateUserDto } from '../dto/create-user.dto';

@Entity()
export class User extends Guest {
  @Column('text')
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column()
  isActive: boolean;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;
}
