// import React, { useState } from 'react'
// import { Container, Form, Row, Col, Button } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { addPasswordAction } from '../../redux/actions'

// const PasswordPage = () => {

//         const dispatch = useDispatch()
//         const [password, setPassword] = useState({
//             password:'',
//             confirmPassword:''
//         })
        
        
//         const formValue =  (event) => {
//             setPassword({
//                 ...password, 
//                 [event.target.name]: event.target.value
//             })
//         }

//         const addPassword = (event) => {
//             event.preventDefault()
//             dispatch(addPasswordAction(password))
//         }
    
//   return (
//     <Container>
//         <Form onSubmit={addPassword}>
//             <Row>
//                 <Col lg={3}>
//                     <Form.Group className="mb-3" controlId="password">
//                         <Form.Control
//                             type="text"
//                             placeholder="password"
//                             name="password"
//                             onChange={formValue}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col lg={3}>
//                     <Form.Group className="mb-3" controlId="confirmPassword">
//                         <Form.Control
//                             type="text"
//                             placeholder="confirm password"
//                             name="confirmPassword"
//                             onChange={formValue}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col lg={3}>
//                     <Button  type="submit" variant="success" className="w-100">
//                         register password
//                     </Button>
//                 </Col>
//             </Row>
//         </Form>
//     </Container> 
//   )
// }

// export default PasswordPage;


import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPasswordAction } from '../../redux/actions';

const PasswordPage = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState({
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const formValue = (event) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!password.password) {
            newErrors.password = 'Password is required';
        }
        if (!password.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }
        if (password.password && password.confirmPassword && password.password !== password.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const addPassword = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            dispatch(addPasswordAction(password));
        }
    };

    return (
        <Container>
            <Form onSubmit={addPassword}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                type="text"
                                placeholder="password"
                                name="password"
                                onChange={formValue}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Control
                                type="text"
                                placeholder="confirm password"
                                name="confirmPassword"
                                onChange={formValue}
                                isInvalid={!!errors.confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            register password
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default PasswordPage;
