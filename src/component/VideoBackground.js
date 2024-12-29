import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((state) => state.movies.TrailerVideo?.key)
  useMovieTrailer(movieID);
  return (
    <div className="w-screen">
      <div className="relative w-screen aspect-video md:-mt-20">        
        {trailer ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            playing
            muted
            controls={false}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  rel: 0, // Disable related videos
                  modestbranding: 1, // Minimal YouTube branding
                  autoplay: 1, // Auto-play the video
                  playsinline: 1, // Play inline on mobile
                  vq: 'hd1080', // Prefer high-definition quality
                },
              },
            }}
          />
        ) : (
          // Shimmer effect when trailer is not available
          <div className="absolute top-0 left-0 w-full h-[400px] bg-gray-300 animate-pulse">
            <div className="w-full h-full bg-gray-400"></div>
          </div>
        )}
      </div>
    </div>


  );
};
export default VideoBackground;

