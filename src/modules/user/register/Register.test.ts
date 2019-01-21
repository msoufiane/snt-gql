import { Connection } from 'typeorm';
import { testConn } from '../../../test-utils/testConn';
import { gCall } from '../../../test-utils/gCall';

let conn: Connection;

beforeAll(async () => {
	conn = await testConn();
});

afterAll(async () => {
	await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!){
	register(data:$data ){
	  id
	}
  }  
`;
describe('Register', () => {
	it('create user', async () => {
		const user = await gCall({
			source: registerMutation,
			variableValues: {
				data: {
					firstName: 'Soufiane',
					lastName: 'Mghanen',
					email: 'mgh.soufiane@gmail.com',
					password: 'soufsouf',
				},
			},
		});

		expect(user.data).toBe(null);
	});
});
