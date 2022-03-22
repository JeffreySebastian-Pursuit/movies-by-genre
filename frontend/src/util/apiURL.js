export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3333"
      : "https://fathomless-tundra-65941.herokuapp.com";
  };