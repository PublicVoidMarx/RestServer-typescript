export enum UserRoles {ADMIN = 'admin', USER = 'user'}

export interface Iuser {
  firstName: string
  lastName: string
  fullName: string
  age: number
  email: string
  password: string
  role: UserRoles
}
