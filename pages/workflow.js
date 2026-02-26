import { useState } from 'react'

const initialTasks = [
  // To Do
  { id: 1, title: 'Day 1 - Claude vs ChatGPT', status: 'todo', assignee: 'Karthik', type: 'record', day: 1 },
  { id: 2, title: 'Day 2 - GPT-5 Leak', status: 'todo', assignee: 'Karthik', type: 'record', day: 2 },
  { id: 3, title: 'Day 3 - Ideogram Tutorial', status: 'todo', assignee: 'Karthik', type: 'record', day: 3 },
  { id: 4, title: 'Day 4 - AI Comparison', status: 'todo', assignee: 'Karthik', type: 'record', day: 4 },
  { id: 5, title: 'Day 5 - Hot Take', status: 'todo', assignee: 'Karthik', type: 'record', day: 5 },
  { id: 6, title: 'Day 6 - My AI Stack', status: 'todo', assignee: 'Karthik', type: 'record', day: 6 },
  { id: 7, title: 'Day 7 - 10 AI Tools Carousel', status: 'todo', assignee: 'Karthik', type: 'design', day: 7 },
]

const columns = [
  { id: 'todo', label: '📋 To Do', color: '#f59e0b' },
  { id: 'recording', label: '🎥 Recording', color: '#3b82f6' },
  { id: 'editing', label: '✂️ Editing', color: '#8b5cf6' },
  { id: 'review', label: '👀 Review', color: '#ec4899' },
  { id: 'done', label: '✅ Done', color: '#10b981' },
]

export default function Workflow() {
  const [tasks, setTasks] = useState(initialTasks)
  const [showAddTask, setShowAddTask] = useState(false)
  const [newTask, setNewTask] = useState({ title: '', assignee: 'Karthik', type: 'record' })
  
  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(t => 
      t.id === taskId ? { ...t, status: newStatus } : t
    ))
  }
  
  const addTask = () => {
    if (!newTask.title) return
    setTasks([...tasks, {
      id: Date.now(),
      ...newTask,
      status: 'todo',
      day: tasks.length + 1
    }])
    setNewTask({ title: '', assignee: 'Karthik', type: 'record' })
    setShowAddTask(false)
  }
  
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>🎬 Editor Workflow Board</h1>
        <button className="btn btn-primary" onClick={() => setShowAddTask(true)}>
          + Add Task
        </button>
      </div>
      
      {/* Instructions */}
      <div className="card" style={{ marginBottom: '30px', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-secondary))' }}>
        <div className="card-title" style={{ marginBottom: '15px' }}>📚 How This Works</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', fontSize: '0.9rem' }}>
          <div>
            <strong style={{ color: '#f59e0b' }}>1. To Do</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Karthik picks script & prepares</p>
          </div>
          <div>
            <strong style={{ color: '#3b82f6' }}>2. Recording</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Karthik records raw footage</p>
          </div>
          <div>
            <strong style={{ color: '#8b5cf6' }}>3. Editing</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Editor adds cuts, captions, effects</p>
          </div>
          <div>
            <strong style={{ color: '#ec4899' }}>4. Review</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>Karthik approves or requests changes</p>
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
          const columnTasks = tasks.filter(t => t.status === column.id)
          return (
            <div key={column.id} className="workflow-column">
              <div className="workflow-column-header">
                <span style={{ color: column.color }}>{column.label}</span>
                <span className="workflow-count">{columnTasks.length}</span>
              </div>
              
              {columnTasks.map(task => (
                <div key={task.id} className="workflow-card">
                  <div className="workflow-card-title">{task.title}</div>
                  <div className="workflow-card-meta">
                    <span>{task.assignee}</span>
                    <span className={`content-tag ${task.type === 'record' ? 'reel' : 'carousel'}`}>
                      {task.type}
                    </span>
                  </div>
                  
                  {/* Move buttons */}
                  <div style={{ marginTop: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {column.id !== 'todo' && (
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          const idx = columns.findIndex(c => c.id === column.id)
                          if (idx > 0) moveTask(task.id, columns[idx - 1].id)
                        }}
                      >
                        ← Back
                      </button>
                    )}
                    {column.id !== 'done' && (
                      <button 
                        className="btn btn-primary btn-sm"
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
                  fontSize: '0.9rem'
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
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px' }}>
              <li>Fast cuts every 2-3 seconds</li>
              <li>Zoom in on key points</li>
              <li>Add text overlays for hooks</li>
              <li>Use trending audio when relevant</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>📝 Captions</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px' }}>
              <li>Auto-generate with CapCut</li>
              <li>Bold key words</li>
              <li>Yellow highlight for emphasis</li>
              <li>Center-bottom placement</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>🎨 Visual Style</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px' }}>
              <li>Clean, dark backgrounds</li>
              <li>Purple/blue accent colors</li>
              <li>Smooth transitions</li>
              <li>Professional but energetic</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>📏 Specs</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px' }}>
              <li>9:16 aspect ratio (vertical)</li>
              <li>1080x1920 resolution</li>
              <li>30-60 seconds length</li>
              <li>Export as MP4 H.264</li>
            </ul>
          </div>
        </div>
      </div>
      
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
                placeholder="e.g., Day 8 - NotebookLM Tutorial"
              />
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
            
            <div className="form-group">
              <label>Type</label>
              <select 
                value={newTask.type}
                onChange={(e) => setNewTask({...newTask, type: e.target.value})}
              >
                <option value="record">Record (Reel)</option>
                <option value="design">Design (Carousel)</option>
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
