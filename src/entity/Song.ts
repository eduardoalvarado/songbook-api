import "reflect-metadata";
import {Field, ID, ObjectType } from 'type-graphql'
import {getModelForClass, ModelOptions, prop} from '@typegoose/typegoose'
import { Verse } from './Verse'
import { Ref } from '../types'
import mongoose from 'mongoose'

@ModelOptions({schemaOptions: { timestamps: true }})
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

  @prop({required: true})
  @Field()
  gender!: string

  @prop({required: true})
  @Field(type => [Verse], {nullable: 'itemsAndList'})
  verse!: Ref<Verse>[]

  @prop({required: false})
  @Field()
  cover?: string

  @prop({default: () => new Date()})
  @Field(() => String)
  createdAt!: Date
}

export const SongModel = getModelForClass(Song)
