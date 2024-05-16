const API_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre backend

export async function fetchArtworks() {
    const response = await fetch(`${API_URL}/artworks`);
    if (!response.ok) {
        throw new Error('Error fetching artworks');
    }
    return response.json();
}

export async function addArtwork(artwork) {
    const response = await fetch(`${API_URL}/artworks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
    });
    if (!response.ok) {
        throw new Error('Error adding artwork');
    }
    return response.json();
}
