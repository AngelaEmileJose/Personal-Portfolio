"use client"

import React, { useState } from "react"
import { X, ExternalLink, Download, BookOpen, Camera, Film, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import SpotlightCard from "@/components/reactbits/SpotlightCard"

interface HobbyGallery {
  title: string
  description: string
  image: string
  award?: {
    title: string
    issuer: string
    date: string
    detailedDescription: string
    link?: string
  }
  blogLink?: string
  article?: {
    title: string
    publication: string
    date: string
    url: string
    pdfUrl: string
  }
  gallery?: {
    images?: string[]
    videos?: { title: string; url: string; description?: string }[]
  }
}

const hobbies: HobbyGallery[] = [
  {
    title: "Food and Travel",
    description: "Experimenting with international cuisines and baking",
    image: "/food-travel-cover.jpg",
    gallery: {
      images: [
        "/food-pastries.jpg",
        "/food-pancakes.jpg",
        "/food-pho-noodles.jpg",
        "/food-rice-dish.jpg",
        "/food-japanese-bowls.jpg",
      ],
    },
  },
  {
    title: "Sneak Peak",
    description: "Candid moments with family, friends, and my beloved Booboo",
    image: "/booboo-cover.jpg",
    gallery: {
      images: [
        "/sneak-peak-saree-booboo-lakeside.jpg",
        "/sneak-peak-family-selfie.jpg",
        "/sneak-peak-nara-deer.jpg",
        "/sneak-peak-maneki-neko-cats.jpg",
        "/sneak-peak-korean-dinner-gathering.jpg",
        "/sneak-peak-cherry-blossom-picnic.jpg",
        "/sneak-peak-friends-trio.jpg",
        "/sneak-peak-daruma-dolls.jpg",
        "/sneak-peak-study-session.jpg",
        "/sneak-peak-wedding-celebration.jpg",
        "/sneak-peak-cherry-blossom.jpg",
        "/sneak-peak-hiking.jpg",
        "/sneak-peak-gathering.jpg",
        "/sneak-peak-dinner.jpg",
        "/booboo-1.jpg",
        "/booboo-2.jpg",
        "/booboo-3.jpg",
        "/booboo-4.png",
        "/booboo-5.jpg",
        "/booboo-6.jpg",
        "/booboo-7.jpg",
        "/booboo-8.jpg",
        "/booboo-9.jpg",
        "/booboo-10.jpg",
        "/booboo-11.jpg",
        "/booboo-12.jpg",
        "/booboo-13.jpg",
        "/booboo-14.jpg",
        "/booboo-15.jpg",
        "/booboo-16.jpg",
        "/booboo-17.jpg",
        "/booboo-18.jpg",
      ],
    },
  },
  {
    title: "Blog",
    description: "Sharing my life as an international student in Korea",
    image: "/blog-tulip-field.png",
    blogLink: "https://m.blog.naver.com/angela_blogs?tab=1",
  },
  {
    title: "Videos",
    description: "Creative videos and behind-the-scenes content",
    image: "/images/image.png",
    award: {
      title: "3rd Prize Award",
      issuer: "KNU (Kyungpook National University)",
      date: "Nov 2025",
      detailedDescription: `Honored to receive the 3rd Prize Award at the Fall 2025 KNU Video Contest! I am thrilled to share that my video, "The KNU DREAM," was awarded 3rd Prize in the Fall 2025 KNU Video Contest at Kyungpook National University, South Korea.

In this video, I wanted to capture the essence of being an international student at KNU—from the daily routine on our beautiful campus to the exciting "extra" moments that make studying in Korea so unique. Whether it's grabbing a quick meal at the cafeteria, studying in our spacious library, exploring traditional markets, or enjoying the energy of the KNU Festival, every moment is part of a bigger dream.

This journey has been about more than just academics; it's about the community, the culture, and the unforgettable experiences shared with friends from all over the world.

A huge thank you to the KNU Office of International Affairs for this recognition and for providing such a vibrant environment for international students to thrive.`,
    },
    gallery: {
      videos: [
        {
          title: "The KNU DREAM",
          url: "https://www.youtube.com/embed/PO1sgjV5HfQ",
          description: "A short film capturing life as an international student at Kyungpook National University",
        },
      ],
    },
  },
  {
    title: "Writing & Journalism",
    description:
      'Selected as one of only two international student contributors for the Spring 2026 KNU Times, I authored the article "Making Friends in Korea as a Foreign Student" to share my experience navigating cultural barriers and building a community on campus.',
    image: "/knu-times-cover.jpg",
    article: {
      title: "Making Friends in Korea as a Foreign Student",
      publication: "KNU Times (Issue 401)",
      date: "Spring 2026",
      url: "https://www.knupresscenter.com/news/articleView.html?idxno=31898",
      pdfUrl: "/knu-times-making-friends-in-korea.pdf",
    },
    gallery: {
      images: ["/knu-times-cover.jpg"],
    },
  },
]

function GalleryModal({ hobby, onClose }: { hobby: HobbyGallery; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
        <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-4 flex justify-between items-center z-10">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground">{hobby.title}</h3>
            {hobby.award && (
              <div className="mt-1 text-xs font-mono text-accent">
                {hobby.award.title} · {hobby.award.issuer} ({hobby.award.date})
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition text-foreground"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {hobby.award && (
          <div className="bg-accent/5 border-b border-accent/20 p-6 space-y-3">
            <p className="text-xs sm:text-sm text-foreground/90 whitespace-pre-line leading-relaxed font-sans">
              {hobby.award.detailedDescription}
            </p>
            <div className="pt-2">
              <a
                href="https://youtu.be/PO1sgjV5HfQ?si=z6Uk18XfyUc1gKcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-lg text-xs font-mono font-semibold hover:bg-accent/90 transition shadow-sm"
              >
                <span>Watch Video on YouTube →</span>
              </a>
            </div>
          </div>
        )}

        {hobby.blogLink && (
          <div className="bg-accent/5 border-b border-accent/20 p-6 space-y-3">
            <p className="text-sm text-foreground/90 font-sans">
              Visit my Naver Blog to read about daily life and culinary adventures in Daegu:
            </p>
            <a
              href={hobby.blogLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-lg text-xs font-mono font-semibold hover:bg-accent/90 transition shadow-sm"
            >
              <span>Visit Naver Blog →</span>
            </a>
          </div>
        )}

        {hobby.article && (
          <div className="p-6 border-b border-border bg-muted/20 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {hobby.article.publication} · {hobby.article.date}
              </span>
            </div>
            <h4 className="text-lg font-serif font-bold text-foreground">{hobby.article.title}</h4>
            <p className="text-xs font-sans text-muted-foreground leading-relaxed">{hobby.description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={hobby.article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-lg text-xs font-mono font-semibold hover:bg-accent/90 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Read Online at KNU Press Center →</span>
              </a>
              <a
                href={hobby.article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="KNU_Times_Making_Friends_In_Korea.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted text-foreground border border-border rounded-lg text-xs font-mono font-semibold hover:bg-border/60 transition"
              >
                <Download className="w-3.5 h-3.5 text-accent" />
                <span>Download Article PDF ↓</span>
              </a>
            </div>
          </div>
        )}

        {hobby.gallery?.images && hobby.gallery.images.length > 0 && (
          <div className="border-b border-border">
            <div className="flex font-mono text-xs">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-5 py-3 font-semibold transition ${
                  activeTab === "images"
                    ? "text-accent border-b-2 border-accent bg-accent/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Gallery Photos ({hobby.gallery.images.length})
              </button>
              {hobby.gallery?.videos && hobby.gallery.videos.length > 0 && (
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`px-5 py-3 font-semibold transition ${
                    activeTab === "videos"
                      ? "text-accent border-b-2 border-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Videos ({hobby.gallery.videos.length})
                </button>
              )}
            </div>
          </div>
        )}

        <div className="p-6">
          {activeTab === "images" && hobby.gallery?.images && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {hobby.gallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-xl border border-border/80 shadow-sm aspect-square w-full"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-mono font-bold">Zoom</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {activeTab === "videos" && hobby.gallery?.videos && (
            <div className="space-y-6">
              {hobby.gallery.videos.map((video, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-serif font-bold text-foreground text-base">{video.title}</h4>
                  {video.description && (
                    <p className="text-xs font-sans text-muted-foreground">{video.description}</p>
                  )}
                  <div className="aspect-video bg-black/10 rounded-xl overflow-hidden border border-border">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox for viewing individual images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-10"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-full max-h-[90vh] w-[90vw] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Full size view"
              fill
              className="object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState<HobbyGallery | null>(null)

  return (
    <section id="hobbies" className="py-24 bg-background border-b border-border/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Beyond the Terminal
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight mt-1">
            Hobbies & Life in Korea
          </h2>
          <p className="text-sm font-sans text-muted-foreground mt-2 max-w-2xl">
            Candid moments, food experiments, and cultural storytelling that keep my design grounded in lived human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <SpotlightCard
              key={index}
              onClick={() => setSelectedHobby(hobby)}
              className="p-5 flex flex-col justify-between cursor-pointer group bg-card"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden h-48 mb-4 border border-border/70 bg-muted">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-serif font-bold text-lg text-foreground mb-1 group-hover:text-accent transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-accent font-semibold">
                  {hobby.blogLink
                    ? "Visit blog →"
                    : hobby.article
                    ? "Read article →"
                    : "Open gallery →"}
                </span>
                <span className="text-muted-foreground">0{index + 1}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {selectedHobby && <GalleryModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />}
    </section>
  )
}
