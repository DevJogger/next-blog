export default function CircleProgressIndicatorsArbitrary() {
  return (
    <div className="flex justify-start gap-4">
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-[#04e762] from-0% via-[#04e762] via-[13%] to-gray-700 to-[13%] before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            13<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Loading Progress</h2>
      </div>
      <div className="hidden flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 sm:flex dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-[#f5b700] from-0% via-[#f5b700] via-[63%] to-gray-700 to-[63%] before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            63<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Rendering Tracker</h2>
      </div>
      <div className="hidden flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 md:flex dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-[#dc0073] from-0% via-[#dc0073] via-[84%] to-gray-700 to-[84%] before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            84<small>%</small>
          </h1>
        </div>
        <h2 className="m-0">Syncing Status</h2>
      </div>
    </div>
  )
}
