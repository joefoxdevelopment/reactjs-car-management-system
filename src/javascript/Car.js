function Car(props) {
    console.log(props);
    return <div>
        <div><h2>{props.name}</h2></div>
        <div>
            { props.description }
            { props.image }
        </div>
    </div>;
}

export default Car;
