import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSaGaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import thunk from "redux-thunk";
import history from "../history";
import { routerMiddleware } from "connected-react-router";
import TokenService from "../servics/TokenService";

const create = () => {
    const token = TokenService.get();

    const sagaMiddleware = createSaGaMiddleware();

    const store = createStore(
        reducer(history),
        {
            auth: {
                token,
                loading: false,
                error: null,
            },
        },
        composeWithDevTools(
            applyMiddleware(
                sagaMiddleware,
                thunk.withExtraArgument({ history })
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default create;
