import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js'
import HorizontalBarChart from './components/HorizontalBarChart/HorizontalBarChart.js'




const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <HorizontalBarChart></HorizontalBarChart>
    </div>
  );
};

export default App;
