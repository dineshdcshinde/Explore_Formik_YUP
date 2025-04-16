import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Error from "./Error";
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: object) => {
    console.log("Values are ", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
    .trim()
    .email()
      .min(9, "At least 9 chars")
      .required("email is required"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .min(5, "At least 5 chars")
      .max(9, "Not more than 9 chars"),
  });
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login Form</h2>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component={Error} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component={Error}  />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
