import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdallah",
      age: 26,
      gender: "male",
      newAge: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
    });
    axios
      .post(`${process.env.REACT_APP_SERVER}/person?age=${this.state.age}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          newAge: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              data-testid="name-input"
              name="name"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Age</Form.Label>
            <Form.Control
              type="text"
              data-testid="age-input"
              name="age"
              placeholder="Enter age"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Gender</Form.Label>
            <Form.Control
              type="text"
              data-testid="gender-input"
              name="gender"
              placeholder="Enter gender"
            />
          </Form.Group>

          <Button variant="primary" data-testid="submit" type="submit">
            Submit
          </Button>
        </Form>
        <div data-testid="person">
          <h2>Person</h2>
          <h5 data-testid="name"> My Name is {this.state.name} </h5>
          <p data-testid="age">My age is {this.state.age}</p>
          <p data-testid="gender">My gender is {this.state.gender}</p>
          <h5 data-testid="newAge"> New Age is {this.state.newAge}</h5>
        </div>
      </div>
    );
  }
}

export default Person;
