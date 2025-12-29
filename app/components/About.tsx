import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/about-photo.jpg"
              alt="Angela Emile Jose"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4 font-serif italic text-lg leading-relaxed">
              I am Angela Emile Jose, a Computer Science student currently navigating a unique academic journey. Through
              a 2+2 Double Degree program, I've bridged my foundations at Christ University, India, with my senior-year
              research at Kyungpook National University, South Korea.
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed">
              Moving across borders has taught me that technology, much like language, is a tool for connection. Whether
              I'm translating complex C-specifications into formal logic at the SSE Lab or helping international
              students find their voice at the International Writing Center, my goal is always the same: to make the
              complex accessible.
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed">
              While my days are spent in Python and PyTorch, my soul is often found in the kitchen. I've been a lifelong
              enthusiast of the culinary arts—from my early days of blogging at{" "}
              <a
                href="https://cookwithemile.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Cook with Emile
              </a>{" "}
              to experimenting with non-Indian cuisines here in Korea.
            </p>
            <p className="font-serif italic text-lg leading-relaxed">
              One day, I dream of blending these two worlds: owning a cafe where technology meets the warmth of a
              perfectly baked cake. Until then, you can find me exploring Daegu and documenting my life as a foreign
              student on{" "}
              <a
                href="https://m.blog.naver.com/angela_blogs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Naver Blog
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
