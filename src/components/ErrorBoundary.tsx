// src/components/ErrorBoundary.tsx
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						padding: "2rem",
						textAlign: "center",
						background: "var(--lightest)",
						minHeight: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<h1 style={{ color: "var(--darkest)", marginBottom: "1rem" }}>
						Oops! Something went wrong
					</h1>
					<p style={{ color: "var(--dark)", marginBottom: "1rem" }}>
						We're sorry for the inconvenience. Please try refreshing the page.
					</p>
					<button
						onClick={() => window.location.reload()}
						style={{
							background: "var(--primary)",
							color: "white",
							border: "none",
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Refresh Page
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
