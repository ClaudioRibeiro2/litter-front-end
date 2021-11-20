import { LoginRequest } from "../../custom";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: LoginRequest = {
  username: "",
  password: "",
  error: false,
  errorMsg: "",
};

export const useLoginStore = create<LoginRequest>(
  devtools(
    () => ({
      ...initialState,
    }),
    {
      name: "Form Store",
    }
  )
);
