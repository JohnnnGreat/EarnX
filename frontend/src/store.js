const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
