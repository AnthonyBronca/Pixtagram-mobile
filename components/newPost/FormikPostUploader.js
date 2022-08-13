import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider, Input } from 'react-native-elements';
import validUrl from 'valid-url'
import * as ImagePicker from 'expo-image-picker';
import { firebase, db } from '../../firebase'
/*
Npm install Formik
Npm install Yup

Yup allows us to build a validation schema
Formik allows us to use a pre-styled form component

*/

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A image is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({ navigation }) => {

    const [thumbnailUrl, setThumbnailUrl] = useState();
    const [image, setImage] = useState(null);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

    const getUsername = () => {
        const user = firebase.auth().currentUser;
        const unsubscribe = db.collection('users').where('owner_uid', '==', user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profile_picture,

                })
            })
        )
        return unsubscribe;
    }

    useEffect(() => {
        getUsername()
    }, []);

    const uploadPostToFirebase = (imageUrl, caption) => {
        const unsubscribe = db.collection('users').doc(firebase.auth().currentUser.email).collection('posts')
            .add({
                imageUrl: imageUrl,
                user: currentLoggedInUser.username,
                profile_picture: currentLoggedInUser.profilePicture,
                owner_uid: firebase.auth().currentUser.uid,
                caption: caption,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                likes: 0,
                likes_by_users: [],
                comments: [],
            })
            .then(() => navigation.goBack())
        return unsubscribe

    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleSubmit = (values, imageUrl) => {
        uploadPostToFirebase(values, imageUrl, values.caption)
        navigation.goBack()
    }

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log(values)
                console.log('your post was submitted')
                handleSubmit(values, imageUrl)
                navigation.goBack()

            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                // handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image style={{ width: 100, height: 100 }} source={image ? { uri: image ? image : 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-0.jpg' } : require('../../assets/media.png')} />
                        <View style={{ flex: 1, marginLeft: 12 }}>

                            <TextInput
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                style={{ color: 'white', fontSize: 20 }}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider orientation='vertical' width={0.2} />
                    {/* <TextInput
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        values={values.imageUrl}
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                    /> */}

                    <Button title="Add Media" onPress={pickImage} />

                    {/* {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>{errors.imageUrl}</Text>
                    )} */}

                    <Button onPress={handleSubmit} title='Share' disabled={!image} values={values.imageUrl} />

                </>
            )}
        </Formik>
    );
}

export default FormikPostUploader;
