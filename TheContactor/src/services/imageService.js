import * as ImagePicker from 'expo-image-picker';

const CAMERA_ROLL = "CAMERA_ROLL";
const CAMERA = "CAMERA";

const getPermission = async permissionTypes => {
    if (permissionTypes.indexOf(CAMERA) >= 0) {
        await ImagePicker.requestCameraPermissionsAsync();
    }
    if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
};
export const selectFromCameraRoll = async () => {

};
export const takePhoto = async () => {
    await getPermission([CAMERA, CAMERA_ROLL]);
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: .8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.canceled) {
        return ''; }
    
    return result.assets[0].uri;
};