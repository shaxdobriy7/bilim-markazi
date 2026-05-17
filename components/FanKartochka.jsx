import Link from "next/link"

const fanRasmlar = {
  "matematika": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80",
  "fizika": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80",
  "tarix": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&q=80",
  "biologiya": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80",
  "informatika": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
  "kimyo": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
  "adabiyot": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  "geografiya": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80",
  "falsafa": "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?w=400&q=80",
  "psixologiya": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  "astronomiya": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
  "dasturlash": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
  "ingliz-tili": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80",
  "rus-tili": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
  "nemis-tili": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
  "fransuz-tili": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
}

const defaultRasm = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80"

export default function FanKartochka({ nom, mavzularSoni, slug }) {
  const rasm = fanRasmlar[slug] || defaultRasm

  return (
    <Link href={`/fanlar/${slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)"
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <div style={{ width: "100%", height: "120px", overflow: "hidden", position: "relative" }}>
          <img
            src={rasm}
            alt={nom}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%)"
          }}></div>
        </div>

        <div style={{ padding: "12px" }}>
          <h3 style={{ fontWeight: "600", fontSize: "14px", color: "#111827", marginBottom: "4px" }}>
            {nom}
          </h3>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>
            {mavzularSoni ? `${mavzularSoni} ta mavzu` : "Mavzular qo'shilmoqda"}
          </p>
        </div>
      </div>
    </Link>
  )
}