import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const DishDetailComponent = (props) => {
  const renderDish = (dish) => {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  const renderComment = (props) => {
    return (
      <div className="col-12 col-sm-7">
        <h2>Comments</h2>
        {props.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.comment}</p>
              <p>
                -- {item.author} {item.date}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return props.dish === null ? (
    <div></div>
  ) : (
    <div className="container">
      <div className="row">
        {renderDish(props.dish)}
        {renderComment(props.dish.comments)}
      </div>
    </div>
  );
};

export default DishDetailComponent;
