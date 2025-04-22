import './App.css'

function App() {
  return (
    <>
      <div className="grid grid-cols-4 font-mono text-center text-xl bg-slate-950 text-green-500">
        <div>home</div>
        <div>about</div>
        <div>projects</div>
        <div>resume</div>
        <div className="col-span-4 text-5xl">&gt; John Paul Jepko</div>
      </div>
      
      <div className="text-white">
        { /* placeholder to test floating hdr */ }
        <h1>Header</h1>
        <p>Paragraph</p>
      </div>
    </>
  )
}

export default App;
