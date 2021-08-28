import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
import channelImages from './ImageArray';
function RecommendedVideos() {
    console.log("channel_Images",channelImages);
    return (
        <div className="recommendedVideos">
            <h2>
                Recommended plots
            </h2>
            <div className="recommendedVideos__videos">
                {
                    channelImages.map(
                        item =>
                        <VideoCard title={item.title}
                        views={item.views}
                        timestamp={item.timestamp}
                        channelImage={item.channelImage}
                        image={item.image}
                    channel={item.channel}>
                            
                        </VideoCard>)
                }
            </div>
        </div>
    )
}
export default RecommendedVideos;
