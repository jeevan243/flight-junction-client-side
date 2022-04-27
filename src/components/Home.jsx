import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:5000/flights").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <div>
        <h2>Home</h2>
        <table>
          <thead>
            <tr>
              <th>AirPort</th>
              <th>From Where</th>
              <th>To Where</th>
              <th>Source Id</th>
              <th>Destination Id</th>
              <th>Start Time</th>
              <th>End time</th>
              <th>Price</th>
              <th>Capacity</th>
              <th>VIA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.start}</td>
                    <td>{e.end}</td>
                    <td>{e.start_id}</td>
                    <td>{e.end_id}</td>
                    <td>{e.start_time}</td>
                    <td>{e.end_time}</td>
                    <td>{e.cost}</td>
                    <td>{e.capacity}</td>
                    <td>{e.VIA}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// PNR: "8547947895"
// VIA: "none"
// capacity: 35
// cost: "3999"
// createdAt: "2022-04-27T17:56:05.409Z"
// end: "Mumbai"
// end_id: "mumb001"
// end_time: "10.30 AM"
// name: "IGIA"
// start: "Delhi"
// start_id: "delhi001"
// start_time: "08.30 AM"
// updatedAt: "2022-04-27T17:56:05.409Z"
// _id: "626983b534380745cf4f6731"
