interface IUser {
  username: string;
  role: string;
  email: string;
  password: string
}

interface IUserID extends IUser {
  id: number;
}

interface IuserService {
  findAll: IUserID
}

export default IUser;

export { IUserID, IuserService };
