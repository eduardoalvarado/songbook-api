import {Field, ObjectType} from "type-graphql";
import {getModelForClass, prop} from "@typegoose/typegoose";

@ObjectType()
export class Verse {
  @prop()
  @Field()
  order!: number

  @prop()
  @Field()
  type!: string

  @prop()
  @Field()
  paragraph!: string
}

export const VerseModel = getModelForClass(Verse)
