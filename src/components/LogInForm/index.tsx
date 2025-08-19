import './style.scss';
import type { ChangeEvent } from 'react';
import type { IUserData } from '../../Interfaces';
import { logInFormInputList } from '../../Data';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

const Form = ({ isLoggedIn, setIsLoggedIn, userData, setUserData }: IProps) => {
  // Handlers :
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoggedIn(!isLoggedIn);
      }}
    >
      <div className="login">
        {logInFormInputList.map((input, index) => {
          // Using index as key is not recommended for CRUD operations.
          return (
            <div className="input-wrapper" key={index}>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeHolder}
                id={input.id}
                required
                value={userData[input.name]}
                onChange={onChangeHandler}
              />
            </div>
          );
        })}
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default Form;
