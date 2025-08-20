'use client'

export default function CalendarSep2025() {
  // 주 헤더 (일~토)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  // 2025년 9월 정보
  const year = 2025
  const month = 9 // 1-12
  const daysInMonth = 30 // 9월은 30일

  // JS의 getDay() 기준: Sun=0 ~ Sat=6
  const firstDay = new Date(`${year}-${String(month).padStart(2, '0')}-01`).getDay() // 0=일
  // 9/1이 월요일이므로 firstDay=1 → 앞에 공백 1칸
  const blanks = Array.from({ length: firstDay }, () => null)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <section className="w-full flex justify-center py-6">
      <div className="w-full max-w-sm rounded-2xl border bg-white p-4 shadow">
        {/* 타이틀 */}
        <div className="mb-3 text-center">
          <h3 className="text-lg font-semibold">2025년 9월</h3>
        </div>

        {/* 주 헤더 */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-500">
          {weekdays.map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-2 text-sm">
          {/* 앞쪽 빈칸 */}
          {blanks.map((_, i) => (
            <div key={`b-${i}`} />
          ))}

          {/* 날짜들 */}
          {days.map((d) => {
            const isTarget = d === 20
            return (
              <div key={d} className="py-1">
                <div
                  className={[
                    'mx-auto flex h-9 w-9 items-center justify-center rounded-full',
                    isTarget
                      ? 'bg-[rgb(255,148,148)] text-white font-semibold'
                      : 'text-gray-700'
                  ].join(' ')}
                  aria-label={isTarget ? `${year}년 ${month}월 ${d}일 (강조됨)` : `${year}년 ${month}월 ${d}일`}
                >
                  {d}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
