import { Nullable } from "../../types/general.types";
import { IErrorResponse, ISuccessResponse } from "../auth/auth.types";

export interface IUserUpdatePartially {
  onError: (error: IErrorResponse) => void;
  onSuccess: (data: ISuccessResponse) => void;
}

export interface IUserPartiallyFields {
  avatarImage?: Nullable<string>;
  gender?: Nullable<string>;
  birthDate?: Nullable<Date>;
  phoneNumber?: Nullable<string>;
  nationality?: Nullable<string>;
  weight?: Nullable<number>;
  goals?: Nullable<string[]>;
  activityLevel?: Nullable<string>;
  age?: Nullable<number>;
  height?: Nullable<number>;
  userId: string;
  isOnboarded: boolean;
}

interface ICurrentUser {
  avatarImage: string;
  birthDate: string;
  email: string;
  gender: string;
  id: string;
  isVerifiedOtp: boolean;
  nationality: string;
  phoneNumber: string;
  userName: string;
  isOnboarded: boolean;
  cardMembershipId: string;
}
export interface ICurrentUserResponse extends ISuccessResponse {
  record: ICurrentUser;
}
