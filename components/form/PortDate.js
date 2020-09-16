import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {FormGroup, Label, Button,Form} from 'reactstrap'

class PortDate extends React.Component {

  constructor(props) {
    super(props)

    const dateValue = props.initialDate ? new Date(props.initialDate) : new Date()
    const isHidden = props.initialDate ? false : true

    this.state = {
      dateValue,
      isHidden
    }
  }
 

  handleChange = date => {

    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field 

    this.setState({
      dateValue: date
    });

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true )
  };

  toggleDate(date) {

    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field 

    this.setState({
      isHidden: !this.state.isHidden
    })

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true )
  }

  render() {
    const { isHidden, dateValue } = this.state
    const {
      label,
      field,
      canBeDisabled,
      form: {
        touched,
        errors
      }
    } = this.props

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          { !isHidden &&
            <DatePicker
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
              dropdownMode="select"
            />  
          }
          
        </div>
        { canBeDisabled && !isHidden && 
          <Button onClick={ () => this.toggleDate() }>Still Working here</Button>
        }

        { canBeDisabled && isHidden &&
          <React.Fragment>
            <span>Still Working Here...</span>
            <Button onClick={ () => this.toggleDate(dateValue)} > Set End Date</Button>
          </React.Fragment>
        }

        {touched[field.name] && errors[field.name] && 
          <div className="error">{errors[field.name]}</div>
        }
      </FormGroup>
    );
  }
}

export default PortDate