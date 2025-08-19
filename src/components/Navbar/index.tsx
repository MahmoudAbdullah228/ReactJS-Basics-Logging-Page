import { useState, type FC } from 'react';
import './style.scss';
import LogInForm from '../LogInForm';
import RegisterForm from '../RegisterForm';
import type { IUserData } from '../../Interfaces';

interface IProps {
  companyName: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

// All props passed to the component as Attribute[key(Attribute Name)-value pairs]
const Nav: FC<IProps> = ({
  companyName,
  isLoggedIn,
  setIsLoggedIn,
  userData,
  setUserData,
}) => {
  const [islightMode, setIslightMode] = useState(false);
  const [isLogInFormVisible, setLogInFormVisible] = useState(false);
  const [isRegisterFormVisible, setRegisterFormVisible] = useState(false);

  const Styles = {
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
    button: {
      backgroundColor: islightMode ? '#fff' : '#333',
      color: islightMode ? '#000' : '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '0.3rem 1rem',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    // All of elements must be wrapped in a parent element or fragment or from one element.
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <a href="/" style={Styles.link}>
              <b>{companyName}</b>
            </a>
          </li>
          <li>
            <a href="/" style={Styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={Styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" style={Styles.link}>
              Contact
            </a>
          </li>
          {/* To add class for elements Must use className instead of class */}
          <li>
            <span className="search">
              {/* Self-closing tag must end with a slash */}
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '24px',
                  padding: '0.5rem 1rem',
                  backgroundColor: islightMode ? '#fff' : '#333',
                  color: islightMode ? '#000' : '#fff',
                }}
              />
            </span>
          </li>
          <li>
            {!isLoggedIn && (
              <button
                style={{ ...Styles.button }}
                onClick={() => {
                  setLogInFormVisible(!isLogInFormVisible);
                  setRegisterFormVisible(false);
                }}
              >
                Log In
              </button>
            )}
          </li>
          <li>
            {isLoggedIn && (
              <button
                style={{ ...Styles.button }}
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  setUserData({
                    username: '',
                    email: '',
                    password: '',
                    phone: '',
                    age: undefined,
                  });
                }}
              >
                Log Out
              </button>
            )}
          </li>
          <li>
            {!isLoggedIn && (
              <button
                style={{ ...Styles.button }}
                onClick={() => {
                  setRegisterFormVisible(!isRegisterFormVisible);
                  setLogInFormVisible(false);
                }}
              >
                Register
              </button>
            )}
          </li>
          <li>
            {/* Any expression must be wrapped in curly braces */}
            <button
              style={{ ...Styles.button }}
              onClick={() => setIslightMode(!islightMode)}
            >
              <i
                className={`fa-solid ${islightMode ? 'fa-moon' : 'fa-sun'}`}
                aria-hidden="true"
              />
            </button>
          </li>
        </ul>
      </nav>

      {isLogInFormVisible && !isLoggedIn && (
        <LogInForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}

      {isRegisterFormVisible && !isLoggedIn && (
        <RegisterForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
};

export default Nav;
