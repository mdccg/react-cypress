import { CounterPanel, CounterTitle, CounterValue } from './styles';

type Props = {
  value: number;
}

export const Counter = ({ value }: Props) => {

  return (
    <CounterPanel>
      <CounterTitle data-cy="counter-title">Contador: </CounterTitle>
      <CounterValue data-cy="counter-value">{value}</CounterValue>
    </CounterPanel>
  );
}