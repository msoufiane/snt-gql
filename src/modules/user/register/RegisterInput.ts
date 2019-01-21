import { Length, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import IsEmailAlreadyExist from './IsEmailAlreadyExist';

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 255)
	public firstName: string;

	@Field()
	@Length(1, 255)
	public lastName: string;

	@Field()
	@IsEmail()
	@IsEmailAlreadyExist({ message: 'email already in use' })
	public email: string;

	@Field()
	public password: string;
}
