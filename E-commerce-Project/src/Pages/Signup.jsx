import { useFormik } from "formik";
import basicSchema from "../schemas/index-signup";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const signUp = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/login");
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
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="signupContainer">
      <p className="heading">SignUp</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : "input"}
        />
        {errors.name && touched.name && <p className="errors">{errors.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : "input"}
        />
        {errors.email && touched.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          id="contactNumber"
          type="text"
          placeholder="Enter your Contact Number in format 03XX-XXXXXXX"
          value={values.contactNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.contactNumber && touched.contactNumber
              ? "input-error"
              : "input"
          }
        />
        {errors.contactNumber && touched.contactNumber && (
          <p className="errors">{errors.contactNumber}</p>
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
            errors.password && touched.password ? "input-error" : "input"
          }
        />
        {errors.password && touched.password && (
          <p className="errors">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword"> Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : "input"
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="errors">{errors.confirmPassword}</p>
        )}
        <button type="submit" disabled={isSubmitting} className="btn">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default signUp;
