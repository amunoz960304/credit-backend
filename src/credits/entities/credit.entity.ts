import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { Branch } from '../../branches/entities/branch.entity';

@Entity()
export class Credit {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Client,
    (client) => {
      client.creditRequests;
    },
  )
  client: Client;

  @ManyToOne(() => Branch, (branch) => branch.creditRequests)
  branch: Branch;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  installments: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  monthlyPayment: number | null;

  @Column({ nullable: true })
  totalPayment: number | null;
}
