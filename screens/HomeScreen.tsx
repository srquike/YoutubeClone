import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VideoListItem from "../components/VideoListItem";

import videos from '../assets/data/videos.json';

const HomeScreen = () => {
    return (
        <View>
            {/* Cargar lista de videos */}
            <FlatList data={videos} renderItem={({ item }) => <VideoListItem video={item} />}></FlatList>
        </View>
    )
}

const estilos = StyleSheet.create({
})

export default HomeScreen;