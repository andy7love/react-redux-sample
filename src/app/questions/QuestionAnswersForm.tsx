import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import { Guid } from 'guid-typescript';
import useFormData from '../utils/hooks/useFormData';

export interface AnswerFormData {
    questionId: Guid;
    author: string;
    answer: string;
}

export interface QuestionAnswersFormProps {
    questionId: Guid;
    onSubmitAnswer: (data: AnswerFormData) => void;
}

const StyledPaper = styled(Paper)`
  margin: 20px;
  padding: 20px;
  & > form > div {
      margin: 5px 0;
  }
`;

const QuestionAnswersForm = (props: QuestionAnswersFormProps) => {
    const [formData, handleChange, resetForm] = useFormData({
        author: '',
        answer: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        props.onSubmitAnswer({
            questionId: props.questionId,
            answer: formData.answer,
            author: formData.author
        });
        resetForm();
    }

    return (
        <StyledPaper variant="elevation">
            <form onSubmit={handleSubmit}>
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
                        fullWidth
                        label="Answer"
                        id="answer"
                        name="answer"
                        variant="outlined"
                        multiline
                        rows="4"
                        required={true}
                        value={formData.answer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button aria-label="submit" type="submit" variant="contained">
                        Send
                    </Button>
                </div>
            </form>
        </StyledPaper>
    );
};

export default QuestionAnswersForm;
