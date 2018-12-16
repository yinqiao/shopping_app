import React from 'react'
import {
  Row,
} from 'antd';
import Item from './item';
import { arrayChunk } from './utils';

function ProductsContainer(props) {
  const {
    products,
    qty,
    addCart,
  } = props;

  const goodsList = arrayChunk(products, 3);

  if (products.length != 0) {
    return (
      <div>
        {
          goodsList.map((row, rIndex) => (
            <Row
              type="flex"
              key={`row-${rIndex}`}>
              {
                row.map((item, index) => (
                  <Item
                    addToCart={addCart}
                    quantity={qty[index]}
                    source={item.path}
                    key={index}
                    index1={index}
                    name={item.name} />
                ))
              }
            </Row>
          ))
        }
      </div>
    )
  }
  return (
    <Row>
      抱歉，没有找到商品！
    </Row>
  )
}

export default ProductsContainer
