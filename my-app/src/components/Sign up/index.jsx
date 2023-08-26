import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import addNewUser from "../signInLogic";
import PasswordBox from "../PasswordBox";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [userFirstname, setFirstUsername] = useState('');
  const [userLastname, setLastUsername] = useState('');
  const [userPhone, setUserphone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [repUserPassword, setRepUserPassword] = useState('');

  const [isPasswordSafe, setPasswordSafety] = useState(false);

  const [isRegistered, setRegistered]= useState(false);
  const [isAlreadyRegistered, setAlreadyRegistered]= useState(false);


  let isFormField = userPassword && repUserPassword 
    && (userPassword === repUserPassword) 
    && username && userFirstname 
    && userLastname && userPhone;

  let checkPassword = (password) => {
    return password.length >= 8
  };
    
  let isPasswordsNotSame = userPassword && repUserPassword && !(userPassword === repUserPassword);

  let navigate = useNavigate();

  const navigateToTheLink = (path) => {
    navigate(`/${path}`);
  };

  const clearValues = () => {
    setUsername('');
    setFirstUsername('');
    setLastUsername('');
    setUserphone('');
    setUserPassword('');
    setRepUserPassword('');
  }

  return (
    <div className="authorization-box">
      <div className="authorization-overlay">
        <div className="authorization">
          {!isRegistered && !isAlreadyRegistered &&
            <form className="creating-account">
              <input type="text"
                id="username"
                placeholder="Логин / электронная почта"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />

              <input type="text" 
                id="first-name" 
                placeholder="Имя" 
                onChange={(e) => setFirstUsername(e.target.value)}
                value={userFirstname}
              />

              <input type="text" 
                id="last-name" 
                placeholder="Фамилия" 
                onChange={(e) => setLastUsername(e.target.value)}
                value={userLastname}
              />

              <input type="tel" 
                id="phone" 
                placeholder="Телефон" 
                onChange={(e) => setUserphone(e.target.value)}
                value={userPhone}
              />

              <div className="password-content">
                <PasswordBox 
                  id="password"
                  placeholder="Пароль"
                  value={userPassword}
                  onChange={e => {
                    setUserPassword(e.target.value);
                    setPasswordSafety(() => checkPassword(e.target.value));
                  }}
                />

                {!isPasswordSafe && 
                  <div className="hints">
                  *не менее 8 знаков
                </div>
                }
              </div>

              <div className="password-content">
                <PasswordBox 
                  id="rep-password"
                  placeholder="Повторите пароль" 
                  onChange={(e) => setRepUserPassword(e.target.value)}
                  value={repUserPassword}
                  />

                { isPasswordsNotSame &&
                  <div className="hints">
                    Пароли не совпадают
                  </div>
                }
              </div>

              {(!isAlreadyRegistered && !isRegistered) && isFormField 
              &&
                <Button 
                  disabled={false}
                  type="submit"
                  className="sign-up-btn"
                  title="ЗАРЕГИСТРИРОВАТЬСЯ"

                  onClickFunc={() => {
                    addNewUser(username, userFirstname,userLastname,userPhone, userPassword, setAlreadyRegistered , setRegistered);
                    clearValues();
                  }}
                /> 
              }

              {(!isAlreadyRegistered && !isRegistered) && !isFormField 
                && <Button 
                    disabled={true}
                    className="sign-up-btn"
                    title="ЗАРЕГИСТРИРОВАТЬСЯ"
                  />
              }
          </form>
          }

          {isAlreadyRegistered && 
            <div className="alreadyRegistered">
              <p>
                Вы были уже ранее зарегистрированы по этому логину
              </p>
            </div>
          }

          {isRegistered && !isAlreadyRegistered &&
            <div className="registered">
              <p>
                Вы успешно прошли регистрацию. Теперь вы можете войти в систему
              </p>
            </div>
          }

          {(isAlreadyRegistered || isRegistered) &&
            <Button 
              title="GO TO SIGN IN"
              onClickFunc={() => navigateToTheLink("authorization")}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default SignUp;
