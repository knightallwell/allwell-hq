import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const alt = `${profile.fullName} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#06070B",
          color: "#F4F5F8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#8B85F6",
            fontFamily: "monospace",
          }}
        >
          {profile.brandName}.
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginTop: 24, letterSpacing: "-0.02em" }}>
          {profile.shortName}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#A3A7B3", marginTop: 16 }}>
          {profile.title}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#8B85F6", marginTop: 32, fontFamily: "monospace" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
