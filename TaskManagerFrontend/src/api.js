import axios from "axios";

const API = "http://localhost:8080/tasks";

export const getTasks = () => axios.get(API);
export const addTask = (task) => axios.post(API, task);
export const toggleTask = (id) => axios.patch(`${API}/${id}`);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);