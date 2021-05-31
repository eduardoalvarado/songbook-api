import { Song } from '../entity/Song'
import { Verse } from '../entity/Verse'
import { InputType, Field } from 'type-graphql'
import { Ref } from "./index";
import { InputVerse } from './input-verse'

@InputType()
export class InputSong implements Partial<Song> {
  @Field()
  title!: string

  @Field()
  author!: string

  @Field(type => [InputVerse] )
  verse!: Ref<InputVerse>[]

  @Field()
  cover?: string
}
