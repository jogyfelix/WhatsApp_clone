import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {rootSaga} from './saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const middleWareToApply = [sagaMiddleware];
const middleWare = applyMiddleware(...middleWareToApply);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(middleWare),
);

sagaMiddleware.run(rootSaga);
export default Store;
export const Persistor = persistStore(Store);
