import { GetUserByNameResponse } from "./../../custom.d";
import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState: GetUserByNameResponse = {
  id: 0,
  username: "",
  email: "",
  roles: [],
};

export const useUserStore = create<GetUserByNameResponse>(
  devtools(() => ({
    ...initialState,
  }))
);
