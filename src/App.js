/*import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';*/
import "./App.css";
import "./index.css";
import {
  Container,
  Button,
  Form,
  Navbar,
  NavDropdown,
  Nav,
  Card,
  CardGroup,
  FormControl,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect bg="secondary">
        <div class="container-fluid">
          <img src="./shoplogo.png" width={50} height={50} alt="..."></img>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Nadia Store
          </Navbar.Brand>
          <Nav.Link href="#home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown title="Articles" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bag</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: "white" }}>
              Search
            </Button>
          </Form>
        </div>
      </Navbar>

      <Container style={{ padding: "30px" }}>
        <CardGroup>
          <Card style={{ width: "18rem", backgroundColor: "#FFE4E1" }}>
            <Card.Img
              variant="top"
              src="./dress.jpg"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Dress</Card.Title>
              <Card.Text>A pink dress size M/L/XL 100$</Card.Text>
              <Button
                variant="danger"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Buy Now
              </Button>

              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title"> Let's do some shopping !</h4>
                      <Button
                        variant="danger"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></Button>
                    </div>

                    <div class="modal-body">
                      <Form style={{ padding: "10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mail</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your Mail"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Credit Card Number</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Credit Card Number"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your number with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                      </Form>
                    </div>

                    <div class="modal-footer">
                      <Button variant="danger" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem", backgroundColor: "#FFE4E1" }}>
            <Card.Img
              variant="top"
              src="./gg.jfif"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Bag</Card.Title>
              <Card.Text>A Gold Bag 50$</Card.Text>
              <Button
                variant="danger"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Buy Now
              </Button>

              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title"> Let's do some shopping !</h4>
                      <Button
                        variant="danger"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></Button>
                    </div>

                    <div class="modal-body">
                      <Form style={{ padding: "10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mail</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your Mail"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Credit Card Number</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Credit Card Number"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your number with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                      </Form>
                    </div>

                    <div class="modal-footer">
                      <Button variant="danger" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem", backgroundColor: "#FFE4E1" }}>
            <Card.Img
              variant="top"
              src="./s1.jpg"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>shoes</Card.Title>
              <Card.Text> White shoes 150$</Card.Text>
              <Button
                variant="danger"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Buy Now
              </Button>

              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title"> Let's do some shopping !</h4>
                      <Button
                        variant="danger"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></Button>
                    </div>

                    <div class="modal-body">
                      <Form style={{ padding: "10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mail</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your Mail"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Credit Card Number</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Credit Card Number"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your number with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                      </Form>
                    </div>

                    <div class="modal-footer">
                      <Button variant="danger" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem", backgroundColor: "#FFE4E1" }}>
            <Card.Img
              variant="top"
              src="./acc.jpg"
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Accessory</Card.Title>
              <Card.Text>Gold 200$</Card.Text>
              <Button
                variant="danger"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Buy Now
              </Button>

              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title"> Let's do some shopping !</h4>
                      <Button
                        variant="danger"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></Button>
                    </div>

                    <div class="modal-body">
                      <Form style={{ padding: "10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mail</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your Mail"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Credit Card Number</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Credit Card Number"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your number with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                      </Form>
                    </div>

                    <div class="modal-footer">
                      <Button variant="danger" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </CardGroup>
      </Container>
    </div>
  );
}

export default App;
