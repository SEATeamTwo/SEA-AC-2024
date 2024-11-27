export default function Button({title, arr}) {


  function handleSubmit() {
    fetch(`http://localhost:5000/getMovieRecs/${arr}`, {  // Enter your IP address here
      method: 'POST', 
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }
  
  return (
    <button onClick={handleSubmit}>
      {title}
    </button>
  )
}