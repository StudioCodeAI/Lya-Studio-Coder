document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('atom-container');
    if (!container) return;

    // Define colors for the LLMs
    const colors = {
        claude: '#f97316',
        gemini: '#3b82f6',
        gpt: '#10b981',
        ollama: '#f8fafc'
    };

    const width = 350;
    const height = 200;
    const cx = width / 2;
    const cy = height / 2;

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.overflow = "visible";

    // Definição de brilhos
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    
    // Gradiente do núcleo
    const coreGrad = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    coreGrad.setAttribute("id", "coreGlow");
    coreGrad.innerHTML = `
        <stop offset="0%" stop-color="#fef08a" />
        <stop offset="40%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#7c2d12" stop-opacity="0" />
    `;
    defs.appendChild(coreGrad);

    // Filtro de blur para brilho intenso
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "glow");
    filter.innerHTML = `<feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>`;
    defs.appendChild(filter);
    svg.appendChild(defs);

    // Órbitas e planetas
    const orbits = [
        { rx: 140, ry: 40, angle: 15, color: colors.claude, duration: 15000 },
        { rx: 130, ry: 45, angle: 75, color: colors.gemini, duration: 18000 },
        { rx: 150, ry: 35, angle: -45, color: colors.gpt, duration: 20000 },
        { rx: 120, ry: 50, angle: -15, color: colors.ollama, duration: 17000 },
        { rx: 145, ry: 38, angle: 45, color: '#8b5cf6', duration: 22000 } // Orbi extra roxa
    ];

    orbits.forEach((orbit, index) => {
        // Create the ellipse ring
        const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        ellipse.setAttribute("cx", cx);
        ellipse.setAttribute("cy", cy);
        ellipse.setAttribute("rx", orbit.rx);
        ellipse.setAttribute("ry", orbit.ry);
        ellipse.setAttribute("fill", "none");
        ellipse.setAttribute("stroke", orbit.color);
        ellipse.setAttribute("stroke-width", "0.5");
        ellipse.setAttribute("stroke-opacity", "0.5");
        ellipse.setAttribute("transform", `rotate(${orbit.angle} ${cx} ${cy})`);
        svg.appendChild(ellipse);

        // Create the planet
        const planet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        planet.setAttribute("r", index === 4 ? "3" : "4.5");
        planet.setAttribute("fill", orbit.color);
        planet.setAttribute("filter", "url(#glow)");
        
        // Planet animation logic
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            
            // Calcula o progresso (0 a 1) baseado na duração
            const progress = (elapsed % orbit.duration) / orbit.duration;
            const theta = progress * 2 * Math.PI;
            
            // Posição na elipse sem rotação
            const x = orbit.rx * Math.cos(theta);
            const y = orbit.ry * Math.sin(theta);
            
            // Aplica a rotação da elipse
            const rad = orbit.angle * (Math.PI / 180);
            const rotX = x * Math.cos(rad) - y * Math.sin(rad);
            const rotY = x * Math.sin(rad) + y * Math.cos(rad);
            
            planet.setAttribute("cx", cx + rotX);
            planet.setAttribute("cy", cy + rotY);
            
            // Simula Z-index alterando opacidade e tamanho sutilmente baseado no Y (antes da rotação 2d da tela)
            // Se sin(theta) é positivo, está na "frente"
            const z = Math.sin(theta);
            planet.setAttribute("opacity", z > 0 ? "1" : "0.4");
            const scale = z > 0 ? 1.1 : 0.8;
            // Hack para scale no SVG sem bagunçar cx/cy: a gente altera o r
            planet.setAttribute("r", (index === 4 ? 3 : 4.5) * scale);

            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        svg.appendChild(planet);
    });

    // Create Central Core
    const coreGlow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    coreGlow.setAttribute("cx", cx);
    coreGlow.setAttribute("cy", cy);
    coreGlow.setAttribute("r", "25");
    coreGlow.setAttribute("fill", "url(#coreGlow)");
    svg.appendChild(coreGlow);

    const coreSolid = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    coreSolid.setAttribute("cx", cx);
    coreSolid.setAttribute("cy", cy);
    coreSolid.setAttribute("r", "10");
    coreSolid.setAttribute("fill", "#fbbf24");
    coreSolid.setAttribute("filter", "url(#glow)");
    svg.appendChild(coreSolid);

    // Pulsação suave do núcleo
    let startTime = null;
    const pulse = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const scale = 1 + Math.sin(elapsed / 1000) * 0.1;
        coreGlow.setAttribute("r", 25 * scale);
        requestAnimationFrame(pulse);
    };
    requestAnimationFrame(pulse);

    container.appendChild(svg);
});
