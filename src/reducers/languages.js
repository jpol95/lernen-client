const languages = (state = [], action) => {
  switch (action.type) {
    case "IMPORT_LANGUAGES":
      return action.payload;
    default:
      return state;
  }
};

export default languages;
