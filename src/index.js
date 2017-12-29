import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: 'Internet', amount: 6000 }));
store.dispatch(addExpense({ description: 'Utilities', amount: 10300, createdAt: 123 }));
store.dispatch(addExpense({ description: 'Rent', amount: 82000 }));
store.dispatch(addExpense({ description: 'Phone bill', amount: 6300 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
