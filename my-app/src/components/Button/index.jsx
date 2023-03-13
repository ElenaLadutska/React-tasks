const Button = (props) => {
  const { title, className } = props;
  return (
    <button className={className} > 
      {title}
    </button>
  )
}

export default Button;
