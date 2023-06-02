import request from 'supertest';
import app from "../src/app";

describe('Test de la aplicación', () => {
  it('debe devolver el estado 200 al realizar una solicitud GET a /docs/api/v1', async () => {
    const response = await request(app).get("/docs/api/v1").redirects(1);
    expect(response.statusCode).toBe(200);
  });
});