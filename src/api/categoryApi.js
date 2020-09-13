import http from "./axiosHttp";
// ----------------------------- category-----------------------------------------------

const getAllCate = () => {
    return http.get("/category");
};

const getCate = id => {
    return http.get(`/category/${id}`);
};

const createCate = data => {
    return http.post("/category", data);
};

const updateCate = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const removeCate = id => {
   
    return http.delete(`/category/${id}`);
};
export default {
    getAllCate,
    getCate,
    createCate,
    updateCate,
    removeCate,
};