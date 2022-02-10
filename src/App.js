import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { themeSelectors } from './redux/theme';

import themes from './styles/themes/';

import Header from './components/header';
import Main from './components/main';
import Notify from './components/common/notify/Notify';

const App = () => {
  const theme = useSelector(themeSelectors.getTheme);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header />
        <Main />
        <Notify />
      </ThemeProvider>
    </>
  );
};

export default App;
