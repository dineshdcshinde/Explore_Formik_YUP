import { ErrorMessage, Field } from "formik";
import Error from "./Error";

type TextAreasProps = {
  label: string;
  name: string;
  [key: string]: unknown;
};
const TextArea = ({ label, name, ...rest }: TextAreasProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default TextArea;
