import "reflect-metadata";
import {Field, ID, ObjectType } from 'type-graphql'
import { getModelForClass, prop } from '@typegoose/typegoose'
import { Verse } from './Verse'
import { Ref } from '../types'

@ObjectType()
export class Song {
  @Field(type => ID)
  _id?: string

  @prop({required: true})
  @Field()
  title!: string

  @prop({required: true})
  @Field()
  author!: string

  @Field(type => [Verse], {nullable: 'itemsAndList'})
  @prop({required: true})
  verse!: Ref<Verse>[]

  @prop()
  @Field()
  cover?: string

  @prop({default: () => new Date()})
  @Field(() => String)
  createAt!: Date
}

export const SongModel = getModelForClass(Song)
