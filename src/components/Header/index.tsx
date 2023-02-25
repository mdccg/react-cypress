import { HeaderContainer, HeaderTitle } from './styles';

type Props = {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <HeaderContainer>
      <HeaderTitle data-cy="header-title">{title}</HeaderTitle>
    </HeaderContainer>
  );
}