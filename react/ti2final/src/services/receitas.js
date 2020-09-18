import { apiRequest } from "../configs/apiMiddleware";

const getRecipes = () => {
  return apiRequest("GET", `/recipe/`);
};

const getRecipe = (id) => {
    return apiRequest("GET", `/recipe//${id}`);
};

const insertRecipe = (body) => {
    return apiRequest("POST", "/recipe/", body);
  };


export default {
  getRecipes,
  getRecipe,
  insertRecipe,
  

}