import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
export default function App() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>checkpoint form</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit
        </Button>
      </Form>
    </div>
  );
}
