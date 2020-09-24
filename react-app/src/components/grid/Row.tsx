import React, {FC} from 'react';
import {getAge} from '../../utils';

export interface RowProps {
  name?: string;
  born?: string;
  died?: string;
  country?: string;
  teams?: string;
  poles?: string;
  wins?: string;
  championships?: string;
  styleType?: string;
}

const Row: FC<RowProps> = ({
  name,
  born,
  died,
  country,
  teams,
  poles,
  wins,
  championships,
  styleType,
}) => {
  const age = getAge(born, died);

  return (
    <div className={styleType}>
      <div>{name}</div>
      <div style={{color: died ? 'red' : ''}}>{age}</div>
      <div>{country}</div>
      <div>{teams}</div>
      <div>{poles}</div>
      <div>{wins}</div>
      <div>{championships}</div>
    </div>
  );
};

export default Row;
