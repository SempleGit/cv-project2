import { Component } from "react";
import uniqid from "uniqid";
import ExperienceDisplay from "./ExperienceDisplay";
import ExperienceForm from "./ExperienceForm";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      experiences: [{
        title: 'Auditor',
        date: 'October 2021 - Present',
        edit: false,
        id: uniqid()
      }]
    }
  }
  
  updateExperience = (id, title, date) => {
    const experiences = [...this.state.experiences];
    const index = experiences.findIndex( experience => experience.id === id) >= 0 //Using this for adding new items (id would be undefined) and updating items in the list where there is an id.
                         ? experiences.findIndex( experience => experience.id === id)
                         : experiences.length; //no id, just puts it on the end of the array.
    experiences[index] = {
      title,
      date,
      edit: false,
      id: uniqid()
    };
    this.setState({
      add: false,
      experiences
    });
  }

  deleteExperience = (id) => {
    const experiences = [...this.state.experiences];
    const index = experiences.findIndex( experience => experience.id === id);
    experiences.splice(index, 1);
    this.setState({
      experiences
    });
  }
  
  addNew = () => {
    this.setState({add: !this.state.add})
  }

  editForm = (id) => {
    const experiences = [...this.state.experiences];
    const index = experiences.findIndex( experience => experience.id === id);
    experiences[index].edit = !experiences[index].edit;
    this.setState({
      add: false,
      experiences
    });
  }

  render() {
    const { add } = this.state;
    return (
      <div className="section">
        <h2>Experience</h2>
        {this.state.experiences.map( experience => (
          experience.edit 
          ? <ExperienceForm key={experience.id} experience={experience} updateExperience={this.updateExperience} />
          : <ExperienceDisplay key={experience.id} experience={experience} editForm={this.editForm} deleteExperience={this.deleteExperience} />
        ))}
        {add 
        ? <ExperienceForm experience={{}} add={add} updateExperience={this.updateExperience} addNew={this.addNew} />
        : <div>
            <input type="button" value="Add" onClick={this.addNew} />
          </div>}
      </div>
    )
  }
}

export default Experience;