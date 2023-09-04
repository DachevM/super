import { clientsData } from "../Data/ClientsData";

export class UserService {
  static instance: UserService;
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  static async getUsers(searchText: any, paginationObj?: any) {
    console.info("[UserService:getUsers]", { searchText, paginationObj });
    return clientsData.data;
  }

  async updateUser(id: number, updatedUserInfo: any) {
    console.info("[UserService:updateUser]", { id, updatedUserInfo });
    return { ...updatedUserInfo };
  }

  /// .... остальной функционал необходимый для работы с сущностью пользователь
}
