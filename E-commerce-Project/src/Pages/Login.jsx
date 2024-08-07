import { useFormik } from "formik";
import basicSchema from "../schemas/index-login";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import { RedirectContext } from "../contexts/RedirectContext";

const Login = () => {
  const { loginDetails, setLoginDetails } = useContext(LoginContext);
  const { redirectPath, setRedirectPath } = useContext(RedirectContext);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoginDetails([values]);
    actions.resetForm();
    setRedirectPath("/");
    navigate(redirectPath);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} autoComplete="off">
        <p className="heading">Login</p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email ? "input-error" : "input-login"
          }
        />
        {errors.email && touched.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.password && touched.password ? "input-error" : "input-login"
          }
        />
        {errors.password && touched.password && (
          <p className="errors">{errors.password}</p>
        )}

        <button type="submit" disabled={isSubmitting} className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
