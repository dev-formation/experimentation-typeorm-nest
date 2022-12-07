import { Hero } from 'src/hero/entities/hero.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeWeapon {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  label: string;

  @OneToMany(() => Hero, (h) => h.weapon)
  heros: Hero[];
}
