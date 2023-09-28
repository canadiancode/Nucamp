import { useState } from 'react';
import { Button, Modal, ModalHeader, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';

const CommentForm = ({ campsiteId }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        }

        setModalOpen(false);

    }

    return (
        <>
            <Button outline={false} onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <Formik 
                    initialValues={{
                        rating: undefined,
                        author: '',
                        commentText: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateCommentForm}
                >
                    <Form className='m-3'>
                        <FormGroup>
                            <Label md='1' htmlFor='rating'>Rating</Label>
                        </FormGroup>
                        <Field
                            name='rating'
                            as='select'
                            className='form-control'
                            md='10'
                        >
                            <option>Select...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Field>
                        <ErrorMessage name='rating'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        <FormGroup>
                            <Label md='10' htmlFor='author'>Your Name:</Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='commentText'>Comment</Label>
                            <Field
                                name='commentText'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </FormGroup>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </Modal>
        </>
    );    
}

export default CommentForm;