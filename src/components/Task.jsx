import { useState } from "react";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import SortIcon from "@material-ui/icons/Sort";

const Taskboard = ({
  tasks,
  tasksPerPage,
  setTasks,
  indexOfFirstPost,
  indexOfLastPost,
}) => {
  const [desc, setDesc] = useState(null); //Desciption
  const [priority, setPriority] = useState(null); //Priority
  const [assignedTo, setAssignedTo] = useState(null);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(null); //Desciption
  const [hideResponse, setResponse] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [hideModal, sethideModal] = useState(true);
  const [hideAddForm, sethideAddForm] = useState(true);

  const addHandler = async (event) => {
    event.preventDefault();

    const task = {
      id: Date.now(),
      text: desc,
      date: date,
      assigned: checked,
      assignedTo: assignedTo,
      priority: priority,
    };

    const postTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();

      setTasks([...tasks, data]);
      setSubmitted(!submitted);
      return data;
    };

    postTasks();

    setTimeout(() => {
      setResponse(!hideResponse);
      setSubmitted(!submitted);
    }, 1000);

    setTimeout(() => {
      setResponse(!hideResponse);
    }, 1500);
  };

  const deleteHandler = async (id, task) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    const response = await fetch("http://localhost:5000/deleted", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();

    const filter = tasks.filter((task) => task.id !== id);
    setTasks(filter);
    console.log("Deleted", id);

    return data;
  };

  const sortHandler = (event) => {
    event.target.value === "date" ? dateSortHandler() : prioritySortHandler();
  };

  const dateSortHandler = () => {
    const sortByDate = tasksPerPage.sort((a, b) =>
      a.date > b.date ? 1 : b.date > a.date ? -1 : 0
    );

    setTasks(sortByDate);
    setSubmitted(!submitted);
  };

  const prioritySortHandler = () => {
    const sortByPriority = tasksPerPage.sort((prev, next) =>
      next.priority > prev.priority ? 1 : -1
    );

    setTasks(sortByPriority);
    console.log(sortByPriority);
    setSubmitted(!submitted);
  };

  const editHandler = (id) => {
    console.log("Editing", id);
  };

  return (
    <div id="Tasks">
      <div
        style={{
          marginTop: 21,
          marginBottom: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SortIcon
          onClick={() => {
            sethideModal(!hideModal);
          }}
        />

        <div
          style={{
            background: "teal",
            Height: 90,
            paddingTop: 3,
            color: "lightblue",
            borderRadius: 9,
          }}
          className={`${hideModal ? "hide" : ""}`}
        >
          <select id="sortselectbox" onChange={sortHandler}>
            <option value="date">By Date</option>
            <option value="priority">By Priority</option>
          </select>
        </div>
        <button id="button" onClick={() => sethideAddForm(!hideAddForm)}>
          {hideAddForm === true ? "+" : "-"}
        </button>
      </div>

      <div id="addTaskform" className={`${hideAddForm ? "hide" : ""}`}>
        <h1>Add A Task</h1>
        <hr />
        <form id="form-control">
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Task Description"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
          <label>Select Priority </label>
          <select
            className="priority"
            onChange={(e) => {
              console.log(e);
              setAssignedTo(e.target.name);
              setPriority(e.target.value);
            }}
            placeholder="None"
          >
            <option name="None" value="0">
              None
            </option>
            <option name="Hei God" value="4">
              Hei God!!
            </option>
            <option name="Omo" value="3">
              Omo!!
            </option>
            <option name="Shebi Time Still Dey" value="2">
              Shebi Time Still Dey
            </option>
            <option name="Maybe Later" value="1">
              Maybe Later
            </option>
          </select>
          <br />
          <label>Set A Reminder</label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <br />
          <input type="checkbox" onChange={(e) => setChecked(!checked)} />
          <label>Set Reminder</label>
          <br />
          <button id="button" onClick={addHandler}>
            Add
          </button>
        </form>

        <br />
        <div className={`uiResponse ${hideResponse ? "hide" : ""}`}>Added!</div>
      </div>

      <p style={{ float: "right" }}>
        Showing {indexOfFirstPost} - {indexOfLastPost} of {tasks.length} Tasks
      </p>

      {tasks.length > 0
        ? tasksPerPage.map((task) => (
            <table>
              <tr>
                <td>
                  <div
                    className="taskbox"
                    contentEditable="true"
                    onDoubleClick={() => editHandler(task.id)}
                    key={task.id}
                  >
                    {task.text}

                    <button
                      className="delete"
                      style={{ float: "right" }}
                      onClick={() => deleteHandler(task.id, task)}
                    >
                      <CloseIcon
                        style={{ float: "right", position: "relative" }}
                      />
                    </button>

                    <br />
                    <h5>{task.date}</h5>
                    <br />
                    <h4>{task.assignedTo}</h4>
                  </div>
                </td>
              </tr>
            </table>
          ))
        : "NO AVAILABLE TASKS <>"}
    </div>
  );
};

export default Taskboard;
