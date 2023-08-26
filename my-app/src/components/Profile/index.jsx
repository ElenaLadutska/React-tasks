import { useState, useEffect, useCallback, useMemo } from "react";
import UsersData from "../UsersData";
import FillUserData from "../FillUserData"

const Profile = ({isAuthorized}) => {
  const [ isDataCompleted, setCompleteData ] = useState(false);
  
  const authoriedUser = useMemo(() => JSON.parse(localStorage.getItem("authoriedUser")) || {}, []);

  const userInfo = Object.fromEntries( Object.entries(authoriedUser).filter(([key]) => key !=='isAuth') );

  const [user, setUser] = useState(userInfo);

  const addData = (data) => {
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsersInfo = allUsers.filter(user => user.login.trim() !== userInfo.login.trim());

    const {Город: city, Дата: birthdate, Пол: gender } = data;

    authoriedUser.city = city;
    authoriedUser.birthdate = birthdate;
    authoriedUser.gender = gender;

    setUser({
      ...userInfo, 
      city: city,
      birthdate: birthdate,
      gender: gender,
    });

    setCompleteData(true);

    updatedUsersInfo.push(authoriedUser);

    localStorage.setItem("authoriedUser", JSON.stringify(userInfo));
    localStorage.setItem("users", JSON.stringify(updatedUsersInfo));
  };

  const onSubmit = (data) => addData(data);

  const checkIsUserDataFull = useCallback(
    () => {
      const {login, name, surname, phone, gender, city, birthdate} = authoriedUser;

      return !!(login && name && surname && phone && gender && city && birthdate)
      },
    [authoriedUser]
  );

  useEffect(() => checkIsUserDataFull() ? setCompleteData(true) : setCompleteData(false), [checkIsUserDataFull]);

  return (
    <>
      {isAuthorized &&
        <div className="user-data">
          <UsersData 
            user = {user}
          />
    
          {!isDataCompleted && 
            <FillUserData 
              onSubmit = {onSubmit}
            />
          }
        </div>
      }

      {!isAuthorized &&
        <p className="not-authoried">Вы не авторизованы. Войдите в личный кабинет</p>
      }
    </>
  )
}

export default Profile;
