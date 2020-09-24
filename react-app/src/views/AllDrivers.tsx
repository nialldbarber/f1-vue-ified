import React from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components';
import Row from '../components/grid/Row';
import {API} from '../constants';
import {RowProps} from '../components/grid/Row';
import HeaderRow from '../components/grid/HeaderRow';

export const RowContainer = styled.div`
  .row {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr 3fr 2fr 2fr 2fr;
    min-height: 50px;
    align-items: center;
    border-top: 1px solid #555;
  }
`;

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
          <RowContainer>
            <Row
              styleType="row"
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
          </RowContainer>
        )
      )}
    </div>
  );
};

export default AllDrivers;
