import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 0;
  state = {
    carList: [
      {
        id: this.id,
        division: 0,
        start_date_time: "2020-11-06 14:00",
        end_date_time: "2020-11-17 14:00",
        distance: "150,000",
        cost: "50,000",
        place: "한국경영원",
      },
    ],
  };

  componentDidMount() {
    const loadCarList = localStorage.getItem("carList");
    if (loadCarList) {
      const jsonCarList = JSON.parse(loadCarList);
      this.setState({ carList: jsonCarList });
      this.id = jsonCarList.length;
    }
  }

  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.carList);
    const thisString = JSON.stringify(this.state.carList);
    if (preString !== thisString) {
      localStorage.setItem("carList", thisString);
    }
  }

  carInsert = (obj) => {
    const item = {
      id: ++this.id,
      division: 0,
      start_date_time: obj.start_date_time,
      end_date_time: obj.end_date_time,
      distance: obj.distance,
      cost: obj.cost,
      place: obj.place,
    };

    this.setState({ carList: [...this.state.carList, item] });
  };

  handleDivClick = (id) => {
    const selectDivision = this.state.carList.map((item) => {
      if (item.id === Number(id)) {
        // 구분란의 내용을 결정하는 변수
        const division = (item.division + 1) % 4;
        return {
          ...item,
          division: division,
        };
      } else {
        return item;
      }
    });
    this.setState({ carList: selectDivision });
  };

  updateItem = (id) => {};

  render() {
    const { carList } = this.state;
    const { carInsert, handleDivClick, updateItem } = this;
    return (
      <div>
        <CarInsert carInsert={carInsert} />
        <CarList
          carList={carList}
          handleDivClick={handleDivClick}
          updateItem={updateItem}
        />
      </div>
    );
  }
}

export default CarMain;
