// import React from "react"
// import { Formik, Field } from "formik"
// import Form from "react-bootstrap/Form"
// import InputGroup from "react-bootstrap/InputGroup"
// import Button from "react-bootstrap/Button"
// import { withAsyncAction } from "../../HOCs"
// import axios from "axios"

// let yup = require("yup")

// class ProposalForm extends React.Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       name: "",
// //       email: "",
// //       proposal_title: "",
// //       proposal_category: "",
// //       proposal_details: "",
// //       company: "",
// //       industry: "",
// //       phone_number: "",
// //       website: ""
// //     }
// //   }
//   onSubmit = e => {
//     e.preventDefault()
//     console.log()

//     const data = {schema
//     }

//     axios
//       .post("http://localhost:8082/api/proposals", data)
//       .then(res => {
//         this.setState({
//           name: "",
//           email: "",
//           proposal_title: "",
//           proposal_category: "",
//           proposal_details: "",
//           company: "",
//           industry: "",
//           phone_number: "",
//           website: ""
//         })
//         this.props.history.push("/")
//       })
//       .catch(err => {
//         console.log("Error in posting proposal!")
//       })
//   }

// //   handlePostProposal = event => {
// //     this.props.postProposal()
// //     //  return
// //   }
//   render() {
//     const schema = yup.object({
//       name: yup.string().required(),
//       email: yup.string().required(),
//       proposal_title: yup.string().required(),
//       proposal_category: yup.string().required(),
//       proposal_details: yup.string().required(),
//       company: yup.string(),
//       industry: yup.string(),
//       phone_number: yup.string(),
//       website: yup.string(),

//       terms: yup.bool()
//     })

//     return (
//       <Formik
//         validationSchema={this.state}
//         onSubmit={this.onSubmit}
//         initialValues={{
//           name: "",
//           email: "",
//           proposal_title: "",
//           proposal_category: "",
//           proposal_details: "",
//           company: "",
//           industry: "",
//           phone_number: "",
//           website: ""
//         }}
//       >
//         {({
//           handleSubmit,
//           handleChange,
//           handleBlur,
//           values,
//           touched,
//           isValid,
//           errors
//         }) => (
//           <Form noValidate onSubmit={this.onSubmit}>
//             <Form.Row>
//               <Form.Group as={"Col"} md="4" controlId="validationFormik01">
//                 <Field
//                   name="name"
//                   type="text"
//                   values="name"
//                   placeholder="Your Name"
//                   isInvalid={!!errors.name}
//                   isValid={touched.name && !errors.name}
//                   as={Form.Control}
//                 />
//                 <Form.Control.Feedback></Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.name}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={"Col"} md="4" controlId="validationFormik02">
//                 <InputGroup>
//                   <InputGroup.Prepend>
//                     <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                   </InputGroup.Prepend>
//                   <Field
//                     name="email"
//                     type="email"
//                     values="email"
//                     placeholder="Email"
//                     isInvalid={!!errors.email}
//                     isValid={touched.email && !errors.email}
//                     as={Form.Control}
//                   />
//                   <Form.Control.Feedback></Form.Control.Feedback>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.email}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//               </Form.Group>
//               <Form.Group as={"Col"} md="4" controlId="validationFormik03">
//                 <Field
//                   name="company"
//                   type="text"
//                   values="company"
//                   placeholder="Company Name"
//                   isValid={touched.company && !errors.company}
//                   as={Form.Control}
//                 />
//                 <Form.Control.Feedback></Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={"Col"} md="4" controlId="validationFormik04">
//                 <Form.Control
//                   name="industry"
//                   type="text"
//                   values={values.industry}
//                   placeholder="Industry"
//                   onChange={handleChange}
//                   isValid={touched.industry && !errors.industry}
//                   as="select"
//                 >
//                   <option>Select an Industry</option>
//                   <option>Agriculture</option>
//                   <option>Technology</option>
//                 </Form.Control>
//                 <Form.Control.Feedback></Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={"Col"} md="3" controlId="validationFormik05">
//                 <Field
//                   name="phone_number"
//                   type="text"
//                   values="phone_number"
//                   placeholder="Phone Number"
//                   isValid={touched.phone_number && !errors.phone_number}
//                   isInvalid={!!errors.phone_number}
//                   as={Form.Control}
//                 />
//                 <Form.Control.Feedback></Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.phone_number}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={"Col"} md="3" controlId="validationFormik06">
//                 <Field
//                   name="website"
//                   type="text"
//                   values="website"
//                   placeholder="Website"
//                   isValid={touched.website && !errors.website}
//                   isInvalid={!!errors.website}
//                   as={Form.Control}
//                 />
//                 <Form.Control.Feedback></Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.website}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>

//             <Form.Row>
//               <Form.Group as={"Col"} md="3" controlId="validationFormik07">
//                 <Field
//                   name="proposal_title"
//                   type="text"
//                   values="proposal_title"
//                   placeholder="Proposal Title"
//                   isValid={touched.proposal_title && !errors.proposal_title}
//                   isInvalid={!!errors.proposal_title}
//                   as={Form.Control}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.proposal_title}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={"Col"} md="5" controlId="validationFormik08">
//                 <Form.Control
//                   name="proposal_category"
//                   type="text"
//                   values={values.proposal_category}
//                   placeholder="proposal_category"
//                   onChange={handleChange}
//                   isValid={
//                     touched.proposal_category && !errors.proposal_category
//                   }
//                   isInvalid={!!errors.proposal_category}
//                   as="select"
//                 >
//                   <option>Select a Proposal Category</option>
//                   <option value="Agriculture">Agriculture</option>
//                   <option value="Technology">Technology</option>
//                 </Form.Control>
//                 <Form.Control.Feedback></Form.Control.Feedback>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.proposal_category}
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </Form.Row>

//             <Form.Group controlId="validationFormik09">
//               <Form.Control
//                 name="proposal_details"
//                 type="text"
//                 values={values.proposal_details}
//                 placeholder="Proposal Details"
//                 onChange={handleChange}
//                 isValid={touched.proposal_details && !errors.proposal_details}
//                 isInvalid={!!errors.proposal_details}
//                 as="textarea"
//                 rows="10"
//               />
//               <Form.Control.Feedback></Form.Control.Feedback>
//               <Form.Control.Feedback type="invalid">
//                 {errors.proposal_details}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group>
//               <Form.Check
//                 name="terms"
//                 label="Agree to terms and conditions"
//                 onChange={handleChange}
//                 isInvalid={!!errors.terms}
//                 feedback={errors.terms}
//                 id="validationFormik0"
//               />
//             </Form.Group>
//             <Button type="submit" onClick={this.onSubmit}>
//               Submit form
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     )
//   }
// }

// // export default withAsyncAction("proposal", "postProposal")(ProposalForm)

// export default(ProposalForm)

import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

class ProposalForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      proposal_title: "",
      proposal_category: "",
      proposal_details: "",
      company: "",
      industry: "",
      phone_number: "",
      website: ""
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    // const data = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   proposal_title: this.state.proposal_title,
    //   proposal_category: this.state.proposal_category,
    //   proposal_details: this.state.proposal_details,
    //   company: this.state.company,
    //   industry: this.state.industry,
    //   phone_number: this.state.phone_number,
    //   website: this.state.website
    // }
    const data = {
      name: "Jason",
      email: "is this working?",
      proposal_title: "I hope it is",
      proposal_category: "Please",
      proposal_details: "A long listed detailed proposal",
      company: "A Company",
      industry: "An Industry",
      phone_number: "8888888888",
      website: "www.website.com"
    }

    axios
      .post("localhost:8082/api/proposals", data)
      .then(res => {
        this.setState({
          name: "",
          email: "",
          proposal_title: "",
          proposal_category: "",
          proposal_details: "",
          company: "",
          industry: "",
          phone_number: "",
          website: ""
        })
        this.props.history.push("/")
      })
      .catch(err => {
        console.log("Error in posting proposal!")
      })
  }

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create new book</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="company"
                    className="form-control"
                    value={this.state.company}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Industry"
                    name="industry"
                    className="form-control"
                    value={this.state.industry}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone_number"
                    className="form-control"
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Website"
                    name="website"
                    className="form-control"
                    value={this.state.website}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Proposal Title"
                    name="proposal_title"
                    className="form-control"
                    value={this.state.proposal_title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Proposal Category"
                    name="proposal_category"
                    className="form-control"
                    value={this.state.proposal_category}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Proposal Details"
                    name="proposal_details"
                    className="form-control"
                    value={this.state.proposal_details}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProposalForm
