import { InitialState } from "./../custom.d";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: InitialState = {
  token: "",
};

export const useStore = create<InitialState>(
  devtools((set) => ({
    ...initialState,
  }))
);
