import React from 'react'

import classnames from './Toolbar.module.scss'

export default function Toolbar(props) {
    const { toolBarState } = props
    console.log(toolBarState)
    const value = {
        width: `${toolBarState}%`,
        display: 'block',
    }
    if (toolBarState === 100) {
        value.display = 'none'
    }
    return (
        <div className={classnames.toolBar} style={value}>Toolbarrrrr</div>
    )
}
