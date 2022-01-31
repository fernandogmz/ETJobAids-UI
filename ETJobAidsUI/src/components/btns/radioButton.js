import React, { Component } from "react"

const RadioButton = (props) => {
    return (
        <label name={props.name}>
          <input type={props.name} name={props.name} />
          <span>{props.lbl}</span>
        </label>
    )
}
export default RadioButton;