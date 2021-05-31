import { Verse } from '../entity/Verse'
import { InputType, Field } from 'type-graphql'

@InputType()
export class InputVerse implements Partial<Verse> {
  @Field()
  order!: number

  @Field()
  type!: string

  @Field()
  paragraph!: string
}
