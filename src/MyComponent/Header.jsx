import React from 'react';
import "./header.css";

export default function Header(){
  return(
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid row">
        <div className="col-7 amalogo">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" width="100%" height="30" className="d-inline-block align-top" alt=""></img>
          </a>
        </div>
        <div className="col-5 amalink">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="#albumm">Products</a>
            <a className="nav-link" href="/admin">Admin</a>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}
