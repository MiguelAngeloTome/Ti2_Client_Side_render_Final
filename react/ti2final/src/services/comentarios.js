import { apiRequest } from "../configs/apiMiddleware";

const getComentRec = (id) => {
  return apiRequest("GET", `/coment/${id}`);
};
const insertComent = (body) => {
  return apiRequest("POST", "/coment/", body);
};

export default {
    getComentRec,
    insertComent,
};