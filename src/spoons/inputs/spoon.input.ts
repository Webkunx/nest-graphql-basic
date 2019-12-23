import { IsInt, IsNumber, IsNotEmpty } from 'class-validator';
import { Field, Float, Int, InputType } from 'type-graphql';

@InputType()
export class SpoonInput {
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
