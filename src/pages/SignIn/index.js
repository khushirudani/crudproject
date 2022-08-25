import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../../actions/auth';
import { Formik , Field,Form,ErrorMessage} from "formik";
import * as Yup from 'yup'
import './signin.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
        <div style={{marginLeft: 15 + 'em'}}>
            In SignIn <br />
            <Formik
    initialValues={{
                 email:'',
                 password:'cgx0fc',
    }}
    validationSchema={ Yup.object().shape({
      email: Yup.string()
      .required()
      .email('Invalid email'),

      
})}
    onSubmit={(values)=>{
        const data={
            email:values?.email,
            password:values?.password
        }
        dispatch(doLogin(data))
        .then(res => navigate('/dashboard'))
                .catch(res => console.log(res))
        
        
        console.log('value',data);
    }}>
   {({ errors, status, touched }) => (
      <Form>
        <div className="form-group">
        <Field name='email' type="email" placeholder='Email' className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
        <ErrorMessage name="email"  component='div' className="invalid-feedback" /><br></br>
        </div>

        <div className="form-group">
        <Field name='password' type="password" placeholder='password' className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
        <ErrorMessage name="password"  component='div' className="invalid-feedback" /><br></br>
        </div>

        
        <button type="submit">Login</button>
        
      </Form>
   )}
    </Formik> 

    
    </div>
          
        </>
    );
}

export default SignIn;