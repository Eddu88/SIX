import React, { useEffect, useRef } from 'react';

interface DotMatrixCanvasProps {
  shape: 'hourglass' | 'cloud' | 'lightning' | 'lock' | 'lakehouse' | 'ai-brain' | 'chart' | 'data-flow';
  width?: number;
  height?: number;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  className?: string;
  animate?: boolean;
}

export const DotMatrixCanvas: React.FC<DotMatrixCanvasProps> = ({
  shape,
  width = 240,
  height = 240,
  dotColor = '#5B4FE5',
  dotSize = 2.5,
  spacing = 9,
  className = '',
  animate = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    // Shape evaluator function returns intensity (0 to 1) for dot at (col, row)
    const getDotIntensity = (c: number, r: number, currentStep: number): number => {
      const nx = (c / cols) * 2 - 1; // normalized -1 to 1
      const ny = (r / rows) * 2 - 1; // normalized -1 to 1
      const dist = Math.sqrt(nx * nx + ny * ny);

      switch (shape) {
        case 'hourglass': {
          // Hourglass silhouette: wide top and bottom, narrow middle
          const waist = Math.abs(ny) * 0.75 + 0.15;
          const insideBody = Math.abs(nx) <= waist && Math.abs(ny) <= 0.85;
          const sandTop = ny < 0 && insideBody;
          const sandBottom = ny >= 0 && Math.abs(nx) <= (1 - Math.abs(ny)) * 0.9;
          
          if (!insideBody) return 0;
          // Animated sand flow down the middle
          if (Math.abs(nx) < 0.08 && ny >= -0.7 && ny <= 0.7) {
            const wave = Math.sin((ny * 6 - currentStep * 0.08)) > 0 ? 1 : 0.6;
            return wave;
          }
          return sandTop || sandBottom ? 0.85 : 0.2;
        }

        case 'cloud': {
          // Cloud shape using multiple overlapping circles
          const c1 = Math.sqrt((nx + 0.25) * (nx + 0.25) + (ny + 0.1) * (ny + 0.1)) < 0.45;
          const c2 = Math.sqrt((nx - 0.25) * (nx - 0.25) + (ny + 0.05) * (ny + 0.05)) < 0.42;
          const c3 = Math.sqrt((nx) * (nx) + (ny - 0.15) * (ny - 0.15)) < 0.55;
          const c4 = Math.sqrt((nx + 0.5) * (nx + 0.5) + (ny - 0.1) * (ny - 0.1)) < 0.32;
          const c5 = Math.sqrt((nx - 0.5) * (nx - 0.5) + (ny - 0.1) * (ny - 0.1)) < 0.32;
          const isCloud = c1 || c2 || c3 || c4 || c5;
          if (!isCloud) return 0;

          const pulse = Math.sin(dist * 5 - currentStep * 0.05) * 0.2 + 0.8;
          return pulse;
        }

        case 'lightning': {
          // Lightning bolt shape
          let isBolt = false;
          if (ny < -0.1 && nx >= -0.4 * (ny + 0.9) - 0.2 && nx <= -0.4 * (ny + 0.9) + 0.2) isBolt = true;
          if (ny >= -0.2 && ny < 0.1 && nx >= -0.6 && nx <= 0.4) isBolt = true;
          if (ny >= 0.0 && nx >= 0.3 * ny - 0.25 && nx <= 0.3 * ny + 0.15 && ny < 0.85) isBolt = true;

          if (!isBolt) return 0;
          const sparkle = Math.sin((nx + ny) * 10 + currentStep * 0.1) > 0.2 ? 1 : 0.4;
          return sparkle;
        }

        case 'lock': {
          // Security lock: Shackle top + Body square
          const inShackleArc = dist < 0.5 && dist > 0.3 && ny < -0.05 && Math.abs(nx) < 0.4;
          const inBody = Math.abs(nx) <= 0.55 && ny >= -0.05 && ny <= 0.65;
          const inKeyhole = (Math.sqrt(nx * nx + (ny - 0.2) * (ny - 0.2)) < 0.12) || (Math.abs(nx) < 0.06 && ny >= 0.2 && ny <= 0.45);

          if (inKeyhole) return 0;
          if (inShackleArc || inBody) {
            return (inBody ? 0.9 : 0.7) + Math.sin(currentStep * 0.04 + ny) * 0.1;
          }
          return 0;
        }

        case 'lakehouse': {
          // Medallion layers: 3 stacked horizontal slabs (Bronze, Silver, Gold)
          const inLayer1 = ny >= -0.7 && ny <= -0.35 && Math.abs(nx) <= 0.75 - (ny + 0.7) * 0.2;
          const inLayer2 = ny >= -0.2 && ny <= 0.15 && Math.abs(nx) <= 0.8;
          const inLayer3 = ny >= 0.3 && ny <= 0.65 && Math.abs(nx) <= 0.85 + (ny - 0.3) * 0.1;

          if (inLayer1) return 0.5 + Math.sin(c * 0.3 + currentStep * 0.06) * 0.3;
          if (inLayer2) return 0.75 + Math.cos(c * 0.3 - currentStep * 0.06) * 0.25;
          if (inLayer3) return 1.0;
          return 0;
        }

        case 'ai-brain': {
          // Neural network nodes connected with dot patterns
          const node1 = Math.sqrt((nx + 0.4) * (nx + 0.4) + (ny + 0.4) * (ny + 0.4)) < 0.22;
          const node2 = Math.sqrt((nx - 0.4) * (nx - 0.4) + (ny + 0.4) * (ny + 0.4)) < 0.22;
          const node3 = Math.sqrt((nx) * (nx) + (ny - 0.3) * (ny - 0.3)) < 0.28;
          const centerNode = Math.sqrt((nx) * (nx) + (ny + 0.05) * (ny + 0.05)) < 0.2;

          // Lines between nodes
          const line1 = Math.abs(nx - ny) < 0.1 && nx > -0.4 && nx < 0.4;
          const line2 = Math.abs(nx + ny) < 0.1 && nx > -0.4 && nx < 0.4;

          if (node1 || node2 || node3 || centerNode) return 0.95;
          if (line1 || line2) return 0.4 + Math.sin(currentStep * 0.08 + nx * 5) * 0.3;
          return 0;
        }

        case 'chart': {
          // Bar chart (4 ascending columns)
          const colIndex = Math.floor((nx + 0.8) / 0.4);
          if (colIndex >= 0 && colIndex < 4) {
            const heights = [0.2, 0.45, 0.7, 0.9];
            const barHeight = heights[colIndex];
            const barLeft = -0.75 + colIndex * 0.4;
            const barRight = barLeft + 0.28;

            if (nx >= barLeft && nx <= barRight && ny >= (1 - barHeight * 1.6) - 0.8 && ny <= 0.8) {
              const pulse = Math.sin(colIndex * 1.5 + currentStep * 0.05) * 0.15 + 0.85;
              return pulse;
            }
          }
          return 0;
        }

        case 'data-flow': {
          // S-curve pipeline flow with pulsing particles
          const curveY = Math.sin(nx * 3) * 0.4;
          const isPipeline = Math.abs(ny - curveY) < 0.18;
          if (!isPipeline) return 0;

          const particle = Math.sin((nx * 6 - currentStep * 0.08)) > 0.4 ? 1 : 0.35;
          return particle;
        }

        default:
          return dist < 0.7 ? 0.5 : 0;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + spacing / 2;
          const y = r * spacing + spacing / 2;
          const intensity = getDotIntensity(c, r, time);

          if (intensity > 0.05) {
            ctx.beginPath();
            const currentSize = dotSize * (0.6 + intensity * 0.5);
            ctx.arc(x, y, currentSize, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.globalAlpha = Math.min(1, Math.max(0.15, intensity));
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;

      if (animate) {
        time += 1;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shape, width, height, dotColor, dotSize, spacing, animate]);

  return (
    <div className={`relative inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="block max-w-full h-auto"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
};
