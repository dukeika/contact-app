import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Contact() {
    return (
        <Container>
            <Row className="px-4 my-5"  >
                <Col><h1>Contact</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/contact1.jpg" />
                    <Card.Body>
                        <Card.Title>Oge Kadana</Card.Title>
                            <Card.Text>
                            oge.kadana@example.com
                            <br />1234567890
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="px-2 my-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/contact3.jpg" />
                    <Card.Body>
                        <Card.Title>Oge ika</Card.Title>
                            <Card.Text>
                            oge.ika@example.com
                            <br />34566544378
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="px-2 my-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/contact4.jpg" />
                    <Card.Body>
                        <Card.Title>Ika Kadana</Card.Title>
                            <Card.Text>
                            ika.kadana@example.com
                            <br />654567654
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
            </Row>                
                
        </Container>    
        )
    
}
export default Contact;
