

const Sliders = ({
    value,
    setValue,
}) => { 
    return (
        <div>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>

    )
}

export default Sliders;