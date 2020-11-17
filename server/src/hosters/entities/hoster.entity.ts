import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Site } from '../../sites/entities/site.entity';
import { Field, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
@Entity()
export class Hoster{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!:string

  @Field()
  @Column()
  link!:string

  @Field()
  @Column()
  login!:string

  @Field()
  @Column()
  password!:string

  @OneToMany(() => Site, site => site.hoster)
  sites: Site[]
}