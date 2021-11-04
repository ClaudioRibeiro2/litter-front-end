import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { perform_login } from "../actionsType";

interface InitialState {
  token: string;
}

const initialState: InitialState = {
  token: "",
};

interface IAction {
  type: string;
}

const reducer: any = (state: object, action: any) => {
  switch (action.type) {
    case perform_login:
      return { token: "aaaaaaaaaaa" };
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
