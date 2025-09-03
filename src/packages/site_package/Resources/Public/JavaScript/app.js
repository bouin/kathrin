console.log('Say Hello to the dev: dhackiewicz@gmail.com');

document.addEventListener('DOMContentLoaded', function() {
    (function () {
        const originalTitle = document.title;

        // Wo deine Frames liegen – prüfe Pfade & Groß-/Kleinschreibung!
        const hiddenFrames = [
            '/fileadmin/Favicon/alert-1.png',
            '/fileadmin/Favicon/alert-2.png'
        ];

        // Default-Icon (falls keins gefunden wird)
        const defaultIcon =
            (document.querySelector('link[rel="icon"]') || {}).href
            || '/fileadmin/Favicon/alert-1.png';

        let animTimer = null;
        let frameIndex = 0;

        // Alle bestehenden Favicon-Links entfernen
        function purgeFavicons() {
            document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach(el => el.remove());
        }

        // Neues Icon-Linkelement einfügen (ersetzt Element statt nur href)
        function setFavicon(src) {
            return new Promise((resolve, reject) => {
                // Optional: absolute URL erzwingen (hilft bei <base>)
                const url = new URL(src, window.location.origin);
                // Cache-Bust
                url.searchParams.set('v', Date.now());

                // Preload zum Fehler-Check (einige Browser fordern Icon nicht als <img> an,
                // aber das reicht, um 404 zu erkennen)
                const img = new Image();
                img.onload = () => {
                    purgeFavicons();
                    const link1 = document.createElement('link');
                    link1.rel = 'icon';
                    link1.type = 'image/png';
                    link1.href = url.toString();

                    const link2 = document.createElement('link');
                    link2.rel = 'shortcut icon'; // für alte Browser/Windows
                    link2.type = 'image/png';
                    link2.href = url.toString();

                    document.head.appendChild(link1);
                    document.head.appendChild(link2);
                    resolve();
                };
                img.onerror = () => {
                    console.warn('Favicon konnte nicht geladen werden:', url.toString());
                    reject();
                };
                img.src = url.toString();
            });
        }

        async function startAnimation() {
            if (animTimer) return;
            document.title = '👋Komm zurück!';
            try {
                await setFavicon(hiddenFrames[frameIndex % hiddenFrames.length]);
            } catch (e) {/* ignore */}
            animTimer = setInterval(async () => {
                frameIndex++;
                try {
                    await setFavicon(hiddenFrames[frameIndex % hiddenFrames.length]);
                } catch (e) {/* ignore */}
            }, 600);
        }

        function stopAnimation() {
            if (animTimer) {
                clearInterval(animTimer);
                animTimer = null;
            }
            document.title = originalTitle;
            setFavicon(defaultIcon).catch(()=>{});
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) startAnimation(); else stopAnimation();
        });
        // Fallbacks
        window.addEventListener('blur', () => { if (document.hidden) startAnimation(); });
        window.addEventListener('focus', stopAnimation);
    })();
});

