import *  as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const createContact = async (contactInfo) => {
    // const dirInfo = await FileSystem.getInfoAsync(contactDirectory);
    
    // if (!dirInfo.exists) {
    //     await FileSystem.makeDirectoryAsync(contactDirectory, { intermediates: true });
    //   }

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
}







await createContact();

    const filePath = `${contactDirectory}/emptyfile.json`
    console.log('meow')
    const fileContents = await FileSystem.readAsStringAsync(filePath);
    console.log("File Contents:", fileContents);

console.log(contactDirectory.readDirectoryAsync())