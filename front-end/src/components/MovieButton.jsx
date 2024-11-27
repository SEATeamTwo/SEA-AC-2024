export default function MovieButton({movieId, title, imgUrl, vidUrl}) {
    return (
        <div style={{display: "flex", flexDirection: "column", border: "2px solid red"}}>
            <p>{title}</p>
            <img src={imgUrl} />
            <a href={vidUrl}>Play Video</a>
        </div>
    )
}