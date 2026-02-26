import { useState } from 'react'

const initialTasks = [
  { id: 1, title: '#1 Seedance 2.0 — Free AI Video Tool', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'URGENT', bestDay: 'Mon/Tue', driveUrl: '', notes: '' },
  { id: 2, title: '#2 Claude Sonnet 4.6 Beats $200 Model', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'URGENT', bestDay: 'Tue/Wed', driveUrl: '', notes: '' },
  { id: 3, title: '#3 Vibe Coding — Build App No Code', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Mon/Thu', driveUrl: '', notes: '' },
  { id: 4, title: '#4 Nvidia Vera Rubin 10x Powerful', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Tue', driveUrl: '', notes: '' },
  { id: 5, title: '#5 Perfect Prompt Formula RCTF', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'MEDIUM', bestDay: 'Wed/Thu', driveUrl: '', notes: '' },
  { id: 6, title: '#6 OpenAI Retired GPT-4o', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'URGENT', bestDay: 'Tue', driveUrl: '', notes: '' },
  { id: 7, title: '#7 Google AI Mode 75M Users', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Wed/Fri', driveUrl: '', notes: '' },
  { id: 8, title: '#8 AI Writes 41% of Code — Jobs', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Sat', driveUrl: '', notes: '' },
  { id: 9, title: '#9 5 AI Tools Replace $500/Month', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'MEDIUM', bestDay: 'Mon/Thu', driveUrl: '', notes: '' },
  { id: 10, title: '#10 Apple Siri + Google Gemini AI', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Tue', driveUrl: '', notes: '' },
  { id: 11, title: '#11 Gemini vs Claude vs GPT Test', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'MEDIUM', bestDay: 'Wed/Thu', driveUrl: '', notes: '' },
  { id: 12, title: '#12 Anthropic $30B Funding Round', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Tue', driveUrl: '', notes: '' },
  { id: 13, title: '#13 AI Morning Routine — 2 Hours', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'MEDIUM', bestDay: 'Mon/Wed', driveUrl: '', notes: '' },
  { id: 14, title: '#14 EU AI Act — Creators Must Know', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'HIGH', bestDay: 'Fri/Sat', driveUrl: '', notes: '' },
  { id: 15, title: '#15 AI vs Human Instagram Caption', status: 'todo', assignee: 'Karthik', type: 'record', priority: 'MEDIUM', bestDay: 'Sat', driveUrl: '', notes: '' },
]

const columns = [
  { id: 'todo', label: '📋 To Do', color: '#f59e0b' },
  { id: 'recording', label: '🎥 Recording', color: '#3b82f6' },
  { id: 'editing', label: '✂️ Editing', color: '#8b5cf6' },
  { id: 'review', label: '👀 Review', color: '#ec4899' },
  { id: 'done', label: '✅ Done', color: '#10b981' },
]

const priorityColors = {
  'URGENT': '#ef4444',
  'HIGH': '#f59e0b',
  'MEDIUM': '#3b82f6',
}

export default function Workflow() {
  const [tasks, setTasks] = useState(initialTasks)
  const [showAddTask, setShowAddTask] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [newTask, setNewTask] = useState({ title: '', assignee: 'Karthik', type: 'record', priority: 'MEDIUM' })
  
  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(t => 
      t.id === taskId ? { ...t, status: newStatus } : t
    ))
  }
  
  const updateTask = (taskId, field, value) => {
    setTasks(tasks.map(t => 
      t.id === taskId ? { ...t, [field]: value } : t
    ))
  }
  
  const addTask = () => {
    if (!newTask.title) return
    setTasks([...tasks, {
      id: Date.now(),
      ...newTask,
      status: 'todo',
      driveUrl: '',
      notes: '',
      bestDay: ''
    }])
    setNewTask({ title: '', assignee: 'Karthik', type: 'record', priority: 'MEDIUM' })
    setShowAddTask(false)
  }

  // Sort tasks by priority
  const sortByPriority = (taskList) => {
    const order = { 'URGENT': 0, 'HIGH': 1, 'MEDIUM': 2 }
    return [...taskList].sort((a, b) => (order[a.priority] || 3) - (order[b.priority] || 3))
  }
  
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1>🎬 Editor Workflow Board</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>15 Shoot-Ready Scripts • Sorted by Priority</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddTask(true)}>
          + Add Task
        </button>
      </div>
      
      {/* Priority Legend */}
      <div className="card" style={{ marginBottom: '20px', padding: '15px 20px' }}>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontWeight: '600' }}>Priority:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
            <span>URGENT (48h)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
            <span>HIGH (1-2 weeks)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }}></div>
            <span>MEDIUM (Evergreen)</span>
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="card" style={{ marginBottom: '30px', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-secondary))' }}>
        <div className="card-title" style={{ marginBottom: '15px' }}>📚 Workflow</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', fontSize: '0.9rem' }}>
          <div>
            <strong style={{ color: '#f59e0b' }}>1. To Do</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Pick script, prepare</p>
          </div>
          <div>
            <strong style={{ color: '#3b82f6' }}>2. Recording</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Record + add Drive URL</p>
          </div>
          <div>
            <strong style={{ color: '#8b5cf6' }}>3. Editing</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Editor cuts, captions</p>
          </div>
          <div>
            <strong style={{ color: '#ec4899' }}>4. Review</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Approve or revise</p>
          </div>
          <div>
            <strong style={{ color: '#10b981' }}>5. Done</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Ready to post!</p>
          </div>
        </div>
      </div>
      
      {/* Kanban Board */}
      <div className="workflow-board">
        {columns.map(column => {
          const columnTasks = sortByPriority(tasks.filter(t => t.status === column.id))
          return (
            <div key={column.id} className="workflow-column">
              <div className="workflow-column-header">
                <span style={{ color: column.color }}>{column.label}</span>
                <span className="workflow-count">{columnTasks.length}</span>
              </div>
              
              {columnTasks.map(task => (
                <div 
                  key={task.id} 
                  className="workflow-card"
                  style={{ borderLeft: `3px solid ${priorityColors[task.priority] || '#666'}` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div className="workflow-card-title" style={{ fontSize: '0.9rem' }}>{task.title}</div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span style={{ 
                      background: `${priorityColors[task.priority]}20`,
                      color: priorityColors[task.priority],
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '600'
                    }}>
                      {task.priority}
                    </span>
                    {task.bestDay && (
                      <span style={{ 
                        background: 'var(--bg-secondary)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {task.bestDay}
                      </span>
                    )}
                  </div>
                  
                  <div className="workflow-card-meta">
                    <span>{task.assignee}</span>
                  </div>
                  
                  {/* Drive URL Section */}
                  <div style={{ marginTop: '10px' }}>
                    {task.driveUrl ? (
                      <a 
                        href={task.driveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '6px 10px',
                          background: 'rgba(66, 133, 244, 0.2)',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          color: '#4285f4'
                        }}
                      >
                        📁 Open in Drive
                      </a>
                    ) : (
                      <div style={{
                        padding: '6px 10px',
                        background: 'var(--bg-secondary)',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)'
                      }}>
                        No Drive link yet
                      </div>
                    )}
                  </div>
                  
                  {/* Notes preview */}
                  {task.notes && (
                    <div style={{
                      marginTop: '8px',
                      padding: '6px 10px',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      color: 'var(--text-secondary)'
                    }}>
                      📝 {task.notes.substring(0, 40)}{task.notes.length > 40 ? '...' : ''}
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div style={{ marginTop: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    <button 
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '4px 8px' }}
                      onClick={() => setEditingTask(task)}
                    >
                      ✏️ Edit
                    </button>
                    {column.id !== 'done' && (
                      <button 
                        className="btn btn-primary btn-sm"
                        style={{ fontSize: '0.75rem', padding: '4px 8px' }}
                        onClick={() => {
                          const idx = columns.findIndex(c => c.id === column.id)
                          if (idx < columns.length - 1) moveTask(task.id, columns[idx + 1].id)
                        }}
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {columnTasks.length === 0 && (
                <div style={{ 
                  padding: '20px', 
                  textAlign: 'center', 
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem'
                }}>
                  No tasks
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Editor Notes */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-title" style={{ marginBottom: '15px' }}>📝 Editor Guidelines</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div>
            <h4 style={{ marginBottom: '10px' }}>✂️ Editing Style</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>Fast cuts every 2-3 seconds</li>
              <li>Zoom in on key points</li>
              <li>Add text overlays for hooks</li>
              <li>Use trending audio when relevant</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>📝 Captions</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>Auto-generate with CapCut</li>
              <li>Bold key words</li>
              <li>Yellow highlight for emphasis</li>
              <li>Center-bottom placement</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>🎨 Visual Style</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>Clean, dark backgrounds</li>
              <li>Purple/blue accent colors</li>
              <li>Smooth transitions</li>
              <li>Professional but energetic</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>📏 Specs</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>9:16 aspect ratio (vertical)</li>
              <li>1080x1920 resolution</li>
              <li>45-75 seconds length</li>
              <li>Export as MP4 H.264</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Edit Task Modal */}
      {editingTask && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ width: '500px', maxHeight: '90vh', overflow: 'auto' }}>
            <div className="card-title" style={{ marginBottom: '20px' }}>
              ✏️ Edit: {editingTask.title}
            </div>
            
            <div className="form-group">
              <label>📁 Google Drive URL (Raw Recording)</label>
              <input 
                type="url"
                value={editingTask.driveUrl}
                onChange={(e) => {
                  setEditingTask({...editingTask, driveUrl: e.target.value})
                  updateTask(editingTask.id, 'driveUrl', e.target.value)
                }}
                placeholder="https://drive.google.com/file/d/..."
              />
              <small style={{ color: 'var(--text-secondary)', display: 'block', marginTop: '5px' }}>
                Upload raw recording to Drive and paste share link
              </small>
            </div>
            
            <div className="form-group">
              <label>👤 Assignee</label>
              <select 
                value={editingTask.assignee}
                onChange={(e) => {
                  setEditingTask({...editingTask, assignee: e.target.value})
                  updateTask(editingTask.id, 'assignee', e.target.value)
                }}
              >
                <option value="Karthik">Karthik</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>🎯 Priority</label>
              <select 
                value={editingTask.priority}
                onChange={(e) => {
                  setEditingTask({...editingTask, priority: e.target.value})
                  updateTask(editingTask.id, 'priority', e.target.value)
                }}
              >
                <option value="URGENT">URGENT (48h)</option>
                <option value="HIGH">HIGH (1-2 weeks)</option>
                <option value="MEDIUM">MEDIUM (Evergreen)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>📝 Notes for Editor</label>
              <textarea 
                rows="3"
                value={editingTask.notes}
                onChange={(e) => {
                  setEditingTask({...editingTask, notes: e.target.value})
                  updateTask(editingTask.id, 'notes', e.target.value)
                }}
                placeholder="Timestamps to cut, effects to add, specific instructions..."
              />
            </div>
            
            <div className="form-group">
              <label>📊 Status</label>
              <select 
                value={editingTask.status}
                onChange={(e) => {
                  setEditingTask({...editingTask, status: e.target.value})
                  updateTask(editingTask.id, 'status', e.target.value)
                }}
              >
                {columns.map(col => (
                  <option key={col.id} value={col.id}>{col.label}</option>
                ))}
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" onClick={() => setEditingTask(null)}>
                Save & Close
              </button>
              <button className="btn btn-secondary" onClick={() => setEditingTask(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Task Modal */}
      {showAddTask && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ width: '400px' }}>
            <div className="card-title" style={{ marginBottom: '20px' }}>Add New Task</div>
            
            <div className="form-group">
              <label>Task Title</label>
              <input 
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                placeholder="e.g., #16 New AI Tool Tutorial"
              />
            </div>
            
            <div className="form-group">
              <label>Priority</label>
              <select 
                value={newTask.priority}
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <option value="URGENT">URGENT</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Assignee</label>
              <select 
                value={newTask.assignee}
                onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
              >
                <option value="Karthik">Karthik</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" onClick={addTask}>Add Task</button>
              <button className="btn btn-secondary" onClick={() => setShowAddTask(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
