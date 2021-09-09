import { useState } from "react";

const CurrentPage = ({ tasks, deletedTask }) => {
  const [category] = useState({
    active: tasks.length,
    completed: 2,
    archived: 5,
  });

  const ActivefilterHandler = (e) => {
    console.log(e);
    console.log("Good");
  };

  return (
    <div id="Tasks">
      <div id="Tabs">
        <ul style={{ fontSize: 40 }}>
          <li>
            <button className="black" onClick={() => ActivefilterHandler}>
              Total [{tasks.length}]
            </button>
          </li>
          <li>
            <button className="seagreen" onClick={() => ActivefilterHandler}>
              Active [{tasks.length}]
            </button>
          </li>
          <li>
            <button className="grey">Completed [{category.completed}]</button>
          </li>

          <li>
            <button className="red">Closed [{deletedTask.length}]</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentPage;
