import { ErrorMessage, Field } from "formik";
import Error from "./Error";

type InputProps = {
  label: string;
  name: string;
  [key: string]: unknown;
};

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default Input;
