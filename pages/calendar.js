import { useState } from 'react'

const contentPlan = [
  { day: 1, pillar: 'Tool Discovery', topic: 'Claude vs ChatGPT', format: 'Reel', status: 'todo' },
  { day: 2, pillar: 'Breaking News', topic: 'GPT-5 leak — what\'s coming', format: 'Reel', status: 'todo' },
  { day: 3, pillar: 'Tutorial', topic: 'Viral thumbnails with Ideogram', format: 'Reel', status: 'todo' },
  { day: 4, pillar: 'AI vs AI', topic: 'ChatGPT vs Claude vs Gemini', format: 'Reel', status: 'todo' },
  { day: 5, pillar: 'Hot Take', topic: 'Stop learning AI. Do THIS.', format: 'Reel', status: 'todo' },
  { day: 6, pillar: 'Behind Scenes', topic: 'My AI stack for the day', format: 'Reel', status: 'todo' },
  { day: 7, pillar: 'Deep Dive', topic: '10 AI tools that feel illegal', format: 'Carousel', status: 'todo' },
  { day: 8, pillar: 'Tool Discovery', topic: 'Google NotebookLM secret', format: 'Reel', status: 'todo' },
  { day: 9, pillar: 'Breaking News', topic: 'Elon\'s AI take', format: 'Reel', status: 'todo' },
  { day: 10, pillar: 'Tutorial', topic: 'Clone your voice (ElevenLabs)', format: 'Reel', status: 'todo' },
  { day: 11, pillar: 'AI vs AI', topic: 'Image AI battle', format: 'Reel', status: 'todo' },
  { day: 12, pillar: 'Hot Take', topic: 'AI won\'t take your job', format: 'Reel', status: 'todo' },
  { day: 13, pillar: 'Behind Scenes', topic: 'Automated my Instagram', format: 'Reel', status: 'todo' },
  { day: 14, pillar: 'Deep Dive', topic: '7 ChatGPT genius prompts', format: 'Carousel', status: 'todo' },
  { day: 15, pillar: 'Tool Discovery', topic: 'Claude PDF reading trick', format: 'Reel', status: 'todo' },
  { day: 16, pillar: 'Breaking News', topic: 'OpenAI new feature', format: 'Reel', status: 'todo' },
  { day: 17, pillar: 'Tutorial', topic: 'Build website in 60 sec (v0)', format: 'Reel', status: 'todo' },
  { day: 18, pillar: 'AI vs AI', topic: 'Perplexity vs Google', format: 'Reel', status: 'todo' },
  { day: 19, pillar: 'Hot Take', topic: 'AI courses are scams', format: 'Reel', status: 'todo' },
  { day: 20, pillar: 'Behind Scenes', topic: 'Made $X with AI tools', format: 'Reel', status: 'todo' },
  { day: 21, pillar: 'Deep Dive', topic: 'Creator AI toolkit', format: 'Carousel', status: 'todo' },
  { day: 22, pillar: 'Tool Discovery', topic: 'AI face style filters', format: 'Reel', status: 'todo' },
  { day: 23, pillar: 'Breaking News', topic: 'Breaking AI update', format: 'Reel', status: 'todo' },
  { day: 24, pillar: 'Tutorial', topic: 'CapCut AI editing', format: 'Reel', status: 'todo' },
  { day: 25, pillar: 'AI vs AI', topic: 'AI video wars: Sora vs Runway', format: 'Reel', status: 'todo' },
  { day: 26, pillar: 'Hot Take', topic: 'AI bubble hot take', format: 'Reel', status: 'todo' },
  { day: 27, pillar: 'Behind Scenes', topic: '30 days learnings', format: 'Reel', status: 'todo' },
  { day: 28, pillar: 'Deep Dive', topic: 'Month 1 results', format: 'Carousel', status: 'todo' },
  { day: 29, pillar: 'Tool Discovery', topic: 'AI viral hook writer', format: 'Reel', status: 'todo' },
  { day: 30, pillar: 'Breaking News', topic: 'March AI predictions', format: 'Reel', status: 'todo' },
]

const pillarColors = {
  'Tool Discovery': '#8b5cf6',
  'Breaking News': '#ef4444',
  'Tutorial': '#10b981',
  'AI vs AI': '#f59e0b',
  'Hot Take': '#ec4899',
  'Behind Scenes': '#3b82f6',
  'Deep Dive': '#06b6d4',
}

export default function Calendar() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  
  const weeks = [
    { num: 1, label: 'Week 1: Foundation' },
    { num: 2, label: 'Week 2: Viral Push' },
    { num: 3, label: 'Week 3: Authority' },
    { num: 4, label: 'Week 4: Momentum' },
  ]
  
  const weekContent = contentPlan.filter(c => {
    const weekStart = (selectedWeek - 1) * 7 + 1
    const weekEnd = selectedWeek * 7
    return c.day >= weekStart && c.day <= weekEnd
  })
  
  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px' }}>📅 30-Day Content Calendar</h1>
      
      {/* Week Tabs */}
      <div className="tabs">
        {weeks.map(week => (
          <div 
            key={week.num}
            className={`tab ${selectedWeek === week.num ? 'active' : ''}`}
            onClick={() => setSelectedWeek(week.num)}
          >
            {week.label}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} style={{ 
            textAlign: 'center', 
            color: 'var(--text-secondary)',
            fontWeight: '500',
            padding: '10px'
          }}>
            {day}
          </div>
        ))}
        
        {weekContent.map(content => (
          <div key={content.day} className="calendar-day">
            <div className="calendar-day-header">
              Day <span className="calendar-day-number">{content.day}</span>
            </div>
            <div 
              className="content-tag"
              style={{ 
                background: `${pillarColors[content.pillar]}20`,
                color: pillarColors[content.pillar]
              }}
            >
              {content.pillar}
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '8px' }}>
              {content.topic}
            </div>
            <div style={{ 
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span className={`content-tag ${content.format.toLowerCase()}`}>
                {content.format}
              </span>
              <span className={`status-badge ${content.status}`}>
                {content.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-title" style={{ marginBottom: '15px' }}>📚 Content Pillars</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {Object.entries(pillarColors).map(([pillar, color]) => (
            <div key={pillar} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%',
                background: color 
              }}></div>
              <span style={{ fontSize: '0.9rem' }}>{pillar}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Week Summary */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '15px' }}>📊 Week {selectedWeek} Summary</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reels</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {weekContent.filter(c => c.format === 'Reel').length}
            </div>
          </div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Carousels</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {weekContent.filter(c => c.format === 'Carousel').length}
            </div>
          </div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Completed</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {weekContent.filter(c => c.status === 'done').length}/{weekContent.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
