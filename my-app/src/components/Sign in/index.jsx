import { useNavigate } from "react-router-dom";
import Button from "../Button";

const SignIn = ({setFormType}) => {
  let navigate = useNavigate();

  const toCreatingAcc = (path) => {
    navigate(`/${path}`);
    setFormType("sign up");
  };

  return (
    <div className="authorization">
      <form className="users-data">
        <input type="email" id="username" placeholder="Username or Email"/>
        <input type="password" id="password" placeholder="Password"/>
      </form>

      <div className="reset">
        <Button 
          title="Forgot your password?"
        />
      </div>

      <Button 
        title='SIGN IN'
        className={'log-in-btn'}
      />

      <div className="create-acc-btn">
        <p>Don't have an account yet?</p>

        <Button 
          title="Create one"
          onClickFunc={() => toCreatingAcc("authorization/creating")}
        />
      </div>
    </div>
  )
}

export default SignIn;
