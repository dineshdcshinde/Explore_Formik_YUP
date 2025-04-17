import Input from "./Input";
import TextArea from "./TextArea";

type InputProps = {
  label: string;
  name: string;
  [key: string]: unknown;
};

type FormikControllerProps = {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
} & InputProps;

const FormikController = ({ control, ...rest }: FormikControllerProps) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikController;
