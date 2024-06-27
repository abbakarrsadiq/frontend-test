import React from 'react';
import './Cards.css';

const Cards = () => {
  const focusAreas = [
    { id: 1, title: "Business Support & Incubation", color: "#333333" },
    { id: 2, title: "On-Demand & As-A-Service", color: "#f66c28" },
    { id: 3, title: "Marketplace & Crowdsourcing", color: "#ff6fc8" },
    { id: 4, title: "Aggregation & Shared Economy", color: "#2d9c9d" },
    { id: 5, title: "Decentralized Economy & Digital Assets", color: "#ff6fc8" },
  ];

  const conceptData = [
    { id: 3, title: "Service Incubator", description: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP" },
    { id: 4, title: "Virtualting", description: "A resource share model that allows companies to share the time of resources (employees, consultants, technical advisers, or influencers) while also splitting the service cost of the resource" },
    { id: 5, title: "Diiming", description: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice" },
  ];

  return (
    <div className="cards-container">
      <div>
        <h2>Our Area of Focus</h2>
        <p>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
        <div className="cards">
          {focusAreas.map((area) => (
            <div key={area.id} className="card" style={{ backgroundColor: area.color }}>
              <div className="card-number">{`0${area.id}`}</div>
              <div className="card-title">{area.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Our Concept Innovations</h2>
        <p>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
        <div className="concept-cards">
          {conceptData.map((concept) => (
            <div key={concept.id} className="concept-card">
              <div className="concept-card-title">{concept.title}</div>
              <div className="card-description">{concept.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
