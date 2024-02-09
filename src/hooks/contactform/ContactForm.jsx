import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.css'

function ContactForm() {
    return (
        <div className="formin">
            <Form>
                <Row className="mb-4">
                    <Form.Group  as={Col} controlId="formGridName">
                        <Form.Control className='form_inputs' type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Control className='form_inputs' type="text" placeholder="Last Name" />
                    </Form.Group>
                </Row>

                <Form.Group  as={Col} controlId="formGridEmail">
                    <Form.Control className='mb-4 form_inputs' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4 form_inputs_txt_col" as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="form_inputs_txt" as="textarea" rows={5} placeholder='Comment or Message' />
                    <small>0 of 500 max characters.</small>
                </Form.Group>

                <Button className="btnsub" type="submit">
                    SUBMIT
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;