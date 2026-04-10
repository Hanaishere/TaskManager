import { useEffect, useState } from "react";
import { getTasks, addTask, toggleTask, deleteTask } from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      const candidate = res?.data;
      const rawTasks = Array.isArray(candidate)
        ? candidate
        : Array.isArray(candidate?.tasks)
          ? candidate.tasks
          : [];
      setTasks(
        rawTasks.map((task) => ({
          ...task,
          id: task?.id ?? task?._id,
        }))
      );
    } catch (err) {
      console.error("loadTasks failed", err);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Error loading tasks";
      alert(message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    if (!title) return alert("Enter title");

    try {
      await addTask({ title });
      setTitle("");
      loadTasks();
    } catch (err) {
      console.error("addTask failed", err);
      const message =
        err?.response?.data?.message || err?.message || "Error adding task";
      alert(message);
    }
  };

  return (
    <div className="tm-page">
      <div className="tm-card">
        <header className="tm-header">
          <h2 className="tm-title">Task Manager</h2>
          <div className="tm-count">{tasks.length} tasks</div>
        </header>

        <div className="tm-form">
          <input
            className="tm-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task..."
          />
          <button className="tm-button" onClick={handleAdd} disabled={!title}>
            Add
          </button>
        </div>

        <div className="tm-list">
          {tasks.length === 0 ? (
            <div className="tm-empty">No tasks yet.</div>
          ) : (
            tasks.map((task) => (
              <div className="tm-item" key={task.id ?? task.title}>
                <p
                  className={
                    task.completed
                      ? "tm-itemTitle tm-itemTitle--done"
                      : "tm-itemTitle"
                  }
                  title={task.title}
                >
                  {task.title}
                </p>

                <div className="tm-actions">
                  <button
                    className="tm-iconBtn"
                    type="button"
                    aria-label="Toggle complete"
                    onClick={async () => {
                      try {
                        await toggleTask(task.id);
                        loadTasks();
                      } catch (err) {
                        console.error("toggleTask failed", err);
                        const message =
                          err?.response?.data?.message ||
                          err?.message ||
                          "Error updating task";
                        alert(message);
                      }
                    }}
                  >
                    ✔
                  </button>
                  <button
                    className="tm-iconBtn"
                    type="button"
                    aria-label="Delete task"
                    onClick={async () => {
                      try {
                        await deleteTask(task.id);
                        loadTasks();
                      } catch (err) {
                        console.error("deleteTask failed", err);
                        const message =
                          err?.response?.data?.message ||
                          err?.message ||
                          "Error deleting task";
                        alert(message);
                      }
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;