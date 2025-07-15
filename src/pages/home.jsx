import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/home.css';

const Compiler = () => {
  // Default code templates for each language
  const defaultCodes = {
    c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
    python: `print("Hello, World!")`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
    javascript: `console.log("Hello, World!");`,
    go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
    rust: `fn main() {\n    println!("Hello, World!");\n}`,
    php: `<?php\n\necho "Hello, World!";\n?>`,
    ruby: `puts "Hello, World!"`,
    csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`,
    swift: `print("Hello, World!")`,
    kotlin: `fun main() {\n    println("Hello, World!")\n}`,
    typescript: `console.log("Hello, World!");`,
    r: `print("Hello, World!")`,
    bash: `echo "Hello, World!"`,
    perl: `print "Hello, World!\\n";`,
    scala: `object Main {\n  def main(args: Array[String]): Unit = {\n    println("Hello, World!")\n  }\n}`,
    haskell: `main = putStrLn "Hello, World!"`
  };

  const [code, setCode] = useState(defaultCodes.cpp);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [activeTab, setActiveTab] = useState('code');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const textareaRef = useRef(null);

  // Updated mapping of languages to their Piston API configurations
  const pistonLanguageMap = {
    c: { language: 'c', version: '10.2.0' },
    cpp: { language: 'cpp', version: '10.2.0' },
    python: { language: 'python', version: '3.10.0' },
    java: { language: 'java', version: '15.0.2' },
    javascript: { language: 'javascript', version: '18.15.0' },
    go: { language: 'go', version: '1.16.2' },
    rust: { language: 'rust', version: '1.50.0' },
    php: { language: 'php', version: '8.0.1' },
    ruby: { language: 'ruby', version: '3.0.1' },
    csharp: { language: 'csharp', version: '6.12.0' },
    swift: { language: 'swift', version: '5.3.3' },
    kotlin: { language: 'kotlin', version: '1.4.20' },
    typescript: { language: 'typescript', version: '5.0.3' },
    r: { language: 'r', version: '4.0.2' },
    bash: { language: 'bash', version: '5.1.0' },
    perl: { language: 'perl', version: '5.32.1' },
    scala: { language: 'scala', version: '2.13.5' },
    haskell: { language: 'haskell', version: '8.10.4' }
  };

  // Define all handler functions before they're used in JSX
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(defaultCodes[newLang]);
  };

  const handleScroll = () => {
    if (textareaRef.current) {
      const scrollTop = textareaRef.current.scrollTop;
      const scrollLeft = textareaRef.current.scrollLeft;
      const codeDisplay = document.querySelector('.code-display');
      if (codeDisplay) {
        codeDisplay.scrollTop = scrollTop;
        codeDisplay.scrollLeft = scrollLeft;
      }
    }
  };

  const handleRun = async () => {
    if (!code.trim()) {
      setOutput('Error: Please enter some code first');
      return;
    }

    setIsLoading(true);
    setOutput('Compiling...');
    
    try {
      const langInfo = pistonLanguageMap[language];
      if (!langInfo) {
        throw new Error('Selected language is not supported');
      }

      const response = await axios.post(
        'https://emkc.org/api/v2/piston/execute',
        {
          language: langInfo.language,
          version: langInfo.version,
          files: [{ content: code }]
        },
        { timeout: 10000 }
      );

      const result = response.data;
      setOutput(
        result.run?.stderr || 
        result.compile_output || 
        result.run?.output || 
        'Execution completed with no output'
      );
    } catch (error) {
      console.error('API Error:', error);
      setOutput(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setCode(defaultCodes[language]);
    setOutput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newCode = code.substring(0, selectionStart) + '    ' + code.substring(selectionEnd);
      setCode(newCode);
      
      setTimeout(() => {
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `code.${language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`compiler-app ${theme}`}>
      <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? '✕' : '☰'}
      </div>
      
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Compiler Settings</h3>
        </div>
        <div className="sidebar-content">
          <div className="setting-group">
            <label>Theme</label>
            <div className="theme-switcher">
              <button 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
            </div>
          </div>
          
          <div className="setting-group">
            <label>Font Size: {fontSize}px</label>
            <input 
              type="range" 
              min="10" 
              max="24" 
              value={fontSize} 
              onChange={handleFontSizeChange}
            />
          </div>
          
          <div className="setting-group">
            <label>Language</label>
            <select 
              value={language} 
              onChange={handleLanguageChange}
              className="select-dropdown"
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="go">Go</option>
              <option value="ruby">Ruby</option>
              <option value="csharp">C#</option>
              <option value="swift">Swift</option>
              <option value="typescript">TypeScript</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label>Actions</label>
            <div className="action-buttons">
              <button className="action-btn" onClick={copyToClipboard}>
                <i className="icon">📋</i> Copy Code
              </button>
              <button className="action-btn" onClick={downloadCode}>
                <i className="icon">💾</i> Download
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="compiler-container">
        <div className="header">
          <h1>
            <span className="logo-icon">💻</span>
            <span>Online Code Compiler</span>
          </h1>
          <div className="controls">
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Code Editor
              </button>
              <button 
                className={`tab-btn ${activeTab === 'output' ? 'active' : ''}`}
                onClick={() => setActiveTab('output')}
              >
                Output
              </button>
            </div>
            
            <button 
              className={`run-btn ${isLoading ? 'disabled' : ''}`} 
              onClick={handleRun}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span> Running...
                </>
              ) : (
                <>
                  <span className="icon">▶</span> Run
                </>
              )}
            </button>
            <button 
              className={`clear-btn ${isLoading ? 'disabled' : ''}`} 
              onClick={handleClear}
              disabled={isLoading}
            >
              <span className="icon">🗑</span> Clear
            </button>
          </div>
        </div>

        <div className="editor-output-container">
          {activeTab === 'code' && (
            <div className="code-editor">
              <div className="editor-header">
                <div className="file-info">
                  <span className="file-icon">📄</span>
                  <span>main.{language}</span>
                </div>
                <div className="editor-actions">
                  <button className="editor-action-btn" onClick={copyToClipboard}>
                    <span className="icon">📋</span>
                  </button>
                  <button className="editor-action-btn" onClick={downloadCode}>
                    <span className="icon">💾</span>
                  </button>
                </div>
              </div>
              <div className="code-input-wrapper">
                <pre className="code-display" aria-hidden="true" style={{ fontSize: `${fontSize}px` }}>
                  {code}
                </pre>
                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onScroll={handleScroll}
                  onKeyDown={handleKeyDown}
                  className="code-input"
                  style={{ fontSize: `${fontSize}px` }}
                  spellCheck="false"
                  autoCapitalize="off"
                  autoCorrect="off"
                  disabled={isLoading}
                />
              </div>
            </div>
          )}
          
          {activeTab === 'output' && (
            <div className="output-container">
              <div className="output-header">
                <div className="output-info">
                  <span className="output-icon">📤</span>
                  <span>Output</span>
                </div>
                <div className="output-actions">
                  <button className="output-action-btn" onClick={() => setOutput('')}>
                    <span className="icon">🗑</span>
                  </button>
                </div>
              </div>
              <pre className="output-content" style={{ fontSize: `${fontSize}px` }}>
                {output || 'Run your code to see the output here'}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compiler;