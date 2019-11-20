const initState = {
  projects: [
    {
      id: 1,
      title: "help me find peach",
      content: "bla bla bla"
    },
    {
      id: 2,
      title: "collect all the start",
      content: "bla bla bla"
    },
    {
      id: 3,
      title: "eeg hunt with yoshi",
      content: "bla bla bla"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log("created project", action.project);
      return state;
    case 'CREATE_PROJECT_ERR':
      console.log("create project err", action.err);
      return state;
    default: return state;
  }
}

export default projectReducer;