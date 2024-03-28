import React from 'react';
import './work.css';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} target='_blank'>
        <img src={item.image} alt="" className='work__img' />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button">
        {item.data && Array.isArray(item.data) && item.data.map((svgString, index) => (
          <div key={index} className="work__svg"  dangerouslySetInnerHTML={{ __html: svgString }} />
        ))}
      </div>
    </div>
  );
};

export default WorkItems;

