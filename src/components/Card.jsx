import '../assets/css/cardStyle.css'

const Card = ({title, detail, image, color}) => {
    const colorStyle = {
        borderTop: '4px solid '+ color +' '
    }
    
    return(
        <div className="card" style={colorStyle}>
            <h3>{title}</h3>
            <p>{detail}</p>
            <div className="image">
                <img src={image}/>
            </div>
        </div>
    )
}

export default Card;