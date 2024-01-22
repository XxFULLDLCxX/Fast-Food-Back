import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '@/app';
import cleanDb from '../helpers';
import { findFirst } from '../factories/user.factory';

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe('POST /users', () => {
  it('should respond with status 200 without params', async () => {
    const response = await server.post('/users').send({});
    const { id, name } = await findFirst();
    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual(expect.objectContaining({ id, name }));
  });
  it('should respond with status 200 with a name valid', async () => {
    const response = await server.post('/users').send({ name: 'Jose' });
    const { id, name } = await findFirst();
    expect(response.status).toBe(httpStatus.OK);
    expect(name).toBe('Jose');
    expect(response.body).toEqual(expect.objectContaining({ id, name }));
  });
});
