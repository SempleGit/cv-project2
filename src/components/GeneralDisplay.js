import { Component } from "react";

class GeneralDisplay extends Component {

  render() {
    const { name, address, id, editForm } = this.props;
    return (
      <div>
        <ul className="main-list">
          <li>Name: {name}</li>
          <li>Address: {address}</li>
        </ul>
        <input type="button" value="Edit" onClick = {editForm} />
      </div>
    )
  }
}

export default GeneralDisplay;