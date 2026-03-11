import fs from 'fs';

const htmlUrl = 'd:/Work/aixel/aixel-frontend/tumbuh-kembang-updated.html';
const html = fs.readFileSync(htmlUrl, 'utf-8');

const match = html.match(/<style>([\s\S]*?)<\/style>/);
if (!match) {
    console.error('No style match');
    process.exit(1);
}

let css = match[1];

// Update root declarations to scoped class
css = css.replace(/html,body\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');
css = css.replace(/:root\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');

const out = `@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');

.tumbuh-kembang-page {
  /* Provide full screen context so the scoped wrap has a place to be centered if needed */
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  ${css.replace(/html,body\{/, '').replace(/:root\{/, '')}
}
`;

fs.writeFileSync('d:/Work/aixel/aixel-frontend/src/pages/TumbuhKembang.css', out);
console.log('Done CSS extraction');
