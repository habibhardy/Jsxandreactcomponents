import './App.css';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
            <Card  className="product-card"  >
                    <Card.Header>
                       <Image/>
                    </Card.Header>
                   <Card.Body>
                            <Name/>
                            <Price/>
                            <Description/>
                   </Card.Body>
            </Card>
             <p className="greeting">
                  {"Hello there !"}
            </p>
    </div>
  );
}

export default App;
