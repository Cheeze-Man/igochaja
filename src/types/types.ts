export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignUpinfo {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

export interface NewPassword {
  password: string;
  passwordCheck: string;
}
