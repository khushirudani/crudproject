import React, { useState } from 'react'
import {Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addproduct } from '../../actions/add'
import { useNavigate } from 'react-router-dom'
import Viewproduct from '../Viewproduct'

//import { addsuccess } from '../../actions/add'

function Addproduct() {
const dispatch=useDispatch()
const navigate=useNavigate()
const [isActive,setisActive]=useState(false)
  return (
    <>
    <div></div>
    <div style={{marginLeft: 15 + 'em'}}>
    <h1>Addproduct</h1>
    <Formik
    initialValues={{
               prod_name:'',
                prod_description:'',
                 prod_price:'',
                 prod_quantity:'',
                 //image:'',
    }}
    validationSchema={ Yup.object().shape({
      prod_name: Yup.string()
      .required()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!'),
        
      prod_description: Yup.string()
      .required()
       .min(2, 'Too Short!')
       .max(100, 'Too Long!'),
       
      prod_price: Yup.string()
      .required(),

      prod_quantity : Yup.string()
      .required(),

    //    image: Yup.mixed()
    //    .required()
      

})}
    onSubmit={(values)=>{
        const formData = new FormData();
         //formData.append("image", selectedFile,selectedFile.name);
         formData.append("prod_name",values.prod_name);
         formData.append("prod_description",values.prod_description);
         formData.append("prod_price",values.prod_price);
         formData.append("prod_quantity",values.prod_quantity);
// const data={
//     prod_name:values.prod_name,
//     prod_description:values.prod_description,
//     prod_price:values.prod_price,
//     prod_quantity:values.prod_quantity
// }
        dispatch(addproduct(formData))
       console.log('values',values);
     //  console.log('data',FormData.getAll(formData));
       
       //---------------------------
       setisActive(true);
       console.log(isActive);
       <Viewproduct Active={isActive}></Viewproduct>
       navigate("/viewproduct")
    }}
   
    >
   
   {({ errors, status, touched }) => (
      <Form>

        <div className="form-group">
        <Field name="prod_name" type="text" placeholder='prod_name' className={'form-control' + (errors.prod_name && touched.prod_name ? ' is-invalid' : '')} />
        <ErrorMessage name="prod_name"  component='div' className="invalid-feedback" /><br></br>
        </div>

        <div className="form-group">
        <Field name='prod_description' type="text" placeholder='prod_description' className={'form-control' + (errors.prod_description && touched.prod_description ? ' is-invalid' : '')} />
        <ErrorMessage name="prod_description"  component='div' className="invalid-feedback" /><br></br>
        </div>

        <div className="form-group">
        <Field name='prod_price' type="text" placeholder='prod_price' className={'form-control' + (errors.prod_price && touched.prod_price ? ' is-invalid' : '')}/>
        <ErrorMessage name="prod_price"  component='div' className="invalid-feedback" /><br></br>
        </div>

        <div className="form-group">
        <Field name='prod_quantity' type="text" placeholder='prod_quantity' className={'form-control' + (errors.prod_quantity && touched.prod_quantity ? ' is-invalid' : '')}/>
        <ErrorMessage name="prod_quantity"  component='div' className="invalid-feedback" /><br></br>
        </div>

       
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>
   )}
    </Formik> 

    
    </div>
   
    </>
  )
}

export default Addproduct