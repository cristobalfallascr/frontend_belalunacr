import React from "react";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

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

  return (
    <React.Fragment>
      <Card>
        <h2>Accede a tu cuenta</h2>

        <Input
          element="input"
          type="text"
          id="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please use a valid email address"
          onInput={inputHandler}
          label="Email"
        />

        <Input
          element="input"
          type="password"
          id="password"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your password"
          onInput={inputHandler}
          label="Contrasena"
        />
        <Button
          type="submit"
          onClick={submitHandler}
          disabled={!formState.isValid}
        >
          Acceder
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
