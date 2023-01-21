import supertest from 'supertest';
import app from '../index';
import { promises as FS } from 'fs';
import path from 'path';
import checkExist from '../helpers/checkExist';

const request = supertest(app);
describe('Test endpoint Image response', () => {
  it('gets the api endpoint', async (): Promise<void> => {
    const response = await request.get('/api/');
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint and the file not exist', async (): Promise<void> => {
    const response = await request.get(
      '/api/image?filename=alaa&height=50&width=50'
    );
    expect(response.status).toBe(400);
  });

  it('gets the image with missing information', async (): Promise<void> => {
    const response = await request.get('/api/image?height=50&width=50');
    expect(response.status).toBe(400);
  });

  it('gets the image endpoint and change successfully', async (): Promise<void> => {
    const response = await request.get(
      '/api/image?filename=encenadaport&height=50&width=50'
    );
    expect(response.status).toBe(200);
  });

  it('delete the image from thumbs if exists and get the image endpoint and change successfully', async (): Promise<void> => {
    const dstFile: string = path.join(
      __dirname,
      '../../assets/src/encenadaport_50_50.jpg'
    );
    if (await checkExist(dstFile)) {
      await FS.unlink(dstFile);
    }

    const response = await request.get(
      '/api/image?filename=encenadaport&height=50&width=50'
    );
    expect(response.status).toBe(200);
  });

  it('gets the image endpoint and get from caching', async (): Promise<void> => {
    const response = await request.get(
      '/api/image?filename=encenadaport&height=50&width=50'
    );
    expect(response.status).toBe(200);
  });
});
