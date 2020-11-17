import { Hoster } from '../../hosters/entities/hoster.entity';
import { Ftp } from './ftp.entity';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Site{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  domain!: string

  @Field(()=> Ftp)
  @Column()
  fpt!: Ftp

  @Field()
  @Column()
  hosterId!: number

  @ManyToOne(()=> Hoster, hoster => hoster.sites)
  hoster!: Hoster

  @Field()
  @Column()
  holderId!: number

  @ManyToOne(()=> User, user => user.sites)
  holder!:User

  @Field()
  @Column()
  creatorId!: number

  @ManyToOne(()=> User, user => user.sites)
  creator!:User

  @Field()
  @Column({nullable: true})
  color: string

  // @Field()
  // @Column()
  // status!: SiteStatus

  @Field()
  @Column({nullable: true})
  description: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

}