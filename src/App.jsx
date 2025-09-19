import { useState } from "react";

const items = [
  { year: "2020", title: "Started playing VALORANT", subtitle: "Episode 1", text: "Hooked on tactical depth and teamplay." },
  { year: "2021", title: "First Radiant", subtitle: "While studying Chemical Engineering", text: "Discipline + systems thinking from coursework and practice.", img: "https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/27.png" },
  { year: "2022", title: "Joined Collegiate Team (UBC)", text: "Structured comms, IGL habits, role synergy." },
  { year: "2023", title: "TC Energy Internship", text: "Balanced high-level play with full-time work; sharpened iteration habits." },
  { year: "2024", title: "Attended VCT Masters Toronto", subtitle: "With friends (some new to VALORANT)", text: "Inspired my Fantasy League case study.", img: "https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/27.png" },
  { year: "2025", title: "Riot-focused Portfolio", text: "Practice Range redesign + Fantasy League UI (Premier-inspired)." },
];

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="page">
      <main className="container">
        <h1 className="h1">My VALORANT Journey</h1>
        <p className="sub">Milestones across ranked play, collegiate, work/school, and esports attendance.</p>

        {/* Horizontal timeline track */}
        <div className="track" role="list">
          {items.map((it, idx) => (
            <div
              key={idx}
              role="listitem"
              className="node"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* year label */}
              <div className="year">{it.year}</div>

              {/* dot */}
              <div className="dot" />

              {/* hover card */}
              {hovered === idx && (
                <div className="card" aria-live="polite">
                  {it.img && (
                    <div className="cardImageWrap">
                      <img src={it.img} alt="" className="cardImage" />
                    </div>
                  )}
                  <div className="cardBody">
                    <div className="cardTitle">{it.title}</div>
                    {it.subtitle && <div className="cardSub">{it.subtitle}</div>}
                    <p className="cardText">{it.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
