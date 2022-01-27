import React, { Component } from "react"

export default function Btn(props) {
    return (
        <div className="btn slide_in_blurred_left">
            {props.text_btn}
        </div>
    )
}