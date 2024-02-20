document.addEventListener('DOMContentLoaded', function() {
    // Tableau des emojis de tulipes
    const tulipEmojis = ['&#x1F337;',   'UwU', '&#x1F337;', '&#x1F337;', 'Kawaii :3'];

    // Fonction pour créer les emojis de graines une seule fois
    function createSeeds() {
        const background = document.querySelector('.background');
        for (let i = 0; i < 100; i++) { // Modifier le nombre d'emojis selon tes besoins
            const seed = document.createElement('div');
            seed.classList.add('seed');
            seed.innerHTML = '&#x1F331;'; // Emoji de graine
            seed.style.left = `${Math.random() * 100}%`;
            seed.style.top = `${Math.random() * 100}%`;
            background.appendChild(seed);
        }
    }

    // Fonction pour afficher le texte initial
    function showInitialText() {
        document.getElementById('additional-text').style.display = 'block';
        document.getElementById('additional-text').textContent = 'Click pour arroser les graines !';
    }

    // Fonction pour changer le texte lorsque la page est cliquée
    function handleClick() {
        const additionalText = document.getElementById('additional-text');
        additionalText.textContent = 'OMG, skibidi toilette, tellement extraaaaaa! UwU :3';
        // Changer les emojis de graines pour des emojis de tulipes
        document.querySelectorAll('.seed').forEach(seed => {
            const randomIndex = Math.floor(Math.random() * tulipEmojis.length);
            seed.innerHTML = tulipEmojis[randomIndex];
        });
    }

    // Afficher le texte initial au chargement de la page
    showInitialText();

    // Ajouter un écouteur d'événement pour le clic sur la page
    document.body.addEventListener('click', handleClick);

    // Crée les emojis de graines une seule fois au chargement de la page
    createSeeds();
});
