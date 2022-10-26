import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            image: props.image
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    render() {
        return <div>
            <div><h2>{this.state.name}</h2> - { this.state.description }</div>
            <div>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={ this.state.name }
                            onChange={ this.handleChange }
                        />
                    </label>
                </form>
            </div>
        </div>;
    }
}

export default Car;
