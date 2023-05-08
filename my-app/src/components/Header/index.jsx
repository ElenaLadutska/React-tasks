import { useNavigate } from "react-router-dom";
import Cities from '../Cities';
import Button from '../Button';

const Header = ({ city, setCity, isAuthorized, setAuthorisation, isModalOpen, setOpenModal }) => {

  const changeFormType = () => {
    setOpenModal(!isModalOpen);
    navigateToTheLink("authorization")
  };

  let navigate = useNavigate();

  const navigateToTheLink = (path) => {
    navigate(`/${path}`)
  };

  return (
    <header>
      <div className="logo">
        <h3>the</h3>
        <h1>MOVIES</h1>
      </div>
      
      <Cities 
        city={city} 
        setCity={setCity}/>

      <Button 
        title={isAuthorized ? 'SIGN OUT': 'SIGN IN'} 
        className={isAuthorized ? 'signOut': 'signIn'} 
        onClickFunc={changeFormType}
      />
    </header>
  )
}

export default Header;
