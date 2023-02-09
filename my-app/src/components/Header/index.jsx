import Button from '../Button';
import Cities from '../Cities'

function Header(props) {
  return (
    <header>
      <div className="logo">
        <h3>the</h3>
        <h1>MOVIES</h1>
      </div>
      
      <Cities 
        city={props.city} 
        setCity={props.setCity}/>

      <Button title="SIGN IN" className="signIn"/>
    </header>
  )
}

export default Header;
