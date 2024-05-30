import Image from 'next/image'

const page = () => {
  return (
    <div className="grid h-full w-full place-items-center bg-[#d5e1ef]">
      <div className="flex w-80 flex-col gap-6 rounded-3xl bg-white p-4 pb-10 drop-shadow-md">
        <div
          className="grid h-72 place-items-center"
          style={{
            background:
              "url('/static/images/workshop/001/qr-code-bg.png') no-repeat center center / 100%",
          }}
        >
          <Image
            src="/static/images/workshop/001/qr-code.png"
            width={160}
            height={160}
            alt="QR Code"
          />
        </div>
        <div className="flex flex-col items-center gap-4 text-center text-xl font-bold">
          <span className="shadow-black/25 text-shadow-lg ">
            Improve your front-end skills by building projects
          </span>
          <span className="text-sm text-[#7D889E] shadow-black/25 text-shadow-lg">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </span>
        </div>
      </div>
    </div>
  )
}

export default page
