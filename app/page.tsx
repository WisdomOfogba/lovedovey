import { Heart, Stars, Sparkles, Coffee, Gift } from 'lucide-react'
import Image from 'next/image'

const FloatingIcon = ({ Icon, className }: { Icon: React.ElementType, className: string }) => (
  <div className={`absolute ${className}`}>
    <Icon className="text-pink-200 opacity-90" />
  </div>
)

export default function RomanticPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center text-white relative overflow-hidden">
      <Image
        src="/bg.jpg"
        alt="Romantic background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      {/* Floating icons */}
      <FloatingIcon Icon={Heart} className="top-1/4 left-1/4 animate-pulse" />
      <FloatingIcon Icon={Stars} className="top-1/3 right-1/4 animate-bounce" />
      <FloatingIcon Icon={Sparkles} className="bottom-1/4 left-1/3 animate-ping" />
      <FloatingIcon Icon={Coffee} className="top-1/2 right-1/3 animate-pulse" />
      <FloatingIcon Icon={Gift} className="bottom-1/3 right-1/2 animate-bounce" />
      <FloatingIcon Icon={Heart} className="top-2/3 left-1/2 animate-ping" />

      <div className="bg-pink-900 bg-opacity-40 p-8 rounded-lg max-w-2xl relative z-10 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-script text-pink-200">
          I Love you Adeshola 👨‍❤️‍👨 <Heart className="inline-block text-pink-300" />
        </h1>
        <p className="text-lg md:text-xl mb-4 text-pink-100">
          My dear Adeshola💗, you are the light that guides me through the darkest nights.
          Your love is the melody that makes my heart sing with joy.
        </p>
        <p className="text-lg md:text-xl mb-6 text-pink-100">
          Every moment with you is a treasure, every smile a gift.
          You are my today and all of my tomorrows.
        </p>
        <div className="flex justify-center space-x-4">
          <Heart className="text-pink-300 animate-bounce" size={32} />
          <Heart className="text-pink-200 animate-bounce" size={32} />
          <Heart className="text-pink-300 animate-bounce" size={32} />
        </div>
      </div>
    </div>
  )
}

