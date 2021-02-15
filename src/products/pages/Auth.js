import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

//import styles

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setisLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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

  // This function handles the signup mode, either login mode or sigunp mode
  const handleSignup = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          firstName: undefined,
          lastName: undefined,
          passwordConfirmation: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          firstName: {
            value: "",
            isValid: false,
          },
          lastName: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setisLoginMode((prev) => !prev);
    
  };

  //Form Submission handler
  const submitHandler = async (event) => {
    event.preventDefault();
  

    if (isLoginMode) {
    } else {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formState.inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            passwordConfirmation: formState.inputs.passwordConfirmation.value,
            role: "default",
          }),
        });
        const responseData = await response.json();
        console.log(responseData);
        setIsLoading(false);
        auth.login();
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setError(err.message || "Algo malio Sal!");
      }
    }
  };

  return (
    <React.Fragment>
      <Card className="login-Card">
        <div className="login-title">
          <h2>Accede a tu cuenta</h2>
        </div>
        <form autocomplete="off">
          {!isLoginMode && (
            <React.Fragment>
              <Input
                element="input"
                type="text"
                id="firstName"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Ingrese su nombre completo"
                onInput={inputHandler}
                label="Nombre"
              />

              <Input
                element="input"
                type="text"
                id="lastName"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Ingrese sus apellidos"
                onInput={inputHandler}
                label="Apellidos"
              />
            </React.Fragment>
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

          {!isLoginMode && (
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

          {isLoginMode && (
            <Button
              type="submit"
              onClick={submitHandler}
              disabled={!formState.isValid}
            >
              Acceder
            </Button>
          )}
          {!isLoginMode && (
            <Button onClick={submitHandler} disabled={!formState.isValid}>
              Registrarme
            </Button>
          )}
        </form>
        {isLoginMode === true ? (
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
