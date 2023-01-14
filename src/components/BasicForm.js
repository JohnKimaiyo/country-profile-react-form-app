import { useFormik } from "formik";
import { basicSchema } from "../schema/index";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      capital: "",
      largestcity: "",
      NationalLanguage: "",
      EthnicGroups: "",
      population: "",
      GDP: "",
      currency: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {/*select country*/}
      <label htmlFor="country">country</label>
      <input
        value={values.country}
        onChange={handleChange}
        id="country"
        type="counrty"
        placeholder="Enter your counrty"
        onBlur={handleBlur}
        className={errors.country && touched.country ? "input-error" : ""}
      />
      {errors.country && touched.country && (
        <p className="error">{errors.country}</p>
      )}

      {/*input capital city*/}
      <label htmlFor="capital ">Capital city</label>
      <input
        id="capital "
        type="capital"
        placeholder="Enter the capital"
        value={values.capitalcity}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.capital && touched.capital ? "input-error" : ""}
      />
      {errors.capital && touched.capital && (
        <p className="error">{errors.capital}</p>
      )}

      {/*largest city*/}
      <label htmlFor="city">Lagest City</label>
      <input
        id="city"
        type="city"
        placeholder="Enter your city"
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.city && touched.city ? "input-error" : ""}
      />
      {errors.city && touched.city && <p className="error">{errors.city}</p>}

      {/*national language*/}
      <label htmlFor="english">National Language</label>
      <input
        id="english"
        type="english"
        placeholder="Enter national langauage"
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.city && touched.city ? "input-error" : ""}
      />
      {errors.city && touched.city && <p className="error">{errors.city}</p>}

      {/*ethnic groups*/}
      <label for="ethnic groups">Select ethnic groups:</label>
      <select name="ethnic groups" id="ethnic-groups">
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="Asian">Asian</option>
        <option value="Latino">Latino</option>
      </select>

      {/*population */}
      <label htmlFor="population">Total Population</label>
      <input
        id="population"
        type="number"
        placeholder="Enter total population"
        value={values.population}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.population && touched.population ? "input-error" : ""}
      />
      {errors.population && touched.population && (
        <p className="error">{errors.population}</p>
      )}
      {/*GDP */}
      <label htmlFor="GDP">Total GDP</label>
      <input
        id="GDP"
        type="number"
        placeholder="Enter total GDP"
        value={values.GDP}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.GDP && touched.GDP ? "input-error" : ""}
      />
      {errors.GDP && touched.GDP && (
        <p className="error">{errors.population}</p>
      )}
      {/*Currency */}
      <label htmlFor="currency">Currency</label>
      <input
        id="currency"
        type="currency"
        placeholder="Enter currncy"
        value={values.currency}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.currency && touched.currency ? "input-error" : ""}
      />
      {errors.currency && touched.curremcy && (
        <p className="error">{errors.currency}</p>
      )}
      {/*enter password*/}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      {/*confirm password*/}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default BasicForm;
