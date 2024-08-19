import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
