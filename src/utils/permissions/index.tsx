import { Platform, PermissionsAndroid } from 'react-native';

async function requestPermission(perm) {
  try {
    return (
      (await PermissionsAndroid.request(perm)) ===
      PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (err) {
    console.log(err);
  }
  return false;
}

export async function requestWriteExternalStorage() {
  const hasPermission =
    Platform.OS == 'ios'
      ? true
      : await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
  return hasPermission
    ? true
    : await requestPermission(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
}

export async function requestReadExternalStorage() {
  const hasPermission =
    Platform.OS == 'ios'
      ? true
      : await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
  return hasPermission
    ? true
    : await requestPermission(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
}

export async function requestRecordAudio() {
  const hasPermission =
    Platform.OS == 'ios'
      ? true
      : await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
  return hasPermission
    ? true
    : await requestPermission(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
}

export async function requestCamera() {
  const hasPermission =
    Platform.OS == 'ios'
      ? true
      : await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
  return hasPermission
    ? true
    : await requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
}
