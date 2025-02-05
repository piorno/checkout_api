import { FetchOptions, ReturnRequest } from './types';

export default abstract class Fetcher {
  private headers: Record<string, unknown>;

  protected abstract fetch<T = unknown>(
    options: FetchOptions,
  ): Promise<ReturnRequest<T>>;

  private async makeRequest<T = unknown>(
    options: FetchOptions,
  ): Promise<ReturnRequest<T>> {
    const req = await this.fetch<T>({
      ...options,
      headers: {
        ...options.headers,
        ...this.headers,
      },
    });

    return req;
  }

  public async get<T = unknown>(
    path: string,
    headers?: Record<string, unknown>,
  ): Promise<ReturnRequest<T>> {
    return this.makeRequest({
      method: 'GET',
      url: path,
      headers,
    });
  }

  public async post<T = unknown>(
    path: string,
    data?: unknown,
    headers?: Record<string, unknown>,
  ): Promise<ReturnRequest<T>> {
    return this.makeRequest({
      method: 'POST',
      url: path,
      data,
      headers,
    });
  }

  public async put<T = unknown>(
    path: string,
    data?: unknown,
    headers?: Record<string, unknown>,
  ): Promise<ReturnRequest<T>> {
    return this.makeRequest({
      method: 'PUT',
      url: path,
      data,
      headers,
    });
  }
  public async patch<T = unknown>(
    path: string,
    data?: unknown,
    headers?: Record<string, unknown>,
  ): Promise<ReturnRequest<T>> {
    return this.makeRequest({
      method: 'PATCH',
      url: path,
      data,
      headers,
    });
  }

  public async delete<T = unknown>(
    path: string,
    headers?: Record<string, unknown>,
  ): Promise<ReturnRequest<T>> {
    return this.makeRequest({
      method: 'DELETE',
      url: path,
      headers,
    });
  }
}
