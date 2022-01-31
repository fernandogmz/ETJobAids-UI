import React, { Component } from "react"

const RadioButton = (props) => {
  const myArray = props.lbl
    return (
        <label name={props.name}>
          <input type="radio" name="radio" />
            {myArray.map((value, index) => {
                return <span key={index}>{value}</span>
            })}
        </label>
    )
}
export default RadioButton;