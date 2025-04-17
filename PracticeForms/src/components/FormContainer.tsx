import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikController from "./FormikController";

const FormContainer = () => {
  const initalValues = {
    email: "",
    comments: "",
  };
  const onSubmit = (values: object) => {
    console.log("Form Data", values);
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required()
      .min(9, "email should not be less than 9 chars"),
    comments: Yup.string().required().max(30, "Not more than 30 chars"),
  });
  return (
    <Formik
      initialValues={initalValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikController
              name="email"
              type="email"
              label="Email"
              control="input"
            />

            <FormikController
              name="comments"
              type="textarea"
              label="Comments"
              control="textarea"
              rows={2}
              columns={3}
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormContainer;
