import './App.css';
import Header from './Header';
import { TinderCards } from './MyTinderCards';
import { SwipeButton } from './SwipeButton';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {/* Card */}
      <TinderCards/>
      {/* SwipeButton */}
      <SwipeButton/>
    </div>
  );
}

export default App;
