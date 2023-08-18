import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  salary: number;

  @Column()
  currency: string;

  @Column()
  on_contract: boolean;

  @Column()
  department: string;

  @Column()
  sub_department: string;
}
