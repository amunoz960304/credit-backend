import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Credit } from '../../credits/entities/credit.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  incomes: number;

  @OneToMany(() => Credit, (creditRequest) => creditRequest.client)
  creditRequests: Credit[];
}
