import { useEffect, useState } from 'react';
import { Counter } from './components/Counter';
import { Header } from './components/Header';

export const App = () => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value => value + 1);
    }, 1000);

    return () => clearInterval(interval);  
  }, []);

  return (
    <main>
      <Header title="Cutie birb 🐦" />
      <Counter value={value} />
    </main>
  );
}