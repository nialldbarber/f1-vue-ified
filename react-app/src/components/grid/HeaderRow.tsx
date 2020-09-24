import React from 'react';
import {RowContainer} from '../../views/AllDrivers';

const HeaderRow = () => {
  return (
    <div className="grid-container">
      <RowContainer>
        <div className="row">
          <div>Name</div>
          <div>Age</div>
          <div>Country</div>
          <div>Team(s)</div>
          <div>Poles</div>
          <div>Wins</div>
          <div>Championship(s)</div>
        </div>
      </RowContainer>
    </div>
  );
};

export default HeaderRow;
