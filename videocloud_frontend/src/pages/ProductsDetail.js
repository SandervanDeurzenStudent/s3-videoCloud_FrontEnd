import React, { useEffect, useState, Component } from "react";
import axios from 'axios'
import { useParams } from "react-router";

function ProductsDetail(){
    const { id } = useParams()
    const url = `http://localhost:8080/api/products/${id}`
    const [productsDetail, setProduct] = useState(null)
   
    useEffect(() => {
        axios.get(url)
             .then(Response => {
                  setProduct(Response.data)
            })
    }, [url])
    let content = null;

    if(productsDetail){
        content = 
            <div className="Products">
    
            <table>
          <thead>
            <tr>
            <th>Id:</th>
            <th>Title:</th>
            <th>Description:</th>
            <th>Descriptionsss:</th>
            </tr>
          </thead>

          <tbody>
          {
              <tr key={productsDetail.productId}>
                <td> {productsDetail.productId} </td>
                <td> {productsDetail.productTitle} </td>
                <td> {productsDetail.productDescription} </td>
                <td> {productsDetail.productDescriptions} </td>
              </tr>
          }
          </tbody>
        </table>
       </div>
    }
        
    return (
            content
       );
}
    // class ProductsDetail extends Component {
     
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             productDetailItems: []
    //         }

    //     }
        
    //     componentDidMount() {
         

    //         // fetch(`http://localhost:8080/api/products/`)
    //         //     .then(res => res.json())
    //         //         .then(json => {
    //         //             this.setState({
    //         //                 productDetailItems: json
    //         //             })
    //         //         });
    //     }

    //     render() {

        
    //     }
    // }

export default ProductsDetail;
