export interface IUseVerifyOtpCodeOptions {
  onError: (error: IErrorResponse) => void;
  onSuccess: (data: ISuccessResponse) => void;
}

export interface IRegisterUserFields {
  email: string;
  password: string;
  userName: string;
}

export interface IResisterUserResponse {
  message: string;
  record: IRegisterUserData;
  statusCode: number;
  success: boolean;
}

export interface IRegisterUserData {
  createdAt: string;
  email: string;
  id: string;
  isVerifiedOtp: boolean;
  otpCode: string;
  otpExpiration: string;
  password: string;
  updatedAt: string;
  userName: string;
}
export interface IVerifiedOtpCodePayload {
  email: string;
  otpCode: string;
}

export interface IErrorResponse {
  failMethod: string;
  message: string;
  statusCode: number;
  success: boolean;
}

export interface ISuccessResponse {
  message: string;
  statusCode: number;
  success: boolean;
}
