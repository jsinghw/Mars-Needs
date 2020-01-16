import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import axios from "axios";
import { history } from "../../../redux";
import "./ProposalForm.css";
// import { HeroImage } from "../HeroImage";

class ProposalForm extends Component {
  onSubmit(values) {
    axios
      .post("http://localhost:8082/api/proposals", values)
      .then(res => {
        console.log(this.props.history);
      })
      .catch(err => {
        console.log("Error in posting proposal!");
      });
  }

  render() {
    let yup = require("yup");
    const invalidEmail = "Invalid email";
    const nameNotLongEnough = "Name must be as least 2 characters long";
    const emailNotLongEnough = "Email must be as least 3 characters long";

    const schema = yup.object().shape({
      name: yup
        .string()
        .min(2, nameNotLongEnough)
        .max(100)
        .required(),
      email: yup
        .string()
        .email(invalidEmail)
        .min(3, emailNotLongEnough)
        .max(255)
        .required(),
      proposal_title: yup.string().required(),
      proposal_category: yup.string().required(),
      proposal_details: yup.string().required(),
      company: yup.string(),
      industry: yup.string(),
      phone_number: yup.string(),
      website: yup.string().url()
      //terms: yup.bool().oneOf([true])
    });
    return (
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          this.onSubmit(values);
          history.push("/next-steps");
        }}
        initialValues={{
          name: "",
          email: "",
          proposal_title: "",
          proposal_category: "",
          proposal_details: "",
          company: "",
          industry: "",
          phone_number: "",
          website: ""
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          handleChange,
          validateOnChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div id="innerFormContainer">
              <div id="leftSide">
                <Form.Row>
                  <Form.Group controlId="validate01">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Name is a required field
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validate02">
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Email is a required field
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validate03">
                    <Form.Control
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={values.company}
                      onChange={handleChange}
                      isValid={touched.company && !errors.company}
                      isInvalid={!!errors.company}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.company}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validate04">
                    <Form.Control
                      name="industry"
                      type="text"
                      values={values.industry}
                      placeholder="Industry"
                      onChange={handleChange}
                      isValid={touched.industry && !errors.industry}
                      as="select"
                    >
                      <option>Select an Industry</option>
                      <option>Agriculture</option>
                      <option>Technology</option>
                    </Form.Control>
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.industry}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validate05">
                    <Form.Control
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={values.phone_number}
                      onChange={handleChange}
                      isValid={touched.phone_number && !errors.phone_number}
                      isInvalid={!!errors.phone_number}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.phone_number}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="validate06">
                    <Form.Control
                      type="text"
                      name="website"
                      placeholder="Website"
                      value={values.website}
                      onChange={handleChange}
                      isValid={touched.website && !errors.website}
                      isInvalid={!!errors.website}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.website}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
              </div>
              <div id="rightSide">
                <Form.Row>
                  <Form.Group as="block" md="6" controlId="validate07">
                    <Form.Control
                      type="text"
                      name="proposal_title"
                      placeholder="Proposal Title"
                      value={values.proposal_title}
                      onChange={handleChange}
                      isValid={touched.proposal_title && !errors.proposal_title}
                      isInvalid={!!errors.proposal_title}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Proposal title is a required field
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as="Col" controlId="validate08">
                    <Form.Control
                      name="proposal_category"
                      type="text"
                      values={values.proposal_category}
                      placeholder="proposal_category"
                      onChange={handleChange}
                      isValid={
                        touched.proposal_category && !errors.proposal_category
                      }
                      isInvalid={!!errors.proposal_category}
                      as="select"
                    >
                      <option>Select a Proposal Category</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Technology">Technology</option>
                    </Form.Control>
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Proposal category is a required field
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Control
                    controlId="validate09"
                    name="proposal_details"
                    type="text"
                    values={values.proposal_details}
                    placeholder="Proposal Details"
                    onChange={handleChange}
                    isValid={
                      touched.proposal_details && !errors.proposal_details
                    }
                    isInvalid={!!errors.proposal_details}
                    as="textarea"
                    rows="10"
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Proposal details is a required field
                  </Form.Control.Feedback>
                </Form.Row>
              </div>
            </div>
            <Form.Group>
              <Form.Check
                required
                controlId="validate10"
                name="terms"
                label="Agree to terms and conditions"
                // onChange={e => {
                //   this.props.handleChange(e)
                //   this.handleCheckBox(e)
                // }}
                isValid={touched.terms && !errors.terms}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
              />
            </Form.Group>
            <Button size="lg" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ProposalForm;
