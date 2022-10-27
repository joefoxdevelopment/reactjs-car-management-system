import React from 'react';
import CarApiClient from './CarApiClient';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: true,
            id: props.id,
            name: props.name,
            description: props.description,
            image: props.image
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if ('delete' === event.target.name) {
            this.deleteCar();
            return;
        }

        this.setState({...this.state, [event.target.name]: event.target.value});

        const carApiClient = new CarApiClient();

        // ideally with ajax, his shows a spinner while waiting for network
        // requests to complete + responses to be handled
        // ideally we'd use promises too to handle the results
        carApiClient.saveCar(this.state);
    }

    deleteCar() {
        const carApiClient = new CarApiClient();

        carApiClient.deleteCar(this.state.id);

        // eslint-disable-next-line
        this.setState({...this.state, ['display']: false});
    }

    render() {
        if (!this.state.display) {
            return;
        }

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
                    <label>
                        <input
                            type="button"
                            name="delete"
                            onClick={ this.handleChange }
                            value={ "Delete " + this.state.name + " - " + this.state.description }
                        />
                    </label>
                </form>
            </div>
            <hr></hr>
        </div>;
    }
}

export default Car;
