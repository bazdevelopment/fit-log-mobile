import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const queryClient = new QueryClient();

/**
 * API Provider for enabling react query
 */
export function APIProvider({ children }: { children: ReactNode }) {
  /**
   * TODO: to be enabled later on
   * useReactQueryDevTools(queryClient)
   */

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
