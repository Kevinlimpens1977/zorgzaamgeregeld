import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "Dankzij Zorgzaam Geregeld kreeg onze moeder eindelijk overzicht, rust en persoonlijke aandacht. We zijn enorm opgelucht.",
    author: "Saskia R.",
    relation: "Dochter van cliënt",
    image: "/images/reviews/review1.jpg"
  },
  {
    text: "Warm, betrouwbaar en professioneel. Er werd niet alleen geholpen, maar echt meegedacht. Dat maakte het verschil.",
    author: "Gerard & Wilma",
    relation: "Familie van cliënt",
    image: "/images/reviews/review2.jpg"
  },
  {
    text: "Door de begeleiding kwam er weer structuur in huis. Heel prettig hoe aandachtig en rustig er gewerkt werd.",
    author: "Marieke P.",
    relation: "Mantelzorger",
    image: "/images/reviews/review3.jpg"
  },
  {
    text: "Een verademing. De stress van de verhuizing werd volledig weggenomen. Alles werd met zorg en aandacht geregeld.",
    author: "Dhr. Jansen",
    relation: "Cliënt",
    image: "/images/reviews/review4.jpg"
  },
  {
    text: "Professionele hulp bij het leeghalen van de woning van mijn vader. Respectvol en efficiënt.",
    author: "Peter de Vries",
    relation: "Zoon van cliënt",
    image: "/images/reviews/review5.jpg"
  },
  {
    text: "Eindelijk iemand die meedenkt en de regie durft te nemen. Gaf me de ademruimte die ik als mantelzorger zo nodig had.",
    author: "Anja K.",
    relation: "Mantelzorger",
    image: "/images/reviews/review6.jpg"
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto py-20 relative px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-title text-center mb-12 italic">Ervaringen</h2>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gold hover:text-champagne transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="bg-white p-10 md:p-14 rounded-sm shadow-soft border-l-4 border-champagne text-center h-full flex flex-col items-center">
                {/* Photo placeholder logic if images are missing, can toggle */}
                <div className="w-20 h-20 rounded-full bg-base border border-gold p-1 mb-6">
                  <img src={r.image} alt={r.author} className="w-full h-full rounded-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                  />
                  <div className="hidden w-full h-full rounded-full flex items-center justify-center bg-surface text-gold font-serif text-xl">
                    {r.author.charAt(0)}
                  </div>
                </div>

                <p className="text-xl md:text-2xl font-serif text-title italic mb-6 leading-relaxed">
                  "{r.text}"
                </p>

                <div className="mt-auto">
                  <p className="text-gold font-bold uppercase tracking-wider text-sm mb-1">{r.author}</p>
                  <p className="text-text/60 text-sm font-light">{r.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gold hover:text-champagne transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      <div className="flex justify-center gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-gold w-8' : 'bg-taupe/40'}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
