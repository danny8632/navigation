import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions,  Button } from 'react-native';

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
                <Image style={{ width: imageWidth, height: imageHeight, resizeMode: 'cover' }} source={{uri: post.image}}></Image>
            </View>
            <View style={styles.post_text}>
                <Text style={{fontWeight : "bold"}}>{post.title}</Text>
            </View>
        </View>
    );
}

export default Post;

const styles = StyleSheet.create({
    post : {
        marginBottom: 0
    },
    post_title: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        paddingLeft: 16,
        paddingTop: 4,
        paddingBottom : 4
    },
    username: {
        paddingLeft: 16, 
        fontWeight: "bold", 
        fontSize: 16
    },
    post_text : {
        width: "100%",
        padding: 4,
        paddingLeft : 10,
        paddingRight : 10
    }
});
