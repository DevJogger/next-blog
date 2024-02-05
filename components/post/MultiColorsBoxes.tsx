export default function MultiColorsBoxes() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-md md:h-24 md:w-24"
              style={{ backgroundColor: `hsl(${22.5 * index}, 70%, 50%)` }}
            >
              <span className="text-2xl font-bold text-white">{index + 1}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
