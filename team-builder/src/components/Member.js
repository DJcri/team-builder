import React from "react";

const Member = (props) => {
  const { username, email, role } = props.member;
  return (
    <div className="member">
      <p className="name">Username: {username}</p>
      <p className="email">Email: {email}</p>
      <p className="role">Role :{role}</p>
    </div>
  );
};

export default Member;
