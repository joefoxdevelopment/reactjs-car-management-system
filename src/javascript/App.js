import Car from './Car';
import CarApiClient from './CarApiClient';

function App() {
  const carApiClient = new CarApiClient();
  const cars = carApiClient.getCars();

  const carlist = cars.map((car) => {
    return <Car
      key={ car.id }
      id={ car.id }
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
