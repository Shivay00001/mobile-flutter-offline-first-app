import { Activity, Server, Shield } from 'lucide-react';
export default function App() {
  return (
    <div style={{padding: '2rem'}}>
      <h1><Shield style={{verticalAlign: 'middle'}}/> Enterprise Dashboard</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
        <div style={{background: '#222', padding: '1.5rem', borderRadius: '8px'}}>
          <h3><Activity color='#4ade80'/> System Load</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>98.2%</p>
        </div>
        <div style={{background: '#222', padding: '1.5rem', borderRadius: '8px'}}>
          <h3><Server color='#60a5fa'/> Active Nodes</h3>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>142</p>
        </div>
      </div>
    </div>
  )
}
