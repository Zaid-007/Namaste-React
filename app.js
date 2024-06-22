/**
 * Create a Sibling in Nested Element using React
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1> This is an H1 Tag </h1>
 *     <h2> This is an H2 Tag </h2>
 *   </div>
 * </div>
 *
 */

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is an H1 Tag'),
    React.createElement('h2', {}, 'This is an H2 Tag'),
  ])
);

console.log(parent); // JS Object which is a React Element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
