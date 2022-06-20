function Button({ label, name, id, className, onClick, type }) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      name={name}
      id={id}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;
