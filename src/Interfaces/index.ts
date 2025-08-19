export interface IUserData {
  username: string;
  email: string;
  password: string;
  phone: string;
  age?: number; // age can be a number or undefined
}

export interface IFormInputList {
  name: keyof IUserData; // username | email | password | phone | age
  placeHolder: string;
  type: string;
  id: string;
}
