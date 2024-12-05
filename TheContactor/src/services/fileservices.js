import * as FileSystem from 'expo-file-system';


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
    const name = contactFileName+'.json'
    
    return FileSystem.deleteAsync(`${contactDirectory}/${name}`, { idempotent: true });
    
    
};

export const getContact = async id => {
 
    const filepath = `${contactDirectory}/${id}.json`;
    
    const fileContent = await FileSystem.readAsStringAsync(filepath);
    
    const result = (JSON.parse(fileContent));
    
    return result
}   
export const getAllContacts = async () => {
    await setupDirectory();
    const result = await FileSystem.readDirectoryAsync(contactDirectory);
    const contacts = await Promise.all(
        result.map(async (contactFileName) => {
            const filepath = `${contactDirectory}/${contactFileName}`;
            const fileContents = await FileSystem.readAsStringAsync(filepath);
            if (fileContents !== undefined) {
                return JSON.parse(fileContents)};
        })
      );
      return contacts
};

export default createContact;
