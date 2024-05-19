import { useMutation, useQuery } from "@tanstack/react-query";

import { IErrorResponse, ISuccessResponse } from "../auth/auth.types";
import { IUserUpdatePartially } from "./user.types";
import { getCurrentUser, updateUserPartially } from "./users.requests";

/**
 * utility hook used to partially update fields from user table
 */
export const useUpdateUser = (options: IUserUpdatePartially) => {
  return useMutation({
    mutationFn: updateUserPartially,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data: ISuccessResponse) {
      options.onSuccess(data);
    },
  });
};

/**
 * utility hook used to fetch the current logged in user
 */
export const useCurrentUser = () =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });
