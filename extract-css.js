const fs = require('fs');
const html = fs.readFileSync('tumbuh-kembang-updated.html', 'utf-8');
const cssMatch = html.match(/<style>\s*([\s\S]*?)<\/style>/);

if (cssMatch) {
    let css = cssMatch[1];

    // Scoping everything inside `.tumbuh-kembang-page` using native nesting (supported by Vite 5)
    // But wait, it's safer to just inject standard CSS prefix using a simple regex since modern CSS native nesting requires
    // `&` or is sometimes buggy with older Vite versions. Actually Vite uses PostCSS-nesting automatically.
    // We'll wrap it natively:

    // First, convert global tags like html, body to .tumbuh-kembang-page 
    css = css.replace(/html,body\s*\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');
    // Convert :root to .tumbuh-kembang-page
    css = css.replace(/:root\s*\{([^}]+)\}/, '.tumbuh-kembang-page { $1 }');

    let output = `@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');

/* Scoped TumbuhKembang styles */
.tumbuh-kembang-page {
${css}
}
`;

    fs.writeFileSync('src/pages/TumbuhKembang.css', output);
    console.log("Successfully extracted CSS");
} else {
    console.log("Failed to find CSS");
}
