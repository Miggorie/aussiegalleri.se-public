import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../actions/actions";
import { FaBars } from "react-icons/fa";

const HamMenu = () => {
  const menuOpen = useSelector((state) => state.navbar.menuOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleMenu())}>
        <FaBars />
      </button>
      {menuOpen && (
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="./pages/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default HamMenu;
