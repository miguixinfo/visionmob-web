const words = ['Mix', 'Master', 'Voces', 'Beat', 'Stems', 'WAV', 'LUFS', 'Spotify', 'Trap', 'Drill', 'R&B', 'Boom-bap', 'Online'];

export function Manifesto() {
  const doubled = [...words, ...words];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {doubled.map((w, i) => (
          <span key={i} className={i % 2 === 0 ? '' : 'ghost'}>
            {w}
            {i < doubled.length - 1 && <span className="strip-star">&#9733;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
