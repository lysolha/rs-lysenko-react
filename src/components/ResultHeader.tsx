import React from 'react';
import Loader from './ui/Loader';

interface ResultHeaderProps {
  isLoading: boolean;
}

class ResultHeader extends React.Component<ResultHeaderProps> {
  render() {
    return (
      <div className="flex justify-between items-center w-full uppercase text-white h-[150px]">
        <div className="text-2xl font-bold">Search Results:</div>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <img
            className="w-full max-w-[100px] h-auto"
            src="/relax.webp"
            alt="relax"
          />
        )}
      </div>
    );
  }
}

export default ResultHeader;
