import { Storage } from "@ionic/storage";
import axios, { AxiosError, AxiosResponse } from "axios";
import { JwtReponse, RegisterRequest } from "../../custom";
import { useSignInStore } from "../../stores/signInForn";

interface SignInArgs extends RegisterRequest {
  history: any;
}

interface ErrorMessage {
  message: string;
}

export const signIn = async ({
  username,
  email,
  password,
  roles,
  history,
}: SignInArgs) => {
  const store = new Storage();
  await store.create();

  const res: void | AxiosResponse<JwtReponse> = await axios
    .post("http://localhost:8080/api/auth/signup", {
      username,
      email,
      password,
      roles,
    })
    .catch((err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          const msg = (err.response.data as ErrorMessage).message.replace(
            "ERRO: ",
            ""
          );
          useSignInStore.setState({ err: true, errMsg: msg });
        }
      }
    });
  if (res) {
    if (res.status === 200) {
      useSignInStore.setState({ err: false, errMsg: "" });
      history.push("/login");
    }
  }
};
