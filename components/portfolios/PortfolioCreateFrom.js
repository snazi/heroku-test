// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Alert } from 'reactstrap'

import PortInput from '../form/PortInput'
import PortDate from '../form/PortDate'
import moment from 'moment'

const validateInputs = (values) => {

        const errors = {};
 
        const keyArray = Object.keys(values)

        keyArray.forEach((key) => {
          if(!values[key]) {
            if(key !== 'endDate'){
              errors[key] = `Field ${key} is required!`
            }
            
          }
        })

        const  startDate = moment(values.startDate)
        const endDate = moment(values.endDate)

        if (startDate && endDate && moment(endDate).isBefore(startDate)) {
          errors.endDate = 'End Date cannot be before start Date'
        }

        return errors;
}

const PortfolioCreateFrom = ({initialValues, onSubmit, error}) => (

  <div>
    <Formik
      initialValues={initialValues}

      validate={validateInputs}

      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field type="text" name="title" label="Title" component={PortInput}/>
            
            <Field type="text" name="company" label="Company"component={PortInput}/>
            
            <Field type="text" name="location" label="Location"component={PortInput}/>
              
            <Field type="text" name="position" label="Position" component={PortInput}/>

            <Field type="textarea" name="description" label="Description" component={PortInput}/>
           
            <Field name="startDate" initialDate={initialValues.startDate} label="Start Date" component={PortDate}/>
              
            <Field name="endDate"initialDate={initialValues.endDate}  canBeDisabled={true} label="End Date" component={PortDate}/>

            {
              error &&
              <Alert color="danger">
                {error}
              </Alert>
            }

            <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                Create Entry
            </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateFrom;



// import React from 'react'

// class PortfolioCreateFrom extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: '',
//             desc: '',
//             language:''
//         }

//         this.handleChange = this.handleChange.bind(this)

//         this.handleSubmit = this.handleSubmit.bind(this)

//     }

//     handleChange(e) {
//         const field = e.target.name
//         this.setState({
//             [field]: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         alert(`You submitted the following ${this.state.title} ${this.state.desc} ${this.state.language}`)
//         e.preventDefault()
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <Label>
//                     Name:
//                     <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Description
//                     <textarea name="desc" type="text" value={this.state.desc} onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Pick your favorite programming language:
//                     <select name="language" value={this.state.language} onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="java">Java</option>
//                         <option value="swift">Swift</option>
//                         <option value="sql">MySQL</option>
//                         <option value="c++">C++</option>
//                     </select>
//                 </Label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }

// export default PortfolioCreateFrom