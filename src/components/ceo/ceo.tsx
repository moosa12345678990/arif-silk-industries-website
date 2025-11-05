"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ceo from "@/assets/img/cheirfeo.jpeg"
export default function CeoMessage() {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
          {/* CEO Image */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src={ceo} // place your image in public/images/
              alt="CEO"
              width={400}
              height={200}
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* CEO Message */}
          <Col md={7}>
            <h2 className="fw-bold mb-3 bg-[#718239]">Message from Our CEO</h2>
            <p className="lead">
             I am excited to share our vision for the future. For over two decades, we have been dedicated to delivering high-quality, innovative textile solutions to our valued customers. However, our commitment extends far beyond just producing exceptional products. At the heart of our mission is a steadfast dedication to sustainability and environmental responsibility.
            </p>
            <p>
               We are continuously implementing eco-friendly manufacturing processes, utilizing renewable and recycled materials, and investing in cutting-edge technologies to minimize our impact on the planet. By embracing this ethos of sustainability, we aim to lead the textile industry toward a greener, more resilient future.
            </p>
            <h5 className="mt-4 mb-0 fw-semibold">Noman Arif</h5>
            <small className="text-muted">Chief Executive Officer</small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
