const Select = ({ name, id, options, className, label, onChange, defaultValue = null }) => {
  return (
    <div className={`flex flex-1 flex-col mb-2 ${className}`}>
      <label htmlFor={name} className="m-1 font-semibold">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className="p-2 rounded-lg font-semibold focus:outline-none border-2 border-green-500"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
