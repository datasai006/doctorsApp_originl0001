import axios from "axios";

const API_URL = "https://fierce-springs-81544-0dc624781a51.herokuapp.com/api/departments";

// Create an Axios instance (optional but recommended)
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getDepartments = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        console.error("Error fetching departments:", error.message);
        throw error;
    }
};

export const createDepartment = async (name) => {
    try {
        const response = await api.post("/", { name });
        return response.data;
    } catch (error) {
        console.error("Error creating department:", error.message);
        throw error;
    }
};

export const updateDepartment = async (id, name) => {
    try {
        const response = await api.put(`/${id}`, { name });
        return response.data;
    } catch (error) {
        console.error(`Error updating department with ID ${id}:`, error.message);
        throw error;
    }
};

export const deleteDepartment = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting department with ID ${id}:`, error.message);
        throw error;
    }
};
