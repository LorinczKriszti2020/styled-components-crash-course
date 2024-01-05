import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from"./components/styles/Global";
import content from './content'

const theme = {
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container className="App">
          {content.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </Container>
        <Footer>
          
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
