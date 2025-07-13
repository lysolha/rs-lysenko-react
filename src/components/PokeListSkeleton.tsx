import React from 'react';
import PokeCardSkeleton from './PokeCardSkeleton';

class PokeList extends React.Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-4 gap-6 w-full my-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <PokeCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default PokeList;
