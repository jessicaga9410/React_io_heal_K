import Card from 'react-bootstrap/Card';
import './quote.css';

function Quote() {
  return (
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0 quote-1">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <br />
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Quote;