import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import heart from '../../assets/heart.png'
import Stories from './Stories';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/ios/344/like--v1.png',
        likedImageUrl: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik04NiwxNjIuNzE0NjlsLTIuMjAzNzUsLTEuODI3NWMtNC4xNzkwNiwtMy40OTM3NSAtOS44MzYyNSwtNy4yODMxMiAtMTYuMzkzNzUsLTExLjY2Mzc1Yy0yNS41NDQ2OSwtMTcuMTA1OTQgLTYwLjUyMjUsLTQwLjUxNDA2IC02MC41MjI1LC04MC40MjM0NGMwLC0yNC42NTc4MSAyMC4wNjIxOSwtNDQuNzIgNDQuNzIsLTQ0LjcyYzEzLjM5NzE5LDAgMjUuOTQ3ODEsNS45NjYyNSAzNC40LDE2LjE2NTMxYzguNDUyMTksLTEwLjE5OTA2IDIxLjAwMjgxLC0xNi4xNjUzMSAzNC40LC0xNi4xNjUzMWMyNC42NTc4MSwwIDQ0LjcyLDIwLjA2MjE5IDQ0LjcyLDQ0LjcyYzAsMzkuOTA5MzggLTM0Ljk3NzgxLDYzLjMxNzUgLTYwLjUyMjUsODAuNDIzNDRjLTYuNTU3NSw0LjM4MDYzIC0xMi4yMTQ2OSw4LjE3IC0xNi4zOTM3NSwxMS42NjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/ios/344/speech-bubble--v1.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/344/external-send-arrows-pack-tanah-basah-basic-outline-tanah-basah-2.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png',
    },
]



const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            {/* <Stories /> */}
            {/* <Divider width={1} orientation='vertical' /> */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profilePicture }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>
        <View>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
        </View>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View >
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={styles.leftFootContainer}>
            <Heart imgStyle={[styles.footerIcon, styles.shareIcon]} />
            <Comment imgStyle={[styles.footerIcon, styles.shareIcon]} />
            <Share imgStyle={[styles.footerIcon, styles.shareIcon]} />
        </View>
        <View>
            <Save imgStyle={styles.footerIcon} />
        </View>
    </View>
)


const Heart = ({ imgStyle }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={require('../../assets/heart.png')} />
    </TouchableOpacity>
)

const Comment = ({ imgStyle }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={require('../../assets/comment.png')} />
    </TouchableOpacity>
)

const Share = ({ imgStyle }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={require('../../assets/share.png')} />
    </TouchableOpacity>
)

const Save = ({ imgStyle }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={require('../../assets/save.png')} />
    </TouchableOpacity>
)


const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'white', fontWeight: '600', marginRight: 5 }}>{post.user}</Text>
        <Text style={{ color: 'white' }}>{post.caption}</Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all ' : ' '}{post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>

)

// Cases for comments:

/*
There can be zero comments -> For this case we will use a double negation due to 0 returning 'false'
There can be 1 comment
There can be many comments

*/

const Comments = ({ post }) => (

    <View>
        <View style={{ color: 'white' }}>
            {post.comments.length > 2 ?
                <Text style={{ fontWeight: '600', color: 'white' }}>
                    {post.comments[post.comments.length - 1].user}
                    <Text style={{ fontWeight: 'normal', color: 'white' }}> {post.comments[post.comments.length - 1].comment}</Text>
                </Text>
                : <View>
                    {post.comments.map((com, idx) => (
                        <View key={idx} style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontWeight: '600' }}>{com.user} </Text>
                            <Text style={{ color: 'white' }}>{com.comment}</Text>
                        </View>
                    ))}
                </View>
            }
        </View>
    </View>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    leftFootContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    },
})

export default Post;
