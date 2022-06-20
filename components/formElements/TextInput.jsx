function TextInput({ name, id, onChange, value, placeholder, label, type, className }) {
  return (
    <div className={`flex flex-1 flex-col mb-2 ${className}`}>
      <label htmlFor={id} className="m-1 font-semibold">
        {label}
      </label>
      <input
        type={type}
        className="p-2 rounded-lg font-semibold focus:outline-none border-2 border-green-500"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
