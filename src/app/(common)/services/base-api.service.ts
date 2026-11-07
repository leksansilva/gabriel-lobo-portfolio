import { api } from './api.service';

type RequestOptions = {
  path?: string;
  params?: Record<string, unknown>;
  payload?: unknown;
  customBasePath?: string;
};

export class BaseApiService {
  constructor(private readonly basePath: string) {}

  private buildUrl({ path = '', customBasePath }: RequestOptions) {
    return `${customBasePath ?? this.basePath}${path}`;
  }

  protected async get<T>(options: RequestOptions = {}) {
    const response = await api.get<T>(this.buildUrl(options), {
      params: options.params,
    });
    return response.data;
  }

  protected async post<T>(options: RequestOptions = {}) {
    const response = await api.post<T>(
      this.buildUrl(options),
      options.payload,
      {
        params: options.params,
      }
    );
    return response.data;
  }

  protected async put<T>(options: RequestOptions = {}) {
    const response = await api.put<T>(this.buildUrl(options), options.payload, {
      params: options.params,
    });
    return response.data;
  }

  protected async patch<T>(options: RequestOptions = {}) {
    const response = await api.patch<T>(
      this.buildUrl(options),
      options.payload,
      {
        params: options.params,
      }
    );
    return response.data;
  }

  protected async delete<T>(options: RequestOptions = {}) {
    const response = await api.delete<T>(this.buildUrl(options), {
      params: options.params,
    });
    return response.data;
  }
}
