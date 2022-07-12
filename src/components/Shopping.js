import React, { useEffect, useState } from 'react'

const Shopping = () => {

    const [apiData , setApiData] = useState([])

   const getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    setApiData(await response.json());
   }

   useEffect(() => {
      getData()
   },[])

   let myStyle = {
     width : "18rem"
   }

  return (
    <div>
      <hr/>
      {apiData.map((curele) => {
          return (
            <>
            
            <div class="card" style={myStyle}>
            <div class="row">
  <div class="column"></div>
      <img src={curele.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{curele.description.slice(0,12)}</h5>
        <p class="card-text"><b><i>{curele.category}</i> </b></p>
        <b>Price : ${curele.price}</b><br/>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
      </div>
</div>
            </>
          )
      })}
    </div>
  )
}

export default Shopping
