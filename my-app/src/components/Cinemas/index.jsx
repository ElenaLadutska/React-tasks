import DateObject from "react-date-object";

function Cinemas (name) {
  const showDate = (date) => {
    const movieDate = new DateObject(date).format("DD-MM-YYYY");

    return movieDate
  }

  const startTime = (place) => {
    const time = new DateObject(place).format("HH:mm");

    return time;
  };

  return (
    <>
      {name.film.showList
        ? Object.entries(name.film.showList).map(([date, value], index) => (
          <div 
            key={index}
            className="showDate"
          >
            <h2>{showDate(Date.parse(date))}</h2>

            {value.map((place, index) => {
              return (
                <div 
                  className="placeAndTime"
                  key={index}>
                    
                    <div className="place">{place.theater.name}</div>

                    <div className="time">
                      {startTime(Date.parse(place.start))}
                    </div>
                </div>
              )})}
          </div>
          ))
        : <div className="noCinemas">No cinemas to show yet</div>
      }
    </>
  )
}

export default Cinemas;
