import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QuestionsList, IQuestionListProps } from './QuestionsList';
import Grid from '@material-ui/core/Grid/Grid';
import { TagFilters, ITagItem } from './TagFilters';

const App: React.FC = () => {
  const sampleData: IQuestionListProps = {
    questions: [
      {
        author: 'John Lennon',
        id: 1,
        question: 'This is a sample question?',
        tags: ['react', 'redux', 'css'],
        totalAnswers: 2
      },
      {
        author: 'Jorge Lucas',
        id: 2,
        question: 'This is another sample question?',
        tags: ['relay', 'graphql', 'websockets'],
        totalAnswers: 1
      }
    ]
  };

  const tags: Array<ITagItem> = [
    {
      tag: "react",
      totalQuestions: 2
    },
    {
      tag: "websockets",
      totalQuestions: 4
    },
    {
      tag: "redux",
      totalQuestions: 1
    },
    {
      tag: "relay",
      totalQuestions: 5
    },
    {
      tag: "graphql",
      totalQuestions: 4,
    }
  ];

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <header>
          <h1>Open Questions</h1>
        </header>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TagFilters selected="redux" tags={tags} />
          </Grid>
          <Grid item xs={12} md={9}>
            <section>
              <QuestionsList questions={sampleData.questions} />
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
