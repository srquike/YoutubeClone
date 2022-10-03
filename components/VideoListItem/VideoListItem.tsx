import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import estilos from "./estilos";

type VideoListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image: string;
        }
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;

    return (
        <View style={estilos.tarjetaVideo}>
            {/* imagen miniatura */}
            <View>
                <Image style={estilos.miniatura} source={{ uri: video.thumbnail }}></Image>
                <View style={estilos.contenedorDuracion}>
                    <Text style={estilos.duracion}>{video.duration}</Text>
                </View>
            </View>
            {/* titulo del video */}
            <View style={estilos.filaTitulo}>
                {/* Foto */}
                <Image style={estilos.foto} source={{ uri: video.user.image }}></Image>
                {/* Contenedor medio: titulo, subtitulo, etc. */}
                <View style={estilos.contenedorMedio}>
                    <Text style={estilos.titulo}>{video.title}</Text>
                    <Text style={estilos.subtitulo}>{video.user.name} • {video.views} visitas • {video.createdAt}</Text>
                </View>
                {/* Icono */}
                <Entypo name="dots-three-vertical" size={18} color="black"></Entypo>
            </View>
        </View>
    )
}

export default VideoListItem;