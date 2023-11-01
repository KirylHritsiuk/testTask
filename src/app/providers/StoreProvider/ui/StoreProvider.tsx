import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/stateSchema";
import { setupListeners } from "@reduxjs/toolkit/query";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema);

  setupListeners(store.dispatch);

  return <Provider store={store}>{children}</Provider>;
};
