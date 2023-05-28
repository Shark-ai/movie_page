import React from 'react'

import "../assets/style/VhContainer.css"

function VhContainer(props) {
  return (
    <div className="vh-container" style={{ flexDirection: props.direction, background: props.bg }}>{props.children}</div>
  )
}

export default VhContainer