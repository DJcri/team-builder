import React, { useState } from "react";

import Form from "./components/Form";
import Member from "./components/Member";

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

const App = () => {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    const newMember = { ...formValues };
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
    e.preventDefault();
  };

  return (
    <div className="app">
      <Form
        members={members}
        formValues={formValues}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {members.map((member, i) => {
        return <Member key={i} member={member} />;
      })}
    </div>
  );
};

export default App;
