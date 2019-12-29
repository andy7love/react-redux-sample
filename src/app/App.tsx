import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import QuestionsListContainer from './questions/QuestionsListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuestionDetailContainer from './questions/QuestionDetailContainer';

const App: React.FC = () => {
    return (
        <Router>
            <CssBaseline />
            <Container maxWidth="md">
                <header>
                    <h1>Open Questions</h1>
                </header>
                <section>
                    <Switch>
                        <Route exact path="/" component={QuestionsListContainer} />
                        <Route path="/:id" component={QuestionDetailContainer} />
                    </Switch>
                </section>
            </Container>
        </Router>
    );
}

export default App;
