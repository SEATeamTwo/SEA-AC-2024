export default function MainContainer({children}) {
    return (<div style={{display: "flex", height: "100%", width: "100%", flexDirection: "column"}}>
        {children}
    </div>)
}