import React from 'react';
import {useQuery} from 'react-query';
import Row from '../components/grid/Row';
import {API} from '../constants';
import {RowProps} from '../components/grid/Row';
import HeaderRow from '../components/grid/HeaderRow';

const AllDrivers = () => {
  const {isLoading, error, data} = useQuery('repoData', () =>
    fetch(API).then((res) => res.json())
  );

  if (isLoading) return <p>...loading</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  console.log(data);

  return (
    <div>
      <HeaderRow />
      {data.map(
        ({
          id,
          name,
          born,
          died,
          country,
          teams,
          poles,
          wins,
          championships,
        }: RowProps) => (
          <Row
            key={id}
            name={name}
            born={born}
            died={died}
            country={country}
            teams={teams}
            poles={poles}
            wins={wins}
            championships={championships}
          />
        )
      )}
    </div>
  );
};

export default AllDrivers;
