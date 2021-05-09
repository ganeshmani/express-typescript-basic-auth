import User from "../User/user.model";
import { IUser } from "../User/user.interface";
class AuthService {
  async createUser(data: IUser) {
    try {
      const user = User.build(data);
      await user.save();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findUserByEmail(email: string) {
    return User.findOne({
      email: email,
    }).exec();
  }
}

export default new AuthService();
