import { useEffect, useState } from 'react';
import { Counter } from './../components/Counter';
import { Header } from './../components/Header';
import { ButtonPanel, ChangeValueButton } from './styles';

export const App = () => {
  const [value, setValue] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue(value => value + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);  
  // }, []);

  const increment = () => setValue(value => value + 1);
  const reset = () => setValue(0);

  return (
    <main>
      <Header title="Cutie birb 🐦" />
      <Counter value={value} />
      <ButtonPanel>
        <ChangeValueButton data-cy="increment-button" onClick={increment}>Incrementar</ChangeValueButton>
        <ChangeValueButton data-cy="reset-button" onClick={reset}>Zerar</ChangeValueButton>
      </ButtonPanel>
    </main>
  );
}