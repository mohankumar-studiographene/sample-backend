import { getManager } from "typeorm";

import { User } from "@database/model/user.model";
import { UserRepo } from "@database/repository/cms-user.repository";
import createError from "http-errors";

export class UserService {
  constructor() {}
  /**
   * @param  {User} user user's object
   * @returns Promise<User>
   */
  public async getAllUsers(
    page: number,
    size: number,
    order: any
  ): Promise<[User[], number]> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    return await userRepo.findAndCount({
      take: size,
      skip: (page - 1) * size,
      order: {
        createdAt: order,
      },
    });
  }

  public async getUserById(id: string): Promise<User> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    const user = await userRepo.findOne(id);
    if (!user) {
      if (!user) {
        throw new createError.Conflict(i18n.__("no_user_exist_with_this_id"));
      }
    }
    return user;
  }

  public async updateUser(user: User): Promise<User> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    const userExist = await userRepo.findOne({ id: user.id });
    if (!userExist) {
      throw new createError.Conflict(i18n.__("no_user_exist_with_this_id"));
    }
    return await userRepo.save(user);
  }

  public async createUser(user: User): Promise<User> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    return await userRepo.save(user);
  }
}
