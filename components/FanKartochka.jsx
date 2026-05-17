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
  "veb-ishlab-chiqish": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
  "suniy-intellekt": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  "kiberxavfsizlik": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  "ekonomika": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  "huquq": "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&q=80",
}

const defaultRasm = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80"

export default function FanKartochka({ nom, mavzularSoni, slug }) {
  const rasm = fanRasmlar[slug] || defaultRasm

  return (
    <Link href={`/fanlar/${slug}`} style={{ textDecoration: "none" }}>
      <div className="karta" style={{
        background: "var(--card)",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        position: "relative"
      }}>
        {/* Rasm */}
        <div style={{ width: "100%", height: "140px", overflow: "hidden", position: "relative" }}>
          <img src={rasm} alt={nom} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s ease"
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.7) 100%)"
          }} />
          <div style={{
            position: "absolute", bottom: "12px", left: "14px", right: "14px"
          }}>
            <h3 style={{
              fontWeight: "700", fontSize: "15px",
              color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.5)"
            }}>{nom}</h3>
          </div>
        </div>

        {/* Pastki */}
        <div style={{
          padding: "12px 14px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--card)"
        }}>
          <span style={{ fontSize: "12px", color: "var(--text2)" }}>
            {mavzularSoni ? `📖 ${mavzularSoni} mavzu` : "📖 Qo'shilmoqda"}
          </span>
          <span style={{
            fontSize: "12px", fontWeight: "600",
            color: "#667eea", display: "flex", alignItems: "center", gap: "4px"
          }}>
            Ko'rish <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}