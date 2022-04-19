import { Component } from "react";
import uniqid from "uniqid";
import EducationDisplay from "./EducationDisplay";
import EducationForm from "./EducationForm";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      educations: [{
        school: 'Simpson College',
        date: 'Aug 2021',
        degree: 'Computer Information Systems',
        edit: false,
        id: uniqid()
      }]
    }
  }
  
  updateEducation = (id, school, date, degree) => {
    const educations = [...this.state.educations];
    const index = educations.findIndex( education => education.id === id) >= 0 //Using this for adding new items (id would be undefined) and updating items in the list where there is an id.
                         ? educations.findIndex( education => education.id === id)
                         : educations.length; //no id, just puts it on the end of the array.
    educations[index] = {
      school,
      date,
      degree,
      edit: false,
      id: uniqid()
    };
    this.setState({
      add: false,
      educations
    });
  }

  deleteEducation = (id) => {
    const educations = [...this.state.educations];
    const index = educations.findIndex( education => education.id === id);
    educations.splice(index, 1);
    this.setState({
      educations
    });
  }
  
  addNew = () => {
    this.setState({add: !this.state.add})
  }

  editForm = (id) => {
    const educations = [...this.state.educations];
    const index = educations.findIndex( education => education.id === id);
    educations[index].edit = !educations[index].edit;
    this.setState({
      add: false,
      educations
    });
  }

  render() {
    const { add } = this.state;
    return (
      <div className="section">
        <h2>Education</h2>
        {this.state.educations.map( education => (
          education.edit 
          ? <EducationForm key={education.id} education={education} updateEducation={this.updateEducation} />
          : <EducationDisplay key={education.id} education={education} editForm={this.editForm} deleteEducation={this.deleteEducation} />
        ))}
        {add 
        ? <EducationForm education={{}} add={add} updateEducation={this.updateEducation} addNew={this.addNew} />
        : <div>
            <input type="button" value="Add" onClick={this.addNew} />
          </div>}
      </div>
    )
  }
}

export default Education;