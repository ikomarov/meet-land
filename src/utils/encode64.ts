export function encodeAuthHeader(authHeader: any): string {
  return btoa(JSON.stringify((authHeader)))
}
