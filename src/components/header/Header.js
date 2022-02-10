import React from 'react';
import { HeaderContainer } from 'components/common/container/StyledContainer';
import Logo from 'components/common/logo/Logo';
import ThemeSwitcher from 'components/themeSwitcher';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
