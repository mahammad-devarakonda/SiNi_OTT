import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useFullMovie from '../hooks/useFullMovie';
import CryptoJS from 'crypto-js';


const PlayMovie = () => {
    const { movieID } = useParams()
    const [decryptedMovieID, setDecryptedMovieID] = useState(null);

    useEffect(() => {
        try {
            const bytes = CryptoJS.AES.decrypt(decodeURIComponent(movieID), 'secret_key');
            const originalMovieID = bytes.toString(CryptoJS.enc.Utf8);
            setDecryptedMovieID(originalMovieID);
        } catch (error) {
            console.error('Error decrypting movieID:', error);
        }
    }, [movieID]);
    const { Movie } = useFullMovie(decryptedMovieID);
    return (
        <div>
            <div className="w-screen h-screen overflow-hidden">
                <div className="w-screen aspect-video md:-mt-20">
                    <ReactPlayer
                        className="w-full h-full"
                        url={`https://www.youtube.com/watch?v=${Movie}`}
                        playing={true}
                        muted={false}
                        controls={true}
                        width="100%"
                        height="100%"
                        config={{
                            youtube: {
                                playerVars: {
                                    rel: 0, // Disable related videos
                                    modestbranding: 1, // Minimal YouTube branding
                                    autoplay: 1, // Auto-play the video
                                    playsinline: 1, // Play the video inline on mobile (not fullscreen)
                                    vq: 'hd1080', // Prefer high-definition quality
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayMovie;
