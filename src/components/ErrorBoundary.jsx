import React from 'react'

class ErrorBoundary extends React.Component {
    state = {hasError: false, error: null}

    static getDerivedStateFromError(error) {
        return {hasError: true, error: error}
    }

    componentDidCatch(error, errInfo) {
        console.error(error, errInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div style={{
                display: "grid",
                placeItems: "center"
            }}>
                <h1>Error</h1>
                <p>{this.state.error.stack}</p>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary