export default function HaqimizdaSahifasi() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 32px" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "24px",
        padding: "60px 40px",
        textAlign: "center",
        marginBottom: "48px",
        color: "white"
      }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎓</div>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px" }}>
          Bilim Markazi haqida
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.85, maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
          O'zbek tilida eng katta bepul bilim platformasi — 
          kitoblarda yo'q ma'lumotlar ham shu yerda
        </p>
      </div>

      {/* Maqsad */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
        marginBottom: "48px"
      }}>
        {[
          { emoji: "📚", sarlavha: "Barcha fanlar", tavsif: "Maktab, universitet va mustaqil o'rganish uchun barcha fanlar bir joyda" },
          { emoji: "🌐", sarlavha: "Internet bilimlar", tavsif: "Kitoblarda yo'q, faqat internetda mavjud qo'shimcha ma'lumotlar" },
          { emoji: "🆓", sarlavha: "Mutlaqo bepul", tavsif: "Hech qanday to'lov yo'q — bilim hammaga ochiq bo'lishi kerak" },
          { emoji: "🇺🇿", sarlavha: "O'zbek tilida", tavsif: "Barcha kontent o'zbek tilida — o'z tilimizda o'rganamiz" },
        ].map((karta) => (
          <div key={karta.sarlavha} style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "28px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>{karta.emoji}</div>
            <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
              {karta.sarlavha}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
              {karta.tavsif}
            </p>
          </div>
        ))}
      </div>

      {/* Statistika */}
      <div style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "40px",
        marginBottom: "48px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "32px" }}>
          Raqamlarda
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "24px"
        }}>
          {[
            { son: "36+", nom: "Fan" },
            { son: "500+", nom: "Mavzu" },
            { son: "1000+", nom: "Maqola" },
            { son: "∞", nom: "Imkoniyat" },
          ].map((stat) => (
            <div key={stat.nom}>
              <div style={{
                fontSize: "40px", fontWeight: "800",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                {stat.son}
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                {stat.nom}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jamoa */}
      <div style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "40px",
        marginBottom: "48px"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "24px" }}>
          Loyiha haqida
        </h2>
        <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8", marginBottom: "16px" }}>
          Bilim Markazi — O'zbekistonda sifatli ta'limga umumiy kirishni ta'minlash maqsadida yaratilgan loyiha. 
          Biz har bir o'zbek yoshining bilim olish imkoniyatiga ega bo'lishi kerak deb hisoblaymiz.
        </p>
        <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.8" }}>
          Platformamizda siz nafaqat darslik materiallarini, balki internetdagi eng yaxshi 
          manbalardan to'plangan qo'shimcha bilimlarni ham topasiz.
        </p>
      </div>

      {/* CTA */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "16px",
        padding: "40px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
          Hoziroq boshlang!
        </h2>
        <p style={{ opacity: 0.85, marginBottom: "24px" }}>
          Minglab mavzular va maqolalar sizni kutmoqda
        </p>
        <a href="/" style={{
          display: "inline-block",
          padding: "14px 32px",
          borderRadius: "12px",
          background: "white",
          color: "#667eea",
          fontWeight: "700",
          fontSize: "15px",
          textDecoration: "none"
        }}>
          Fanlarni ko'rish →
        </a>
      </div>

    </main>
  )
}