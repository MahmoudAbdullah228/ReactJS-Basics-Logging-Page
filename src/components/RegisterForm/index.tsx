import './style.scss';
import { type ChangeEvent } from 'react';
import type { IUserData } from '../../Interfaces';
import { registerFormInputList } from '../../Data';

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

const RegisterForm = ({
  isLoggedIn,
  setIsLoggedIn,
  userData,
  setUserData,
}: IProps) => {
  // Handlers :
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Renders :
  const renderRegisterFormInputList = registerFormInputList.map((input) => (
    // With map You must use key to uniquely identify each input, It's add to 1th element.
    <div className="input-wrapper" key={input.id}>
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
  ));

  //* renderRegisterFormInputList with delete field button :
  // const [inputArr, setInputArr] = useState(registerFormInputList);
  // const renderRegisterFormInputList = inputArr.map((input) => (
  //   <div className="input-container" key={input.id}>
  //     <div className="input-wrapper">
  //       <input
  //         type={input.type}
  //         name={input.name}
  //         placeholder={input.placeHolder}
  //         id={input.id}
  //         required
  //         value={userData[input.name]}
  //         onChange={onChangeHandler}
  //       />
  //     </div>
  //     <button type="button" className='remove-button' onClick={() => {
  //       const filtered = inputArr.filter(inputItem => inputItem.id !== input.id);
  //       setInputArr(filtered);
  //     }}>
  //       <i className="fas fa-trash"></i>
  //     </button>
  //   </div>
  // ));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoggedIn(!isLoggedIn);
      }}
    >
      <div className="registration">
        {renderRegisterFormInputList}
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
