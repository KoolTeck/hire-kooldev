import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Response = ({ messenger }) => {
  return (
    <Card className="container response">
      <Card.Body>
        <Card.Title>Hey There!</Card.Title>
        <Card.Subtitle className="mb-2 ">
          Thanks for reaching out to me <strong>{messenger.name}</strong>
        </Card.Subtitle>
        <Card.Text clasName="text-muted">
          Your message has been recieved and I'll get back to you ASAP. Enjoy
          your day.
        </Card.Text>
        <Card.Link href="https://www.twitter.com/kooljoe247">
          <FaFacebook />
        </Card.Link>
        <Card.Link href="https://web.facebook.com/adebowale.adetunji">
          <FaTwitter />
        </Card.Link>
        <Card.Link href="/">Go back</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Response;
