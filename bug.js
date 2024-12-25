import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

// About.js
function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

//The Link component is missing an import statement, causing the error.