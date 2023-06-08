
function Card(props){
    return(
        <div className="card">
            <p>{props.word}</p>
            <p>{props.pronunciation}</p>
            <p>{props.translation}</p>
            <p>{props.theme}</p>
        </div>
    )
}


export default Card;