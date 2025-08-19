import type { IUserData } from '../../Interfaces';
import './style.scss';

type TProps = {
  companyInfo: {
    name: string;
    address: string;
    field: string;
  };
  userData: IUserData;
  isLoggedIn: boolean;
};

const Info = (props: TProps) => {
  const { companyInfo, userData, isLoggedIn } = props;

  return (
    <div className="info-container">
      <div className="company-info">
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.address}</p>
        <p>{companyInfo.field}</p>
      </div>
      {isLoggedIn && (
        <div className="user-info">
          <h2>Your Information :</h2>
          <p><b>Username :</b> {userData.username}</p>
          {userData.email && <p><b>Email :</b> {userData.email}</p>}
          {userData.age && <p><b>Age :</b> {userData.age}</p>}
          {userData.phone && <p><b>Phone :</b> {userData.phone}</p>}
          <p><b>Password :</b> {userData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Info;
