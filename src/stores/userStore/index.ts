import { User } from "./../../custom.d";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: User = {
  id: 0,
  username: "",
  email: "",
  roles: [],
};

export const useUserStore = create<User>(
  devtools(
    () => ({
      ...initialState,
    }),
    { name: "User Store" }
  )
);
