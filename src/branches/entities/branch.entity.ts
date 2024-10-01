import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Credit } from '../../credits/entities/credit.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Credit, (credit) => credit.branch)
  creditRequests: Credit[];
}
