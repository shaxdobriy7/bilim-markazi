import FanKartochka from "@/components/FanKartochka"

export default function HomePage() {
  const fanlar = [
    { nom: "Matematika", darslar: 120, rang: "bg-blue-400" },
    { nom: "Fizika", darslar: 95, rang: "bg-purple-400" },
    { nom: "Tarix", darslar: 80, rang: "bg-orange-400" },
    { nom: "Biologiya", darslar: 110, rang: "bg-green-400" },
    { nom: "Informatika", darslar: 150, rang: "bg-cyan-400" },
    { nom: "Kimyo", darslar: 90, rang: "bg-red-400" },
    { nom: "Adabiyot", darslar: 70, rang: "bg-pink-400" },
    { nom: "Geografiya", darslar: 85, rang: "bg-teal-400" },
    { nom: "Falsafa", darslar: 60, rang: "bg-yellow-400" },
    { nom: "Sotsiologiya", darslar: 50, rang: "bg-indigo-400" },
    { nom: "Psixologiya", darslar: 75, rang: "bg-gray-400" },
    { nom: "Ekologiya", darslar: 65, rang: "bg-lime-400" },
    { nom: "Astronomiya", darslar: 55, rang: "bg-rose-400" },
    { nom: "Fizkultura", darslar: 40, rang: "bg-emerald-400" },
    { nom: "Musiqa", darslar: 45, rang: "bg-violet-400" },
    { nom: "Rassomchilik", darslar: 30, rang: "bg-fuchsia-400" },
    { nom: "Dizayn", darslar: 35, rang: "bg-sky-400" },
    { nom: "Ingliz tili", darslar: 100, rang: "bg-blue-300" },
    { nom: "Rus tili", darslar: 80, rang: "bg-red-300" },
    { nom: "O'zbek tili", darslar: 90, rang: "bg-green-300" },
    { nom: "Nemis tili", darslar: 70, rang: "bg-yellow-300" },
    { nom: "Fransuz tili", darslar: 65, rang: "bg-purple-300" },
    { nom: "Arab tili", darslar: 60, rang: "bg-orange-300" },
    { nom: "Huquq", darslar: 75, rang: "bg-slate-400" },
    { nom: "Iqtisodiyot", darslar: 85, rang: "bg-amber-400" },
    { nom: "Tibbiyot asoslari", darslar: 95, rang: "bg-red-500" },
    { nom: "Anatomiya", darslar: 90, rang: "bg-pink-500" },
    { nom: "Genetika", darslar: 70, rang: "bg-green-500" },
    { nom: "Arxitektura", darslar: 80, rang: "bg-stone-400" },
    { nom: "Muhandislik", darslar: 110, rang: "bg-zinc-500" },
    { nom: "Dasturlash", darslar: 130, rang: "bg-indigo-500" },
    { nom: "Veb ishlab chiqish", darslar: 140, rang: "bg-sky-500" },
    { nom: "Sun'iy intellekt", darslar: 120, rang: "bg-violet-500" },
    { nom: "Kiberxavfsizlik", darslar: 100, rang: "bg-red-600" },
    { nom: "Statistika", darslar: 80, rang: "bg-blue-500" },
    { nom: "Mantiq", darslar: 65, rang: "bg-purple-500" },
  ]

  return (
    <main style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px" }}>
        Bilim Markazi
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "32px" }}>
        Barcha fanlar bir joyda — bepul va to'liq
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "16px"
      }}>
        {fanlar.map((fan) => (
          <FanKartochka
            key={fan.nom}
            nom={fan.nom}
            darslar={fan.darslar}
            rang={fan.rang}
          />
        ))}
      </div>
    </main>
  )
}