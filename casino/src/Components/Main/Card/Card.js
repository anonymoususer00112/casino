import "./card.scss"
function Card({title, src}) {
    return (
        <div className="card col-md-4 my-3">
            <img className="card-image w-100 h-100" src={src||"https://i.scdn.co/image/ab67616d0000b273d2a830013171dabfc40f3b7c"}/>
        </div>
    )
}

export default Card;
