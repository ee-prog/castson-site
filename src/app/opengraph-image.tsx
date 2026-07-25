import { ImageResponse } from "next/og";

export const alt = "Eli Castson — Transformation Executive";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const cream = "#f7f1e7";
const creamMuted = "rgba(247, 241, 231, 0.62)";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 84px",
          backgroundColor: "#11110f",
          color: cream,
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: creamMuted,
          }}
        >
          Eli Castson
        </div>
        <div
          style={{
            marginTop: 26,
            maxWidth: 1000,
            fontSize: 74,
            lineHeight: 1.04,
            letterSpacing: "-0.01em",
          }}
        >
          Transformation across people, business and technology.
        </div>
        <div
          style={{
            marginTop: 56,
            paddingTop: 28,
            borderTop: "1px solid rgba(247, 241, 231, 0.28)",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 24,
            color: creamMuted,
          }}
        >
          <span>Canadian–Swiss transformation executive</span>
          <span>castson.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
