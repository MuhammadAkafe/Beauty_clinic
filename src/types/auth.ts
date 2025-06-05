export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    message: string;
    accessToken?: string;
  }

  export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
  }
  
  export interface RegisterResponse {
    success: boolean;
    message: string;
  }