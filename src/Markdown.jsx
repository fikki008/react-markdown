import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import "./Markdown.css"

function Markdown  (){
  const [markdown, setMarkdown] = useState("# hello")

  function handleClear () {
    setMarkdown("")
  }


  return (
    <div className='markdown-container'>

      <section className='left-section'>
        <header>Markdown Input</header>
        <div className='container'>
        <textarea value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder='Type your markdown here e.g # hello...etc.'
        />
        <button onClick={handleClear}>CLEAR</button>
        </div>
      </section>

       <section className='right-section'>
        <header>Live Preview</header>
        <div className='markdown-preview'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
        </div>
       </section>

    </div>
  )
}

export default Markdown