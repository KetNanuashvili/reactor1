import Images from './Img';
import Info from './Infos';
import LastSection from './LastSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Images/>
      <h2 className='h2-tag'>Equilibrium#3429</h2>
      <h4 className='H4-tag'>Our Equilibrium collection promotes balance and calm.</h4>
      <Info/>
      <div className="line-div"> </div>
      <LastSection/>
    </div>
  );
}

export default App;

