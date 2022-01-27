import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "../index.css";
import { Button, Dropdown } from "react-bootstrap";
import { render } from "@testing-library/react";
// images
import andrew from "../media/Andrew.jpg";
import brenna from "../media/Brenna.jpg";
import catherine from "../media/Catherine.jpg";
import maggie from "../media/Maggie.jpg";
import mindy from "../media/Mindy.jpg";
import rachel from "../media/Rachel.jpg";
import bookshelf from "../media/Bookshelf.jpg";

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Andrew Smith</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Brenna Yovanoff</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Catherine Fisher</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Maggie Stiefvater</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Mindy McGinnis</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Rachel Lynn Solomon</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
