import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteproduct } from "../../actions/delete";
import { viewproduct } from "../../actions/view";
//import ScrollToTop from "../../components/common/scroll";

function Viewproduct({Active}) {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [Data,setData]=useState();
  //const product = useSelector((state) => state?.viewReducer?.product);

  //console.log(product, "product------");
  console.log("props",Active);
  useEffect(() => {
    show()
  }, []);

 

  function deletedata(id) {
    const data = {
      id: id,
    };
    dispatch(deleteproduct(data))
      .then((res) => {
         show()
       //    alert(res)
      })
      .catch((err) => console.log(err));
      //show()
  }
  function Updateproduct(id) {
    navigate('/updateproduct/'+id)
  }
  function show(){
    dispatch(viewproduct())
    .then((res) => { 
    let data=res;
    const results = data.filter((data) =>
      data.isDeleted !== true)
      console.log("RES", results)
       setData(results)
  })
    //.then(res => alert('Done...'+JSON.stringify(res)))
    .catch((err) => console.log("error", err));
  //console.log("product", product);
  }
 function scroll(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
 }
  return (
    <>
      <h1>Viewproduct</h1>
      <table>
        <thead>
          <tr>
            <th>
              <h4>No.</h4>
            </th>
            <th>
              <h4>Product Name</h4>
            </th>
            <th>
              <h4>Product Description</h4>
            </th>
            <th>
              <h4>Product Price</h4>
            </th>
            <th>
              <h4>Product Quantity</h4>
            </th>
            <th>
              <h4>Product Image</h4>
            </th>
            <th colSpan={2}>
              <h4>Option</h4>
            </th>
          </tr>
        </thead>
        {Data?.map((val, i) => (
          <tbody key={i}>
            <tr>
              <td>{i+1}</td>
              <td>{val.prod_name}</td>
              <td>{val.prod_description}</td>
              <td>{val.prod_price}</td>
              <td>{val.prod_quantity}</td>
              <td>
                <img src={val.image? "http://202.131.117.92:7152/uploads/" + val.image: "image.jpeg"} style={{ height: 5 + "em" }}/>
              </td>
              <td>
                <button
                  style={{ height: 5 + "em" }}
                  onClick={() => deletedata(val._id)} >
                  Delete
                </button>
              </td>
              <td>
                <button
                  style={{ height: 5 + "em" }}
                  onClick={() => Updateproduct(val._id)}>
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      
     <button onClick={scroll}>scroll</button>
      </>
  );
}

export default Viewproduct;
