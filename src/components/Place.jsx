function Place(props) {

    const image = props.image;
    const desc = props.desc;
    const location = props.location;
    const date = props.date;
    
    return (
        <div>
            <img className="w-80 h-80 rounded-md" src={image} alt="" />
            <strong className="font-semibold">{desc}</strong>
            <p className="text-gray-500">{location}</p>
            <p className="text-gray-500">{date}</p>
        </div>
    )
}

export default Place;