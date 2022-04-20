import flights from '../../flights.json'
const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

const data = flights.result.flights;

const initialState = {
    filtered: [],
    filters: {
      sortOrder: 'по возрастанию цены',
      segment: [],
      price: {},
      airline: []
    },
    airlines: {},
    availableAirlines: {},
    paginator: 3
  }

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageBody }],
            }; 
        };
        default:
            return state;
    }

}

export const sendMessage = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody

})




export default filterReducer;