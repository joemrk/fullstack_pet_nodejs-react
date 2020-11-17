import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Site } from '../../sites/entities/site.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  username!: string

  @Field()
  @Column({ unique: true })
  password!: string

  @Field()
  @Column("simple-array")
  roles!: string[]

  @OneToMany(() => Site, site => site.holder)
  sites: Site[]
}