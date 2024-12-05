import * as FileSystem from 'expo-file-system';
import ContactList from '../views/ContactList';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from '../redux/features/contactList/contactList-slice';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const createContact = async (contactInfo) => {

    const content = JSON.stringify({
              "id": contactInfo.id,
              "name": contactInfo.name,
              "phoneNumber": contactInfo.phoneNumber,
              "photo": contactInfo.photo,
        });

    const filePath = `${contactDirectory}/${contactInfo.id}.json`

    await FileSystem.writeAsStringAsync(filePath, content)

    const fileContents = await FileSystem.readAsStringAsync(filePath)

};

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) await FileSystem.makeDirectoryAsync(contactDirectory);
};

export const remove = async contactFileName => {
    return FileSystem.deleteAsync(`${contactDirectory}/${contactFileName}`, { idempotent: true });
    
}

export const getAllContacts = async () => {
    await setupDirectory();
    const result = await FileSystem.readDirectoryAsync(contactDirectory);
    const contacts = await Promise.all(
        result.map(async (contactFileName) => {
            const filepath = `${contactDirectory}/${contactFileName}`;
            const fileContents = await FileSystem.readAsStringAsync(filepath);
            return JSON.parse(fileContents);
        })
      );
      return contacts
};

export default createContact;