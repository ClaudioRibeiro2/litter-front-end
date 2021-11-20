import { InitialState } from "../../custom";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: InitialState = {
  token: "",
};

export const useTokenStore = create<InitialState>(
  devtools(
    () => ({
      ...initialState,
    }),
    { name: "Token Store" }
  )
);
