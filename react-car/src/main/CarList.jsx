import React, { Component } from "react";
import "../css/CarList.css";
import CarItem from "./CarItem";

class CarList extends Component {
  render() {
    const { carList, handleDivClick } = this.props;
    const carItemList = carList.map((item, index) => {
      return (
        <CarItem
          key={item.id}
          index={index}
          car={item}
          handleDivClick={handleDivClick}
        />
      );
    });
    return (
      <table className="car-list">
        <thead>
          <tr>
            <th>No.</th>
            <th>구분</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>현재거리</th>
            <th>소요비용</th>
            <th>장소</th>
          </tr>
        </thead>
        <tbody>{carItemList}</tbody>
      </table>
    );
  }
}

export default CarList;
