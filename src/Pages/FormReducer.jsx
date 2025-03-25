import React, { useReducer } from "react";

const FormReducer = () => {
  const initialState = { name: "", email: "" };
  const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
      case "add":
        return { ...state, [action.field]: action.value };
      case "reset":
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-3 p-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "reset" });
        }}
      >
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            onChange={(e) =>
              dispatch({ type: "add", value: e.target.value, field: "name" })
            }
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) =>
              dispatch({ type: "add", value: e.target.value, field: "email" })
            }
            placeholder="Enter email"
            name="email"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormReducer;
