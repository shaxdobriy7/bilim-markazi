export default function HeroSection({ fanlarSoni }) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      padding: "80px 32px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "-100px", left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(255,255,255,0.05)"
      }}></div>
      <div style={{
        position: "absolute", bottom: "-80px", right: "-80px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(255,255,255,0.08)"
      }}></div>

      <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50px",
          padding: "6px 16px",
          fontSize: "13px",
          color: "white",
          marginBottom: "24px"
        }}>
          🎓 O'zbek tilida bilim platformasi
        </div>

        <h1 style={{
          fontSize: "clamp(32px, 6vw, 64px)",
          fontWeight: "800",
          color: "white",
          lineHeight: "1.2",
          marginBottom: "20px",
          textShadow: "0 2px 20px rgba(0,0,0,0.2)"
        }}>
          Bilim Markazi
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "48px",
          lineHeight: "1.6"
        }}>
          Barcha fanlar, mavzular va qo'shimcha bilimlar —<br />
          kitoblarda yo'q ma'lumotlar ham shu yerda
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap"
        }}>
          {[
            { son: fanlarSoni, nom: "Fan" },
            { son: "500+", nom: "Mavzu" },
            { son: "1000+", nom: "Maqola" },
          ].map((stat) => (
            <div key={stat.nom} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", fontWeight: "800", color: "white" }}>
                {stat.son}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>
                {stat.nom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}