import '../App.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--pic"/>
            <div className="desc--container">
                <p className="desc--location"><span className="icon--location"><i className="fa-solid fa-location-dot"></i></span>{props.location.toUpperCase()}<span className="location--link"><a href={props.google_map} target="_blank">View on Google Maps</a></span></p>
                <h1 className="desc--title">{props.title}</h1>
                <p className="desc--duration">{props.duration}</p>
                <p className="desc--text">{props.description}</p>
            </div>
        </div>
    )
}