import { useEffect, useState } from 'react';
import dataJSON from './data.json';
import Item from './components/Item';
import './App.css';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(dataJSON);
  }, []);

  return (
    <div className="app">
      <div className="items">
        {data && <Item data={data} />}
      </div>
    </div>
  );
}

export default App;
