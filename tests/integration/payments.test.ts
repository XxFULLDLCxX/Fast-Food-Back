import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '@/app';
import cleanDb from '../helpers';
import paymentFactory from '../factories/payments.factory';
import userFactory from '../factories/user.factory';

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe('POST /payments', () => {
  it('should respond with status 200 without params', async () => {
    const response = await server.post('/payments').send({ code: 0 });
    const { id, code } = await paymentFactory.findFirst();

    console.log(code, 'code');
    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual(expect.objectContaining({ id, code }));
  });
  it('should respond with status 200 with a name valid', async () => {
    const response1 = await server.post('/payments').send({ code: 0 });
    const payment1 = await paymentFactory.findFirst();
    console.log('payment1', payment1);

    expect(response1.status).toBe(httpStatus.OK);
    expect(response1.body).toEqual(
      expect.objectContaining({ id: payment1.id, code: payment1.code, status: payment1.status })
    );
    const user = await userFactory.buildUser();
    const response2 = await server
      .post('/payments')
      .send({ code: payment1.code, status: 'PAID', change: 100, total: 1000, userId: user.id });
    const payment2 = await paymentFactory.findFirst();

    expect(response2.status).toBe(httpStatus.OK);
    expect(response2.body).toEqual(
      expect.objectContaining({ id: payment2.id, code: payment2.code, status: payment2.status })
    );
    const payments = await paymentFactory.findMany();
    expect(payments.length).toBe(1);
  });
  it('should respond with status 422', async () => {
    const response1 = await server.post('/payments').send({ code: 0 });
    const payment1 = await paymentFactory.findFirst();
    expect(response1.status).toBe(httpStatus.OK);
    expect(response1.body).toEqual(expect.objectContaining({ id: payment1.id, code: payment1.code }));
    const response2 = await server.post('/payments').send({ code: payment1.code, status: 'PAID' });
    expect(response2.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    const payments = await paymentFactory.findMany();
    expect(payments.length).toBe(1);
  });
});
