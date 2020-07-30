import React from 'react';
import Title from './Components/Title'
import Section from './Components/Section'

function App() {
  return (
    <div className="px-8 py-6 App bg-gray-900 h-screen w-screen overflow-x-hidden">
      <Title text="> jan martchouk"></Title>
      <Section id="about" title="about" />
      <Section id="projects" title="projects" />
    </div>
  );
}

export default App;
