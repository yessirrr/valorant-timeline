// src/App.jsx
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
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",          // near-black
        color: "#e6e7ea",               // light gray text
      }}
    >
      <div
        style={{
          margin: "0 auto",
          padding: "16px",
          maxWidth: 1280,               // stretch wide for screenshots
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>
          My VALORANT Journey
        </h1>
        <p style={{ color: "#a5abb3", marginBottom: 12 }}>
          Milestones across ranked play, collegiate, work/school, and esports attendance.
        </p>

        {/* Make the viewport smaller; scroll to see more */}
        <div style={{ height: 520, borderRadius: 10, overflow: "hidden" }}>
          <Chrono
            items={items}
            mode="VERTICAL"                         // vertical scroll (touch friendly)
            scrollable={{ scrollbar: true }}
            cardHeight={120}                        // compact cards
            theme={{
              primary: "#D2B375",                   // gold accent (Premier-ish)
              secondary: "#151719",                 // card/rail background
              cardBg: "#151719",
              cardForeColor: "#e6e7ea",
              titleColor: "#e6e7ea",
              titleColorActive: "#D2B375",
            }}
            slideShow={false}
            hideControls
          />
        </div>
      </div>

      {/* Tiny CSS tweaks to compress spacing & dots */}
      <style>{`
        /* shrink the timeline dots & lines a bit */
        .chrono-icons {
          width: 12px !important;
          height: 12px !important;
        }
        .timeline-main-wrapper .timeline-item .timeline-circle {
          box-shadow: none !important;
        }
        /* tighten vertical spacing between items */
        .timeline-card-content {
          padding: 10px 12px !important;
        }
        .timeline-title {
          font-size: 14px !important;
        }
        .card-title {
          font-size: 15px !important;
        }
        .card-sub-title, .card-text {
          font-size: 12px !important;
        }
      `}</style>
    </div>
  );
}
