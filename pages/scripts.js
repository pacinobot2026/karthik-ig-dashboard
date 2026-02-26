import { useState } from 'react'

const scripts = [
  {
    day: 1,
    pillar: 'Tool Discovery',
    topic: 'This FREE AI writes better than ChatGPT',
    tool: 'Claude',
    hook: 'Delete ChatGPT. Use THIS instead.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '(Look directly at camera, slightly intense)\n"Delete ChatGPT. Use THIS instead."' },
      { label: 'PROBLEM (3-8 sec)', content: '"ChatGPT is great, but it hallucinates, hits limits,\nand honestly? The writing sounds robotic."' },
      { label: 'SOLUTION (8-40 sec)', content: '"Meet Claude. It\'s made by ex-OpenAI researchers\nand it\'s genuinely better at writing.\n\nWatch this.\n\n(Screen record demo)\nI asked both to write a LinkedIn post about AI.\nChatGPT gave me... this. Generic. Boring.\nClaude gave me... THIS. Sounds human. Has personality.\n\nPlus — Claude can read entire PDFs,\nanalyze 100-page documents,\nand it\'s FREE to use."' },
      { label: 'CTA (40-50 sec)', content: '"Link in bio to try it.\nFollow for daily AI tools that actually work."' },
      { label: 'LOOP (50-55 sec)', content: '(Quick cut back to opening energy)\n"Seriously. Delete ChatGPT."' },
    ],
    notes: ['Record hook 3x, pick the best energy', 'Screen record Claude vs ChatGPT side by side', 'Fast cuts every 2-3 seconds', 'Text overlay key points'],
  },
  {
    day: 2,
    pillar: 'Breaking News',
    topic: 'GPT-5 leak — here\'s what\'s coming',
    hook: 'GPT-5 just leaked. And it\'s INSANE.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '(Lean in, like sharing a secret)\n"GPT-5 just leaked. And it\'s INSANE."' },
      { label: 'CONTEXT (3-10 sec)', content: '"OpenAI hasn\'t announced anything officially,\nbut multiple sources inside the company\nare saying GPT-5 is coming in the next few months.\n\nHere\'s what we know."' },
      { label: 'VALUE (10-45 sec)', content: '(Count on fingers, use text overlays)\n\n"One — it can see, hear, AND talk back in real time.\nLike actually have a conversation. No typing.\n\nTwo — it reasons like a human.\nNot just predicting the next word —\nactually THINKING through problems.\n\nThree — it connects to the internet by default.\nNo more \'my knowledge cuts off in 2024\' nonsense.\n\nFour — and this is the scary one...\nIt can take ACTIONS on your computer.\nBook flights. Send emails. Control apps."' },
      { label: 'CTA (45-55 sec)', content: '"When GPT-5 drops, I\'ll break it down first.\nFollow so you don\'t miss it."' },
      { label: 'LOOP (55-60 sec)', content: '"GPT-5 just leaked..."' },
    ],
    notes: ['Urgent energy — like breaking news', 'Use dramatic pauses', 'Text overlay each point (ONE, TWO, THREE, FOUR)', 'End on cliffhanger energy'],
  },
  {
    day: 3,
    pillar: 'Tutorial',
    topic: 'Make viral thumbnails in 10 seconds',
    tool: 'Ideogram',
    hook: 'I made this thumbnail in 10 seconds. Here\'s how.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '(Hold up phone showing amazing thumbnail)\n"I made this thumbnail in 10 seconds. Here\'s how."' },
      { label: 'PROBLEM (3-8 sec)', content: '"Canva takes forever. Photoshop is complicated.\nYou need thumbnails that pop NOW."' },
      { label: 'TUTORIAL (8-45 sec)', content: '(Screen record walkthrough)\n\n"Go to Ideogram dot AI. It\'s free.\n\nClick \'Generate.\'\n\nType: \'YouTube thumbnail, bold text saying\n[YOUR TITLE], dramatic lighting,\n4K, professional\'\n\nHit generate. 10 seconds later...\n\n(Show results)\n\nLOOK at these. This would take an hour in Photoshop.\n\nPro tip — add \'text that says\' in your prompt\nand it actually spells words correctly.\nMost AI can\'t do this."' },
      { label: 'CTA (45-55 sec)', content: '"Save this for later.\nFollow for AI tools that save you hours."' },
      { label: 'LOOP (55-60 sec)', content: '"10 seconds. That\'s it."' },
    ],
    notes: ['Start with the END result (thumbnail)', 'Screen record full process', 'Zoom in on the results', 'Show genuine reaction to output'],
  },
  {
    day: 4,
    pillar: 'AI vs AI',
    topic: 'ChatGPT vs Claude vs Gemini — BRUTALLY honest',
    hook: 'I tested ChatGPT, Claude, and Gemini for 30 days. Here\'s the truth nobody tells you.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '"I tested ChatGPT, Claude, and Gemini for 30 days.\nHere\'s the truth nobody tells you."' },
      { label: 'SETUP (3-10 sec)', content: '"I\'m not sponsored by any of them.\nI paid for all three. Here\'s what I found."' },
      { label: 'COMPARISON (10-50 sec)', content: '(Use split screen or quick cuts)\n\n"WRITING:\nChatGPT — good but sounds like a robot\nClaude — genuinely sounds human, my favorite\nGemini — honestly... mid\n\nCODING:\nChatGPT — solid, huge community\nClaude — actually better for complex stuff\nGemini — fine but not special\n\nRESEARCH:\nChatGPT — hallucinates a lot\nClaude — more accurate but no internet\nGemini — connected to Google, wins here\n\nSPEED:\nGemini is fastest\nClaude is slowest\nChatGPT is in the middle\n\nOVERALL WINNER?"' },
      { label: 'REVEAL (50-55 sec)', content: '(Pause for drama)\n"I use Claude for writing.\nChatGPT for coding.\nGemini for research.\n\nYou don\'t have to pick one."' },
      { label: 'CTA (55-60 sec)', content: '"Follow for more AI comparisons that aren\'t BS."' },
    ],
    notes: ['Quick cuts between each category', 'Text overlay the scores/ratings', 'Genuine opinions, not scripted feel', 'End with practical advice'],
  },
  {
    day: 5,
    pillar: 'Hot Take',
    topic: 'Stop learning AI. Do THIS instead.',
    hook: 'Stop learning AI. Seriously.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '(Controversial energy)\n"Stop learning AI. Seriously."' },
      { label: 'PATTERN BREAK (3-10 sec)', content: '"Everyone\'s taking courses.\nBuying ebooks.\nWatching 10-hour tutorials.\n\nAnd getting nowhere."' },
      { label: 'THE FLIP (10-35 sec)', content: '"Here\'s what actually works:\n\nSTOP learning.\nSTART building.\n\nPick ONE thing you want to create.\nA video. A website. A business plan.\n\nThen use AI to build it.\n\nYou\'ll learn more in 2 hours of DOING\nthan 20 hours of watching.\n\nChatGPT is free.\nClaude is free.\nGemini is free.\n\nThe only thing stopping you is... you."' },
      { label: 'CTA (35-45 sec)', content: '"What are you gonna build today?\nComment below. I\'ll help you pick the right AI tool."' },
      { label: 'LOOP (45-50 sec)', content: '(Back to controversial energy)\n"Stop learning. Start building."' },
    ],
    notes: ['Strong opinion energy', 'Slight frustration in voice', 'Motivational by the end', 'Encourage comments (algorithm loves it)'],
  },
  {
    day: 6,
    pillar: 'Behind Scenes',
    topic: 'My AI stack that runs my entire day',
    hook: 'AI runs 80% of my day. Here\'s my exact stack.',
    sections: [
      { label: 'HOOK (0-3 sec)', content: '"AI runs 80% of my day. Here\'s my exact stack."' },
      { label: 'MORNING (3-15 sec)', content: '(Show phone/desktop)\n\n"Morning: I wake up and ask Claude\nto summarize all the AI news from overnight.\n5 minutes and I know everything that happened."' },
      { label: 'WORK (15-30 sec)', content: '"For work:\nPerplexity for research — it cites sources\nChatGPT for coding — best community\nClaude for writing — sounds most human"' },
      { label: 'CONTENT (30-45 sec)', content: '"For content:\nIdeogram for thumbnails\nElevenLabs if I need voiceovers\nCapCut\'s AI for auto-captions\n\nThis video? Script written with Claude.\nCaptions added by AI.\nThumbnail made in 10 seconds."' },
      { label: 'CTA (45-55 sec)', content: '"Want me to break down any of these?\nComment which one and I\'ll make a tutorial."' },
      { label: 'LOOP (55-60 sec)', content: '"AI runs my entire day..."' },
    ],
    notes: ['Show actual tools on screen', 'Quick app switching', 'Personal and authentic', 'Drive comments for engagement'],
  },
  {
    day: 7,
    pillar: 'Deep Dive',
    topic: '10 AI tools that feel illegal to know',
    format: 'Carousel',
    hook: '10 AI TOOLS that feel illegal to know (but are 100% free)',
    slides: [
      { num: 1, content: '10 AI TOOLS\nthat feel illegal to know\n(but are 100% free)\n\n🔖 Save this before it\'s gone' },
      { num: 2, content: '1. CLAUDE\n→ Writes better than ChatGPT\n→ Reads 100-page PDFs\n→ Actually sounds human\n🔗 claude.ai' },
      { num: 3, content: '2. PERPLEXITY\n→ Google search on steroids\n→ Cites all sources\n→ No more hallucinations\n🔗 perplexity.ai' },
      { num: 4, content: '3. IDEOGRAM\n→ AI images that spell text correctly\n→ Viral thumbnails in seconds\n→ Free tier is generous\n🔗 ideogram.ai' },
      { num: 5, content: '4. NOTEBOOKLM\n→ Google\'s secret AI\n→ Upload docs, it becomes an expert\n→ Creates AI podcasts about your content\n🔗 notebooklm.google.com' },
      { num: 6, content: '5. GAMMA\n→ Presentations in 30 seconds\n→ Just describe what you want\n→ Looks professionally designed\n🔗 gamma.app' },
      { num: 7, content: '6. ELEVENLABS\n→ Clone any voice (including yours)\n→ Text to speech that sounds real\n→ Free tier = 10 mins/month\n🔗 elevenlabs.io' },
      { num: 8, content: '7. SUNO\n→ Type a description, get a full song\n→ Vocals, instruments, everything\n→ Viral sounds for reels\n🔗 suno.ai' },
      { num: 9, content: '8. RUNWAY\n→ AI video editing\n→ Remove backgrounds in 1 click\n→ Text-to-video generation\n🔗 runwayml.com' },
      { num: 10, content: '9. V0 BY VERCEL\n→ Describe a website, it builds it\n→ React code, ready to deploy\n→ Non-coders building apps\n🔗 v0.dev' },
      { num: 11, content: '10. ME 😉\n\nFollow @[yourhandle]\nfor daily AI tools, tips & updates\n\n🔖 Save this\n📤 Share with a friend who needs it' },
    ],
    notes: ['Clean design, dark background', 'One tool per slide', 'Include the actual URLs', 'Strong CTA on last slide'],
  },
]

export default function Scripts() {
  const [selectedDay, setSelectedDay] = useState(1)
  const script = scripts.find(s => s.day === selectedDay) || scripts[0]
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }
  
  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px' }}>📝 Ready-to-Record Scripts</h1>
      
      {/* Day Selector */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
        {scripts.map(s => (
          <button
            key={s.day}
            className={`btn ${selectedDay === s.day ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setSelectedDay(s.day)}
          >
            Day {s.day}
          </button>
        ))}
      </div>
      
      {/* Script Card */}
      <div className="script-card">
        <div className="script-header">
          <div>
            <div className="script-day">Day {script.day} — {script.pillar}</div>
            <div className="script-title">{script.topic}</div>
            {script.tool && <div style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Tool: {script.tool}</div>}
          </div>
          <span className={`content-tag ${script.format === 'Carousel' ? 'carousel' : 'reel'}`}>
            {script.format || 'Reel'}
          </span>
        </div>
        
        {/* Hook */}
        <div style={{ marginBottom: '25px' }}>
          <label>🎣 The Hook</label>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--accent), #a78bfa)',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '1.3rem',
            fontWeight: '600',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>"{script.hook}"</span>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => copyToClipboard(script.hook)}
            >
              Copy
            </button>
          </div>
        </div>
        
        {/* Script Sections (for Reels) */}
        {script.sections && (
          <div>
            <label>📜 Full Script</label>
            <div style={{ marginTop: '10px' }}>
              {script.sections.map((section, i) => (
                <div key={i} className="script-section">
                  <div className="script-section-label">{section.label}</div>
                  <div className="script-content">{section.content}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Slides (for Carousels) */}
        {script.slides && (
          <div>
            <label>🎴 Carousel Slides</label>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '15px',
              marginTop: '10px'
            }}>
              {script.slides.map((slide, i) => (
                <div key={i} style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ 
                    color: 'var(--accent)', 
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}>
                    Slide {slide.num}
                  </div>
                  <pre style={{ 
                    whiteSpace: 'pre-wrap',
                    fontSize: '0.85rem',
                    lineHeight: '1.6'
                  }}>
                    {slide.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Filming Notes */}
        {script.notes && (
          <div style={{ marginTop: '25px' }}>
            <label>🎬 Filming Notes</label>
            <ul style={{ 
              marginTop: '10px',
              paddingLeft: '20px',
              color: 'var(--text-secondary)'
            }}>
              {script.notes.map((note, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>{note}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Actions */}
        <div style={{ marginTop: '25px', display: 'flex', gap: '10px' }}>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const fullScript = script.sections 
                ? script.sections.map(s => `${s.label}\n${s.content}`).join('\n\n')
                : script.slides.map(s => `SLIDE ${s.num}:\n${s.content}`).join('\n\n')
              copyToClipboard(fullScript)
            }}
          >
            Copy Full Script
          </button>
          <button className="btn btn-secondary">Mark as Recorded ✓</button>
        </div>
      </div>
    </div>
  )
}
