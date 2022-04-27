import axios from "axios";
import { useState } from "react";

export const Search = () => {
  const [data, setdata] = useState([]);

  const [fromdata, setfromData] = useState("-");
  const [wheredata, setwhereData] = useState("-");
  const handleChangefrom = (e) => {
    let from = e.target.value;
    setfromData(from);
  };

  const handleChangewhere = (e) => {
    let where = e.target.value;
    setwhereData(where);
  };

  const getData = () => {
    axios
      .get(`http://localhost:5000/flights/${fromdata}/${wheredata}`)
      .then((res) => {
        if (res) {
          setdata(res.data);
        } else {
          throw alert("Sorry, There are currently no flights available");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div>
        <select id="fromid" onChange={handleChangefrom}>
          <option>From</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Hyderabad</option>
        </select>{" "}
        <select id="whereid" onChange={handleChangewhere}>
          <option>Where</option>
          <option>Mumbai</option>
          <option>Hyderabad</option>
          <option>Delhi</option>
          <option>Bangalore</option>
        </select>{" "}
        <button onClick={getData}>Check</button>
      </div>

      <br />
      {data ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </>
  );
};

// .catch((er) => {
//   alert("There are currently no flights available");
//   console.log(er)
// });
