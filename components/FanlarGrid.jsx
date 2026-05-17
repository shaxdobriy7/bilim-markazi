"use client"
import { useState } from "react"
import FanKartochka from "./FanKartochka"

export default function FanlarGrid({ fanlar }) {
  const [qidiruv, setQidiruv] = useState("")

  const filtrlangan = fanlar.filter((fan) =>
    fan.nom.toLowerCase().includes(qidiruv.toLowerCase())
  )

  return (
    <section id="fanlar" style={{
      padding: "64px 32px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: "32px",
        flexWrap: "wrap", gap: "16px"
      }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.5px" }}>
            Barcha fanlar
          </h2>
          <p style={{ color: "var(--text2)", marginTop: "4px", fontSize: "14px" }}>
            {filtrlangan.length} ta fan mavjud
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <span style={{
            position: "absolute", left: "16px", top: "50%",
            transform: "translateY(-50%)", fontSize: "16px"
          }}>🔍</span>
          <input
            type="text"
            placeholder="Fan qidiring..."
            value={qidiruv}
            onChange={(e) => setQidiruv(e.target.value)}
            style={{
              padding: "12px 16px 12px 44px",
              borderRadius: "50px",
              border: "1px solid var(--border)",
              fontSize: "14px",
              outline: "none",
              background: "var(--card)",
              color: "var(--text)",
              width: "260px",
              transition: "border-color 0.2s, box-shadow 0.2s"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#667eea"
              e.target.style.boxShadow = "0 0 0 3px rgba(102,126,234,0.15)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)"
              e.target.style.boxShadow = "none"
            }}
          />
        </div>
      </div>

      {filtrlangan.length === 0 ? (
        <div className="animate-fadeIn" style={{
          textAlign: "center", padding: "80px",
          background: "var(--card)", borderRadius: "20px",
          border: "1px solid var(--border)"
        }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>🔍</div>
          <p style={{ fontSize: "18px", color: "var(--text)", fontWeight: "600" }}>
            "{qidiruv}" topilmadi
          </p>
          <p style={{ color: "var(--text2)", marginTop: "8px" }}>
            Boshqa kalit so'z bilan qidiring
          </p>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px"
        }}>
          {filtrlangan.map((fan, index) => (
            <div
              key={fan.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.04}s`, opacity: 0 }}
            >
              <FanKartochka
                nom={fan.nom}
                mavzularSoni={fan.mavzular?.[0]?.count || 0}
                slug={fan.slug}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}