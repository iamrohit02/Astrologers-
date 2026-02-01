import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Crash:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-cosmic-900 text-center text-white">
          <div className="w-24 h-24 mb-6 text-6xl animate-pulse">
            🌑
          </div>
          <h1 className="mb-2 text-2xl font-bold font-display">The Stars Are Misaligned</h1>
          <p className="mb-8 text-slate-400">
            Something went wrong in the cosmic connection.
          </p>
          
          <button
            onClick={this.handleReload}
            className="px-8 py-3 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Reconnect to Cosmos
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
