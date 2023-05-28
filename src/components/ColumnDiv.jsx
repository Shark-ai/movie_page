import React from 'react'

import "../assets/style/ColumnDiv.css";

function ColumnDiv(props) {
  return (
    <div className="column-div" style={{alignItems: props.align}}>{props.children}</div>
  )
}

export default ColumnDiv