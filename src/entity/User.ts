import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	public id: number;

	@Field()
	@Column()
	public firstName: string;

	@Field()
	@Column()
	public lastName: string;

	@Field()
	@Column('text', { unique: true })
	public email: string;

	@Field()
	public name(@Root() parent: User): string {
		return `${parent.firstName} ${parent.lastName}`;
	}

	@Column()
	public password: string;
}
