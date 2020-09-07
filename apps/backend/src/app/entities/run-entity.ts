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
 * Individual run- will contain many results
 */
@Entity('runs')
export class RunEntity {
  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  /**
   * ID of run (set as UUID on client side)
   */
  @Column({ type: 'varchar', unique: true, nullable: false })
  runId: string;

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
