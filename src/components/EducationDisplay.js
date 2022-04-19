import { Component } from "react";

class EducationDisplay extends Component {

  render() {
    const { editForm, deleteEducation, education: { school, date, degree, id } } = this.props;
    return (
      <>
        <ul className="main-list">
          <li>School: {school}</li>
          <li>Graduation Date: {date}</li>
          <li>Degree: {degree}</li>
        </ul>
        <input type="button" value="Edit" onClick = {() => editForm(id)} />
        <input type="button" value="Delete" onClick = {() => deleteEducation(id)} />
      </>
    )
  }
}

export default EducationDisplay;