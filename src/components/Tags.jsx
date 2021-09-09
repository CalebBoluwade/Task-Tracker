// import { useState } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Tags = ({ tasks, setTasks }) => {
  // const [heiChecked, isHeiChecked] = useState(false);
  // const [omoChecked, isOmoChecked] = useState(false);
  // const [shebiChecked, isShebiChecked] = useState(false);
  // const [maybeChecked, isMaybeChecked] = useState(false);

  const heiFilter = () => {
    const heiGodSort = tasks.filter((task) => task.assignedTo === "Hei God");
    setTasks(heiGodSort);
    console.log(heiGodSort);
  };

  const omoFilter = () => {
    const omo = tasks.filter((task) => task.assignedTo === "omo");
    console.log(omo);
    setTasks(omo);
  };

  const shebiFilter = () => {
    const shebi = tasks.filter(
      (task) => task.assignedTo === "Shebi Time Still Dey"
    );
    console.log(shebi);
    setTasks(shebi);
  };

  const maybeFilter = () => {
    const maybeLater = tasks.filter(
      (task) => task.assignedTo === "Maybe Later"
    );
    console.log(maybeLater);
    setTasks(maybeLater);
  };

  // const tagsSort = (e) => {

  // };

  return (
    <div id="Tags">
      <h3>
        Priority <ArrowDownwardIcon className="arrow" />
      </h3>
      <br />

      <div className="tagsanimation">
        <label>
          <input type="checkbox" onChange={() => heiFilter()} />
          <br />
          Hei God!!!
        </label>
      </div>
      <br />
      <div className="tagsanimation">
        <label>
          <input type="checkbox" onChange={() => omoFilter()} />
          <br />
          Omo!!!
        </label>
      </div>
      <br />
      <div className="tagsanimation">
        <label>
          <input type="checkbox" onChange={() => shebiFilter()} />
          <br />
          Shebi Time Still dey
        </label>
      </div>
      <br />
      <div className="tagsanimation">
        <label>
          <input type="checkbox" onChange={() => maybeFilter()} />
          <br />
          Maybe Later
        </label>
      </div>
    </div>
  );
};

export default Tags;
