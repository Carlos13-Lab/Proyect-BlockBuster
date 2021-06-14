const createStore = (reducer, initialState) => {
    let state = initialState;

    let updater = () => { };

    const getState = () => {
       
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        updater();
    };

    const subscribe = (listener) => {
        updater = listener;
    };

    return {
        getState,
        dispatch,
        subscribe,
    };
};


export {
    createStore,
}