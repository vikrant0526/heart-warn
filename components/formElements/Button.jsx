function Button({ label, name, id, className, onClick }) {
  return (
    <button className={`btn btn-primary ${className}`} name={name} id={id} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
