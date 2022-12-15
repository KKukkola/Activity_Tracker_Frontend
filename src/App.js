import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar';

import MyContextProvider, { useMyContext } from './MyContext'

import mywsServer from './sockets';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <LeftBar />
        <RightBar />
      </div>
    </MyContextProvider>
  );
}

export default App;
