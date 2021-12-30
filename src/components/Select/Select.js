import React from "react";

const typeMap = {
  id: "number",
  firstName: "string",
  lastName: "string",
  email: "string",
  birthday: "string",
  salary: "number",
};

export const Select = ({ onSort }) => {
  return (
    <select
      onChange={(event) => {
        onSort(event.target.value, typeMap[event.target.value]);
      }}
    >
      <option>Select field to sort</option>
      <option value="id">Id</option>
      <option value="firstName">First Name</option>
      <option value="lastName">Last Name</option>
      <option value="email">Email</option>
      <option value="birthday">Birthday</option>
      <option value="salary">Salary</option>
    </select>
  );
};
