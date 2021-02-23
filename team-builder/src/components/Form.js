import React from "react";

const Form = (props) => {
  const { formValues, onChange, onSubmit } = props;
  const { username, email, role } = formValues;

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        type="text"
        name="username"
        value={username}
        placeholder="enter username"
        onChange={onChange}
      />
      <input
        required
        type="email"
        name="email"
        value={email}
        placeholder="name@email.com"
        onChange={onChange}
      />
      <select value={role} required name="role" onChange={onChange}>
        <option value="">--Select a role--</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Fullstack Developer</option>
        <option>UI/UX Designer</option>
      </select>
      <button>submit</button>
    </form>
  );
};

export default Form;
