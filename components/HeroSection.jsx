export default function HeroSection({ fanlarSoni }) {
  return (
    <section style={{
      background: "linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #667eea)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 10s ease infinite",
      padding: "120px 32px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      minHeight: "650px",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "15%",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(102,126,234,0.3) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "15%",
        width: "250px", height: "250px",
        background: "radial-gradient(circle, rgba(240,147,251,0.25) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)"
      }} />

      {/* Floating shapes */}
      {[
        { size: 60, top: "15%", left: "8%", delay: "0s", rotate: "12deg" },
        { size: 40, top: "70%", left: "5%", delay: "1s", rotate: "-8deg" },
        { size: 50, top: "20%", right: "8%", delay: "0.5s", rotate: "20deg" },
        { size: 35, bottom: "20%", right: "12%", delay: "1.5s", rotate: "-15deg" },
      ].map((s, i) => (
        <div key={i} className="animate-float" style={{
          position: "absolute",
          width: s.size, height: s.size,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.1)",
          top: s.top, bottom: s.bottom,
          left: s.left, right: s.right,
          animationDelay: s.delay,
          transform: `rotate(${s.rotate})`
        }} />
      ))}

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", width: "100%" }}>

        <div className="animate-fadeInUp glass" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          borderRadius: "50px", padding: "8px 20px",
          fontSize: "13px", color: "rgba(255,255,255,0.9)",
          marginBottom: "32px", opacity: 0,
          animationDelay: "0.1s"
        }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 8px #4ade80",
            display: "inline-block"
          }} />
          O'zbek tilida eng katta bilim platformasi
        </div>

        <h1 className="animate-fadeInUp" style={{
          fontSize: "clamp(40px, 8vw, 80px)",
          fontWeight: "900",
          color: "white",
          lineHeight: "1.05",
          marginBottom: "12px",
          animationDelay: "0.2s",
          opacity: 0,
          letterSpacing: "-2px"
        }}>
          Bilim
        </h1>
        <h1 className="animate-fadeInUp" style={{
          fontSize: "clamp(40px, 8vw, 80px)",
          fontWeight: "900",
          background: "linear-gradient(135deg, #667eea, #f093fb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: "1.05",
          marginBottom: "32px",
          animationDelay: "0.25s",
          opacity: 0,
          letterSpacing: "-2px"
        }}>
          Markazi
        </h1>

        <p className="animate-fadeInUp" style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "rgba(255,255,255,0.7)",
          marginBottom: "48px",
          lineHeight: "1.8",
          animationDelay: "0.35s",
          opacity: 0,
          maxWidth: "550px",
          margin: "0 auto 48px"
        }}>
          Barcha fanlar, mavzular va qo'shimcha bilimlar —
          <span style={{ color: "white", fontWeight: "600" }}> kitoblarda yo'q ma'lumotlar</span> ham shu yerda
        </p>

        <div className="animate-fadeInUp" style={{
          display: "flex", gap: "16px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "72px",
          animationDelay: "0.45s", opacity: 0
        }}>
          <a href="#fanlar" style={{
            padding: "16px 36px", borderRadius: "50px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white", fontWeight: "700", fontSize: "15px",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(102,126,234,0.5)",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}>
            Fanlarni ko'rish →
          </a>
          <a href="/auth/register" style={{
            padding: "16px 36px", borderRadius: "50px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            color: "white", fontWeight: "600", fontSize: "15px",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.2s"
          }}>
            Ro'yxatdan o'tish
          </a>
        </div>

        <div className="animate-fadeInUp" style={{
          display: "inline-flex",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          overflow: "hidden",
          animationDelay: "0.55s",
          opacity: 0
        }}>
          {[
            { son: fanlarSoni + "+", nom: "Fan", emoji: "📚" },
            { son: "500+", nom: "Mavzu", emoji: "📖" },
            { son: "1000+", nom: "Maqola", emoji: "✍️" },
          ].map((stat, i) => (
            <div key={stat.nom} style={{
              textAlign: "center", padding: "24px 36px",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none"
            }}>
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{stat.emoji}</div>
              <div style={{
                fontSize: "28px", fontWeight: "800", color: "white",
                lineHeight: "1", letterSpacing: "-1px"
              }}>
                {stat.son}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {stat.nom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}