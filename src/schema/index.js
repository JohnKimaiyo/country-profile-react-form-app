import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  country: yup
    .string()
    .country("Please enter a valid country")
    .required("Required"),
  capital: yup
    .string()
    .capital("Please enter the capital city")
    .required("Required"),
  city: yup.string().city("Please enter the city").required("Required"),
  langauge: yup.string().langauge("Please enter langauge").required("Required"),
  population: yup.number().positive().integer().required("Required"),
  GDP: yup.number().positive().integer().required("Required"),
  currency: yup.number().positive.apply().interger().required("required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
