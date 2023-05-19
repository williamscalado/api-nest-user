export interface IUser {
  id?: string;
  email: string;
  name: string;
  lastName: string;
  nickName?: string;
  password: string;
  active: boolean;
  createAt?: Date;
}
