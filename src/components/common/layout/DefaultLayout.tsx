import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap-reboot.min.css'
import 'bootstrap-css-only/css/bootstrap-grid.min.css'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={10} lg={8}>
        {children}
      </Col>
    </Row>
  </Container>
)

export default DefaultLayout
