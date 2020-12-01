import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';


const Post = ({ post }) => {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 10);
    const imageWidth = dimensions.width;

    return (
        <View style={styles.post}>
            <View style={styles.post_title}>
                <Image source={require('./../assets/favicon.png')}></Image>
                <Text style={styles.username}>{post.username}</Text>
            </View>
            <View>
                <Image style={{ width: imageWidth, height: imageHeight, resizeMode: 'cover' }} source={require('./../assets/icon.png')}></Image>
            </View>
            <View style={styles.post_text}>
                <Text>{post.title}</Text>
            </View>
        </View>
    );
}




export default Post;

const styles = StyleSheet.create({
    post : {
        marginBottom: 6
    },
    post_title: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        backgroundColor: "#999",
        paddingLeft: 16
    },
    username: {
        paddingLeft: 16, 
        fontWeight: "bold", 
        fontSize: 16
    },
    post_text : {
        width: "100%",
        backgroundColor: "#999"
    }
});
