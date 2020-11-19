import React, { Component } from "react";

class CarItem extends Component {
  division_text = ["구분1", "구분2", "구분3", "구분4"];
  render() {
    const { index, car, handleDivClick, updateItem } = this.props;
    return (
      <tr onClick={() => {}}>
        <td>{index + 1}</td>
        <td
          className="division"
          onClick={() => {
            handleDivClick(car.id);
          }}
        >
          {this.division_text[car.division]}
        </td>
        <td>{car.start_date_time}</td>
        <td>{car.end_date_time}</td>
        <td>{car.distance}</td>
        <td>{car.cost}</td>
        <td>{car.place}</td>
      </tr>
    );
  }
}

export default CarItem;
