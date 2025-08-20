import data from '@/../config.json'

export default function Home() {
  const { title, names, datetime, venue, map, note } = data
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">
          우리의 소중한 순간을 함께해 주세요.
        </p>

        <div className="rounded-2xl shadow p-6 bg-white space-y-3">
          <h2 className="text-2xl font-semibold">{names}</h2>
          <p>{datetime}</p>
          <p>{venue}</p>
        </div>

        <a
          className="inline-block rounded-full px-6 py-3 shadow hover:shadow-md border"
          href={map}
          target="_blank"
          rel="noreferrer"
        >
          오시는 길 열기
        </a>

        <p className="text-sm text-gray-500">{note}</p>
      </div>
    </main>
  )
}
