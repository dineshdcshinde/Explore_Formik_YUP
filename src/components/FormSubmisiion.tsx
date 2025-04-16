import { useFormik } from "formik"

const FormSubmisiion = () => {
    const formik = useFormik({
        initialValues:{
            name:"", 
            password:""
        }, 
        onSubmit:(values)=>{
            console.log("values", values)
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="john" value={formik.values.name} onChange={formik.handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} />
        <br />
        <button type="submit">Submit</button>

    </form>
  )
}

export default FormSubmisiion