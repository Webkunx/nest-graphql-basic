import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';
import { ObjectType, Field, Float, Int } from 'type-graphql';

@ObjectType()
export class CreateSpoonDto {
  // @IsNotEmpty()
  @Field()
  name: string;

  // @IsNumber()
  // @IsNotEmpty()
  @Field(() => Float)
  lenght: number;

  // @IsInt()
  // @IsNotEmpty()
  @Field(() => Int)
  age: number;
}
