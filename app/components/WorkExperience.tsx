import { Calendar, MapPin, Award } from "lucide-react"

export default function WorkExperience() {
  const experiences = [
    {
      title: "Research Intern",
      company: "Software Safety Engineering LAB",
      location: "Daegu, South Korea",
      period: "May 2025 - Present",
      duration: "8 mos",
      type: "Internship",
      description: [
        "Conducting research on Large Language Models (LLMs) for formal verification of software",
        "Developing an automated pipeline to translate C program specifications into formal language specifications for verification using the CBMC model checker",
      ],
    },
    {
      title: "Mentor",
      company: "International Writing Center",
      location: "Daegu, South Korea",
      period: "Jul 2025 - Present",
      duration: "6 mos",
      type: "On-site",
      description: [
        "Mentored a diverse group of students at KNU, providing tailored coaching in English writing and speaking to build their confidence in international academic settings",
        "Monitored and evaluated student growth through meticulous data tracking, ensuring that every tutorial was data-informed and centered on the learner's evolving needs",
        "Contributed to the vibrant community at the International Writing Center (IWC) by collaborating on peer-led initiatives that made language learning more accessible and engaging",
      ],
      certificateNote: "Certificate pending",
    },
    {
      title: "Intern",
      company: "MLFM LAB",
      location: "Daegu, South Korea",
      period: "Nov 2025 - Dec 2025",
      duration: "2 mos",
      type: "On-site",
      description: [
        "Conducted experiments on Medical Image Registration for Lungs, using machine learning to align clinical data with high precision",
        "After rigorous testing, the experiments on clinical data yielded a 0.91 correlation, showing high reliability in the registration process",
      ],
      certificate: "/g-knu-research-certificate.pdf",
      certificateName: "G-KNU Glocal Research Stepping-Stone Program",
    },
    {
      title: "Research Intern",
      company: "Computational Biology & Bioinformatics Lab (COBI)",
      location: "Daegu, South Korea",
      period: "Sep 2024 - Dec 2024",
      duration: "4 mos",
      type: "Part-time",
      description: [
        "Worked on analyzing biological data using advanced computational techniques",
        "Filtered and organized large-scale omics datasets, performing functional enrichment analysis",
        "Developed scripts to streamline data processing workflows",
        "Identified key patterns in omics data and implemented efficient computational methods to support research objectives",
      ],
    },
    {
      title: "Summer Internship",
      company: "ThinkPalm Technologies Pvt. Ltd.",
      location: "Kerala, India",
      period: "Apr 2024 - May 2024",
      duration: "2 mos",
      type: "On-site",
      description: [
        "Gained hands-on experience in Artificial Intelligence, Machine Learning, and Computer Vision",
        "Implemented supervised learning techniques and performed image processing using OpenCV",
        "Conducted face detection using Haar and LBP cascades",
        "Built and tested CNN models for binary classification and explored advanced topics like multilabel classification",
        "Developed robust pipelines for image analysis and achieved effective face detection and classification results",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-quaternary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                  <p className="text-lg text-accent font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="text-sm text-primary/70 md:text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="ml-2">· {exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span className="ml-2">· {exp.type}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-primary/80">
                    <span className="text-accent mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {(exp.certificate || exp.certificateNote) && (
                <div className="mt-4 pt-4 border-t border-primary/10">
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Certificate: {exp.certificateName}</span>
                    </a>
                  )}
                  {exp.certificateNote && (
                    <p className="text-sm text-primary/60 italic flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {exp.certificateNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
