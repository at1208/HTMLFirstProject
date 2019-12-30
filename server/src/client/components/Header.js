import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from 'antd'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav style={{ backgroundColor: "#5c6bc0"}}>
      <div className="nav-wrapper " >
        <Link to="/" className="" style={{ fontFamily: "monospace"}}>
        <span style={{ fontSize:"30px", marginLeft: "10px"}}>Crontab</span>
        </Link>
        <ul className="right">
        <li>
          <Link to="/most/mostSearch">Imp Conversion</Link>
        </li>
          <li>
          <Link to="/us/users">All</Link>
          </li>



        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
