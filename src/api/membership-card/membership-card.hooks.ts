import { useMutation, useQuery } from "@tanstack/react-query";

import { IErrorResponse } from "../auth/auth.types";
import { registerGymVisit, submitMembershipCard, verifyTodayVisit } from "./membership-card.requests";
import { IMembershipCardIdActionsResponse } from "./membership-card.types";

/**
 * Utility hook used to submit the membership card to DB
 */
export const useSubmitMembershipCardId = (options: IMembershipCardIdActionsResponse) =>
  useMutation({
    mutationFn: submitMembershipCard,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data) {
      options.onSuccess(data);
    },
  });

/**
 * Utility hook used to save the gym visit by scanning membership card
 */
export const useRegisterGymVisit = (options: IMembershipCardIdActionsResponse) =>
  useMutation({
    mutationFn: registerGymVisit,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data) {
      options.onSuccess(data);
    },
  });

/**
 * Utility hook user to verify today's gym visit status
 */
export const useTodayGymVisit = () =>
  useQuery({
    queryKey: ["verify-today-gym-visit-key"],
    queryFn: verifyTodayVisit,
  });
