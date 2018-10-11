export interface LoginCredentials {
  name: string;
  pass: string;
}

export interface LoginResponse {
  current_user: {
    name: string;
    roles: string[];
    uid: number;
  };
  csrf_token: string;
  logout_token: string;
}
