import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid/Grid';
import QuestionsListContainer from './questions/QuestionsListContainer';
import TagFiltersContainer from './tagFilter/TagFiltersContainer';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <header>
                    <h1>Open Questions</h1>
                </header>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <TagFiltersContainer />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <section>
                            <QuestionsListContainer />
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
