// src/components/OptimizedImage.tsx
interface OptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	width?: number;
	height?: number;
	loading?: "eager" | "lazy";
}

const OptimizedImage = ({
	src,
	alt,
	className,
	width,
	height,
	loading = "lazy",
}: OptimizedImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			width={width}
			height={height}
			loading={loading}
			decoding="async"
			style={{
				objectFit: "cover",
				aspectRatio: width && height ? `${width}/${height}` : undefined,
			}}
		/>
	);
};

export default OptimizedImage;
