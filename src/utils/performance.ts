// src/utils/performance.ts
export const measureWebVitals = () => {
	// Web Vitals measurement placeholder
	console.log('Performance monitoring ready');
};

export const logNavigationTiming = () => {
	if (typeof window !== "undefined" && "performance" in window) {
		window.addEventListener("load", () => {
			const navigation = performance.getEntriesByType(
				"navigation"
			)[0] as PerformanceNavigationTiming;
			const paintEntries = performance.getEntriesByType("paint");

			console.log("Navigation Timing:", {
				"DNS Resolution":
					navigation.domainLookupEnd - navigation.domainLookupStart,
				"TCP Connection": navigation.connectEnd - navigation.connectStart,
				"Request/Response": navigation.responseEnd - navigation.requestStart,
				"DOM Processing": navigation.domComplete - navigation.domInteractive,
				"Load Complete": navigation.loadEventEnd - navigation.loadEventStart,
			});

			paintEntries.forEach((entry) => {
				console.log(`${entry.name}: ${entry.startTime}ms`);
			});
		});
	}
};
