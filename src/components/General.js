import { Component } from "react";
import GeneralForm from "./GeneralForm";
import GeneralDisplay from "./GeneralDisplay";
import uniqid from 'uniqid';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      nameText: '',
      addressText: '',
      profile: {
        name: 'Dan',
        address: 'home',
        id: uniqid()
      }
    }
  }

  editForm = () => {
    this.setState({edit: !this.state.edit});
  }

  updateGeneral = (name, address) => {
    this.setState({
      profile: {
        name, address
      }
    })
  }

  render() {
    const { edit, profile: {name, address, id} } = this.state;
    return (
      <div className="section">
        <h2>General</h2>
         {edit
          ? <GeneralForm name={name} address={address} editForm={this.editForm} updateGeneral={this.updateGeneral} />
          : <GeneralDisplay id={id} name={name} address={address} editForm={this.editForm} />
         }
      </div>
    )
  }
}

export default General;