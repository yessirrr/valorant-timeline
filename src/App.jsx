// src/App.jsx
import { Chrono } from "react-chrono";


const items = [
  {
    title: "2020",
    cardTitle: "Started playing VALORANT",
    cardSubtitle: "Episode 1",
    cardDetailedText: "Hooked on tactical depth and teamplay.",
  },
  {
    title: "2021",
    cardTitle: "First Radiant",
    cardSubtitle: "While studying Chemical Engineering",
    cardDetailedText:
      "Discipline + systems thinking carried over from coursework and practice routines.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/27.png",
      },
    },
  },
];

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#111111", color: "#edeef1" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 16px" }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
          My VALORANT Journey
        </h1>
        <p style={{ color: "#8f98a3", marginBottom: 24 }}>
          Milestones across ranked play, collegiate, work/school, and esports attendance.
        </p>

        <div style={{ height: 300 }}>
          <Chrono
            items={items}
            mode="HORIZONTAL" // 🔥 switch to horizontal
            scrollable={{ scrollbar: true }}
            cardWidth={200} // 🔥 makes the cards skinnier/compressed
            cardHeight={160}
            theme={{
              primary: "#c8a46a",
              secondary: "#1a1a1a",
              cardBg: "#1a1a1a",
              cardForeColor: "#edeef1",
              titleColor: "#edeef1",
              titleColorActive: "#c8a46a",
            }}
          />
        </div>
      </div>
    </div>
  );
}

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
