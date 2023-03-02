import { ParsedUrlQuery } from 'querystring';

export const getURLQuery = (
  query: ParsedUrlQuery,
  key: string,
  defaultValue = ''
): string => {
  if (typeof query?.[key] === 'string') {
    return query?.[key] as string;
  }

  return defaultValue;
};
