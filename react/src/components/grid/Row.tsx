import React, {FC} from 'react';
import {getAge} from '../../utils';

export interface RowProps {
  id?: string;
  name?: string;
  born?: string;
  died?: string;
  country?: string;
  teams?: string;
  poles?: string;
  wins?: string;
  championships?: string;
}

const Row: FC<RowProps> = ({
  id,
  name,
  born,
  died,
  country,
  teams,
  poles,
  wins,
  championships,
}) => {
  const age = getAge(born, died);

  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
};

export default Row;
