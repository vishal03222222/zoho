import logo from './logo.svg';
import './App.css';
import SuperStore from './components/Superstore';
import TaxiBooking from './components/TaxiBooking';
import RailwayReservation from './components/RailwayReservation';
import MatrixGame from './components/MatrixGame';
import BrickBreaker from './components/BrickBreaker';

function App() {
  const store = new SuperStore();
store.registerUser("Alice", "Buyer");
store.addItem({ name: "Laptop", price: 1000 });
console.log(store.listInventory());

const taxiApp = new TaxiBooking();
console.log(taxiApp.bookTaxi(1, "A", "B", 9));

const railway = new RailwayReservation();
console.log(railway.bookSeat("AC"));

const matrixGame = new MatrixGame(3);
matrixGame.addAtom(1, 1);
matrixGame.displayGrid();

const brickBreaker = new BrickBreaker();
brickBreaker.moveBall("St");

  return (
  
 <div>
   <SuperStore/>
  <TaxiBooking/>
  <RailwayReservation/>
  <MatrixGame/>
  <BrickBreaker/>
  
 </div>
  );
}

export default App;
