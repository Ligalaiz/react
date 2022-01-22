import { get } from './storage.utils';
import { IQueryData } from '@src/interfaces';

export const getLocalDataUtils = (requestData: IQueryData) => {
  const localData = get('requestData');

  if (localData) {
    requestData = { ...requestData, ...localData };
  }

  return requestData;
};
