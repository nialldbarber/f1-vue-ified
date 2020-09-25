import React, {FC} from 'react';
import {getAge} from '../../utils';
import TeamRow from './TeamRow';

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
      <TeamRow teams={teams} />
      <div>{poles}</div>
      <div>{wins}</div>
      <div>{championships}</div>
    </div>
  );
};

export default Row;
