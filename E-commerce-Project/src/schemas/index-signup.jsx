import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

const pakistaniPhoneNumberRules = /^(03[0-9]{2}-[0-9]{7})?$/;
// Pakistani contact number format: 03XX-XXXXXXX

const basicSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "Please create a stronger password")
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password"),
  contactNumber: yup
    .string()
    .matches(
      pakistaniPhoneNumberRules,
      "Please enter valid contact number in format 03XX-XXXXXXX"
    )
    .nullable(),
});

export default basicSchema;
