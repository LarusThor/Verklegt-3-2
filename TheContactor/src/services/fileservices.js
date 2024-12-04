import * as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const createContact = async (contactInfo) => {
    const content = JSON.stringify({
          'contact': { 
              "id": contactInfo.id,
              "name": contactInfo.name,
              "phoneNumber": contactInfo.phoneNumber,
              "photo": contactInfo.photo
            }
        });

    const filePath = `${contactDirectory}/${contactInfo.id}.json`

    await FileSystem.writeAsStringAsync(filePath, content)
    console.log(`JSON file created at: ${filePath}`);
    const fileContents = await FileSystem.readAsStringAsync(filePath)
    console.log(`New contact: ${fileContents}`)

};

export default createContact;