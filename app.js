import React from 'react';
import ReactDOM from 'react-dom/client';

// Create React Element using JSX

// JSX => React.createElement => React Element/ JS Object => rendered as HTML Element
const jsxheading = <h1>This element is created using JSX 🚀</h1>;

//React Functional Component
const Title = () => {
  return <h1 className="heading"> This is a Title Functional Component</h1>;
};

// Component Composition: Using Compoment inside another Component
const Heading2 = () => {
  return (
    <>
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="heading" id="head">
        This is a Functional Component
      </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading2 />);
