import { apiRequest } from "../configs/apiMiddleware";

const getRecipes = () => {
  return apiRequest("GET", `/recipe/`);
};

const getRecipe = (id) => {
    return apiRequest("GET", `/recipe/${id}`);
};

const getuserRecipes = (id) => {
  return apiRequest("GET", `/recipe/user/${id}`);
};

const insertRecipe = (body) => {
    return apiRequest("POST", "/recipe/", body);
  };

  const updateRecipe = (id,body) => {
    return apiRequest("PUT", `/recipe/${id}`, body);
  };

  const deleteRecipe = (id) => {
    return apiRequest("DELETE", `/recipe/${id}`);
  };


export default {
  getRecipes,
  getRecipe,
  insertRecipe,
  updateRecipe,
  getuserRecipes,
  deleteRecipe


}