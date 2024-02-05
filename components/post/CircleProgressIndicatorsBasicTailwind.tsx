export default function CircleProgressIndicatorsBasicTailwind() {
  return (
    <div className="flex justify-start gap-4">
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-green-400 from-0% via-green-400 via-10% to-gray-700 to-10% before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            10<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Loading Progress</h2>
      </div>
      <div className="hidden flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 sm:flex dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-400 from-0% via-amber-400 via-65% to-gray-700 to-65% before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            65<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Rendering Tracker</h2>
      </div>
      <div className="hidden flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 md:flex dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-700 from-0% via-pink-700 via-85% to-gray-700 to-85% before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            85<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Syncing Status</h2>
      </div>
    </div>
  )
}
