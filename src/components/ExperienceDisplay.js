import { Component } from "react";

class ExperienceDisplay extends Component {

  render() {
    const { editForm, deleteExperience, experience: { title, date, id } } = this.props;
    return (
      <>
        <ul className="main-list">
          <li>Title: {title}</li>
          <li>Date: {date}</li>
        </ul>
        <input type="button" value="Edit" onClick = {() => editForm(id)} />
        <input type="button" value="Delete" onClick = {() => deleteExperience(id)} />
      </>
    )
  }
}

export default ExperienceDisplay;