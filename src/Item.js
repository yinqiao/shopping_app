import React, {
  Component
} from 'react'
import {
  Row,
  Button,
  Card,
} from 'antd';

class Picframe extends Component {

  handleClick() {
    this.props.addToCart(this.props.index1);
  }

  render() {
    const {
      name,
      index1,
      source,
      quantity,
    } = this.props;
    const popid = name + index1;
    return (
      <Card
        bodyStyle={{ padding: 0 }}
        style={{
          width: 302,
          marginTop: 10,
          marginRight: 10
        }}>
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{ marginBottom: 10, height: 250 }}>
          <img
            src={source}
            style={{ cursor: 'pointer', width: 300 }}
            data-toggle="modal"
            data-target={`#${popid}`} />
        </Row>
        <Row
          style={{ margin: 10 }}>
          <h3>{name}</h3>
          <h4>剩余库存: {quantity}</h4>
        </Row>
        <Row
          align="middle"
          justify="center"
          type="flex"
          style={{ marginBottom: 10 }}>
          <Button
            onClick={() => this.handleClick()}
            type="primary"
          > 加入购物车 </Button>
        </Row>
        {/* <div
          className="modal fade"
          id={popid}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <img src={source} />
          </div>
        </div> */}
      </Card>
    )
  }
}

export default Picframe
