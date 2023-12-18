import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { object, string } from "yup";
import { FormikProvider, useFormik, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
function App() {
  let userSchema = object({
    name: string().required(),
    email: string().email().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      return console.log("This is formik form data", values);
    },
    validationSchema: userSchema,
  });
  const [count, setCount] = useState(0);
  const { errors, touched, values, resetForm, setValues } = formik;
  return (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Field name="name" />
          <ErrorMessage name="name" />
          <Field name="email" />
          <ErrorMessage name="email" />
          <button type="submit"> Submit</button>
        </form>
      </FormikProvider>
    </>
  );
}
export default App;
