import { ImageResponse } from "next/og";
import { siteName } from "@/lib/seo/metadata";

export const alt = "DT Hamilton Mechanical — Heating, cooling, and ventilation in Ottawa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <article style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: "78px",
      background: "linear-gradient(125deg, #212121 28%, #243b86 100%)",
      color: "#fff",
      borderBottom: "22px solid #b41c29",
    }}>
      <div style={{ fontSize: 36, fontWeight: 700 }}>{siteName}</div>
      <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.06, maxWidth: 940, marginTop: 38 }}>
        Heating, cooling, and ventilation in Ottawa.
      </div>
      <div style={{ fontSize: 31, marginTop: 30 }}>Installation, repair, and maintenance</div>
    </article>,
    size,
  );
}
