import { useLoginStore } from "./../../loginFormStore/index";
import { useTokenStore } from "../../tokenStore/index";
import { LoginRequest, LoginResponse } from "./../../custom.d";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Storage } from "@ionic/storage";

export const login = async ({ username, password }: LoginRequest) => {
  const store = new Storage();
  await store.create();
  const storeToken = await store.get("token");

  if (storeToken) {
    useTokenStore.setState({ token: storeToken });
    return;
  }

  const res: void | AxiosResponse<LoginResponse> = await axios
    .post("http://localhost:8080/api/auth/signin", {
      username,
      password,
    })
    .catch((err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          useLoginStore.setState({
            error: true,
            errorMsg: "Senha ou Usuário Errados",
          });
        }
      } else {
        console.log(err);
      }
    });

  if (res) {
    await store.set("token", res.data.token);
    await store.set("issuedAt", res.data.issuedAt);
    useTokenStore.setState({ token: res.data.token });
    useLoginStore.setState({
      error: false,
      errorMsg: "",
    });
  }
};

export const isAuth = async () => {
  const store = new Storage();
  await store.create();
  const storeToken = await store.get("token");

  if (storeToken) {
    useTokenStore.setState({ token: storeToken });
  }

  if (storeToken) {
    return true;
  } else {
    return false;
  }
};
