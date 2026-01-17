export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('pharmly-auth') === 'true'
}
