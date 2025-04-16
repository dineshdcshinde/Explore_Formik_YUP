
import {useFormik} from "formik"
const MangeState = () => {
    const formik = useFormik({
        initialValues:{
            name:"", 
            email:"", 
            password:""
        }, 
        onSubmit:(values)=>{console.log("values", values)}
    })

  return (
<>
    <form onSubmit={formik.handleSubmit}>

<label htmlFor="name">Name</label>
<input type="text" id='name'  placeholder='john' value={formik.values.name} onChange={formik.handleChange}/>
<br />

<label htmlFor="email">Email</label>
<input type="email" id="email"  placeholder="dc@gmail.com" value={formik.values.email} onChange={formik.handleChange}/>
<br />

<label htmlFor="password">Password</label>
<input type="password" id="password"  placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange}/>
<br />
<button type='submit'>Submit</button>




    </form>



</>

)
}

export default MangeState