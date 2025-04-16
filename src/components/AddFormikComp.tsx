import {  Formik } from "formik";
import * as Yup from 'yup';

const AddFormikComp = () => {

  const initialValues = {
    name: "",
    password: "",
  }

  const onSubmit = (values:object) => {
    console.log("values", values);
  }
//    create the schema 
const validationSchema= Yup.object({
    name: Yup.string().required("Name is required").min(3, "At least 3 charaters"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required")
  });

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // });


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
   {
    (formik)=>(
    <form
      onSubmit={formik.handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="name"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="john"
        //   name = "name"
        //   value={formik.values.name}
        //   onChange={formik.handleChange}
        //   onBlur={formik.handleBlur}
        {...formik.getFieldProps("name")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formik.errors.name ? <small>{formik.errors.name}</small> : null}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="password"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...formik.getFieldProps("password")}

          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formik.touched.password && formik.errors ? (
          <small>{formik.errors.password}</small>
        ) : null}
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Submit
      </button>
    </form>)
   }
     
     
    </Formik>
  );
};

export default AddFormikComp;
