import axios, { AxiosInstance } from 'axios';

class Http {
  private _httpClient: AxiosInstance;

  constructor() {
    this._httpClient = axios.create({
      baseURL: 'https://reqres.in/api/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async get(url: string):Promise<string> {
    const users = await this._httpClient.get(url);
    return JSON.stringify(users.data.data);
  }
}

export default Http;
