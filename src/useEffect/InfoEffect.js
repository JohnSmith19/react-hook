import React, { useState, useEffect } from "react";

const InfoEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  // useEffect: react component가 render 될때마다 특정 작업을 수행하도록 설정한다.
  // cpdm & cpdu
  useEffect(() => {
    console.log("rendering complete!!");
    console.log({ name, nickname });
  });

  // cpdm
  useEffect(() => {
    console.log("component mount");
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoEffect;
