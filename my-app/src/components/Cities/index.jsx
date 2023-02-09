import { CITIES } from "../../constants";

function Cities(props) {
  return (
    <>
      <select 
        name="cities"
        id="cities"
        value={props.city}
        onChange={event => {
          props.setCity(event.target.value);
        }}
      >
        {
          CITIES.map((city, index) => (
            <option 
              key={index}
              value={city.value}>
                {city.label}
            </option>
          ))
        }
      </select>
    </>
  )
}

export default Cities;
