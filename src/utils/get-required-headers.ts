import { encodeAuthHeader } from './encode64'
export function getRequiredHeaders(data?: any): { authorization: string; 'Content-Type': string } {
  return {
    'Content-Type': 'application/json',
    authorization: data,
  }
}
