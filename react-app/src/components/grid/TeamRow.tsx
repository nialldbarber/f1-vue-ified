import React, {FC, useState, useEffect} from 'react';

interface TeamRowProps {
  teams?: string | undefined;
}

const TeamRow: FC<TeamRowProps> = ({teams}) => {
  const [output, setOutput] = useState('');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setOutput(teams[0]);
    if (teams?.length === 1) {
      setOutput(teams[0]);
    }
  }, []);

  useEffect(() => {
    const int = setInterval(() => {
      if (teams[current] === undefined) {
        setCurrent(0);
        setOutput(teams[0]);
      } else {
        setOutput(teams[current]);
      }
      setCurrent((c) => c + 1);
    }, 2000);

    return () => clearInterval(int);
  }, []);

  return (
    <div>
      <p>{output}</p>
    </div>
  );
};

export default TeamRow;
