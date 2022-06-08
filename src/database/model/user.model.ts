import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public dob: string;

  @Column()
  public isVerified: boolean;
  
  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
