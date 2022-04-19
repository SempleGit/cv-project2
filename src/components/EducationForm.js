import { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolText: this.props.education.school || '',
      dateText: this.props.education.date || '',
      degreeText: this.props.education.degree || ''
    }
  }

  handleChange = (e, text) => {
    this.setState({[text]: e.target.value});
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.updateEducation(id, this.state.schoolText, this.state.dateText, this.state.degreeText);
  }

  render() {
    const { schoolText, dateText, degreeText } = this.state;
    const { add } = this.props;
    return (
      <>
        <form action="submit" onSubmit={(e) => this.handleSubmit(e, this.props.education.id)}>
          <label htmlFor="school">School: 
            <input type="text" name="school" value={schoolText} onChange={(e) => this.handleChange(e, 'schoolText')} />
          </label>
            <label>Graduation Date: 
              <input type="text" name="date" value={dateText} onChange={(e) => this.handleChange(e, 'dateText')} />
            </label>
            <label>Degree: 
              <input type="text" name="degree" value={degreeText} onChange={(e) => this.handleChange(e, 'degreeText')} />
            </label>
            {add 
              ? <input type="submit" value="Add" />
              : <input type="submit" value="Update" />}
        </form>
      </>
      
    )
  }
}

export default EducationForm;