import React from 'react';
import { TextField, Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Chip } from '@material-ui/core';
import styled from 'styled-components';
import useFormData from '../utils/hooks/useFormData';
import questionOperations from './duck/operations';
import { connect, ConnectedProps } from 'react-redux';

export interface QuestionFormData {
    author: string;
    tags: Array<string>;
    question: string;
}

const mapDispatch = {
    onSubmitQuestion: (formData: QuestionFormData) =>
        questionOperations.addQuestion(formData.tags, formData.question, formData.author)
};

const connector = connect(
    null,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

const FormDiv = styled('div')`
  width: 100%;
  & > form > div {
      margin: 15px 0;
  }
`;

const TagsDiv = styled('div')`
  margin: 10px;
`;

const QuestionFormContainer = (props: Props) => {
    const [formData, handleChange, resetForm] = useFormData({
        tags: '',
        author: '',
        question: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        props.onSubmitQuestion({
            question: formData.question,
            tags: parseTags(formData.tags),
            author: formData.author
        });
        resetForm();
    }

    const parseTags = (tags: string) => {
        return tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag !== '')
    }

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5">Ask your own question</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <FormDiv>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div>
                            <TextField
                                label="Your name"
                                id="author"
                                name="author"
                                variant="outlined"
                                required={true}
                                value={formData.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Tags"
                                id="tags"
                                name="tags"
                                variant="outlined"
                                helperText="Comma separated tags, eg. 'react, redux, css'"
                                required={true}
                                autoComplete="off"
                                value={formData.tags}
                                onChange={handleChange}
                            />
                            <TagsDiv>
                                {parseTags(formData.tags).map(tag => <Chip key={tag} label={tag} />)}
                            </TagsDiv>
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                label="Question"
                                id="question"
                                name="question"
                                variant="outlined"
                                multiline
                                rows="4"
                                required={true}
                                value={formData.question}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Button aria-label="submit" type="submit" variant="contained">
                                Send
                            </Button>
                        </div>
                    </form>
                </FormDiv>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default connector(QuestionFormContainer);
