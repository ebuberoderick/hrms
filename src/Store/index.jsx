import { combineReducers ,legacy_createStore} from "redux";
import User from "./reducers/UsersReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const config = {
    key: 'hrms_vigilant',
    version:2,
    storage,
}

export default legacy_createStore(
    persistReducer(config,combineReducers({User}))
);