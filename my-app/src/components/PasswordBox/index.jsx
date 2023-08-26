import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordBox = ({id, placeholder, value, onChange}) => {
  const [isPasswordNeedToBeVisible, setVisibilityPassword] = useState(false);
  
  return (
    <div className="password-box">
      <input 
        type={!isPasswordNeedToBeVisible ? "password" : "text"}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <div className="show-password"
        onClick={() => setVisibilityPassword(prev => !prev)}
      >
        {isPasswordNeedToBeVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
      </div>
    </div>
  )
}

export default PasswordBox;
