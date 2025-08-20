'use client'

import { useEffect, useState, useCallback } from 'react'

type ImgItem = { src: string; alt?: string }

export default function MobileGallery({ images }: { images: ImgItem[] }) {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const openAt = (i: number) => { setIdx(i); setOpen(true) }
  const close = useCallback(() => setOpen(false), [])
  const prev  = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length])
  const next  = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length])
  const items = images.slice(0, 9) // 앞 9개만

  // ESC / ← → 지원
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, prev, next])

  return (
    <>
      {/* ✅ 모바일에서 확실하게 동작하는 정적 그리드 클래스 */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => openAt(i)}
            className="relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            aria-label={`이미지 ${i + 1} 보기`}
          >
            {/* 정사각형 썸네일 */}
            <div className="aspect-square">
              <img
                src={img.src}
                alt={img.alt ?? `사진 ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      {/* 라이트박스(큰 이미지) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <div className="relative w-full max-w-3xl">
            {/* 닫기 */}
            <button
              onClick={close}
              aria-label="닫기"
              className="absolute -top-3 -right-3 bg-white/95 text-gray-900 rounded-full w-10 h-10 shadow flex items-center justify-center"
            >
              ✕
            </button>

            {/* 큰 이미지 */}
            <div className="bg-black rounded-xl overflow-hidden">
              <img
                src={images[idx].src}
                alt={images[idx].alt ?? `확대 이미지 ${idx + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* 좌우 이동 (모바일에서도 터치 쉬움) */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="이전"
                className="bg-white/90 text-gray-900 rounded-full w-10 h-10 shadow"
              >‹</button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="다음"
                className="bg-white/90 text-gray-900 rounded-full w-10 h-10 shadow"
              >›</button>
            </div>

            {/* 인덱스 */}
            <div className="mt-3 text-center text-sm text-white/90">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
