import { useState } from 'react'

const initialStats = {
  followers: 1000,
  targetFollowers: 1000000,
  postsThisWeek: 0,
  totalPosts: 0,
  avgViews: 0,
  engagementRate: 0,
}

const todayContent = {
  day: 1,
  pillar: 'Tool Discovery',
  topic: 'This FREE AI writes better than ChatGPT (Claude)',
  format: 'Reel',
  status: 'todo',
  hook: 'Delete ChatGPT. Use THIS instead.',
}

export default function Dashboard() {
  const [stats] = useState(initialStats)
  
  const progress = ((stats.followers / stats.targetFollowers) * 100).toFixed(2)
  const daysRemaining = 180 // 6 months
  const followersNeeded = stats.targetFollowers - stats.followers
  const dailyTarget = Math.ceil(followersNeeded / daysRemaining)
  
  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px' }}>📊 Dashboard</h1>
      
      {/* Progress to 1M */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">🎯 Road to 1 Million</div>
          <span style={{ color: 'var(--accent)' }}>{stats.followers.toLocaleString()} / 1,000,000</span>
        </div>
        <div className="progress-bar" style={{ marginBottom: '15px' }}>
          <div className="progress-fill" style={{ width: `${Math.max(progress, 0.5)}%` }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <span>{progress}% complete</span>
          <span>{daysRemaining} days remaining</span>
          <span>Need ~{dailyTarget.toLocaleString()}/day</span>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Current Followers</div>
          <div className="stat-value">{stats.followers.toLocaleString()}</div>
          <div className="stat-change positive">Starting point</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Posts This Week</div>
          <div className="stat-value">{stats.postsThisWeek}/7</div>
          <div className="stat-change">Target: 7/week</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Views</div>
          <div className="stat-value">{stats.avgViews.toLocaleString()}</div>
          <div className="stat-change">Per post</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Engagement Rate</div>
          <div className="stat-value">{stats.engagementRate}%</div>
          <div className="stat-change">Target: 5%+</div>
        </div>
      </div>
      
      {/* Today's Content */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">🎬 Today's Content</div>
          <span className={`status-badge ${todayContent.status}`}>
            {todayContent.status === 'todo' ? 'To Record' : todayContent.status}
          </span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label>Day</label>
            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Day {todayContent.day}</div>
          </div>
          <div>
            <label>Pillar</label>
            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{todayContent.pillar}</div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label>Topic</label>
            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{todayContent.topic}</div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label>Hook</label>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              color: 'var(--accent)',
              background: 'var(--bg-secondary)',
              padding: '15px',
              borderRadius: '8px',
              marginTop: '5px'
            }}>
              "{todayContent.hook}"
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <a href="/scripts" className="btn btn-primary">View Full Script →</a>
          <button className="btn btn-secondary">Copy Hook</button>
        </div>
      </div>
      
      {/* Daily Checklist */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '20px' }}>✅ Daily Checklist</div>
        
        <div style={{ display: 'grid', gap: '10px' }}>
          {[
            { label: 'Check AI news (5 min)', time: 'Morning' },
            { label: 'Reply to all comments from yesterday', time: 'Morning' },
            { label: 'Engage on 10 accounts', time: 'Morning' },
            { label: 'Script today\'s reel', time: 'Midday' },
            { label: 'Record the reel', time: 'Midday' },
            { label: 'Edit the reel', time: 'Midday' },
            { label: 'Post at optimal time', time: 'Afternoon' },
            { label: 'Post 3 Stories', time: 'Afternoon' },
            { label: 'Reply to new comments', time: 'Evening' },
            { label: 'Prep tomorrow\'s content', time: 'Evening' },
          ].map((item, i) => (
            <label key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '10px 15px',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <input type="checkbox" style={{ width: 'auto' }} />
              <span style={{ flex: 1 }}>{item.label}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.time}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '20px' }}>🔗 Quick Links</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="https://instagram.com" target="_blank" className="btn btn-secondary">📱 Instagram</a>
          <a href="https://claude.ai" target="_blank" className="btn btn-secondary">🤖 Claude AI</a>
          <a href="https://ideogram.ai" target="_blank" className="btn btn-secondary">🎨 Ideogram</a>
          <a href="https://capcut.com" target="_blank" className="btn btn-secondary">✂️ CapCut</a>
        </div>
      </div>
    </div>
  )
}
