import { Http } from "../Http/index";
const prefixUrl = `${process.env.APP_AUTH_URL}/baseapi/api/UserSetting`;
const prefixUrlProfile = `${process.env.APP_AUTH_URL}/baseapi/api/User`;

export const baseApi = {
  getUserFavoriteCategories: async (): Promise<
    IGlobalService.IServiceResult<string[]>
  > => {
    let response: IGlobalService.IServiceResult<string[]>;

    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/getUserFavoriteCategories`,
        needAuth: true,
      });
    } catch (e) {
      return {
        status: 2,
        data: [],
      };
    }
    return response;
  },
  DeleteUserFavoriteCategories: async (
    categories: string[],
  ): Promise<IGlobalService.IServiceResult<string[]>> => {
    let response: IGlobalService.IServiceResult<string[]>;

    response = await Http.Request({
      methodType: "post",
      url: `${prefixUrl}/DeleteUserFavoriteCategories`,
      payload: {
        categoriesId: categories,
      },
      needAuth: true,
    });

    return response;
  },
  addUserFavoriteCategories: async (
    categories: string[],
  ): Promise<IGlobalService.IServiceResult<string[]>> => {
    let response: IGlobalService.IServiceResult<string[]>;

    response = await Http.Request({
      methodType: "post",
      url: `${prefixUrl}/AddUserFavoriteCategories`,
      payload: {
        categoriesId: categories,
      },
      needAuth: true,
    });

    return response;
  },
  getUserProfile: async (): Promise<
    IGlobalService.IServiceResult<UserProfile.IUser>
  > => {
    let response: IGlobalService.IServiceResult<UserProfile.IUser>;
    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrlProfile}/GetUserProfile`,

        needAuth: true,
      });
    } catch {
      response = {
        status: 2,
        data: {
          fullName: "",
          userId: "",
        },
      };
    }
    return response;
  },
};
