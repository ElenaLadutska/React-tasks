import { useState } from "react";
import Button from "../Button";

const SignUp = () => {
  const [userPassword, setUserPassword] = useState('');
  const [repUserPassword, setRepUserPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userFirstname, setFirstUsername] = useState('');
  const [userLastname, setLastUsername] = useState('');
  const [userPhone, setUserphone] = useState('');

  return (
    <div className="authorization">
      <form className="creating-account">
        <input type="email"
           id="username"
           placeholder="Username or Email"
           onChange={(e) => setUsername(e.target.value)}
           />

        <input type="text" 
          id="first-name" 
          placeholder="First name" 
          onChange={(e) => setFirstUsername(e.target.value)}
        />

        <input type="text" 
          id="last-name" 
          placeholder="Last name" 
          onChange={(e) => setLastUsername(e.target.value)}
        />

        <input type="text" 
          id="phone" 
          placeholder="Phone" 
          onChange={(e) => setUserphone(e.target.value)}
        />

        <input type="password" 
          id="password" 
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}/>
          
        <input type="password" 
          id="rep-password" 
          placeholder="Repeat password" 
          onChange={(e) => setRepUserPassword(e.target.value)}/>

        {userPassword && repUserPassword && !(userPassword === repUserPassword) &&
          <div className="wrong-passwords"> 
            Passwords aren't same
          </div>
        }

        {(userPassword && repUserPassword && (userPassword === repUserPassword) && username && userFirstname && userLastname && userPhone) && 
          <Button 
            type="submit"
            title="Sign up"
          />}
      </form>


    </div>
  )
}

export default SignUp;