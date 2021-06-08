import React, { useState } from "react";
import data from "../JSON/people.json";
import "./Page_One.css";
import { Table } from "react-bootstrap";
import Slider from "react-rangeslider";

// import RangePicker from "react-range-picker";

function Page_One(props) {
  var [money, setMoney] = useState(1000);

  var handleChange = (range_value) => {
    setMoney(range_value);
  };

  var renderTableData = () => {
    return data.map((people) => {
      var value = people.balance.replace("$", "");
      var bal_value = parseFloat(value.replace(",", ""));
      if (bal_value <= money) {
        return (
          <tr key={people._id}>
            {/* <td>{_id}</td> */}
            <td>{people.name}</td>
            <td>{people.phone}</td>
            <td>{people.email}</td>
            <td>{people.balance}</td>
            <td>{people.isActive.toString()}</td>
          </tr>
        );
      }
    });
  };
  return (
    <div className="page_one">
      <div className="dropDown">
        <div className="slider_label">
          <div className="slider_label_low">Low 0</div>
          <div className="slider_label_high">High {money}</div>
        </div>
        <Slider
          min={1000}
          max={4000}
          step={100}
          value={money}
          orientation="horizontal"
          onChange={handleChange}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Balance</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </div>
  );
}

export default Page_One;
