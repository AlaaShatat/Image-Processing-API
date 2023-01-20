import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint Image response', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/');
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint and the file not exist', async () => {
    const response = await request.get(
      '/api/image?filename=alaa&height=50&width=50'
    );
    expect(response.status).toBe(400);
  });

  it('gets the image with missing information', async () => {
    const response = await request.get('/api/image?height=50&width=50');
    expect(response.status).toBe(400);
  });

  it('gets the image endpoint and change successfully', async () => {
    const response = await request.get(
      '/api/image?filename=encenadaport&height=50&width=50'
    );
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint and get from caching', async () => {
    const response = await request.get(
      '/api/image?filename=encenadaport&height=50&width=50'
    );
    expect(response.status).toBe(200);
  });
});
