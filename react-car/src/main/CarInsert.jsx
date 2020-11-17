import React, { Component } from "react";
import "../css/CarInsert.css";
class CarInsert extends Component {
  state = {
    start_date_time: "",
    end_date_time: "",
    distance: "",
    cost: "",
    place: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveLocal = () => {
    const { carInsert } = this.props;
    carInsert(this.state);
  };

  render() {
    return (
      <form className="car-insert">
        <input
          name="start_date_time"
          onChange={this.handleOnChange}
          placeholder="시작일시"
        />
        <input
          name="end_date_time"
          onChange={this.handleOnChange}
          placeholder="종료일시"
        />
        <input
          name="distance"
          onChange={this.handleOnChange}
          placeholder="현재거리"
        />
        <input
          name="cost"
          onChange={this.handleOnChange}
          placeholder="소요비용"
        />
        <input name="place" onChange={this.handleOnChange} placeholder="장소" />
        <button className="btn-save" type="button" onClick={this.saveLocal}>
          저장
        </button>
      </form>
    );
  }
}

export default CarInsert;
