import Car from './Car';
import { v4 as uuid } from 'uuid';

function App() {
  let cars = [
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

  if ('undefined' !== typeof window.localStorage.cars) {
    cars = window.localStorage.cars;
  }

  console.log(cars);

  const carlist = cars.map((car) => {
    return <Car
      key={ car.id }
      name={ car.name }
      description={ car.description }
      image={ car.image }
    />
  });

  console.log(carlist);

  return (
    <div className="container">
      <h1>Car management</h1>
      <div>
        { carlist }
      </div>
    </div>
  );
}

export default App;
