'use client';

import { useEffect, useRef } from 'react';

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    window.addEventListener('resize', resize);
    resize();

    const W = () => canvas.clientWidth;
    const H = () => canvas.clientHeight;
    const vertex = () => ({ x: W() * 0.72, y: H() * 0.5 });
    const labels = ['Ventas', 'Clientes', 'Inventario', 'Citas', 'Reportes', 'Soporte'];
    let nodes = [];

    const buildNodes = () => {
      nodes = labels.map((label, i) => {
        const angle = (Math.PI * 1.15) * (i / (labels.length - 1)) - Math.PI * 0.575;
        const r = Math.min(W() * 0.42, H() * 0.42);
        return {
          label,
          x: vertex().x - Math.cos(angle) * r - W() * 0.08,
          y: vertex().y + Math.sin(angle) * r,
          phase: Math.random() * Math.PI * 2
        };
      });
    };

    buildNodes();
    window.addEventListener('resize', buildNodes);

    let animT = 0;
    let animFrame;
    let isCanvasVisible = true;

    const draw = () => {
      if (!isCanvasVisible) return;

      animT += reducedMotion ? 0 : 0.012;

      ctx.clearRect(0, 0, W(), H());
      const v = vertex();

      nodes.forEach((n) => {
        const pulse = reducedMotion ? 0.5 : (Math.sin(animT * 1.4 + n.phase) + 1) / 2;
        const grad = ctx.createLinearGradient(n.x, n.y, v.x, v.y);
        grad.addColorStop(0, 'rgba(111,200,242,0.15)');
        grad.addColorStop(1, 'rgba(46,125,209,0.55)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();

        if (!reducedMotion) {
          // Travelling dot along the line
          const px = n.x + (v.x - n.x) * pulse;
          const py = n.y + (v.y - n.y) * pulse;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(111,200,242,0.9)';
          ctx.fill();
        }

        // Node
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#0F2540';
        ctx.strokeStyle = 'rgba(111,200,242,0.7)';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        ctx.font = '11px IBM Plex Mono, monospace';
        ctx.fillStyle = 'rgba(183,194,208,0.85)';
        ctx.textAlign = 'right';
        ctx.fillText(n.label, n.x - 10, n.y + 4);
      });

      // Central Vertex (Axis)
      const glow = ctx.createRadialGradient(v.x, v.y, 0, v.x, v.y, 26);
      glow.addColorStop(0, 'rgba(111,200,242,0.5)');
      glow.addColorStop(1, 'rgba(111,200,242,0)');
      ctx.beginPath();
      ctx.arc(v.x, v.y, 26, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(v.x, v.y, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#6FC8F2';
      ctx.fill();

      ctx.font = '600 11px IBM Plex Mono, monospace';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.fillText('AXIS', v.x + 14, v.y + 4);

      if (reducedMotion) return;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    let observer;
    if (!reducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isCanvasVisible = entry.isIntersecting;
          if (isCanvasVisible) {
            cancelAnimationFrame(animFrame);
            draw();
          }
        });
      }, { threshold: 0.05 });
      observer.observe(canvas);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', buildNodes);
      cancelAnimationFrame(animFrame);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="network"></canvas>;
}
