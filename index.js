const Api = require('./Api');

//TODO здесь рабочий код, менять не нужно

async function main() {
  try {
    //TODO: реализовать метод loadDataFromFile()
    const data = await Api.loadDataFromFile();
    console.log('Данные из файла:', data);

    const firstName = 'Николай';
    //TODO: реализовать метод createDataDB()
    await Api.createDataDB(data, firstName);
    console.log(
      `Данные были успешно добавлены в базу данных для пользователя ${firstName}.`
    );

    //NOTE этот метод уже реализован
    await Api.getPostDataFromDB();
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

main();
