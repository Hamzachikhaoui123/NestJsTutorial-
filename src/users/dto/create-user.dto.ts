import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto{
   @ApiProperty() //donnee exemple de requet in swagger et donner proporty requid ou optional 
@IsAlphanumeric()
@MaxLength(10)
    name:string

    // @ApiProperty({required:false})
    // age?:number
}