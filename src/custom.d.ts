export interface InitialState {
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  error: boolean;
  errorMsg: string;
}

export interface JwtReponse {
  token: string;
  issuedAt: Date;
  type: string;
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
}

export interface GetUserByNameResquest {
  username: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  roles: Role[]
}