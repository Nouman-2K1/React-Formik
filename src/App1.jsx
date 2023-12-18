import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { object, string } from "yup";
import { FormikProvider, useFormik, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
let userSchema = object({
  name: string().required(),
  email: string().email(),
});

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(
    "Hey we jus12323t created our 1st react app"
  );
  const [name, setName] = useState("Ali");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => console.log("This is formik form data", values),
    validationSchema: userSchema,
  });

  const { errors, touched, values, resetForm, setValues } = formik;
  useEffect(() => console.log(errors), [errors]);
  return (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Field name='name' />
          {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
          <ErrorMessage name='name' />
          <Field name='email' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <button type='submit'>submit</button>
        </form>
      </FormikProvider>
    </>
  );
}

export default App;
