import hljs from 'highlight.js';

export default function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(str, { language: lang }).value;
    } catch (__) { /* empty */ }
  }
  return ''; // use external default escaping
}
