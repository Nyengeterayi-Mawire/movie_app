import { configureStore} from '@reduxjs/toolkit';
import moviesReducer from './features/movie';
import userReducer from './features/user';
import notificationsReducer from './features/notifications';
import searchReducer from './features/search';
export const store = configureStore({
    reducer : {
        movies : moviesReducer,
        users : userReducer,
        notifications : notificationsReducer,
        search : searchReducer,
    }
});
