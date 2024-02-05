interface Props {
  step: number
}
export default function CircleProgressIndicatorsThought({ step }: Props) {
  if (step === 1) {
    return (
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-400 from-0% via-amber-400 via-60% to-gray-700 to-60%"></div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-400 from-0% via-amber-400 via-60% to-gray-700 to-60%"></div>
      </div>
    )
  }
  if (step === 3) {
    return (
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-400 from-0% via-amber-400 via-60% to-gray-700 to-60% before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600"></div>
      </div>
    )
  }
  if (step === 4) {
    return (
      <div className="flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600">
        <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-amber-400 from-0% via-amber-400 via-60% to-gray-700 to-60% before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600">
          <h1 className="absolute m-0">
            60<small>%</small>
          </h1>
        </div>
      </div>
    )
  }
}
