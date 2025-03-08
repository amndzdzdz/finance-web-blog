import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CardGroup.module.css";
import Link from "next/link";

const CardGroup = ({ cards }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-12 mb-4 shadow-lg p-3 bg-white rounded"
          >
            <div className={`card flex-md-row ${styles.customCard}`}>
              {/* Alternating image position */}
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-4">
                    <img
                      className="card-img img-fluid"
                      src={card.thumbnailUrl}
                      alt="Card"
                    />
                  </div>
                  <div className="col-md-8 card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.description}</p>
                    <Link
                      href={{
                        pathname: "/blogs",
                        query: { id: card.id },
                      }}
                      className="btn btn-outline-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-8 card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.description}</p>
                    <Link
                      href={{
                        pathname: "/blogs",
                        query: { id: card.id },
                      }}
                      className="btn btn-outline-primary"
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="card-img img-fluid"
                      src={card.thumbnailUrl}
                      alt="Card"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
