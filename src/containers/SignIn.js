import { Formik, Form, Field, ErrorMessage } from "formik";
import useAuthState from "../State/AuthState";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

function SignIn() {
  const { handeSignIn } = useAuthState();
  const history = useHistory();
  return (
    <div className="container-fluid" style={{ height: 600 }}>
      <div className="row d-flex">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0">
            <div className="col-3 d-flex  justify-content-center align-items-center pt-4 w-100">
              <h1 style={{ userSelect: "none" }}>FIRSTLY APPARELS</h1>
            </div>

            <div
              className="col-9 d-flex flex-column  justify-content-center"
              style={{ height: 500 }}
            >
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};

                  if (!values.password) {
                    errors.password = "Password is Required";
                  }
                  if (!values.email) {
                    errors.email = "Email is Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  // handle sign in
                  const result = await handeSignIn(
                    values.email,
                    values.password
                  );
                  if (result) {
                    // successfully signed in
                    // go to home page
                    history.replace("/");
                  } else {
                    alert("Can't Sign in with given credentials");
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Email
                        </span>
                      </div>
                      <Field
                        type="email"
                        name="email"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <ErrorMessage name="email" component="div" />
                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Password
                        </span>
                      </div>
                      <Field
                        type="password"
                        name="password"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <ErrorMessage name="password" component="div" />
                    <div class="input-group input-group-sm mb-3 mt-3">
                      <button
                        className="btn btn-secondary w-100 p-2"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default SignIn;
