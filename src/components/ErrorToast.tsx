import React from 'react';

interface ErrorToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

interface ErrorToastState {
  isAnimating: boolean;
}

class ErrorToast extends React.Component<ErrorToastProps, ErrorToastState> {
  private timeoutId: number | null = null;

  constructor(props: ErrorToastProps) {
    super(props);
    this.state = {
      isAnimating: false,
    };
  }

  componentDidMount() {
    if (this.props.isVisible) {
      this.showToast();
    }
  }

  componentDidUpdate(prevProps: ErrorToastProps) {
    if (!prevProps.isVisible && this.props.isVisible) {
      this.showToast();
    }

    if (prevProps.isVisible && !this.props.isVisible) {
      this.hideToast();
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  showToast = () => {
    this.setState({ isAnimating: true });

    this.timeoutId = setTimeout(() => {
      this.props.onClose();
    }, 5000);
  };

  hideToast = () => {
    this.setState({ isAnimating: false });
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return (
      <div
        className={`fixed bottom-4 right-4 z-50 max-w-sm w-full transition-all duration-300 transform ${
          this.state.isAnimating
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-red-600/90 border border-red-500 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="flex items-start p-4">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-red-200 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-semibold text-white">Error</h3>
              <p className="text-sm text-red-100 mt-1">{this.props.message}</p>
            </div>
            <button
              onClick={this.handleClose}
              className="flex-shrink-0 ml-4 text-red-200 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorToast;
