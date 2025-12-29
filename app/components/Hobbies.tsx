"use client"

import { useState } from "react"
import { X } from "lucide-react"

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
  gallery?: {
    images: string[]
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
]

function GalleryModal({ hobby, onClose }: { hobby: HobbyGallery; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary">{hobby.title}</h2>
            {hobby.award && (
              <div className="mt-3 text-sm">
                <p className="font-semibold text-accent">{hobby.award.title}</p>
                <p className="text-gray-600">
                  Issued by {hobby.award.issuer} · {hobby.award.date}
                </p>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X size={24} />
          </button>
        </div>

        {hobby.award && (
          <div className="bg-amber-50 border-b p-6">
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{hobby.award.detailedDescription}</p>
            <div className="mt-4">
              <a
                href="https://youtu.be/PO1sgjV5HfQ?si=z6Uk18XfyUc1gKcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-quaternary rounded-lg hover:bg-secondary transition font-semibold"
              >
                Watch Video on YouTube →
              </a>
            </div>
          </div>
        )}

        {hobby.blogLink && (
          <div className="bg-blue-50 border-b p-6">
            <p className="text-gray-700 mb-3">Visit my Naver Blog to see more content and updates:</p>
            <div className="mt-4">
              <a
                href={hobby.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-quaternary rounded-lg hover:bg-secondary transition font-semibold"
              >
                Visit Blog →
              </a>
            </div>
          </div>
        )}

        {hobby.gallery?.images && hobby.gallery.images.length > 0 && (
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-6 py-3 font-semibold transition ${activeTab === "images"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Gallery ({hobby.gallery.images.length || 0})
              </button>
              {hobby.gallery?.videos && hobby.gallery.videos.length > 0 && (
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`px-6 py-3 font-semibold transition ${activeTab === "videos"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  Videos ({hobby.gallery.videos.length})
                </button>
              )}
            </div>
          </div>
        )}

        {!hobby.gallery?.images && hobby.gallery?.videos && hobby.gallery.videos.length > 0 && (
          <div className="border-b">
            <div className="flex">
              <button className="px-6 py-3 font-semibold text-primary border-b-2 border-primary">
                Videos ({hobby.gallery.videos.length})
              </button>
            </div>
          </div>
        )}

        <div className="p-6">
          {activeTab === "images" && hobby.gallery?.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hobby.gallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition text-lg font-semibold">
                      Click to enlarge
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {activeTab === "videos" && hobby.gallery?.videos && (
            <div className="space-y-6">
              {hobby.gallery.videos.map((video, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  {video.description && <p className="text-gray-600 mb-3">{video.description}</p>}
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
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
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition z-10"
          >
            <X size={24} className="text-gray-800" />
          </button>
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState<HobbyGallery | null>(null)

  return (
    <section id="hobbies" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">My Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <button
              key={index}
              onClick={() => setSelectedHobby(hobby)}
              className="bg-white rounded-lg shadow-lg overflow-hidden group text-left hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hobby.image || "/placeholder.svg"}
                  alt={hobby.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.description}</p>
                {hobby.blogLink && (
                  <p className="text-sm text-accent mt-3 font-semibold">
                    <a href={hobby.blogLink} target="_blank" rel="noopener noreferrer">
                      Visit Blog →
                    </a>
                  </p>
                )}
                {!hobby.blogLink && <p className="text-sm text-accent mt-3 font-semibold">Click to view gallery →</p>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedHobby && <GalleryModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />}
    </section>
  )
}
