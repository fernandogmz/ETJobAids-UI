import React, { Component } from "react"

const SelectOp = (props) => {
    const myArray = props.ops
    return (
        <select name={props.name} className={props.clss}>
            {myArray.map((value, index) => {
                return <option key={index} value={value}>{value}</option>
            })}
        </select>
    )
}
export default SelectOp;