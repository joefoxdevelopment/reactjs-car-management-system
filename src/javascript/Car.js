import React from 'react';
import CarApiClient from './CarApiClient';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            image: props.image
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});

        const carApiClient = new CarApiClient();

        // ideally with ajax, this shows a spinner while waiting for network
        // requests to complete + responses to be handled
        // ideally we'd use promises too to handle the results
        carApiClient.saveCar(this.state);
    }

    render() {
        return <div>
            <div>
                <h2>{this.state.name} - { this.state.description }</h2>
                <p>Image: <a href={ this.state.image }>{ this.state.image }</a></p>
            </div>
            <div>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={ this.state.name }
                            onChange={ this.handleChange }
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={ this.state.description }
                            onChange={ this.handleChange }
                        />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="image"
                            value={ this.state.image }
                            onChange={ this.handleChange }
                        />
                    </label>
                </form>
            </div>
            <hr></hr>
        </div>;
    }
}

export default Car;
