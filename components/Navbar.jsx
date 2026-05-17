export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          <span className="font-bold text-gray-900 text-lg">Bilim Markazi</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
            Fanlar
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
            Maqolalar
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
            Haqimizda
          </a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
            Kirish
          </button>
        </div>

      </div>
    </nav>
  )
}