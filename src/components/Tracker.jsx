import { useState, useEffect } from "react";
import Tags from "./Tags";
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import CurrentPage from "./CurrentPage";
import PostsPagination from "./PostsPagination";

const Tracker = () => {
  const [tasks, setTasks] = useState([]);
  const [deletedTask, setDeletedTasks] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      const deletedTasks = await fetchDeletedTasks();
      setTasks(tasksFromServer);
      setDeletedTasks(deletedTasks);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchDeletedTasks = async () => {
    const res = await fetch("http://localhost:5000/deleted");
    const data = await res.json();
    return data;
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tasks.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber, e) => {
    console.log(e);
    SetCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  return (
    <div>
      <Header />
      <CurrentPage tasks={tasks} deletedTask={deletedTask} />

      <div className="displaybox">
        <span>
          <Tags tasks={tasks} setTasks={setTasks} />
          <Task
            tasks={tasks}
            tasksPerPage={currentPosts}
            setTasks={setTasks}
            indexOfFirstPost={indexOfFirstPost}
            indexOfLastPost={indexOfLastPost}
            currentPage={currentPage}
            postsPerPage={postsPerPage}
          />
        </span>
        <span>
          <PostsPagination
            postsPerPage={postsPerPage}
            totalPosts={tasks.length}
            paginate={paginate}
          />
        </span>
      </div>

      <div style={{ height: 150, position: "relative" }}></div>
      <Footer />
    </div>
  );
};

export default Tracker;
