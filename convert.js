import fs from 'fs';
const html = fs.readFileSync('tumbuh-kembang-updated.html', 'utf8');

// Extract body content (between <body> and <script>)
const bodyMatch = html.match(/<body>([\s\S]*?)<script>/);
const bodyContent = bodyMatch ? bodyMatch[1].trim() : '';

// Extract script content  
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const scriptContent = scriptMatch ? scriptMatch[1].trim() : '';

// Build the component using dangerouslySetInnerHTML for the HTML
// and eval-style script execution in useEffect
// This avoids complex JSX conversion

const escapedBody = bodyContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

const escapedScript = scriptContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

const component = `import React, { useEffect, useRef } from 'react';
import './TumbuhKembang.css';

const BODY_HTML = \`${escapedBody}\`;

const SCRIPT_CODE = \`${escapedScript}\`;

const TumbuhKembang: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const container = containerRef.current;
        if (!container) return;

        // Insert HTML
        container.innerHTML = BODY_HTML;

        // Execute script in context
        const scriptEl = document.createElement('script');
        scriptEl.textContent = SCRIPT_CODE;
        container.appendChild(scriptEl);

        // Cleanup
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="tk-root">
            <link
                href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
            <div ref={containerRef} />
        </div>
    );
};

export default TumbuhKembang;
`;

fs.writeFileSync('src/pages/TumbuhKembang.tsx', component);
console.log('Done! Lines:', component.split('\n').length);
