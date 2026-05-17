"use client"
import { useState } from "react"
import FanKartochka from "./FanKartochka"

export default function FanlarGrid({ fanlar }) {
  const [qidiruv, setQidiruv] = useState("")

  const filtrlangan = fanlar.filter((fan) =>
    fan.nom.toLowerCase().includes(qidiruv.toLowerCase())
  )

  return (
    <section style={{ padding: "48px 32px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827" }}>
          Barcha fanlar
        </h2>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>
          {filtrlangan.length} ta fan
        </span>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <input
          type="text"
          placeholder="Fan qidiring..."
          value={qidiruv}
          onChange={(e) => setQidiruv(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 20px",
            borderRadius: "12px",
            border: "2px solid #e5e7eb",
            fontSize: "15px",
            outline: "none",
            transition: "border-color 0.2s"
          }}
          onFocus={(e) => e.target.style.borderColor = "#667eea"}
          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
        />
      </div>

      {filtrlangan.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px", color: "#9ca3af" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
          <p style={{ fontSize: "16px" }}>"{qidiruv}" bo'yicha fan topilmadi</p>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: "16px"
        }}>
          {filtrlangan.map((fan) => (
  <FanKartochka
    key={fan.id}
    nom={fan.nom}
    mavzularSoni={fan.mavzular?.[0]?.count || 0}
    slug={fan.slug}
  />
))}
        </div>
      )}
    </section>
  )
}