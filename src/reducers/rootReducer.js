const rootReducer = (state, action) => {
    switch (action.type) {
        case "regionAction":
            return {
                ...state,
                region: action.payload
            };
        case "countryAction":
            return {
                ...state,
                country: action.payload
            };
        case "resultAction":
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer