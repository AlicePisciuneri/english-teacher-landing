const BorderDecorations = () => {
  const icons = ['icons8-teacher-64.png', 'icons8-language-48.png', 'icons8-great-britain-48.png', 'icons8-language-50.png'];
  const random = (seed) => {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return value - Math.floor(value);
  };
  const marks = Array.from({ length: 40 }, (_, index) => ({
    image: icons[Math.floor(random(index + 1) * icons.length)],
    side: index < 20 ? 'left' : 'right',
    top: `${1 + (index % 20) * 4.8 + random(index + 41) * 3}%`,
    offset: random(index + 81),
    rotation: `${Math.round(random(index + 121) * 36 - 18)}deg`,
    size: `${28 + Math.round(random(index + 161) * 18)}px`,
    delay: `${-random(index + 201) * 7}s`
  }));

  return (
    <>
      <style>{`
        .landing-page { isolation: isolate; }
        .edge-decorations { position: absolute; inset: 82px 0 100px; pointer-events: none; z-index: 0; overflow: hidden; }
        .edge-decoration { position: absolute; width: min(var(--icon-size), calc(5vw - 10px)); height: auto; opacity: 0.82; animation: edge-float 5s ease-in-out infinite; }
        .edge-decoration.left { left: calc(4px + var(--scatter) * max(0px, calc(max(5vw, (100vw - 1150px) / 2) - var(--icon-size) - 12px))); }
        .edge-decoration.right { right: calc(4px + var(--scatter) * max(0px, calc(max(5vw, (100vw - 1150px) / 2) - var(--icon-size) - 12px))); }
        .landing-page > :not(.edge-decorations):not(.header):not(style) { position: relative; z-index: 1; }
        .icons-credit a { color: inherit; text-underline-offset: 3px; }
        .icons-credit { font-size: 0.75rem; opacity: 0.85; margin-bottom: 4px; }
        @keyframes edge-float { 0%, 100% { transform: translateY(0) rotate(var(--rotation)); } 50% { transform: translateY(-8px) rotate(calc(var(--rotation) + 8deg)); } }
        @media (max-width: 1100px) { .edge-decoration { opacity: 0.6; } }
        @media (max-width: 767px) { .edge-decorations { display: none; } }
        @media (prefers-reduced-motion: reduce) { .edge-decoration { animation: none; transform: rotate(var(--rotation)); } }
      `}</style>
      <div className="edge-decorations" aria-hidden="true">
        {marks.map((mark, index) => (
          <img key={index} className={`edge-decoration ${mark.side}`} src={`/images/decorazioni/${mark.image}`} alt="" width="48" height="48" loading="lazy" style={{ top: mark.top, '--scatter': mark.offset, '--rotation': mark.rotation, '--icon-size': mark.size, animationDelay: mark.delay }} />
        ))}
      </div>
    </>
  );
};

export default BorderDecorations;

