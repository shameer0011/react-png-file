import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      token: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  submitButton = () => {
    this.setState({
      token: true,
    });
    console.log(this.state.token);
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.submitButton}>Submit</button>
        {this.state.token && <img src={this.state.file} />}
      </div>
    );
  }
}

export default App;
