import { RegisterRequest } from "../../custom";
import create from "zustand";
import { devtools } from "zustand/middleware";

interface SignInState extends RegisterRequest {
  err: boolean;
  errMsg: string;
}

const initialState: SignInState= {
  username: "",
  email: "",
  password: "",
  roles: [],
  err: false,
  errMsg: ""
};

export const useSignInStore = create<SignInState>(
  devtools(
    () => ({
      ...initialState,
    }),
    {
      name: "Sign-in Store",
    }
  )
);
