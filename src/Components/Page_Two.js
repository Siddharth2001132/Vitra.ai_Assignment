import React from "react";
import { Table } from "react-bootstrap";
import data from "../JSON/people.json";
import "./Page_Two.css";

function Page_Two(props) {
  var renderTableData = () => {
    return data.map((people) => {
      var value = people.balance.replace("$", "");
      var bal_value = parseFloat(value.replace(",", ""));
      if ((bal_value <= 2000) & (people.isActive === false)) {
        return (
          <tr key={people._id}>
            {/* <td>{id}</td> */}
            <td className="people_name">{people.name}</td>
            <td>
              {people.friends.map((friend) => {
                return (
                  <ul key={friend.id}>
                    <li>{friend.name}</li>
                  </ul>
                );
              })}
            </td>
          </tr>
        );
        // return people.friends.map((friend) => {
        //   console.log(friend.name);
        //   return (

        //   );
        // });
      }
    });
  };

  return (
    <div className="page_two">
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>People Name</th>
            <th>Friends Name</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </div>
  );
}

export default Page_Two;
