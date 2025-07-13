import React from 'react';
import PokeCardSkeleton from './PokeCardSkeleton';

class PokeList extends React.Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-2 gap-6 w-full my-4 lg:grid-cols-4 md:grid-cols-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <PokeCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default PokeList;
