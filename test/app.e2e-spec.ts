import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const body = {
      amount: 0,
      currency: 'string',
      description: 'string',
      card: {
        number: 'string',
        holder: 'string',
        cvv: 'string',
        expiration: 'string',
        installmentNumber: 0,
      },
    };
    return request(app.getHttpServer())
      .post('/payments')
      .send(body)
      .expect(201);
  });
});
