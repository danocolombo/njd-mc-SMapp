import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import {
    Entypo,
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import LikeImage from '../../assets/images/like.png';

const FeedPost = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <View style={styles.post}>
            {/* Post Header with details about the author */}
            <View style={styles.header}>
                <Image
                    source={{ uri: post.User.image }}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.name}>{post.User.name}</Text>
                    <Text style={styles.subtitle}>{post.createdAt}</Text>
                </View>
                <Entypo
                    name='dots-three-horizontal'
                    size={18}
                    color='gray'
                    style={styles.icon}
                />
            </View>
            <View>
                {post.description && (
                    <Text style={styles.description}>{post.description}</Text>
                )}
                {post.image && (
                    <Image
                        source={{ uri: post.image }}
                        style={styles.image}
                        resizeMode='cover'
                    />
                )}
            </View>
            <View style={styles.footer}>
                {/* Stats row */}
                <View style={styles.statsRow}>
                    <Image source={LikeImage} style={styles.likeIcon} />
                    <Text style={styles.likedBy}>
                        Elon Musk and {post.numberOfLikes} others
                    </Text>
                    <Text style={styles.shares}>
                        {post.numberOfShares} shares
                    </Text>
                </View>
                <View style={styles.buttonsRow}>
                    {/* Like button */}
                    <Pressable
                        onPress={() => setIsLiked(!isLiked)} //<- onPress event toggles isLiked
                        style={styles.iconButton}
                    >
                        <AntDesign
                            name='like2'
                            size={18}
                            color={isLiked ? 'royalblue' : 'gray'}
                        />
                        <Text
                            style={[
                                styles.iconButtonText,
                                { color: isLiked ? 'royalblue' : 'gray' },
                            ]}
                        >
                            Like
                        </Text>
                    </Pressable>

                    {/* Comment button */}
                    <View style={styles.iconButton}>
                        <FontAwesome5
                            name='comment-alt'
                            size={16}
                            color='gray'
                        />
                        <Text style={styles.iconButtonText}>Comment</Text>
                    </View>

                    {/* Share button */}
                    <View style={styles.iconButton}>
                        <MaterialCommunityIcons
                            name='share-outline'
                            size={18}
                            color='gray'
                        />
                        <Text style={styles.iconButtonText}>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default FeedPost;

const styles = StyleSheet.create({
    post: {
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: '500',
    },
    subtitle: {
        color: 'gray',
    },
    icon: {
        marginLeft: 'auto',
    },
    description: {
        lineHeight: 20,
        paddingHorizontal: 10,
        letterSpacing: 0.3,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        marginTop: 10,
    },
    // Footer
    footer: {
        paddingHorizontal: 10,
    },

    // Stats Row
    statsRow: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
        borderColor: 'lightgray',
    },
    likeIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    likedBy: {
        color: 'gray',
    },
    shares: {
        color: 'gray',
        marginLeft: 'auto',
    },
    buttonsRow: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButtonText: {
        color: 'gray',
        marginLeft: 5,
        fontWeight: '500',
    },
});
