import { useStore } from "./../../store/index";
import { LoginRequest, LoginResponse } from "./../../custom.d";
import axios, { AxiosResponse } from "axios";
import { Storage } from "@ionic/storage";

export const login = async ({ username, password }: LoginRequest) => {
  const store = new Storage();
  await store.create();
  const storeToken = await store.get("token");

  if (storeToken) {
    useStore.setState({ token: storeToken });
    return;
  }

  const res: AxiosResponse<LoginResponse> = await axios.post(
    "http://localhost:8080/api/auth/signin",
    {
      username,
      password,
    }
  );
  await store.set("token", res.data.token);
  await store.set("issuedAt", res.data.issuedAt);
  useStore.setState({ token: res.data.token });
};
