import { Component } from "react";
export default class Task extends Component {
  constructor() {
    super();
    this.state = { Task: "", Duration: "" };
    this.handler = () => {
      let task = document.getElementById("task").value;
      this.setState({ Task: task });
      let dur = document.getElementById("dur").value;
      this.setState({ Duration: dur });
      let table = document.getElementById("table");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = task;
      cell2.innerHTML = dur;
    };
  }
  render() {
    return (
      <>
        <form>
          <label for="task">Enter task Here : &nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input id="task" type="text" placeholder="Enter Task" />
          <br />
          <br></br>

          <label for="dur">Enter task Here : &nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input id="dur" type="text" placeholder="Enter Duration"></input>

          <br></br>
          <br></br>
          <input
            type="button"
            onClick={this.handler}
            name="Click!"
            value={"Click!"}
          />
        </form>

        <table
          id="table"
          className="center"
          style={{
            marginLeft: "46%",
          }}
        >
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </>
    );
  }
}
