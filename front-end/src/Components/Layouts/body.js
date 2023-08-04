import React, { Fragment } from "react";
import classes from "./body.module.css";

const Body = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <p className={classes.text}>Welcome To The Era Of AI </p>
      </div>
    </Fragment>
  );
};

export default Body;
