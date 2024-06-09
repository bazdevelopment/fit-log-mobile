import { IErrorResponse } from "../auth/auth.types";

export interface IMembershipCardIdActionsResponse {
  onError: (error: IErrorResponse) => void;
  onSuccess: (data) => void;
}
