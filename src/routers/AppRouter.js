import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import ExpenseDashboardComponent from '../components/ExpenseDashBoardComponent';
import HelpComponent from '../components/HelpComponent';
import NotFoundComponent from '../components/NotFoundComponent';
import HeaderComponent from '../components/HeaderComponent';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <Switch>
                <Route path="/" component={ExpenseDashboardComponent} exact={true} />
                <Route path="/create" component={AddExpenseComponent} />
                <Route path="/edit/:id" component={EditExpenseComponent} />
                <Route path="/help" component={HelpComponent} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;