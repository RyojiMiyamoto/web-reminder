import React, {Component} from "react";
class ShowData extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{this.props.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{this.props.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{this.props.address}</td>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default ShowData;
