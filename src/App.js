//React.Component
import React, { Component } from "react";
//外部コンポーネント
import Rect from "./Rect.js";
import Memo from "./memo/Memo";
import AddForm from "./memo/AddForm.js";
import FindForm from "./memo/FindForm.js";
import DelForm from "./memo/DelForm.js";
//ファイル
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  td = {
    width:"250px"
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1></h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}>
                <FindForm />
                </td>
              <td style={this.td}>
                <DelForm />
                </td>
            </tr>
          </tbody>
          <Memo />
        </table>
      </div>
    )
  }
}

export default App;