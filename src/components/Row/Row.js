import React from "react";
import RowStyleComponent from "./RowStyleComponent";

const Row = ({ data }) => {
  const dateConverting = (dateData) => {
    const dateConverted = new Date(dateData);
    let date = dateConverted.getDate().toString();
    let month = (dateConverted.getMonth() + 1).toString();
    let year = dateConverted.getFullYear().toString();

    if (date.length < 2) {
      date = "0" + date;
    }

    if (month.length < 2) {
      month = "0" + month;
    }

    return {
      date,
      month,
      year,
    };
  };

  const phoneConverted = (phoneNumber) => {
    const newPhone = phoneNumber.replaceAll("-", "");
    return "(+84)" + newPhone;
  };

  const birthday = dateConverting(data.birthday);
  const phone = phoneConverted(data.phone);

  return (
    <RowStyleComponent>
      <td className="w5">{data.id}</td>
      <td className="w15">{data.firstName}</td>
      <td className="w15">{data.lastName}</td>
      <td className="w20">{data.email}</td>
      <td className="w5">{data.gender}</td>
      <td className="w10">{`${birthday.date}/${birthday.month}/${birthday.year}`}</td>
      <td className="w10">{data.salary}</td>
      <td className="w15">{phone}</td>
    </RowStyleComponent>
  );
};

export default Row;
