import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"You tube frontend",
    image:"photo.png",
    thumbImage:"logo.jpg",
    author:"Paras Jaitly",
    views:"34Mn",
    timestamp:"2 days ago",
},{
    title:"You tube frontend 2",
    image:"photo.png",
    thumbImage:"logo.jpg",
    author:"Paras Jaitly",
    views:"34Mn",
    timestamp:"2 days ago",
},{
    title:"You tube frontend 3",
    image:"photo.png",
    thumbImage:"logo.jpg",
    author:"Paras Jaitly",
    views:"34Mn",
    timestamp:"2 days ago",
},{
    title:"You tube frontend 4",
    image:"photo.png",
    thumbImage:"logo.jpg",
    author:"Paras Jaitly",
    views:"34Mn",
    timestamp:"2 days ago",
}]

export const VideoGrid = () => {
    return(
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard 
                    title={video.title}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp} />
            </div>)}
        </div>
    )
}