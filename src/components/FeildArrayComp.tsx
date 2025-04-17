import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const FeildArrayComp = () => {
  const initialValues = {
    email: "",
    password: "",
    social: {
      facebook: "",
      telegram: "",
    },
    phoneNumbers: [""],
  };

  const onSubmit = (values: object) => {
    console.log("Values are ", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .min(9, "At least 9 chars")
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .min(5, "At least 5 chars")
      .max(9, "Not more than 9 chars"),
  });

  return (
    <div className="form-container">
      <h2>Login Form</h2>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="input" />
            <ErrorMessage name="email" component={Error} />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="input" />
            <ErrorMessage name="password" component={Error} />
          </div>

          <div className="form-control">
            <label htmlFor="phoneNumbers">Phone Numbers</label>
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                const { values } = fieldArrayProps.form;
                const { phoneNumbers } = values;
                const { push, remove } = fieldArrayProps;
                return phoneNumbers.map((phoneNumbers: number, idx: number) => {
                  return (
                    <div key={idx}>
                      <Field name={`phoneNumbers[${idx}]`} />
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            remove(idx);
                          }}
                        >
                          -
                        </button>
                      )}
                    </div>
                  );
                });
              }}
            </FieldArray>
            <ErrorMessage name="phoneNumbers" component={Error} />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeildArrayComp;
