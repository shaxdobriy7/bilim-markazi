import { supabase } from "@/lib/supabase"
import HeroSection from "@/components/HeroSection"
import FanlarGrid from "@/components/FanlarGrid"

export default async function HomePage() {
  const { data: fanlar } = await supabase
    .from("fanlar")
    .select("*")
    .order("nom")

  return (
    <main>
      <HeroSection fanlarSoni={fanlar?.length || 0} />
      <FanlarGrid fanlar={fanlar || []} />
    </main>
  )
}