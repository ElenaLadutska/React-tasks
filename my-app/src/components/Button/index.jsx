function Button(props) {
  return (
    <button className={props.className} id={props.id} > 
      {props.title}
    </button>
  )
}

export default Button;
