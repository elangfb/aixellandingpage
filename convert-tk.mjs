import fs from 'fs';

const html = fs.readFileSync('tumbuh-kembang-updated.html', 'utf-8');

// 1. EXTRACT CSS
const cssMatch = html.match(/<style>\s*([\s\S]*?)<\/style>/);
if (cssMatch) {
  let css = cssMatch[1];
  css = css.replace(/html,body\s*\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');
  css = css.replace(/:root\s*\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');
  let output = `@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');\n\n/* Scoped TumbuhKembang styles */\n.tumbuh-kembang-page {\n${css}\n}\n`;
  fs.writeFileSync('src/pages/TumbuhKembang.css', output);
  console.log('CSS extracted and written to src/pages/TumbuhKembang.css');
} else {
  console.log('No CSS found');
}

// 2. EXTRACT HTML TO TSX
let bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove script tags
body = body.replace(/<script>[\s\S]*?<\/script>/gi, '');

// Convert unclosed tags
body = body.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
body = body.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
body = body.replace(/<br>/g, '<br />');
body = body.replace(/<hr>/g, '<hr />');

// Convert class => className, for => htmlFor
body = body.replace(/class="/g, 'className="');
body = body.replace(/for="/g, 'htmlFor="');

// Convert onclick, onchange
body = body.replace(/onclick="([^"]*)"/g, (match, $1) => {
  return `onClick={() => console.log(${JSON.stringify($1)})}`;
});
body = body.replace(/onchange="([^"]*)"/g, (match, $1) => {
  return `onChange={() => console.log(${JSON.stringify($1)})}`;
});

// Convert inline styles
body = body.replace(/style="([^"]+)"/g, (match, styleVal) => {
  const rules = styleVal.split(';').filter(s => s.trim() !== '');
  const obj = rules.map(rule => {
    let [key, ...vals] = rule.split(':');
    let val = vals.join(':');
    if (!key || !val) return null;
    key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    val = val.trim().replace(/'/g, '"');
    return `${key}: '${val}'`;
  }).filter(Boolean).join(', ');
  return `style={{ ${obj} }}`;
});

// Convert SVG attributes
const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'stroke-dashoffset', 'fill-opacity'];
svgAttrs.forEach(attr => {
  const camel = attr.split('-').map((v, i) => i === 0 ? v : v[0].toUpperCase() + v.slice(1)).join('');
  body = body.replace(new RegExp(attr + '=', 'g'), camel + '=');
});

// Convert HTML comments to JSX comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Build TSX content
const tsxObj = `import React from 'react';
import './TumbuhKembang.css';

const TumbuhKembang: React.FC = () => {
  return (
    <div className="tumbuh-kembang-page">
      ${body.trim()}
    </div>
  );
};

export default TumbuhKembang;
`;

fs.writeFileSync('src/pages/TumbuhKembang.tsx', tsxObj);
console.log('HTML converted to TSX and written to src/pages/TumbuhKembang.tsx');
