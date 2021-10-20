const GET_GREETINGS = 'greetings/GET_MESSAGES';

const loadGreetings = (json) => ({
  type: GET_GREETINGS,
  json,
});

const getMessages = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/greetings')
    .then((response) => response.json())
    .then((json) => dispatch(loadGreetings(json)));
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.json.map((greeting) => {
        const {
          id,
          message,
        } = greeting;
        return {
          id, message,
        };
      });
    default:
      return state;
  }
};

export {
  greetingReducer,
  getMessages,
};