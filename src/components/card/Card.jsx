import "./card.css"

function Cards(props) {
    return(
        <div className="card align-items-center" >
            <h6 className="card-title">{props.title}</h6>
            <img className="card-img-top img-fluid" src={props.img} alt=""/>
        </div>
    )
}
export default Cards