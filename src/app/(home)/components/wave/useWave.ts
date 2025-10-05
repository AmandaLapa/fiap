import React from "react";

export const useWave = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const canvasRef = React.useRef<HTMLCanvasElement>(null);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const rect = sectionRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const sectionHeight = rect.height;

			const totalScrollArea = windowHeight + sectionHeight;
			const scrolled = windowHeight - rect.top;

			let scrollProgress = 0;

			if (scrolled > 0) {
				const animationCompleteArea = totalScrollArea * 0.5;

				if (scrolled <= animationCompleteArea) {
					scrollProgress = Math.min(
						1,
						scrolled / animationCompleteArea,
					);
				} else {
					scrollProgress = 1;
				}
			}

			setProgress(scrollProgress);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * window.devicePixelRatio;
			canvas.height = rect.height * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		let animationId: number;

		const animate = () => {
			const rect = canvas.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			ctx.clearRect(0, 0, width, height);

			if (progress > 0) {
				const startX = 0;
				const drawableWidth = width;
				const adjustedMaxX = progress * drawableWidth;

				const basePosition = height - 30;

				const points: Array<{ x: number; y: number }> = [];

				for (let x = startX; x <= adjustedMaxX; x += 8) {
					const normalizedX = x / drawableWidth;

					let heightPercent;

					if (normalizedX <= 0.3) {
						const t = normalizedX / 0.3;
						const smoothT = t * t * (3 - 2 * t);
						heightPercent = smoothT * 0.6;
					} else if (normalizedX <= 0.6) {
						const t = (normalizedX - 0.3) / 0.3;
						const smoothT = t * t * (3 - 2 * t);
						heightPercent = 0.6 - smoothT * 0.5;
					} else {
						const t = (normalizedX - 0.6) / 0.4;
						const smoothT = t * t * (3 - 2 * t);
						heightPercent = 0.1 + smoothT * 0.9;
					}
					const waveOffset =
						Math.sin(normalizedX * Math.PI * 8) * 0.01;
					const finalHeightPercent = heightPercent + waveOffset;

					const finalY =
						basePosition - finalHeightPercent * basePosition;

					points.push({ x, y: finalY });
				}

				ctx.beginPath();
				if (points.length > 0) {
					ctx.moveTo(points[0].x, points[0].y);

					for (let i = 0; i < points.length - 1; i++) {
						const currentPoint = points[i];
						const nextPoint = points[i + 1];

						const tension = 0.4;
						const dx = nextPoint.x - currentPoint.x;
						const dy = nextPoint.y - currentPoint.y;

						const cp1x = currentPoint.x + dx * tension;
						const cp1y = currentPoint.y + dy * tension * 0.1;
						const cp2x = nextPoint.x - dx * tension;
						const cp2y = nextPoint.y - dy * tension * 0.1;

						ctx.bezierCurveTo(
							cp1x,
							cp1y,
							cp2x,
							cp2y,
							nextPoint.x,
							nextPoint.y,
						);
					}
				}
				ctx.strokeStyle = `rgba(150, 150, 150, ${0.3 * progress})`;
				ctx.lineWidth = 80;
				ctx.lineCap = "round";
				ctx.lineJoin = "round";
				ctx.stroke();
			}

			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	}, [progress]);

	const getGlitchText = (
		fullText: string,
		progress: number,
		position: number,
	) => {
		const lineProgress = progress * 100;
		if (lineProgress < position) return "";

		const availableProgress = 100 - position;
		const usedProgress = (lineProgress - position) / availableProgress;
		if (usedProgress <= 0) return "";
		if (usedProgress >= 1) return fullText;

		const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*_?";
		let glitchText = "";
		for (let i = 0; i < fullText.length; i++) {
			const char = fullText[i];

			if (char === " " || char === "/" || char === "•") {
				glitchText += char;
			} else {
				const stabilityChance = Math.pow(usedProgress, 2);

				if (Math.random() < stabilityChance) {
					glitchText += char;
				} else {
					const randomIndex = Math.floor(
						Math.random() * glitchChars.length,
					);
					glitchText += glitchChars[randomIndex];
				}
			}
		}
		return glitchText;
	};

	return {
		sectionRef,
		canvasRef,
		progress,
		getGlitchText,
	};
};
