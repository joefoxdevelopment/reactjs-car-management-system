import { v4 as uuid } from 'uuid';

class Car {
    constructor(type, description, image = '') {
        this.id          = uuid();
        this.type        = type;
        this.description = description;
        this.image       = image;
    }

    setImage(image) {
        this.image = image;
    }
}

export default Car;
