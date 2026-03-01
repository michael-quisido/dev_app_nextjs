'use client';

import { useEffect, useRef } from 'react';

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const nodes: any[] = [];
    const numNodes = 90;
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    const attractionRadius = 190;
    const attractionStrength = 0.04;

    class Node {
      x: number;
      y: number;
      baseRadius: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.color = `rgba(100, 100, 100, ${Math.random() * 0.7 + 0.3})`;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.radius > width || this.x - this.radius < 0) this.vx *= -1;
        if (this.y + this.radius > height || this.y - this.radius < 0) this.vy *= -1;

        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < attractionRadius) {
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * attractionStrength * (attractionRadius - distance);
            this.y += Math.sin(angle) * attractionStrength * (attractionRadius - distance);
            this.radius = this.baseRadius * 1.2;
          } else {
            this.radius = this.baseRadius;
          }
        } else {
          this.radius = this.baseRadius;
        }

        this.draw();
      }
    }

    function connectNodes(nodes: Node[]) {
      if (!ctx) return;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const alpha = 1 - distance / 80;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 100, 100, ${alpha * 1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function init() {
      nodes.length = 0;
      for (let i = 0; i < numNodes; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push(new Node(x, y));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
      }

      connectNodes(nodes);
    }

    init();
    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseOut = () => {
      mouseX = null;
      mouseY = null;
    };

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" />;
}
