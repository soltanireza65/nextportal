namespace IGlobalService {
  interface IServiceResult<T> {
    data?: T;
    message?: string;
    status?: number;
  }
  interface IBodyRequest {
    methodType: Method;
    url: string;
    params?: any;
    payload?: any;
    needAuth?: boolean;
    formData?: any;
  }
}
