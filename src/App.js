// import logo from './logo.svg';
// import Number from './components/Number';
import './App.css';
// import Skills from './components/Skills';
import Grid from './components/Grid';

function App() {
  // const skills = [
  //   ['HTML', 10],
  //   ['CSS', 7],
  //   ['JavaScript', 9],
  //   ['React', 8],
  // ]
  // const numbers = [1, 2, 3, 4, 5]
  return (
    // <div className="App">
    //   <div className='container'>
    //   <div>
    //     <h1>Numbers List</h1>
      
    //     <Number numbers={numbers} />
    //   </div>
    // </div>
    // </div>
    <div className='container'>
      <Grid boxes={31}/>
    </div>
  );
}

export default App;
