// src/App.jsx
import { useEffect } from "react";
import { Chrono } from "react-chrono";

const items = [
  { title: "2020", cardTitle: "Started playing VALORANT", cardSubtitle: "Episode 1", cardDetailedText: "Hooked on tactical depth and teamplay." },
  { title: "2021", cardTitle: "First Radiant", cardSubtitle: "While studying Chemical Engineering", cardDetailedText:"Discipline + systems thinking from coursework and practice.", media:{ type:"IMAGE", source:{ url:"https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/27.png" } } },
  { title: "2022", cardTitle: "Joined Collegiate Team (UBC)", cardDetailedText:"Structured comms, IGL habits, role synergy." },
  { title: "2023", cardTitle: "TC Energy Internship", cardDetailedText:"Balanced high-level play with full-time work; sharpened iteration habits." },
  { title: "2024", cardTitle: "Attended VCT Masters Toronto", cardSubtitle:"With friends (some new to VALORANT)", cardDetailedText:"Inspired my Fantasy League case study.", media:{ type:"IMAGE", source:{ url:"https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/27.png" } } },
  { title: "2025", cardTitle: "Riot-focused Portfolio", cardDetailedText:"Practice Range redesign + Fantasy League UI (Premier-inspired)." },
];

export default function App() {
  // Make items open on hover by simulating the built-in click.
  useEffect(() => {
    const t = setTimeout(() => {
      const nodes = document.querySelectorAll(
        ".timeline-main-wrapper [role='button'], .timeline-main-wrapper .timeline-item"
      );
      nodes.forEach((el) => {
        el.onmouseenter = () => el.click();
      });
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#111827" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 16px" }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
          My VALORANT Journey
        </h1>
        <p style={{ color: "#6b7280", marginBottom: 16 }}>
          Milestones across ranked play, collegiate, work/school, and esports attendance.
        </p>

        {/* Fixed height so cards never drop below the viewport.
            Only the timeline track scrolls horizontally. */}
        <div
          style={{
            height: 520,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            background: "#fff",
          }}
        >
          <Chrono
            items={items}
            mode="HORIZONTAL"
            scrollable={{ scrollbar: true }}
            disableToolbar={true}
            cardHeight={180}
            cardWidth={260}
            itemWidth={140}
            theme={{
              primary: "#c8a46a",         // accent (dots/active)
              secondary: "#9ca3af",       // line
              cardBg: "#ffffff",
              cardForeColor: "#111827",
              titleColor: "#111827",
              titleColorActive: "#c8a46a",
            }}
          />
        </div>
      </div>
    </div>
  );
}
