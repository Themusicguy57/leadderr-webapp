import React, { useState } from "react"

// 1️⃣ Specialties map (unchanged)
const specialtiesMap = {
  "Music & Audio": [
    "Sound Design",
    "Music Composition",
    "Jingles & Intros",
    "Podcast Editing",
    "Voice Over",
    "Mixing & Mastering",
    "Audio Restoration",
    "Audiobook Production",
    "SFX Creation",
    "Background Music",
    "Music for Games/Films"
  ],
  "Graphic & Design": [
    "Logo Design",
    "Brand Style Guides",
    "Business Cards & Stationery",
    "Website Design",
    "UX/UI Design",
    "App Design",
    "Game Art",
    "Illustration",
    "Pattern Design",
    "Packaging Design",
    "Book Covers",
    "Album Covers",
    "T-Shirts & Merchandise",
    "Social Media Design",
    "Presentation Design",
    "Infographic Design",
    "3D Models & Product Design",
    "NFT Art"
  ],
  "Video & Animation": [
    "Video Editing",
    "Explainer Videos",
    "Short-form Video (TikTok/Reels)",
    "Logo Animation",
    "2D Animation",
    "3D Animation",
    "Motion Graphics",
    "Character Animation",
    "Animated Ads",
    "Lyric Videos",
    "Video Intros/Outros",
    "Product Demos"
  ],
  "Writing & Translation": [
    "Blog Writing",
    "Website Copywriting",
    "Email Copywriting",
    "Technical Writing",
    "Product Descriptions",
    "Resume & Cover Letters",
    "Script Writing",
    "UX Writing",
    "Translation (by language pairs)",
    "Subtitling & Transcription",
    "Proofreading & Editing",
    "E-book Writing",
    "White Papers"
  ],
  "Programming & Tech": [
    "Website Development",
    "Mobile App Development",
    "E-Commerce Development",
    "WordPress Customization",
    "Webflow / No-Code Builds",
    "Game Development",
    "Desktop Applications",
    "Chatbots & Automation",
    "Scripts & Tools",
    "Cybersecurity",
    "DevOps & Cloud",
    "AI Integrations",
    "Tech Support"
  ],
  "Digital Marketing": [
    "Social Media Management",
    "Social Media Advertising",
    "SEO (Search Engine Optimization)",
    "SEM (Search Engine Marketing)",
    "Email Marketing",
    "Affiliate Marketing",
    "Influencer Marketing",
    "Analytics & Strategy",
    "Marketing Automation",
    "Podcast Marketing",
    "Community Management",
    "Local Marketing",
    "Public Relations"
  ],
  "AI Services": [
    "AI Content Creation",
    "AI Prompt Engineering",
    "AI Chatbot Setup (GPT, Claude, etc.)",
    "Text-to-Image Generation",
    "Audio Generation",
    "Fine-tuning Language Models",
    "AI Data Labeling / Training",
    "AI Consulting"
  ],
  "Business": [
    "Virtual Assistance",
    "Market Research",
    "Business Plans",
    "Data Entry",
    "Lead Generation",
    "Business Consulting",
    "CRM Setup & Management",
    "Project Management",
    "Customer Support",
    "Sales Outreach",
    "Pitch Decks"
  ],
  "Consulting": [
    "Career Coaching",
    "Startup Coaching",
    "Productivity Coaching",
    "Branding Strategy",
    "Financial Consulting",
    "Legal Consulting",
    "Tech & SaaS Strategy",
    "Marketing Strategy",
    "Creative Direction",
    "Freelance Mentorship"
  ]
}

// 2️⃣ Dream clients map (full)
const dreamClientsMap = {
  // Music & Audio
  "Sound Design": ["Indie Filmmakers", "Short Films", "Art Installations"],
  "Music Composition": ["YouTube Creators", "Filmmakers", "Small Studios"],
  "Jingles & Intros": ["Podcast Creators", "Local Radio", "YouTube Creators"],
  "Podcast Editing": ["Podcast Creators", "Coaches with Shows"],
  "Voice Over": ["Explainer Videos", "Audiobook Publishers", "Indie Game Studios"],
  "Mixing & Mastering": ["Bedroom Producers", "Indie Musicians"],
  "Audio Restoration": ["Archival Projects", "Family Recordings", "Podcast Repairs"],
  "Audiobook Production": ["Audiobook Publishers", "Educators"],
  "SFX Creation": ["Game Developers", "Animation Creators", "Mobile Apps"],
  "Background Music": ["Apps", "Cafés", "YouTubers"],
  "Music for Games/Films": ["Game Jams", "Student Films", "Short Movies"],

  // Graphic & Design
  "Logo Design": ["Indie brands", "Etsy sellers", "Local cafés", "Solo founders", "Small NGOs"],
  "Brand Style Guides": ["Startup founders", "Content creators", "Personal brands"],
  "Business Cards & Stationery": ["Freelancers", "Real estate agents", "Consultants"],
  "Website Design": ["Early-stage startups", "Personal portfolio sites", "Indie product teams"],
  "UX/UI Design": ["No-code founders", "Mobile app startups", "SaaS MVP teams"],
  "App Design": ["Solo app makers", "Bootstrapped tech startups"],
  "Game Art": ["Indie game developers", "itch.io creators"],
  "Illustration": ["Children’s book authors", "Content creators", "Indie magazines"],
  "Pattern Design": ["Surface designers", "Small textile brands", "Print-on-demand stores"],
  "Packaging Design": ["DTC product startups", "Artisanal food brands", "Etsy sellers"],
  "Book Covers": ["Self-published authors", "Book Publishers"],
  "Album Covers": ["Indie musicians", "Bedroom producers", "Local bands"],
  "T-Shirts & Merchandise": ["YouTubers", "Podcasters", "Twitch streamers", "Online creators"],
  "Social Media Design": ["Small agencies", "Social Media Agencies", "Influencers"],
  "Presentation Design": ["Pitching startups", "Solopreneurs", "Online educators"],
  "Infographic Design": ["Marketing freelancers", "Wellness coaches", "Startup blogs"],
  "3D Models & Product Design": ["Kickstarter creators", "Industrial design students", "Indie hardware makers"],
  "NFT Art": ["Web3 artists", "Discord communities", "Digital collectors"],

  // Video & Animation
  "Video Editing": ["YouTubers", "Course Creators", "Indie Documentaries"],
  "Explainer Videos": ["App Founders", "Agencies", "SaaS Demos"],
  "Short-form Video (TikTok/Reels)": ["TikTok Coaches", "Influencers", "DTC Brands"],
  "Logo Animation": ["Streamers", "YouTubers", "Small Product Brands"],
  "2D Animation": ["Storytellers", "Educators", "Mobile Apps"],
  "3D Animation": ["Indie Game Trailers", "Architecture Demos"],
  "Motion Graphics": ["Creative Agencies", "Startup Ads"],
  "Character Animation": ["Storytellers", "YouTube Series", "Game Trailers"],
  "Animated Ads": ["Social Media Sellers", "App Pre-launches"],
  "Lyric Videos": ["Indie Bands", "Solo Artists", "Music YouTubers"],
  "Video Intros/Outros": ["Podcast Channels", "YouTubers", "Online Educators"],
  "Product Demos": ["Hardware Makers", "Shopify Stores", "SaaS Tools"],

  // Writing & Translation
  "Blog Writing": ["Blog Networks", "Content Teams", "Solopreneurs"],
  "Website Copywriting": ["Creatives", "Indie Apps", "Course Sites"],
  "Email Copywriting": ["Email List Builders", "E-commerce Newsletters"],
  "Technical Writing": ["Dev Tool Teams", "Web3 Startups", "Solo SaaS"],
  "Product Descriptions": ["Etsy Stores", "Amazon Sellers", "Niche Dropshippers"],
  "Resume & Cover Letters": ["Job Seekers", "Career Coaches"],
  "Script Writing": ["YouTubers", "Explainer Video Creators"],
  "UX Writing": ["App Builders", "Product Teams", "Startup MVPs"],
  "Translation (by language pairs)": ["Self-publishing Authors", "Freelancers Expanding Reach"],
  "Subtitling & Transcription": ["Podcasters", "YouTubers", "Webinar Creators"],
  "Proofreading & Editing": ["Authors", "Bloggers", "Research Students"],
  "E-book Writing": ["Coaches", "Niche Educators", "Marketing Pros"],
  "White Papers": ["Web3 Teams", "Fintech Startups", "SaaS Tools"],

  // Programming & Tech
  "Website Development": ["Local Businesses", "Bloggers", "Startup MVPs"],
  "Mobile App Development": ["Indie App Founders", "Early-stage Teams"],
  "E-Commerce Development": ["Shopify Sellers", "Dropshippers", "Online Boutiques"],
  "WordPress Customization": ["Lifestyle Coaches", "Bloggers", "Info Sites"],
  "Webflow / No-Code Builds": ["No-code Startups", "Founders with no dev background"],
  "Game Development": ["Indie Studios", "Solo Devs", "Hobby Game Creators"],
  "Desktop Applications": ["Internal Tool Builders", "Indie Devs", "SaaS Experiments"],
  "Chatbots & Automation": ["Online Stores", "Productivity Nerds", "Agencies"],
  "Scripts & Tools": ["Productivity Creators", "Automators", "Indie Makers"],
  "Cybersecurity": ["Small Fintechs", "Crypto Startups", "Solopreneurs with data concerns"],
  "DevOps & Cloud": ["MVP SaaS Founders", "Side Project Teams"],
  "AI Integrations": ["Founders testing GPT features", "Productivity App Builders"],
  "Tech Support": ["Local Shops", "Consultants", "Digital Solopreneurs"],

  // Digital Marketing
  "Social Media Management": ["Instagram Brands", "Content Creators", "Small Businesses"],
  "Social Media Advertising": ["E-commerce Startups", "Course Creators", "Solo Sellers"],
  "SEO (Search Engine Optimization)": ["Local Services", "Niche Blogs", "Affiliate Websites"],
  "SEM (Search Engine Marketing)": ["App Launches", "New SaaS Tools", "Small E-com"],
  "Email Marketing": ["Newsletters", "Info Products", "Indie Courses"],
  "Affiliate Marketing": ["Content Bloggers", "YouTubers", "Niche Marketers"],
  "Influencer Marketing": ["Micro-influencers", "Indie Fashion Labels"],
  "Analytics & Strategy": ["Solo Marketers", "New Founders", "Agency Partners"],
  "Marketing Automation": ["Course Creators", "Info Businesses", "Digital Agencies"],
  "Podcast Marketing": ["Indie Podcast Hosts", "Authors with audio shows"],
  "Community Management": ["Discord Servers", "NFT Projects", "Education Groups"],
  "Local Marketing": ["Shops", "Clinics", "Local Restaurants"],
  "Public Relations": ["Indie Authors", "New Tech Founders", "Microbrands"],

  // AI Services
  "AI Content Creation": ["Niche Blogs", "Content Solopreneurs"],
  "AI Prompt Engineering": ["GPT-based Startups", "Indie AI Tool Builders"],
  "AI Chatbot Setup (GPT, Claude, etc.)": ["Online Businesses", "Customer service freelancers"],
  "Text-to-Image Generation": ["NFT Projects", "Storytelling Apps"],
  "Audio Generation": ["Podcast Intros", "Sound branding for indie creators"],
  "Fine-tuning Language Models": ["Developers experimenting with GPT or Claude"],
  "AI Data Labeling / Training": ["AI Trainers", "App builders needing ground truth"],
  "AI Consulting": ["Early AI adopters", "Startup teams"],

  // Business
  "Virtual Assistance": ["Founders", "Busy Founders", "Agency Owners"],
  "Market Research": ["Startup idea testers", "Ecommerce sellers"],
  "Business Plans": ["Early-stage founders", "Grant Applicants"],
  "Data Entry": ["Authors", "Product managers", "Admin-heavy teams"],
  "Lead Generation": ["B2B startups", "Consultants"],
  "Business Consulting": ["Indie founders", "Micro-SaaS builders"],
  "CRM Setup & Management": ["Online Sellers", "Solopreneurs", "Agencies"],
  "Project Management": ["Small Teams", "Remote Teams", "Early SaaS teams"],
  "Customer Support": ["SaaS MVPs", "Ecommerce stores"],
  "Sales Outreach": ["Cold email templates", "Follow-up sequences", "Prospecting lists"],
  "Pitch Decks": ["Fundraising founders", "Startup accelerators"],

  // Consulting
  "Career Coaching": ["Job Seekers", "Career Coaches", "Midlife professionals"],
  "Startup Coaching": ["First-time founders", "MVP Teams"],
  "Productivity Coaching": ["Remote workers", "ADHD creatives"],
  "Branding Strategy": ["Indie brands", "Solo content creators"],
  "Financial Consulting": ["Freelancers", "Bootstrapped startups"],
  "Legal Consulting": ["Startups", "Creators", "Indie teams"],
  "Tech & SaaS Strategy": ["Indie hackers", "Bootstrapper communities"],
  "Marketing Strategy": ["DTC brands", "Solo consultants"],
  "Creative Direction": ["Small agencies", "Rebranding startups"],
  "Freelance Mentorship": ["Junior freelancers", "Portfolio builders"]
}

// 3️⃣ Keywords map (full; defined before use!)
const keywordsMap = {
  "Indie Filmmakers":        ["indie film", "short film project", "festival submission", "low-budget cinematography"],
  "Podcast Creators":        ["podcast editing", "audio cleanup", "intro music", "episode mixing", "show notes transcription"],
  "Indie Game Studios":      ["game audio", "unity composer", "SFX creation", "indie game dev", "kickstarter audio"],
  "Audiobook Publishers":    ["audiobook narration", "chapter editing", "audio mastering", "voiceover recording", "ISBN formatting"],
  "YouTube Creators":        ["youtube editing", "thumbnail design", "intro music", "SEO tags", "channel branding"],

  "Indie brands":            ["indie brand design", "handmade logo", "bespoke typography"],
  "Etsy sellers":            ["etsy shop branding", "product mockups", "print-ready artwork"],
  "Local cafés":             ["cafe menu design", "cozy brand aesthetic", "social media cafe graphics"],
  "Solo founders":           ["minimalist logo", "personal brand kit", "pitch deck visuals"],
  "Small NGOs":              ["nonprofit branding", "impact report layout", "fundraising collateral"],

  "Startup founders":        ["startup pitch deck", "MVP UI mockup", "investor presentation"],
  "Content creators":        ["social media templates", "thumbnail design", "YouTube banner art"],
  "Personal brands":         ["personal logo mark", "business card mockup", "brand style guide"],
  "Book Publishers":         ["book cover design", "ebook formatting", "layout design"],
  "Social Media Agencies":   ["social media graphics", "ad templates", "campaign analytics"],

  "YouTubers":               ["youtube thumbnail", "video editing", "channel trailer"],
  "Small agencies":          ["agency website", "branding package", "proposal template"],
  "Course Creators":         ["course slide deck", "elearning templates", "promo video"],
  "Influencers":             ["sponsor post assets", "story templates", "highlight covers"],
  "Film Festival Projects":  ["festival trailer", "poster design", "press kit assets"],

  "Blog Networks":           ["SEO articles", "editorial calendar", "guest post outreach"],
  "Marketing Teams":         ["campaign copy", "email newsletters", "ad copywriting"],
  "Authors":                 ["manuscript editing", "book proofreading", "press release writing"],
  "Product Companies":       ["product descriptions", "user manuals", "demo videos"],
  "Startups":                ["growth strategy", "landing page UX", "founder coaching"],

  "Early-stage Startups":    ["MVP development", "market research", "seed-stage branding"],
  "No-Code Founders":        ["webflow build", "bubble app", "zapier automation"],
  "E-commerce Stores":       ["shopify theme", "conversion optimization", "email flows"],
  "Open Source Teams":       ["github pages design", "docs styling", "community graphics"],
  "Local Businesses":        ["local SEO site", "Google My Business", "social posts"],

  "Instagram Brands":        ["instagram grid layout", "highlight covers", "reels editing"],
  "Content Creators":        ["content calendar", "script writing", "thumbnail design"],
  "Small Businesses":        ["flyer design", "email newsletter", "menu layout"],
  "Marketing Consultants":   ["consulting deck", "case study design", "LinkedIn posts"],
  "Local Agencies":          ["agency branding", "proposal template", "client report"],

  "Startup CTOs":            ["tech architecture", "cloud setup", "devops automation"],
  "Small Tech Teams":        ["sprint planning", "CI/CD pipeline", "tech docs"],
  "Educational Platforms":   ["LMS integration", "interactive modules", "video lectures"],
  "Solo Entrepreneurs":      ["one-page site", "email campaigns", "logo design"],

  "Founders":                ["founder coaching", "pitch deck", "brand guidelines"],
  "Online Sellers":          ["product listing SEO", "email flows", "retargeting ads"],
  "Solo Consultants":        ["proposal template", "case studies", "LinkedIn bios"],
  "Small Teams":             ["team workflow", "project plan", "dashboard design"],

  "Freelancers":             ["portfolio design", "rate card", "proposal template"],
  "Corporate Professionals": ["resume update", "LinkedIn profile", "presentation slides"],
  "Agencies":                ["agency website", "service brochure", "case study"]
}

function App() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState("")
  const [specialties, setSpecialties] = useState([])
  const [selectedClients, setSelectedClients] = useState([])
  const [keywords, setKeywords] = useState([])
  const [source, setSource] = useState("")
  const [outreachTemplate, setOutreachTemplate] = useState("")

  const toggleSelection = (value, array, setter) => {
    setter(
      array.includes(value)
        ? array.filter(v => v !== value)
        : [...array, value]
    )
  }

  const combinedDreamClients = Array.from(
    new Set(specialties.flatMap(spec => dreamClientsMap[spec] || []))
  )

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">🎯 Leadderr Search Setup</h1>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              What kind of freelance magic do you do?
            </label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select a category</option>
              {Object.keys(specialtiesMap).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={() => setStep(2)}
              disabled={!category}
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              What’s your specialty?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(specialtiesMap[category] || []).map(spec => (
                <label key={spec} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={spec}
                    checked={specialties.includes(spec)}
                    onChange={() => toggleSelection(spec, specialties, setSpecialties)}
                  />
                  <span>{spec}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="text-blue-600 text-sm">
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={specialties.length === 0}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Who are your dream clients?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {combinedDreamClients.map(client => (
                <label key={client} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={client}
                    checked={selectedClients.includes(client)}
                    onChange={() =>
                      toggleSelection(client, selectedClients, setSelectedClients)
                    }
                  />
                  <span>{client}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="text-blue-600 text-sm">
                ← Back
              </button>
              <button
                onClick={() => {
                  // Now keywordsMap is defined, so we collect suggestions
                  const cols = Array.from(
                    new Set(selectedClients.flatMap(c => keywordsMap[c] || []))
                  )
                  setKeywords(cols)
                  setStep(4)
                }}
                disabled={selectedClients.length === 0}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Suggested keywords to find your ideal clients:
            </label>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Add your own:
              </label>
              <input
                type="text"
                placeholder="e.g. low-budget indie film"
                className="w-full p-2 border rounded-lg mt-2"
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    const v = e.target.value.trim()
                    if (v) {
                      setKeywords([...keywords, v])
                      e.target.value = ""
                    }
                  }
                }}
              />
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(3)} className="text-blue-600 text-sm">
                ← Back
              </button>
              <button
                onClick={() => setStep(5)}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              How would you like to get your leads?
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="jobBoards"
                  checked={source === "jobBoards"}
                  onChange={e => setSource(e.target.value)}
                />
                <span>Job Boards (automatic notifications)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="webScraping"
                  checked={source === "webScraping"}
                  onChange={e => setSource(e.target.value)}
                />
                <span>Web scraping (/findclients)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="both"
                  checked={source === "both"}
                  onChange={e => setSource(e.target.value)}
                />
                <span>Both methods</span>
              </label>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(4)} className="text-blue-600 text-sm">
                ← Back
              </button>
              <button
                onClick={() => setStep(6)}
                disabled={!source}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Do you want us to help you reach out to potential clients?
            </label>
            <p className="text-gray-600 text-sm">
              This email won’t be sent automatically by the bot. It’s used as a template
              to generate personalized drafts for each client. You’re always in control
              of sending it yourself.
            </p>
            <textarea
              rows={4}
              placeholder="e.g. Hi {clientName}, I'm a freelance UX/UI designer and I loved your project on..."
              className="w-full p-2 border rounded-lg"
              value={outreachTemplate}
              onChange={e => setOutreachTemplate(e.target.value)}
            />
            <div className="flex justify-between">
              <button onClick={() => setStep(5)} className="text-blue-600 text-sm">
                ← Back
              </button>
              <button
                onClick={() => {
                  const payload = {
                    category,
                    specialties,
                    dreamClients: selectedClients,
                    keywords,
                    source,
                    outreachTemplate
                  }
                  console.log("Form submitted:", payload)
                  alert("Form submitted! Check console for details.")
                }}
                disabled={!outreachTemplate}
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App