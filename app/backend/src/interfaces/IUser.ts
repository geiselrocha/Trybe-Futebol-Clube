interface IUser {
  username: string;
  role: string;
  email: string;
  password: string
}

interface IUserID extends IUser {
  id: number;
}

interface IUserService {
  findAll: IUserID
}

export default IUser;

export { IUserID, IUserService };
