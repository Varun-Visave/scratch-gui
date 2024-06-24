import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';

const SET_STAGE_SIZE = 'scratch-gui/StageSize/SET_STAGE_SIZE';
const TOGGLE_COL_FLOW = 'scratch-gui/StageSize/TOGGLE_COL_FLOW';
const TOGGLE_DISPLAY_CSS = 'scratch-gui/StageSize/TOGGLE_DISPLAY_CSS';

const initialState = {
    stageSize: STAGE_DISPLAY_SIZES.large,
    colFlow: false,
    display:false,
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_STAGE_SIZE:
        return {
            stageSize: action.stageSize
        };
    case TOGGLE_COL_FLOW:
        return {
            ...state,
            colFlow: !state.colFlow
        };
    case TOGGLE_DISPLAY_CSS:
        return {
            ...state,
            display: !state.display
        };
    default:
        return state;
    }
};

const setStageSize = function (stageSize) {
    return {
        type: SET_STAGE_SIZE,
        stageSize: stageSize
    };
};

const toggleColFlow= () =>({
        type: TOGGLE_COL_FLOW
});
const toggleDisplayCss= () =>({
        type: TOGGLE_DISPLAY_CSS
});

export {
    reducer as default,
    initialState as stageSizeInitialState,
    setStageSize,
    toggleColFlow,
    toggleDisplayCss
};
