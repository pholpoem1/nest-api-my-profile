import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column()
  companyName: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  description: string;
}
