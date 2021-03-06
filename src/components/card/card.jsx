import React from "react";
import  "./card.scss";
import { Button, Icon, Item } from "semantic-ui-react";
const Card = (props) => {
    const item = props.product;
  return (
    
      <div className="card-container" onClick={() => {}}>
        <img
          className="image"
          src={item.image}
        />
        <h4 className="name">{item.name}</h4>
        <p className="email d-flex">
          Hãng: <span className="ml-1 text-success font-weight-bold">{item.brand}</span>
        </p>
        <p className="email d-flex">
          Chất liệu:{" "}
          <span className="ml-1 text-success font-weight-bold">
            {item.chip}
          </span>
        </p>
        <p className="email d-flex">
          Price: {item.price} <span className="ml-1 text-success font-weight-bold"></span>
        </p>
        
        {/* <button onClick={() => { }} className="btn-success">
              Mua ngay
            </button> */}
        <Button onClick={() => {}} color="green">
          <Icon name="eye" /> Xem sản phẩm
        </Button>
      </div>
    
  )
};

export default Card;