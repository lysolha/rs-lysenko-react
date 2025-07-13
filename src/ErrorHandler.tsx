import React from 'react';

interface ErrorHandlerProps {
  children: React.ReactNode;
}

interface ErrorHandlerState {
  hasError: boolean;
  error?: Error;
}

class ErrorHandler extends React.Component<
  ErrorHandlerProps,
  ErrorHandlerState
> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-white">
            Something went wrong.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorHandler;
