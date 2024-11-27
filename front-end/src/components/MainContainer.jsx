import React from 'react'

function MainContainer({children}) {
    return (<div style={{display: "flex", height: "100vh", width: "100vw"}}>
        {children}
    </div>)
}

export default MainContainer;