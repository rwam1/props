import React from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
const Cards = () => {
  const cards = [
    { id: 1, title: "title 1", image: image1 },
    { id: 2, title: "title 2", image: image2 },
    { id: 3, title: "title 3", image: image3 },
  ];

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {cards.map((item, i) => {
            console.log(item);
            
            return (
              <div className="col-md-4" key={item.id} >
                <div className="card">
                  <img src={item.image} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">text</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
