import { useNavigate } from "react-router-dom";
import Button from "../Button";

const RestorePassword = () => {
  let navigate = useNavigate();

  const toPage = (path) => {
    navigate(`/${path}`);
  };
  
  return (
    <div className="restore">
      <div className="restore-content">
        <h1>ЗАБЫЛИ ПАРОЛЬ?</h1>
        <p className="header-paragraph">не переживайте, сейчас всё исправим</p>

        <label>Введите свой логин</label>
        <input type="text" placeholder="Ваш логин"/>

        <Button 
          className="reset-password"
          title={"Восстановить пароль"}
        />

        <Button 
          className="back-to-auth"
          title={`<< Вернуться`}
          onClickFunc={() => toPage("authorization")}
        />
      </div>
    </div>
  )
}

export default RestorePassword;
