import showdown from 'showdown';

const renderMarkdown = (text) => {
  const converter = new showdown.Converter();

  return converter.makeHtml(text);
};

export default renderMarkdown;