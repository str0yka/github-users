import { appAxios } from "@/http";

export class UserApi {
  static async getList(params: URLSearchParams) {
    if (!params.get("q")) {
      throw new Error("To search, enter something");
    }

    const response = await appAxios.get<ResponseUserList>("/search/users?", {
      params,
    });

    if ("errors" in response.data) {
      throw new Error("Unexpected error");
    }

    return response.data;
  }

  static async getOne(login: string) {
    const response = await appAxios.get<ResponseUser>("/users/" + login);

    if ("errors" in response.data) {
      throw new Error("Unexpected error");
    }

    return response.data;
  }
}
