import { useLoginStore } from "../../stores/loginFormStore/index";
import { useTokenStore } from "../../stores/tokenStore/index";
import { LoginRequest, LoginResponse, User } from "./../../custom.d";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Storage } from "@ionic/storage";
import { useUserStore } from "../../stores/userStore";

export const login = async ({ username, password }: LoginRequest) => {
  const store = new Storage();
  await store.create();

  const storeToken = await store.get("token");

  if (storeToken) {
    //If there it is a token in the storage, just sets the store to its values.
    useTokenStore.setState({ token: storeToken });
  } else {
    //Will do the requests only if there isn't the token on the storage
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
      const user: User = {
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        roles: res.data.roles,
      };
      //If the request is successfull it'll set the storage and store to the values from the response.
      await store.set("user", user);
      await store.set("token", res.data.token);
      await store.set("issuedAt", res.data.issuedAt);
      useTokenStore.setState({ token: res.data.token });
      useLoginStore.setState({
        error: false,
        errorMsg: "",
      });
    }
  }
};

export const isAuth = async () => {
  const store = new Storage();
  await store.create();
  const storeToken = await store.get("token");
  const storeUser: User = await store.get("user");

  if (storeToken) {
    useTokenStore.setState({ token: storeToken });
  }
  if (storeUser !== null) {
    const { id, username, email, roles } = storeUser;
    useUserStore.setState({ id, username, email, roles });
  }

  if (storeToken) {
    return true;
  } else {
    return false;
  }
};

export const isAuthenticated = async (history: any) => {
  const auth = await isAuth();
  if (!auth) {
    history.push("/login");
  }
};
