import React from "react"
import { Formik, Field } from "formik"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"

let yup = require("yup")

class ProposalForm extends React.Component {
  render() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required(),
      company: yup.string(),
      industry: yup.string(),
      phoneNumber: yup.string(),
      website: yup.string(),
      proposalTitle: yup.string().required(),
      proposalCategory: yup.string().required(),
      proposalDetails: yup.string().required(),

      terms: yup.bool()
    })

    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          company: "",
          industry: "",
          phoneNumber: "",
          website: "",
          proposalTitle: "",
          proposalCategory: "",
          proposalDetails: ""
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={"Col"} md="4" controlId="validationFormik01">
                <Field
                  name="name"
                  type="text"
                  values="name"
                  placeholder="Your Name"
                  isInvalid={!!errors.name}
                  isValid={touched.name && !errors.name}
                  as={Form.Control}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={"Col"} md="4" controlId="validationFormik02">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Field
                    name="email"
                    type="text"
                    values="email"
                    placeholder="Email"
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email}
                    as={Form.Control}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={"Col"} md="4" controlId="validationFormik03">
                <Field
                  name="company"
                  type="text"
                  values="company"
                  placeholder="Company Name"
                  isValid={touched.company && !errors.company}
                  as={Form.Control}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={"Col"} md="4" controlId="validationFormik04">
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
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={"Col"} md="3" controlId="validationFormik05">
                <Field
                  name="phoneNumber"
                  type="text"
                  values="phoneNumber"
                  placeholder="Phone Number"
                  isValid={touched.phoneNumber && !errors.phoneNumber}
                  isInvalid={!!errors.phoneNumber}
                  as={Form.Control}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={"Col"} md="3" controlId="validationFormik06">
                <Field
                  name="website"
                  type="text"
                  values="website"
                  placeholder="Website"
                  isValid={touched.website && !errors.website}
                  isInvalid={!!errors.website}
                  as={Form.Control}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.website}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={"Col"} md="3" controlId="validationFormik07">
                <Field
                  name="proposalTitle"
                  type="text"
                  values="proposalTitle"
                  placeholder="Proposal Title"
                  isValid={touched.proposalTitle && !errors.proposalTitle}
                  isInvalid={!!errors.proposalTitle}
                  as={Form.Control}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.proposalTitle}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={"Col"} md="5" controlId="validationFormik08">
                <Form.Control
                  name="proposalCategory"
                  type="text"
                  values={values.proposalCategory}
                  placeholder="proposalCategory"
                  onChange={handleChange}
                  isValid={touched.proposalCategory && !errors.proposalCategory}
                  isInvalid={!!errors.proposalCategory}
                  as="select"
                >
                  <option>Select a Proposal Category</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Technology">Technology</option>
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.proposalCategory}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="validationFormik09">
              <Form.Control
                name="proposalDetails"
                type="text"
                values={values.proposalDetails}
                placeholder="Proposal Details"
                onChange={handleChange}
                isValid={touched.proposalDetails && !errors.proposalDetails}
                isInvalid={!!errors.proposalDetails}
                as="textarea"
                rows="10"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.proposalDetails}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Check
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default ProposalForm
