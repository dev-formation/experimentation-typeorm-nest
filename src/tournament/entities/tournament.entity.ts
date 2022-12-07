import { Hero } from 'src/hero/entities/hero.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({
    type: 'date',
  })
  date: string;

  @ManyToMany(() => Hero, { eager: true })
  @JoinTable()
  heros: Hero[];
}
