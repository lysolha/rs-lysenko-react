import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center h-[150px] max-w-[300px]">
        <DotLottieReact src="/Pikachu.lottie" loop autoplay />
      </div>
    );
  }
}

export default Loader;
