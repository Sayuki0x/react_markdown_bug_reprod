import ReactMarkdown from 'react-markdown';

function parseMarkdown(markdown) {
  const options = {
    source: markdown,
    linkTarget: '_blank',
  };
  return new ReactMarkdown(options);
}

const xssString = `<form onsubmit="alert('hello')">
<input type="submit">
</form>`;

function App() {
  return (
    parseMarkdown(xssString)
  );
}

export default App;
