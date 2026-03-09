import React, { useEffect, useRef } from 'react';

const MAX_TRAILS = 8;

const CursorTrail = () => {
  const layerRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const handleMove = (e) => {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      layer.appendChild(dot);
      trail.current.push(dot);

      if (trail.current.length > MAX_TRAILS) {
        const first = trail.current.shift();
        if (first && first.parentNode) first.parentNode.removeChild(first);
      }

      requestAnimationFrame(() => {
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
        dot.style.opacity = '0';
      });

      setTimeout(() => {
        if (dot.parentNode) dot.parentNode.removeChild(dot);
      }, 450);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return <div ref={layerRef} className="cursor-trail-layer" />;
};

export default CursorTrail;

