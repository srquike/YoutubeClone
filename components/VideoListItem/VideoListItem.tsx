import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import estilos from "./estilos";

type VideoListItemProps = {
    video: {
        id: string;
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            thumbnails: {
                default: {
                    url: string;
                }
            }
        };
        player: {
            embedHtml: string;
        };
        contentDetails: {
            duration: string;
        };
        statistics: {
            viewCount: string;
        };
    }
};

type CanalProps = {
    canal: {
        snippet: {
            title: string;
            thumbnails: {
                default: {
                    url: string;
                }
            }
        }
    }
};

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;

    return (
        <View style={estilos.tarjetaVideo}>
            {/* imagen miniatura */}
            <View>
                <Image style={estilos.miniatura} source={{ uri: video.snippet.thumbnails.default.url }}></Image>
                <View style={estilos.contenedorDuracion}>
                    <Text style={estilos.duracion}>{video.contentDetails.duration}</Text>
                </View>
            </View>
            {/* titulo del video */}
            <View style={estilos.filaTitulo}>
                {/* Foto */}
                <Image style={estilos.foto} source={{}}></Image>
                {/* Contenedor medio: titulo, subtitulo, etc. */}
                <View style={estilos.contenedorMedio}>
                    <Text style={estilos.titulo}>{video.snippet.title}</Text>
                    <Text style={estilos.subtitulo}>{`• ${video.statistics.viewCount} visitas • ${video.snippet.publishedAt}`}</Text>
                </View>
                {/* Icono */}
                <Entypo name="dots-three-vertical" size={18} color="black"></Entypo>
            </View>
        </View>
    )
}

export default VideoListItem;