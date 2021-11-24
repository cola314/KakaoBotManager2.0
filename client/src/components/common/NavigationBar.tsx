import styled from 'styled-components';

const NaviagtionBlock = styled.div`
  background: #f7e600;
  display: flex;
  justify-content: space-between;
  padding-left: 1.125rem;
  padding-right: 1.125rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;
const NavigationItems = styled.div`
  display: flex;
`;
const NavigationItem = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  & + & {
    margin-left: 1.5rem;
  }
`;
const LogoBlock = styled(NavigationItem)``;

const NavigationBar = () => {
  return (
    <NaviagtionBlock>
      <LogoBlock>KakaoBotManager</LogoBlock>
      <NavigationItems>
        <NavigationItem>내 애플리케이션</NavigationItem>
        <NavigationItem>관리</NavigationItem>
        <NavigationItem>문서</NavigationItem>
        <NavigationItem>로그인</NavigationItem>
      </NavigationItems>
    </NaviagtionBlock>
  );
};

export default NavigationBar;
