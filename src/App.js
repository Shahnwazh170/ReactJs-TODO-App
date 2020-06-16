import React from 'react';
import logo from './TLP.png';
import "./App.css";
import "./bootstrap.min.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }


  render() {
    return (
      <div className="container">

        <img src={logo} className="logo" />

        <h1 className="app-title">
          TLP TODO App
        </h1>

        <div className="main">
          Add an Item...
          <br />
          <input
            required
            type="text"
            id = "todo"
            className="form-control input-text"
            placeholder="Write a TODO"
            onChange={e => this.updateInput(e.target.value)} />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.addItem(this.state.newItem);
              document.getElementById("todo").value = "";
              this.setState({
                newItem: ""
              })
            }}
            disabled={!this.state.newItem.length}
          >Add TODO </button>
        </div>
        <div className="main-list" >
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id} className="list-item">

                  <input
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    id="checkBox"
                    onChange={() => { }}
                  />
                  {item.value}
                  <button
                    onClick={() => { this.deleteItem(item.id) }}
                    className="btn btn-danger btn-delete">
                    Delete
                </button>

                </li>
              )
            })}
            
          </ul>
        </div>


      </div>
    )
  }
}























// function App() {
//   return (
//     <div className="App" >
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//       <p>Learn ReactJs</p>
//       </header>

//     </div>
//   );

// }

export default App;