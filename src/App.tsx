import React, { useState } from 'react';

// ... your other imports
import { PlaylistData, MockPlaylists, MoodType } from './types/playlist';
// Mock data to simulate what we'd get from APIs
const mockPlaylists: MockPlaylists = {
  happy: [
    {
      id: 1,
      name: "Happy Vibes",
      description: "Upbeat songs to brighten your day",
      image: "https://via.placeholder.com/300x300/FFD700/000000?text=Happy",
      tracks: [
        { name: "Can't Stop the Feeling", artist: "Justin Timberlake", duration: "3:56" },
        { name: "Walking on Sunshine", artist: "Katrina and the Waves", duration: "3:58" },
        { name: "Good as Hell", artist: "Lizzo", duration: "2:39" },
        { name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", duration: "4:30" }
      ]
    }
  ],
  sad: [
    {
      id: 2,
      name: "Melancholy Moments",
      description: "Songs for when you need to feel your feelings",
      image: "https://via.placeholder.com/300x300/4169E1/FFFFFF?text=Sad",
      tracks: [
        { name: "Someone Like You", artist: "Adele", duration: "4:45" },
        { name: "Mad World", artist: "Gary Jules", duration: "3:07" },
        { name: "The Night We Met", artist: "Lord Huron", duration: "3:28" },
        { name: "Skinny Love", artist: "Bon Iver", duration: "3:58" }
      ]
    }
  ],
  energetic: [
    {
      id: 3,
      name: "Energy Boost",
      description: "High-energy tracks to get you moving",
      image: "https://via.placeholder.com/300x300/FF4500/FFFFFF?text=Energy",
      tracks: [
        { name: "Thunder", artist: "Imagine Dragons", duration: "3:07" },
        { name: "Pump It", artist: "Black Eyed Peas", duration: "3:33" },
        { name: "Eye of the Tiger", artist: "Survivor", duration: "4:05" },
        { name: "Stronger", artist: "Kanye West", duration: "5:11" }
      ]
    }
  ],
  chill: [
    {
      id: 4,
      name: "Chill Zone",
      description: "Relaxing tunes for unwinding",
      image: "https://via.placeholder.com/300x300/9370DB/FFFFFF?text=Chill",
      tracks: [
        { name: "Weightless", artist: "Marconi Union", duration: "8:08" },
        { name: "River", artist: "Leon Bridges", duration: "4:02" },
        { name: "Holocene", artist: "Bon Iver", duration: "5:36" },
        { name: "Pink Moon", artist: "Nick Drake", duration: "2:04" }
      ]
    }
  ]
};

function App() {
  // State variables - these store data that can change
  const [moodInput, setMoodInput] = useState(''); // What user types
  const [isGenerating, setIsGenerating] = useState(false); // Loading state
  const [generatedPlaylist, setGeneratedPlaylist] = useState<PlaylistData | null>(null);
  const [showPlaylist, setShowPlaylist] = useState(false); // Whether to show results

  // Function to simulate AI processing and generate playlist
  const generatePlaylist = async () => {
    if (!moodInput.trim()) return; // Don't do anything if input is empty
    
    setIsGenerating(true); // Show loading
    setShowPlaylist(false); // Hide previous results
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple mood detection (in real app, this would be AI)
    const input = moodInput.toLowerCase();
    
    if (input.includes('sad') || input.includes('depressed') || input.includes('down')) {
    } else if (input.includes('energetic') || input.includes('workout') || input.includes('pump')) {
    } else if (input.includes('chill') || input.includes('relax') || input.includes('calm')) {
    } else if (input.includes('happy') || input.includes('joy') || input.includes('upbeat')) {
    }
    
    // Set the playlist based on detected mood
    const handleMoodDetection = (mood: MoodType) => {
  if (mood in mockPlaylists) {
    setGeneratedPlaylist(mockPlaylists[mood][0]);
    setIsGenerating(false);
    setShowPlaylist(true);
  } else {
    setGeneratedPlaylist(mockPlaylists.happy[0]);
    setIsGenerating(false);
    setShowPlaylist(true);
  }
};
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <div className="header-content">
          <h1>🎵 AI Playlist Generator</h1>
          <p>Describe your mood and let AI create the perfect playlist for you</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-container">
            <textarea
              value={moodInput}
              onChange={(e) => setMoodInput(e.target.value)}
              placeholder="Describe your mood... (e.g., 'I'm feeling happy and want upbeat songs' or 'Need something chill for studying')"
              className="mood-input"
              rows={4}
            />
            <button 
              onClick={generatePlaylist}
              disabled={isGenerating || !moodInput.trim()}
              className="generate-btn"
            >
              {isGenerating ? (
                <>
                  <span className="loading-spinner"></span>
                  AI is thinking...
                </>
              ) : (
                'Generate Playlist 🎯'
              )}
            </button>
          </div>
        </div>

        {/* Loading Section */}
        {isGenerating && (
          <div className="loading-section">
            <div className="ai-process">
              <h3>🤖 AI Processing Your Mood...</h3>
              <div className="process-steps">
                <div className="step">Analyzing your input...</div>
                <div className="step">Understanding your vibe...</div>
                <div className="step">Curating perfect tracks...</div>
              </div>
            </div>
          </div>
        )}

        {/* Playlist Results */}
        {showPlaylist && generatedPlaylist && (
          <div className="playlist-section">
            <div className="playlist-header">
              <img 
                src={generatedPlaylist.image} 
                alt={generatedPlaylist.name}
                className="playlist-image"
              />
              <div className="playlist-info">
                <h2>{generatedPlaylist.name}</h2>
                <p>{generatedPlaylist.description}</p>
                <div className="playlist-stats">
                  <span>{generatedPlaylist.tracks.length} tracks</span>
                  <span>Generated by AI</span>
                </div>
              </div>
            </div>

            <div className="tracks-list">
              <h3>Tracks</h3>
              {generatedPlaylist.tracks.map((track, index) => (
                <div key={index} className="track-item">
                  <div className="track-number">{index + 1}</div>
                  <div className="track-info">
                    <div className="track-name">{track.name}</div>
                    <div className="track-artist">{track.artist}</div>
                  </div>
                  <div className="track-duration">{track.duration}</div>
                  <button className="play-btn">▶️</button>
                </div>
              ))}
            </div>

            <div className="playlist-actions">
              <button className="spotify-btn">Open in Spotify</button>
              <button className="share-btn">Share Playlist</button>
            </div>
          </div>
        )}

        {/* How it works section */}
        <div className="how-it-works">
          <h3>How It Works</h3>
          <div className="steps">
            <div className="step-item">
              <div className="step-icon">1️⃣</div>
              <h4>Describe Your Mood</h4>
              <p>Tell us how you're feeling in natural language</p>
            </div>
            <div className="step-item">
              <div className="step-icon">2️⃣</div>
              <h4>AI Analysis</h4>
              <p>Our AI understands your mood and preferences</p>
            </div>
            <div className="step-item">
              <div className="step-icon">3️⃣</div>
              <h4>Perfect Playlist</h4>
              <p>Get a curated playlist that matches your vibe</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Built with ❤️ using React and AI • MIC Dev Recruitment Project</p>
      </footer>
    </div>
  );
}

export default App;