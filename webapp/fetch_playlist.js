fetch('https://www.youtube.com/playlist?list=PL-KmsquED46aFcEZTItikmbgclFd8MDvo')
    .then(r => r.text())
    .then(html => {
        const matches = [...html.matchAll(/"videoId":"([^"]+)"/g)];
        const ids = [...new Set(matches.map(m => m[1]))];
        console.log("VIDEOS:", ids.slice(0, 10));
    }).catch(console.error);
