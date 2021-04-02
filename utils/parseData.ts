export const parseData = function <T>(data: any): T | null {
  if (data) {
    return data as T;
  }
  return null;
};
