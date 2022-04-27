import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div  style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Home
        </Link>

        <Link to={"/search"} style={{ textDecoration: "none" }}>
          Search
        </Link>
      </div>
      <hr />
    </>
  );
};
