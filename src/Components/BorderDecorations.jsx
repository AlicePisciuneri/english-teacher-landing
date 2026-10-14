const BorderDecorations = () => {
  const icons = ['icons8-teacher-64.png', 'icons8-language-48.png', 'icons8-great-britain-48.png', 'icons8-language-50.png'];
  const marks = Array.from({ length: 40 }, (_, index) => ({
    image: icons[index % icons.length],
    side: index % 2 === 0 ? 'left' : 'right',
    top: `${2 + index * 2.35}%`
  }));

  return (
    <>
      <style>{`
        .landing-page { isolation: isolate; }
        .edge-decorations { position: absolute; inset: 82px 0 100px; pointer-events: none; z-index: 0; overflow: hidden; }
        .edge-decoration { position: absolute; width: clamp(30px, 3.5vw, 48px); height: auto; opacity: 0.82; animation: edge-float 5s ease-in-out infinite; }
        .edge-decoration.left { left: 1.1%; }
        .edge-decoration.right { right: 1.1%; }
        .landing-page > :not(.edge-decorations):not(.header):not(style) { position: relative; z-index: 1; }
        .icons-credit a { color: inherit; text-underline-offset: 3px; }
        .icons-credit { font-size: 0.75rem; opacity: 0.85; margin-bottom: 4px; }
        @keyframes edge-float { 0%, 100% { transform: translateY(0) rotate(-7deg); } 50% { transform: translateY(-8px) rotate(7deg); } }
        @media (max-width: 1100px) { .edge-decoration { width: 28px; opacity: 0.6; } }
        @media (max-width: 767px) { .edge-decorations { display: none; } }
        @media (prefers-reduced-motion: reduce) { .edge-decoration { animation: none; } }
      `}</style>
      <div className="edge-decorations" aria-hidden="true">
        {marks.map((mark, index) => (
          <img key={index} className={`edge-decoration ${mark.side}`} src={`/images/decorazioni/${mark.image}`} alt="" width="48" height="48" loading="lazy" style={{ top: mark.top, animationDelay: `${-(index % 5)}s` }} />
        ))}
      </div>
    </>
  );
};

export default BorderDecorations;

