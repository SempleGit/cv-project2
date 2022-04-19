import { Component } from "react";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: this.props.name,
      addressText: this.props.address
    }
  }

  handleChange = (e, text) => {
    this.setState({[text]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateGeneral(this.state.nameText, this.state.addressText);
    this.props.editForm();
  }

  render() {
    const { nameText, addressText } = this.state;
    return (
      <>
        <h2>Edit</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: 
            <input type="text" name="name" value={nameText} onChange={(e) => this.handleChange(e, 'nameText')} />
          </label>
            <label>Address: 
              <input type="text" name="address" value={addressText} onChange={(e) => this.handleChange(e, 'addressText')} />
            </label>
            <input type="submit" value="Update" />
        </form>
      </>
      
    )
  }
}

export default GeneralForm;