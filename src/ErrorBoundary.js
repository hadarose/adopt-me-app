import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to go back to the home page or kindly wait 5 seconds
        </h1>
      );
    }

    // if no error - this component is just a pass through and redirects to the comps that follow
    return this.props.children;
  }
}

export default ErrorBoundary;
