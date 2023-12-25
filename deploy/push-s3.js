const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types'); // Импортируем библиотеку для определения MIME типов

const { BUCKET, CDN_KEY_ACCESS, CDN_SECRET_ACCESS, ENDPOINT } = require('./env.js');

const s3 = new AWS.S3({
  accessKeyId: CDN_KEY_ACCESS,
  secretAccessKey: CDN_SECRET_ACCESS,
  endpoint: ENDPOINT,
  s3ForcePathStyle: true
});

function uploadDirectory(directory, cdnPath, pathOld = '') {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const fileKey = filePath.substring(pathOld.length);

    if (fs.lstatSync(filePath).isDirectory()) {
      // Передаем параметры cdnPath и pathOld при рекурсивном вызове
      uploadDirectory(filePath, cdnPath, pathOld);
    } else {
      const fileContent = fs.readFileSync(filePath);
      const params = {
        Bucket: BUCKET,
        Key:  cdnPath + fileKey,
        Body: fileContent,
        ACL: 'public-read', // Установите нужные вам права доступа
        ContentType: mime.lookup(filePath) || 'application/octet-stream' // Устанавливаем MIME тип
      };

      s3.upload(params, function(err, data) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
      });
    }
  });
}

// Запуск загрузки для директории статики
uploadDirectory('.next/static', 'land/_next/', '.next/');
uploadDirectory('public', 'land/');
