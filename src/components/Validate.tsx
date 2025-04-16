import { useFormik } from "formik";

const Validate = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      console.log(formik.errors);
    },
    validate: (values) => {
      const errors: { name?: string; password?: string } = {};
      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 5) {
        errors.password = "Password should be more than 5 chars";
      }
      return errors;
    },
  });

  console.log('Formik errors',formik.errors)
  console.log("formik only name error", formik.errors.name)


  return (
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
          name="name"
          placeholder="john"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
{formik.errors.name ? <small>{formik.errors.name}</small>:null }
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
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formik.touched.password && formik.errors ? <small>{formik.errors.password}</small>:null }

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
    </form>
  );
};

export default Validate;
