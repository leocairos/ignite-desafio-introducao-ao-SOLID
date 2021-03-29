import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userRequest = this.usersRepository.findById(user_id);
    if (userRequest) {
      const isAdminUser = userRequest.admin;
      if (isAdminUser) {
        const users = this.usersRepository.list();
        return users;
      }
    }
    throw new Error("Adim User not found");
  }
}

export { ListAllUsersUseCase };
