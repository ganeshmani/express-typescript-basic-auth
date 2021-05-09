import User from "../User/user.model";
import { IUser } from "../User/user.interface";
class UserService {
  async findUserByEmail(email: string) {
    return User.findOne({
      email: email,
    }).exec();
  }
}

export default new UserService();
