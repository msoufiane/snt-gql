import { Resolver, Query, Ctx } from 'type-graphql';

import { User } from '../../entity/User';
import { IMyContext } from '../../types/MyContext';

@Resolver()
export class MeResolver {
	@Query(() => User, { nullable: true })
	public async me(@Ctx() ctx: IMyContext): Promise<User | undefined> {
		if (!ctx.req.session!.userId) {
			return undefined;
		}

		return User.findOne(ctx.req.session!.userId);
	}
}
