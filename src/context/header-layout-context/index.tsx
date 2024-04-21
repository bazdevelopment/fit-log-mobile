import { createContext, useContext } from "react";

import { IHeaderLayoutContext } from "./header-layout.interface";
/** Context declaration */
export const HeaderLayoutContext = createContext<IHeaderLayoutContext>({ headerHeight: 0, handleLayout: () => {} });
/** Provider declaration */
export const { Provider: HeaderLayoutProvider } = HeaderLayoutContext;
/** Utility function for accessing the */
export const useHeaderLayout = () => useContext(HeaderLayoutContext);
