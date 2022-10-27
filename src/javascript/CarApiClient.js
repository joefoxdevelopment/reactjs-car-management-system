import { v4 as uuid } from 'uuid';

class CarApiClient {
    getCars() {
        if ('undefined' === typeof document.cars) {
            document.cars = [
                {
                    id: uuid(),
                    name: 'Ford',
                    description: 'Capri',
                    image: 'url'
                },
                {
                    id: uuid(),
                    name: 'Citroen',
                    description: 'C4',
                    image: 'url'
                },
            ];
        }

        return document.cars;
    }

    saveCar(updatedCar) {
        document.cars.forEach((storedCar, index) => {
            if (storedCar.id === updatedCar.id) {
                document.cars[index].name        = updatedCar.name;
                document.cars[index].description = updatedCar.description;
                document.cars[index].image       = updatedCar.image;

                return;
            }
        });
    }

    deleteCar(carId) {
        document.cars.forEach((storedCar, index) => {
            if (storedCar.id === carId) {
                document.cars.splice(index, 1);
                return;
            }
        });
    }
}

export default CarApiClient;
