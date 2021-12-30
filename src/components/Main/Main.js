import React, { useEffect, useState } from "react";
import MainStyleComponent from "./MainStyleComponent";
import Row from "../Row/Row";
import { Table } from "react-bootstrap";
import { Select } from "../Select/Select";
import { NextButton } from "../Button/NextButton";
import { BackButton } from "../Button/BackButton";

export const Main = () => {
  const datas = require("../../users.json");
  const [sorting, setSorting] = useState(datas);
  const [page, setPage] = useState(1);

  const getDataResult = (dataArr, pageNum) => {
    const startPoint = (pageNum - 1) * 10;
    const endPoint = pageNum * 10;
    const newArr = dataArr.slice(startPoint, endPoint);
    return { startPoint, endPoint, newArr };
  };

  useEffect(() => {
    const { newArr } = getDataResult(datas, page);
    setSorting(newArr);
  }, [datas, page]);

  const sortHandler = (value, type) => {
    let sortFn;

    if (type === "string") {
      sortFn = (obj1, obj2) => {
        return ("" + obj1[value]).localeCompare(obj2[value]);
      };
    }

    if (type === "number") {
      sortFn = (obj1, obj2) => {
        return obj1[value] - obj2[value];
      };
    }

    datas.sort(sortFn);
    const newDatas = [...datas];
    const { newArr: dataPerPage } = getDataResult(newDatas, page);
    setSorting(dataPerPage);
  };

  const goToNextPage = () => {
    const { endPoint } = getDataResult(datas, page);
    if (endPoint >= datas.length) return;
    setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  return (
    <MainStyleComponent>
      <h1>DATA TABLE</h1>
      <Select onSort={sortHandler}></Select>
      <Table>
        <thead>
          <tr>
            <th className="w5">Id</th>
            <th className="w15">First Name</th>
            <th className="w15">Last Name</th>
            <th className="w20">Email</th>
            <th className="w5">Gender</th>
            <th className="w10">Birthday</th>
            <th className="w10">Salary</th>
            <th className="w15">Phone</th>
          </tr>
        </thead>
        <tbody>
          {sorting.map((data) => {
            return <Row key={data.id} data={data}></Row>;
          })}
        </tbody>
      </Table>
      <BackButton onPrev={goToPrevPage}></BackButton>
      <NextButton onNext={goToNextPage}></NextButton>
    </MainStyleComponent>
  );
};

export default Main;
