export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Angela Emile Jose. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/AngelaEmileJose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary mr-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
