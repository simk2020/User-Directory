import axios from "axios";

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
