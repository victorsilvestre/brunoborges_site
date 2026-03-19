fetch('https://traderdesucesso.net.br/')
    .then(r => r.text())
    .then(html => {
        const urls = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
        const imgs = urls.filter(u => u.includes('.png') || u.includes('.jpg') || u.includes('.webp') || u.includes('.jpeg') || u.includes('.gif'));
        const yts = urls.filter(u => u.includes('youtube'));

        const bgUrls = [...html.matchAll(/background-image: ?url\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);

        const links = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
        const ytLinks = links.filter(u => u.includes('youtube.com') || u.includes('youtu.be'));

        const result = {
            images: [...new Set([...imgs, ...bgUrls])].filter(i => i.startsWith('http')),
            youtube: [...new Set([...yts, ...ytLinks])]
        };

        require('fs').writeFileSync('assets.json', JSON.stringify(result, null, 2));
        console.log("Done. Check assets.json.");
    }).catch(e => console.error(e));
