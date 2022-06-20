function TextInput({ name, id, onChange, value, placeholder, label, type }) {
  return (
    <div className="flex flex-1 flex-col ">
      <label htmlFor={name} className="m-1 font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        className="p-3 rounded-lg font-semibold focus:outline-none border-b-2 border-green-500"
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
