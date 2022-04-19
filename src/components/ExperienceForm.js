import { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: this.props.experience.title || '',
      dateText: this.props.experience.date || ''
    }
  }

  handleChange = (e, text) => {
    this.setState({[text]: e.target.value});
  }

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.updateExperience(id, this.state.titleText, this.state.dateText);
  }

  render() {
    const { titleText, dateText } = this.state;
    const { add } = this.props;
    return (
      <>
        <form action="submit" onSubmit={(e) => this.handleSubmit(e, this.props.experience.id)}>
          <label htmlFor="title">Title: 
            <input type="text" name="title" value={titleText} onChange={(e) => this.handleChange(e, 'titleText')} />
          </label>
            <label>Date: 
              <input type="text" name="date" value={dateText} onChange={(e) => this.handleChange(e, 'dateText')} />
            </label>
            {add 
              ? <input type="submit" value="Add" />
              : <input type="submit" value="Update" />}
        </form>
      </>
      
    )
  }
}

export default ExperienceForm;