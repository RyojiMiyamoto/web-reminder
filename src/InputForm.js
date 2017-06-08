import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ShowData from "./ShowData";

class InputForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "initialized",
        email: "initialized",
        address: "initialized"
      };
      this.submit = this.submit.bind(this);
      this.fieldUpdate = this.fieldUpdate.bind(this);
    };
    submit() {
      ReactDOM.render(
        <ShowData name={this.state.name} email={this.state.email} address={this.state.address} />,
        document.getElementById('showdata')
      );
    };

  fieldUpdate(e) {
    var obj = {};
      obj[e.target.name] = e.target.value;
      this.setState(obj);
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input type="text" name="name" value={this.state.name}  onChange={this.fieldUpdate} />
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <input type="text" name="email"  value={this.state.email} onChange={this.fieldUpdate} />
            </td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              <input type="text" name="address"  value={this.state.address} onChange={this.fieldUpdate} />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <button onClick={this.submit}>Go!</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
}
export default InputForm;
