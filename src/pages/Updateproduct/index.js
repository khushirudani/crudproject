 import { Formik, Field, ErrorMessage, Form } from "formik";
 import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
 import { useNavigate, useParams } from "react-router-dom";
import { getproduct, updateproduct } from "../../actions/update";
import { useEffect } from "react";

 function Updateproduct() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const product = useSelector((state) => state?.getReducer?.product);
   //const update=useSelector((state)=> state?.updateReducer?.product);

   useEffect(() => {
     dispatch(getproduct(id))
       .then((res) => console.log(res))
       .catch((err) => console.log(err));
       // eslint-disable-next-line
     console.log("values", product);
   }, []);
   return (
     <>
       <div></div>
       <div style={{ marginLeft: 15 + "em" }}>
         <h1>Updateproduct</h1>
         <Formik
           initialValues={{
             prod_name: product?.prod_name,
             prod_description: product?.prod_description,
             prod_price: product?.prod_price,
             prod_quantity: product?.prod_quantity,
           }}
           enableReinitialize={true}
           validationSchema={Yup.object().shape({
             prod_name: Yup.string().min(2, "Too Short!").max(100, "Too Long!"),

             prod_description: Yup.string()
               .min(2, "Too Short!")
               .max(100, "Too Long!"),
           })}
           onSubmit={(values) => {
             const data = {
               prod_name: values?.prod_name,
               prod_description: values?.prod_description,
               prod_price: values?.prod_price,
              prod_quantity: values?.prod_quantity,
             };

             dispatch(updateproduct(id, data))
               .then((res) => console.log("update", res))
               .then((res) => navigate("/viewproduct"))
               .catch((err) => console.log(err));
             console.log("values", values);
             console.log("data", data);
           }}
         >
           {({ errors, status, touched }) => (
             <Form>
               <div className="form-group">
                 <Field
                   name="prod_name"
                   type="text"
                   placeholder="prod_name"
                   className={
                     "form-control" +
                     (errors.prod_name && touched.prod_name ? " is-invalid" : "")
                   }
                 />
                 <ErrorMessage
                   name="prod_name"
                   component="div"
                   className="invalid-feedback"
                 />
                 <br></br>
               </div>

               <div className="form-group">
                 <Field
                   name="prod_description"
                   type="text"
                   placeholder="prod_description"
                   className={
                     "form-control" +
                     (errors.prod_description && touched.prod_description
                       ? " is-invalid"
                       : "")
                   }
                 />
                 <ErrorMessage
                   name="prod_description"
                   component="div"
                   className="invalid-feedback"
                 />
                 <br></br>
               </div>

               <div className="form-group">
                 <Field
                   name="prod_price"
                   type="text"
                   placeholder="prod_price"
                   className={
                     "form-control" +
                     (errors.prod_price && touched.prod_price
                       ? " is-invalid"
                      : "")
                   }
                 />
                 <ErrorMessage
                   name="prod_price"
                   component="div"
                   className="invalid-feedback"
                 />
                 <br></br>
               </div>

              <div className="form-group">
                 <Field
                   name="prod_quantity"
                  type="text"
                   placeholder="prod_quantity"
                  className={
                     "form-control" +
                     (errors.prod_quantity && touched.prod_quantity
                       ? " is-invalid"
                       : "")
                  }
                 />
                 <ErrorMessage
                   name="prod_quantity"
                component="div"
                   className="invalid-feedback"
                 />
                 <br></br>
               </div>

              <button type="submit">Submit</button>
               <button type="reset">Reset</button>
             </Form>
           )}
         </Formik>
       </div>
     </>
   );
 }

 export default Updateproduct;


