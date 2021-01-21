import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

//import styles

import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  //Form Submission handler
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const [signupMode, setSignupMode] = useState(false);

  const handleSignup = () => {
    setSignupMode((prev) => !prev);
    console.log(signupMode);
  };

  return (
    <React.Fragment>
      <Card className="login-Card">
        <div className="login-title">
          <h2>Accede a tu cuenta</h2>
        </div>
        <form autocomplete="off">
          {signupMode && (
            <Input
              element="input"
              type="text"
              id="fullName"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Ingrese su nombre completo"
              onInput={inputHandler}
              label="Nombre y apellidos"
            />
          )}

          <Input
            element="input"
            type="text"
            id="email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Ingrese un correo electronico valido"
            onInput={inputHandler}
            label="Email"
          />

          <Input
            element="input"
            type="password"
            id="password"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Debe digitar su contrasena"
            onInput={inputHandler}
            label="Contrasena"
          />

          {signupMode && (
            <Input
              element="input"
              type="password"
              id="passwordConfirmation"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Debe repetir su contrasena"
              onInput={inputHandler}
              label="Repetir Contrasena"
            />
          )}

          {!signupMode && (
            <Button
              type="submit"
              onClick={submitHandler}
              disabled={!formState.isValid}
            >
              Acceder
            </Button>
          )}
          {signupMode && (
            <Button onClick={submitHandler} disabled={!formState.isValid}>
              Registrarme
            </Button>
          )}
        </form>
        {signupMode === false ? (
          <p>
            no tengo usuario? <Link onClick={handleSignup}>Registrarme</Link>
          </p>
        ) : (
          <p>
            Ya tengo un usuario! <Link onClick={handleSignup}>Acceder</Link>
          </p>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Auth;
