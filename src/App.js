import React from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import StarRatings from '../node_modules/react-star-ratings';

const products = [
  {
  name: 'iron',
  rating: 4
},
{
  name: 'heater',
  rating: 5
},
{
  name: 'lamp',
  rating: 2
},
]


const Star = (props) => {
  return(
    <StarRatings
          rating={props.rating}
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
        />
  )
}


const App = () => {

  return (
    <div className="App">
      <ReactBootstrap.Table  stripped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
        {
                  products.map((product,i)=> 
                    <tr className="product-description">
            <td>{product.name}</td>
            <td className = "flex-container">
              <Star rating={product.rating} />        
            </td>
          </tr>
                  )
                }
          
        </tbody>
      </ReactBootstrap.Table>
    </div>
  )
}

export default App;

