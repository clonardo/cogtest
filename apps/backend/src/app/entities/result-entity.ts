import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

/**
 * Individual result. Multipl results will be rolled up to a run
 */
@Entity('results')
export class ResultEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  /**
   * ID of client (set as UUID on client side)
   */
  @Column({ type: 'varchar', unique: true, nullable: false })
  clientId: string;

  //   @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  //   username: string;

  //   @Column({ type: 'varchar', nullable: false })
  //   email: string;

  //   @Column({ type: 'varchar', nullable: false })
  //   @Exclude({ toPlainOnly: true })
  //   password?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
