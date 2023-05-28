import React from 'react'

import "../assets/style/CenterDiv.css"

function CenterDiv(props) {
  return (
    <div className="center-div" style={{ background: props.bgcolor, borderTopRightRadius: props.rigthRadius }}>{props.children}</div>
  )
}

export default CenterDiv