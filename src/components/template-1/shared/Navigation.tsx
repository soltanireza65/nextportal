import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "reduxStore/store";

const Navigation = () => {
  const categoryList = useSelector(
    (store: AppState) => store.categories.entities
  ).slice(0, 7);

  return (
    <Navbar variant="dark" expand="md" className="p-0">
      <Navbar.Toggle aria-controls="navbar-nav" className={styles.toggler} />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="">
          {categoryList &&
            categoryList.map((item: any, i: number) => (
              <li key={i} className="nav-item">
                <Link href={`/service/${item.categoryCode}/${item.title}`}>
                  <a className="nav-link">{item.title}</a>
                </Link>
              </li>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
