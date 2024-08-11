const InputField = ({ label, type, id, name, autoComplete, required }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 text-[16px]"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    </div>
  );
};

export default InputField;
