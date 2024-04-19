interface Props {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  label?: string;
  placeholder?: string;
  error?: string | null | undefined;
  required?: boolean;
}

export const Input = (props: Props) => {
  return (
    <div className="w-full group">
      {props.label && (
        <label className=" group-focus-within:font-bold" htmlFor={props.name}>
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className="w-full mt-2 py-3 px-4 bg-app-dark-bg  rounded-lg 
        shadow-lg focus:outline-none focus:ring-2 focus:ring-bittersweet transition-shadow"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
      {props.error && <p className="text-bittersweet">{props.error}</p>}
    </div>
  );
};
