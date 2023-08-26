import ChangeInfo from "../ChangeInfo";

const UsersData = ({user}) => {
  return (
    <div className="completed-user-data">
      <h1>ЛИЧНЫЕ ДАННЫЕ</h1>

      <div className="personal-data">
        <div className="data-block">
          <h2>Логин</h2>
          <span>{user.login}</span>

          {/* <ChangeInfo /> */}
        </div>
        
        <div className="data-block">
          <h2>Имя</h2>
          <span>{`${user.name} ${ user.surname}`}</span>
        </div>

        <div className="data-block">
          <h2>Номер телефона</h2>
          <p>{user.phone}</p>
        </div>
        
        {user.birthdate &&         
          <div className="data-block">
            <h2>Дата рождения</h2>
            <span>{user.birthdate}</span>
          </div>
        }

        {user.city && 
          <div className="data-block">
            <h2>Город</h2>
            <p>{user.city}</p>
          </div>
        }

        {user.gender && 
          <div className="data-block">
            <h2>Пол</h2>
            <span>{user.gender}</span>
          </div>
        }

        <div className="data-block">
          <h2>Пароль</h2>
          <p>{user.password}</p>
        </div>
      </div>
    </div>
  )
};

export default UsersData;
