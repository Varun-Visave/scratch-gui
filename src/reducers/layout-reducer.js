// layoutReducer.js

const SET_FLOW_ROW = "row";
const SET_FLOW_COLUMN = "column";

const initialState = {
    flow: "row",
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLOW_COLUMN:
            return {
                ...state,
                flow: SET_FLOW_COLUMN,
            };
        case SET_FLOW_ROW:
            return {
                ...state,
                flow: SET_FLOW_ROW,
            };
        default:
            return state;
    }
};

const setFlowColumn = () => ({ type: SET_FLOW_COLUMN });
const setFlowRow = () => ({ type: SET_FLOW_ROW });

export {
    layoutReducer as default,
    initialState as layoutInitialState,
    setFlowColumn,
    setFlowRow
};
