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

  const carlist = cars.map((car) => {
    return <Car
      key={ car.id }
      name={ car.name }
      description={ car.description }
      image={ car.image }
    />
  });

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
