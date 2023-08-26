function User (login, name, surname, phone, password) {
  this.isAuth = false;
  this.name = name;
  this.surname = surname;
  this.login = login;
  this.phone = phone;
  this.password = password;
};

const addNewUser = ( login, name, surname, phone, password, setAlreadyRegistered, setRegistered ) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const newUser = new User(login, name, surname, phone, password);

  if (!users.length) {
    users.push(newUser);
    setRegistered(true);
  } else {
    users.map((user) => {
      if (user.login === login) {
        setAlreadyRegistered(true);
      } else if (users.every(user =>  user.login !== login)){
          users.push(newUser);
          setRegistered(true);
        };
      
      return user;
    });
  }

  return localStorage.setItem('users', JSON.stringify(users));
};

export default addNewUser;
