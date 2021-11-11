export interface InitialState {
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  error: boolean;
  errorMsg: string;
}

export interface LoginResponse {
  token: string;
  issuedAt: Date;
  type: string;
  id: number;
  username: string;
  email: string;
  roles: string[];
}
