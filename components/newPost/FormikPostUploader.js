import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url'
/*
Npm install Formik
Npm install Yup

Yup allows us to build a validation schema
Formik allows us to use a pre-styled form component

*/

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({ navigation }) => {

    const [thumbnailUrl, setThumbnailUrl] = useState();

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log(values)
                console.log('your post was submitted')
                navigation.goBack()

            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image style={{ width: 100, height: 100 }} source={thumbnailUrl ? { uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-0.jpg' } : require('../../assets/media.png')} />
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
                    <TextInput
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        values={values.imageUrl}
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.imageUrl}</Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />

                </>
            )}
        </Formik>
    );
}

export default FormikPostUploader;
