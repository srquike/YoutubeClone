import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VideoListItem from "../components/VideoListItem";

const ObtenerListaVideos =   (urlVideo: string) => {
    
    fetch(urlVideo)
    .then(respuesta => respuesta.json())
    .then(datos => {
        var videos = [];
        return videos = datos.items;
    })
}

const HomeScreen = () => {
    const urlVideo = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=player&part=contentDetails&part=statistics&chart=mostPopular&maxResults=10&fields=items(id%2CcontentDetails(duration)%2Cstatistics(viewCount)%2C%20player(embedHtml)%2C%20snippet(channelId%2C%20publishedAt%2C%20title%2C%20thumbnails(default(url))))&prettyPrint=true&key=AIzaSyB8wlldWHGv8A6mG1FBjFbr51U37NHWGj4';

    const videos = ObtenerListaVideos(urlVideo);

    return (
        <View>
            {/* Cargar lista de videos */}
            <FlatList data={videos} renderItem={({ item }) => <VideoListItem video={item} />}></FlatList>
        </View>
    )
}

export default HomeScreen;