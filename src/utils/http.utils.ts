import { IData, IResponse } from '@src/interfaces';

export async function http(request: string, data: IData): Promise<IResponse> {
  async function delay<T>(response: T): Promise<T> {
    return new Promise((res) => {
      setTimeout(() => res(response), 1500);
    });
  }
  let response = await fetch(request, data);
  response = await delay(response);
  let result;
  try {
    result = await response.json();
  } catch (e: any) {
    throw Error(e.message);
  }
  if (result.status !== 'ok') {
    throw Error(result.message);
  }
  return result;
}
