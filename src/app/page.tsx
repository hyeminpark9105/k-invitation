'use client'

import { useEffect, useState } from 'react'
import data from '@/../config.json'
import Image from 'next/image'
import { Gamja_Flower, Noto_Sans_KR } from 'next/font/google'
import { Phone, MessageSquare, Ellipsis, MessageCircle, Link as LinkIcon } from 'lucide-react'
import CalendarSep2025 from '@/components/CalendarSep2025'
import Gallery from '@/components/Gallery'

const gamja = Gamja_Flower({ subsets: ['latin'], weight: '400' })
const noto400 = Noto_Sans_KR({ subsets: ['latin'], weight: '400' })
const noto700 = Noto_Sans_KR({ subsets: ['latin'], weight: '700' })

export default function Home() {
  const { title, names, date, datetime, venue1, venue2, map, note } = data
  const [loading, setLoading] = useState(true)
  const images = [
    { src: '/album/01.jpg', alt: '최연아01' },
    { src: '/album/02.jpg', alt: '최연아02' },
    { src: '/album/03.jpg', alt: '최연아03' },
    { src: '/album/04.jpg', alt: '최연아04' },
    { src: '/album/05.jpg', alt: '최연아05' },
    { src: '/album/06.jpg', alt: '가족사진01' },
  ]
  const address = "경기도 군포시 고산로 599"
  const shareUrl = "https://hyeminpark9105.github.io/k-invitation" // 초대장 URL 넣기
  const text = "최연아 🎉돌잔치🎉에 초대합니다.\n\n아빠 : 최동현 ♡ 엄마 : 박혜민 \n일시 : 2025년 9월 20일 토요일 오전 11시 30분"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // 2초 후 메시지 사라짐
    } catch (err) {
      alert("복사에 실패했습니다. 직접 주소를 복사해주세요.")
    }
  }

  useEffect(() => {
    // 4.2초 후에 로딩 상태를 false로 변경(DOM에서 완전히 제거)
    const t = setTimeout(() => setLoading(false), 4200)
    // 3.5초 후에 오버레이 서서히 사라짐
    const fadeTimer = setTimeout(() => {
      const overlay = document.getElementById('loading-overlay')
      if (overlay) {
        overlay.classList.remove('opacity-100')
        overlay.classList.add('opacity-0') // opacity-100 -> opacity-0
      }
    }, 3500)


    const elf = document.getElementById('loading-text-first')
    const els = document.getElementById('loading-text-second')
    const elt = document.getElementById('loading-text-third')
    if (!elf || !els || !elt) return () => { clearTimeout(fadeTimer), clearTimeout(t) }

    // 0.2초 후 등장 (부드러운 시작)
    setTimeout(() => {
      elf.classList.remove('opacity-0')
      elf.classList.add('opacity-100')
    }, 200)

    // 1.7초 후 사라짐
    setTimeout(() => {
      elf.classList.remove('opacity-100')
      elf.classList.add('opacity-0')
    }, 1700)

    // 0.7초 후 등장 (부드러운 시작)
    setTimeout(() => {
      els.classList.remove('opacity-0')
      els.classList.add('opacity-100')
    }, 700)

    // 2.2초 후 사라짐
    setTimeout(() => {
      els.classList.remove('opacity-100')
      els.classList.add('opacity-0')
    }, 2200)

    // 1.2초 후 등장 (부드러운 시작)
    setTimeout(() => {
      elt.classList.remove('opacity-0')
      elt.classList.add('opacity-100')
    }, 1200)

    // 2.7초 후 사라짐
    setTimeout(() => {
      elt.classList.remove('opacity-100')
      elt.classList.add('opacity-0')
    }, 2700)

    const container = document.getElementById('hearts-container')
    if (!container) return () => { clearTimeout(fadeTimer), clearTimeout(t) }

    const createHeart = () => {
      function randomColor() {
        const r = Math.floor(Math.random() * 100)
        if (r < 50) return `rgb(255, 148, 148)` // 기본 하트 색상
        return `rgb(255, 209, 209)` // 기본 하트 색상
      }

      const heart = document.createElement('div')
      heart.innerText = '♥'
      heart.className =
        `${gamja.className} absolute text-xl opacity-80 select-none pointer-events-none transition-transform duration-1000`
      heart.style.color = randomColor() // 랜덤 색상

      // 랜덤 시작 위치/크기/속도
      heart.style.left = Math.random() * 90 + '%'
      heart.style.fontSize = Math.random() * 20 + 12 + 'px'
      heart.style.top = '-20px' // 화면 위에서 시작

      container.appendChild(heart)

      // 애니메이션: 아래로 + 오른쪽
      const duration = 5000 + Math.random() * 3000
      const driftX = (Math.random() * 400 - 200) + 100 // 좌우 랜덤 (px)
      setTimeout(() => {
        heart.style.transition = `transform ${duration}ms linear, opacity ${duration}ms ease-in-out`
        heart.style.transform = `translateY(120vh) translateX(${driftX}px)`
        heart.style.opacity = '0'
      }, 50)

      // 일정 시간 후 제거
      setTimeout(() => {
        heart.remove()
      }, duration + 1000)
    }

    const interval = setInterval(createHeart, 300) // 0.3초마다 하트 생성
    return () => { clearTimeout(fadeTimer), clearTimeout(t), clearInterval(interval) }
  }, [])

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start bg-[#FFFCF7]">
      {/* 로딩 오버레이 */}
      {loading && (
        <div
          id="loading-overlay"
          className="fixed inset-0 z-50 grid place-items-center 
                     bg-gradient-to-b from-[#FFF5E4] to-[#FF9494]
                     opacity-100 transition-opacity duration-700 ease-in-out"
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          <div className="flex flex-col items-center gap-4">
            <p id="loading-text-first" className={`${noto700.className} text-white opacity-0 
                 transition-all duration-900 ease-in-out`}>
              사랑으로 키운 시간
            </p>
            <p id="loading-text-second" className={`${noto700.className} text-white opacity-0 
                 transition-all duration-900 ease-in-out`}>
              기쁨으로 채운 날들
            </p>
            <p id="loading-text-third" className={`${noto700.className} text-white opacity-0 
                 transition-all duration-900 ease-in-out`}>
              이제 첫 번째 생일을 맞이합니다
            </p>
          </div>
        </div>
      )}

      {/* 상단 이미지 + 하트 */}
      <div className="w-full flex justify-center p-6 bq-[rgb(255,148,148)]">
        <div className="relative w-[400px] h-[700px] overflow-hidden bg-white p-6">
          <div className="py-4 space-y-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <p className={`${gamja.className} text-2xl text-[rgb(255,148,148)]`}>♥</p>
              <p className={`${gamja.className} text-2xl font-bold`}>{title}</p>
              <p className={`${gamja.className} text-2xl text-[rgb(255,148,148)]`}>♥</p>
            </div>
          </div>
          <img 
            src="/baby_main.jpg"
            alt="Invitation"
            className="w-[300px] h-[380px] object-cover rounded-xl"
            style={{
              WebkitMaskImage: `
                linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%),
                linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%),
                linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%),
                linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%)
              `,
              WebkitMaskComposite: 'destination-in',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              WebkitMaskSize: 'cover',
            }}
          />
          <div className="p-6 bg-white space-y-3 text-center">
            <div className="items-center justify-center space-x-2 space-y-3">
              <h2 className={`${noto400.className} text-lg`}>{date}</h2>
              <h2 className={`${noto700.className} text-lg`}>{datetime}</h2>
              <p className={`${noto400.className} m-0`} >{venue1}</p>
              <p className={`${noto400.className} space-y-0`}>{venue2}</p>

              <div className="flex items-center justify-center space-x-2  pb-6">
                <p className={`${noto700.className} text-lg`}>최동현</p>
                <p className={`${gamja.className} text-2xl text-[rgb(255,148,148)]`}>♥</p>
                <p className={`${noto700.className} text-lg`}>박혜민</p>
              </div>
            </div>
          </div>
          <div id="hearts-container" className="absolute inset-0 overflow-hidden"></div>
        </div>
      </div>

      {/* 초대글 */}
      <div className="max-w-xl w-full text-center space-y-6 p-6 bg-white">
        <div className="p-6 bg-white space-y-3">
          <h1 className={`${gamja.className} text-2xl text-[rgba(110, 71, 71, 1)]`}>Invitation</h1>
          <p className={`${noto400.className} text-[15px] py-6`}>
            보듬어 안기도 조심스러웠는데 <br>
            </br>어느덧 건강하게 자라 첫 생일을 맞이하였습니다.<br></br><br>
            </br>이렇게 예쁘고 건강하게 자라준 것은 항상 관심과 사랑으로 지켜주신 여러분의 사랑이라고 생각합니다.<br></br><br>
            </br>소박하지만 정성스레 자리를 마련하였습니다.<br>
            </br>함께해 주시어 연아의 앞날을<br>
            </br>축복해 주시면 큰 기쁨이 되겠습니다.
          </p>
        </div>
        <div className="items-center justify-center space-x-2 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <h2 className={`${noto700.className}`}>{date}</h2>
            <h2 className={`${noto700.className}`}>{datetime}</h2>
          </div>

          <p className={`${noto400.className} m-0`} >{venue1}</p>
          <p className={`${noto400.className} space-y-0`}>{venue2}</p>

          <div className="flex items-center justify-center space-x-2 m-0">
            <p className={`${noto400.className} `} >아빠</p>
            <p className={`${noto700.className} text-lg`}>최동현</p>
            <Ellipsis size={24} className="text-[rgb(255,227,225)]" />
            <a
              href="tel:010-2763-7164"
              className="flex items-center space-x-0 px-2 py-2 text-[rgb(255,148,148)]"
            >
              <Phone size={20} className="text-[rgb(255,148,148)]" />
            </a>
            <a
              href="sms:010-2763-7164"
              className="flex items-center space-x-0 px-2 py-2 text-[rgb(255,148,148)]"
            >
              <MessageSquare size={20} className="text-[rgb(255,148,148)]" />
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2  pb-6">
            <p className={`${noto400.className} `} >엄마</p>
            <p className={`${noto700.className} text-lg`}>박혜민</p>
            <Ellipsis size={24} className="text-[rgb(255,227,225)]" />
            <a
              href="tel:010-2774-3737"
              className="flex items-center space-x-0 px-2 py-2 text-[rgb(255,148,148)]"
            >
              <Phone size={20} className="text-[rgb(255,148,148)]" />
            </a>
            <a
              href="sms:010-2774-3737"
              className="flex items-center space-x-0 px-2 py-2 text-[rgb(255,148,148)]"
            >
              <MessageSquare size={20} className="text-[rgb(255,148,148)]" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="max-w-xl w-full text-center space-y-6 p-6 bg-[rgb(255,247,246)]">
        <main className="p-6">
          <CalendarSep2025 />
        </main>
      </div> */}

      <div className="max-w-xl w-full text-center space-y-6 p-6 bg-[#FFFCF7]">
        <h1 className={`${gamja.className} text-2xl text-[rgb(255,148,148)]`}>Album</h1>
        <main className="p-6">
          <Gallery images={images} />
        </main>
      </div>

      <div className="max-w-xl w-full text-center space-y-6 p-6 bg-white">
        <h1 className={`${gamja.className} text-2xl text-[rgb(255,148,148)] bg-white`}>Location</h1>
        <div className="flex justify-center my-6 bg-white">
          <img
            src="/loc.jpg"
            className="w-[280px]"
          />
        </div>
        <div className="flex justify-center my-6 bg-white"><p>경기도 군포시 고산로 599</p></div>
        <div className="flex justify-center my-6 bg-white"><Phone size={14} className="m-2"/> <p>0507-1308-6116</p></div>

        <div className="flex justify-center my-6">
          <img
            src="/location.png"
            alt="Invitation"
            className="w-[280px] h-[280px] object-cover"
          />
        </div>

        <div className="flex justify-center my-6">
          <a
            href={`https://map.naver.com/v5/search/${encodeURIComponent(address)}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-[rgb(255,148,148)] text-white font-semibold shadow hover:bg-[rgb(255,120,120)] transition"
          >
            네이버 지도 열기
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-3 pb-6 w-full max-w-md mx-auto">
        {/* 카톡 공유 */}
        <a
          href={`kakaolink://send?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`}
          className="flex items-center justify-center text-[rgb(255,148,148)] space-x-2 rounded-lg py-3 font-semibold transition"
        >
          <MessageCircle size={22} />
          <span className="text-sm">카카오톡으로 공유하기</span>
        </a>

        {/* 링크 복사 */}
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center text-[rgb(255,148,148)] space-x-2 rounded-lg py-3 font-semibold transition"
        >
          <LinkIcon size={22} />
          <span className="text-sm">초대장 주소 복사하기</span>
        </button>
      </div>


    </main>
  )
}
