import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import db from './firebase'; // Make sure this points to your Firebase configuration file
import { collection, addDoc } from 'firebase/firestore';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      try {
        await addDoc(collection(db, "newsletterSubscriptions"), { email });
        setStatus({ type: 'success', message: 'Thank you for subscribing!' });
        setEmail(''); // Clear the email field
      } catch (error) {
        console.error("Error adding email to newsletter database: ", error);
        setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
      }
    } else {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
    }
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12}>
            <h3>Subscribe to our Newsletter<br></br>& Never miss latest updates</h3>
            {status && <Alert variant={status.type === 'success' ? 'success' : 'danger'}>{status.message}</Alert>}
          </Col>
          <Col lg={12}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

