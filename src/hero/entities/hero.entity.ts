import { Tournament } from 'src/tournament/entities/tournament.entity';
import { TypeWeapon } from 'src/type-weapon/entities/type-weapon.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToMany(() => Tournament)
  tournament: Tournament[];

  @ManyToOne(() => TypeWeapon, (tw) => tw.heros, { eager: true })
  weapon: TypeWeapon;
}
