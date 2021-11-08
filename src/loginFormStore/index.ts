import { InitialState, LoginRequest } from "./../custom.d";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: LoginRequest = {
  username: "",
  password: "",
};

export const useLoginStore = create<LoginRequest>(
  devtools((set) => ({
    ...initialState,
  }))
);
