import { useState } from 'react'

const initialPosts = [
  { day: 1, topic: 'Claude vs ChatGPT', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 2, topic: 'GPT-5 Leak', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 3, topic: 'Ideogram Tutorial', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 4, topic: 'AI Comparison', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 5, topic: 'Stop Learning Hot Take', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 6, topic: 'My AI Stack', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
  { day: 7, topic: '10 AI Tools Carousel', views: 0, likes: 0, comments: 0, saves: 0, shares: 0, followers: 0, posted: false },
]

export default function Tracker() {
  const [posts, setPosts] = useState(initialPosts)
  const [currentFollowers, setCurrentFollowers] = useState(1000)
  const [editingDay, setEditingDay] = useState(null)
  
  const totalViews = posts.reduce((sum, p) => sum + p.views, 0)
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0)
  const totalSaves = posts.reduce((sum, p) => sum + p.saves, 0)
  const totalFollowersGained = posts.reduce((sum, p) => sum + p.followers, 0)
  const postsCompleted = posts.filter(p => p.posted).length
  
  const avgEngagement = totalViews > 0 
    ? (((totalLikes + totalSaves) / totalViews) * 100).toFixed(2)
    : 0
  
  const updatePost = (day, field, value) => {
    setPosts(posts.map(p => 
      p.day === day ? { ...p, [field]: parseInt(value) || 0 } : p
    ))
  }
  
  const getBenchmark = (metric, value) => {
    const benchmarks = {
      views: { poor: 1000, avg: 5000, good: 20000 },
      likes: { poor: 30, avg: 150, good: 500 },
      saves: { poor: 10, avg: 50, good: 200 },
    }
    
    if (!benchmarks[metric]) return 'neutral'
    if (value >= benchmarks[metric].good) return 'excellent'
    if (value >= benchmarks[metric].avg) return 'good'
    if (value >= benchmarks[metric].poor) return 'average'
    return 'poor'
  }
  
  const getColor = (level) => {
    const colors = {
      excellent: '#10b981',
      good: '#3b82f6',
      average: '#f59e0b',
      poor: '#ef4444',
      neutral: 'var(--text-secondary)'
    }
    return colors[level] || colors.neutral
  }
  
  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px' }}>📊 Performance Tracker</h1>
      
      {/* Overview Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Current Followers</div>
          <div className="stat-value">{currentFollowers.toLocaleString()}</div>
          <div className="stat-change positive">+{totalFollowersGained} this week</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Views</div>
          <div className="stat-value">{totalViews.toLocaleString()}</div>
          <div className="stat-change">{postsCompleted} posts</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Saves</div>
          <div className="stat-value">{totalSaves.toLocaleString()}</div>
          <div className="stat-change">Algorithm gold 🔥</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Engagement</div>
          <div className="stat-value">{avgEngagement}%</div>
          <div className="stat-change">Target: 5%+</div>
        </div>
      </div>
      
      {/* Update Followers */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div>
            <label>Update Current Follower Count</label>
            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <input 
                type="number"
                value={currentFollowers}
                onChange={(e) => setCurrentFollowers(parseInt(e.target.value) || 0)}
                style={{ width: '150px' }}
              />
              <button className="btn btn-primary btn-sm">Save</button>
            </div>
          </div>
          <div style={{ color: 'var(--text-secondary)' }}>
            Update this daily from your Instagram Insights
          </div>
        </div>
      </div>
      
      {/* Posts Table */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">📝 Post Performance</div>
          <span style={{ color: 'var(--text-secondary)' }}>Click any row to edit</span>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Saves</th>
              <th>Shares</th>
              <th>New Followers</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr 
                key={post.day}
                onClick={() => setEditingDay(editingDay === post.day ? null : post.day)}
                style={{ cursor: 'pointer' }}
              >
                <td>Day {post.day}</td>
                <td>{post.topic}</td>
                <td style={{ color: getColor(getBenchmark('views', post.views)) }}>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.views}
                      onChange={(e) => updatePost(post.day, 'views', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    post.views.toLocaleString()
                  )}
                </td>
                <td style={{ color: getColor(getBenchmark('likes', post.likes)) }}>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.likes}
                      onChange={(e) => updatePost(post.day, 'likes', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    post.likes.toLocaleString()
                  )}
                </td>
                <td>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.comments}
                      onChange={(e) => updatePost(post.day, 'comments', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    post.comments
                  )}
                </td>
                <td style={{ color: getColor(getBenchmark('saves', post.saves)) }}>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.saves}
                      onChange={(e) => updatePost(post.day, 'saves', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    post.saves
                  )}
                </td>
                <td>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.shares}
                      onChange={(e) => updatePost(post.day, 'shares', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    post.shares
                  )}
                </td>
                <td>
                  {editingDay === post.day ? (
                    <input 
                      type="number"
                      value={post.followers}
                      onChange={(e) => updatePost(post.day, 'followers', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ width: '80px' }}
                    />
                  ) : (
                    `+${post.followers}`
                  )}
                </td>
                <td>
                  {editingDay === post.day ? (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }} onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox"
                        checked={post.posted}
                        onChange={(e) => updatePost(post.day, 'posted', e.target.checked ? 1 : 0)}
                        style={{ width: 'auto' }}
                      />
                      Posted
                    </label>
                  ) : (
                    <span className={`status-badge ${post.posted ? 'done' : 'todo'}`}>
                      {post.posted ? 'Posted' : 'Pending'}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Benchmarks */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '15px' }}>📈 Performance Benchmarks</div>
        <table className="table">
          <thead>
            <tr>
              <th>Metric</th>
              <th style={{ color: '#ef4444' }}>Poor</th>
              <th style={{ color: '#f59e0b' }}>Average</th>
              <th style={{ color: '#3b82f6' }}>Good</th>
              <th style={{ color: '#10b981' }}>Viral 🔥</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Views</td>
              <td>&lt;1K</td>
              <td>1-5K</td>
              <td>5-20K</td>
              <td>20K+</td>
            </tr>
            <tr>
              <td>Like %</td>
              <td>&lt;3%</td>
              <td>3-5%</td>
              <td>5-10%</td>
              <td>10%+</td>
            </tr>
            <tr>
              <td>Save %</td>
              <td>&lt;1%</td>
              <td>1-2%</td>
              <td>2-5%</td>
              <td>5%+</td>
            </tr>
            <tr>
              <td>Comment %</td>
              <td>&lt;0.5%</td>
              <td>0.5-1%</td>
              <td>1-3%</td>
              <td>3%+</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          💡 <strong>Pro tip:</strong> The algorithm loves SAVES most, then Shares, then Comments, then Likes. Focus on making content people want to save!
        </p>
      </div>
      
      {/* Weekly Review */}
      <div className="card">
        <div className="card-title" style={{ marginBottom: '15px' }}>📝 Weekly Review Notes</div>
        <div className="form-group">
          <label>What was your best performing post? Why?</label>
          <textarea rows="2" placeholder="Day X performed best because..."></textarea>
        </div>
        <div className="form-group">
          <label>What flopped? What will you change?</label>
          <textarea rows="2" placeholder="Day X didn't work because..."></textarea>
        </div>
        <div className="form-group">
          <label>What will you do more of next week?</label>
          <textarea rows="2" placeholder="More tutorials, more hot takes, etc..."></textarea>
        </div>
        <button className="btn btn-primary">Save Notes</button>
      </div>
    </div>
  )
}
