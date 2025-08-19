import './App.css';
import Nav from './components/Navbar';
import Info from './components/Info';
import Header from './components/Header';
import { useState } from 'react';
import type { IUserData } from './Interfaces';

function App() {
  const company = {
    name: 'StackOverLord',
    address: '1234 React Lane, JavaScript City, JS 56789',
    field: 'Web Development',
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: undefined,
  });

  return (
    <>
      <Nav
        companyName={company.name}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userData={userData}
        setUserData={setUserData}
      />
      {isLoggedIn && (
        <Header title={company.name}>
          ,{' '}
          <span className="username">
            {userData.username.trim().split(' ')[0] || userData.username}
          </span>
        </Header>
      )}
      {/* How to add children to components */}
      <Info companyInfo={company} isLoggedIn={isLoggedIn} userData={userData} />
    </>
  );
}

export default App;
