import { useCallback, useReducer } from "react";

//this from receives state and an action, then it needs to return new state
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        console.log(state.inputs[inputId]);
        if(!state.inputs[inputId]){
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

//custom hooks always start with lower case use
export const useForm = (initialInputs, initialFormValidity) => {
  //dispatch is equivalent to "setState in useState"
  const [formState, dispatch] = useReducer(
    formReducer,
    // Pass initial state
    {
      inputs: initialInputs,
      isValid: initialFormValidity,
    }
  );

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    [
      //no dependencies
    ]
  );

  const setFormData = useCallback(
    (inputData, formValidity) => {
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    [
      //no dependencies
    ]
  );
  //then, the useForm custom hook will return the below:
  return [formState, inputHandler, setFormData];
};
