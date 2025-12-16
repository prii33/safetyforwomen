import React, { useRef, useEffect } from 'react';

const SmokeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    // Create smoke puff texture
    const smokeCanvas = document.createElement('canvas');
    smokeCanvas.width = 150;
    smokeCanvas.height = 150;
    const smokeCtx = smokeCanvas.getContext('2d');
    if (smokeCtx) {
        const grd = smokeCtx.createRadialGradient(75, 75, 0, 75, 75, 75);
        grd.addColorStop(0, 'rgba(255, 50, 50, 0.2)'); // Bright red center
        grd.addColorStop(1, 'rgba(200, 0, 0, 0)'); // Fade out
        smokeCtx.fillStyle = grd;
        smokeCtx.fillRect(0, 0, 150, 150);
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      growth: number;
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 200; // Start below screen
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = -1 - Math.random() * 2;
        this.size = 50 + Math.random() * 100;
        this.growth = 0.5 + Math.random() * 0.5;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 100;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += this.growth;
        this.life++;
        this.rotation += this.rotationSpeed;

        if (this.life >= this.maxLife || this.y < -this.size) {
            this.reset();
        }
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 200;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = -1 - Math.random() * 2;
        this.size = 50 + Math.random() * 100;
        this.life = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = 1 - (this.life / this.maxLife);
        context.globalAlpha = opacity;
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.drawImage(smokeCanvas, -this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
        context.globalAlpha = 1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        p.y = Math.random() * height; // Distribute initially
        particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // Optional: Fill background if needed, but we want it transparent over black
      // ctx.fillStyle = '#000';
      // ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0 bg-black" />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
};

export default SmokeBackground;
