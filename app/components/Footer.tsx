export default function Footer() {
  return (
    <footer className="bg-[#163832] text-white py-10 border-t-2 border-[#AEEBDC]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[#AEEBDC]/90 text-sm font-medium">
          &copy; {new Date().getFullYear()} Angela Emile Jose. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/AngelaEmileJose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AEEBDC] hover:text-[#FCEF91] transition-colors font-semibold text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AEEBDC] hover:text-[#FCEF91] transition-colors font-semibold text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
