import React from 'react';

import './style.css';

const ListView = (props) => {
  return (
    <ul className="custom-list">
      {props.bids.length > 0
        ? props.bids.map((bid) => {
            return (
              <li className="cutom-list-element" key={bid.id}>
                {bid.driver.first_name}: ${bid.amount}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default ListView;
