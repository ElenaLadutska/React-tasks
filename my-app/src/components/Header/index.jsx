import Button from '../Button';
import Cities from '../Cities'

const Header = (props) => {
  const { city, setCity } = props;

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
        title="SIGN IN" 
        className="sign-in" 
      />
    </header>
  )
}

export default Header;
