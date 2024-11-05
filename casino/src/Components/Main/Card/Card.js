import "./card.scss"
function Card({title, src}) {
    return (
        <div className="card col-md-4 my-3">
            <img className="card-image w-100 h-100" src={src}/>
        </div>
    )
}

export default Card;
