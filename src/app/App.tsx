import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import QuestionsListContainer from './questions/QuestionsListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuestionDetailContainer from './questions/QuestionDetailContainer';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { RootState } from './reducers';
import { selectCurrentTheme } from './themeToggle/duck/selectors';
import { connect, ConnectedProps } from 'react-redux';
import { Header } from './Header';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const mapState = (state: RootState) => ({
    theme: selectCurrentTheme(state)
});

const connector = connect(
    mapState
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

class App extends React.PureComponent<Props> {
    render() {
        return (
            <Router>
                <MUIThemeProvider theme={this.props.theme}>
                    <StyledComponentsThemeProvider theme={this.props.theme}>
                        <CssBaseline />
                        <Container maxWidth="md">
                            <Header />
                            <section>
                                <Switch>
                                    <Route exact path="/" component={QuestionsListContainer} />
                                    <Route path="/:id" component={QuestionDetailContainer} />
                                </Switch>
                            </section>
                        </Container>
                    </StyledComponentsThemeProvider>
                </MUIThemeProvider>
            </Router>
        );
    }
}

export default connector(App);
