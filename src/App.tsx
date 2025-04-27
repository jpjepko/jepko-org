import { useEffect } from 'react';
import './App.css'

function App() {
  // keyboard nav
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const sections: { [key: string]: string } = {
        'a': "about",
        'p': "projects",
        's': "skills",
        'r': "resume",
      };

      const sectionId = sections[event.key.toLowerCase()];
      if (sectionId) {
        const elt = document.getElementById(sectionId);
        if (elt) {
          elt.scrollIntoView({});
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <header className="font-mono text-center text-xl bg-slate-950 text-green-500 p-2 border border-green-500 rounded-md sticky top-0">
        <nav className="grid grid-cols-4 text-xl">
          <a href="#about" className="group text-green-500 hover:text-green-600"><span className="underline font-bold text-red-500 group-hover:text-red-600">a</span>bout</a>
          <a href="#projects" className="group text-green-500 hover:text-green-600"><span className="underline font-bold text-red-500 group-hover:text-red-600">p</span>rojects</a>
          <a href="#skills" className="group text-green-500 hover:text-green-600"><span className="underline font-bold text-red-500 group-hover:text-red-600">s</span>kills</a>
          <a href="#resume" className="group text-green-500 hover:text-green-600"><span className="underline font-bold text-red-500 group-hover:text-red-600">r</span>esum&eacute;</a>
        </nav>
        <h1 className="col-span-4 text-6xl pt-4">&gt; John Paul Jepko</h1>
      </header>
      <main>
        <div id="about" className="font-mono text-center text-xl bg-slate-950 text-white m-3 p-2 border border-green-500 rounded-md">
          <h1 className="text-center text-4xl text-green-500">About</h1>
          <p>This is a paragraph about me.</p>
        </div>
        <div id="projects" className="font-mono text-center text-xl bg-slate-950 text-white m-3 p-2 border border-green-500 rounded-md">
          <h1 className="text-center text-4xl text-green-500">Projects</h1>
          <p>Details about my projects.</p>
        </div>
        <div id="skills" className="font-mono text-center text-xl bg-slate-950 text-white m-3 p-2 border border-green-500 rounded-md">
          <h1 className="text-center text-4xl text-green-500">Skills</h1>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] ">
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-python] text-6xl"></span>
              <p>Python</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-c] text-6xl"></span>
              <p>C</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-cpp2] text-6xl"></span>
              <p>C++</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-go-gopher] text-6xl"></span>
              <p>Go</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-js] text-6xl"></span>
              <p>JavaScript</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-reactjs] text-6xl"></span>
              <p>React</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-cuda] text-6xl"></span>
              <p>CUDA</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-protobuf] text-6xl"></span>
              <p>Protobuf</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-docker] text-6xl"></span>
              <p>Docker</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[file-icons--llvm] text-6xl"></span>
              <p>LLVM</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-sql] text-6xl"></span>
              <p>SQL</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-jupyter] text-6xl"></span>
              <p>Jupyter</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-rust] text-6xl"></span>
              <p>Rust</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-ocaml] text-6xl"></span>
              <p>OCaml</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[devicon--linux] text-6xl"></span>
              <p>Linux</p>
            </div>
            <div className="box-content size-32">
              <span className="icon-[vscode-icons--file-type-shell] text-6xl"></span>
              <p>Bash</p>
            </div>
          </div>
        </div>
        <div id="resume" className="font-mono text-center text-xl bg-slate-950 text-white m-3 p-2 border border-green-500 rounded-md">
          <h1 className="text-center text-4xl text-green-500">Resumé</h1>
          <a href="/jepko.resume.pdf">
          <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-600 rounded-lg text-2xl px-5 py-2.5 my-2">View Resumé</button>
          </a>
        </div>
      </main>
    </>
  )
}

export default App;
