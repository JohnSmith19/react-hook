import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("reducer action", action);
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>Name:</b> {name}
        </div>
        <div>
          <b>Nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
