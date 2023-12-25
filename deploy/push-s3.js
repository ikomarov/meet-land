const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const {BUCKET, CDN_KEY_ACCESS, CDN_SECRET_ACCESS, ENDPOINT} = require('./env.js');

const s3 = new AWS.S3({
  accessKeyId: CDN_KEY_ACCESS,
  secretAccessKey: CDN_SECRET_ACCESS,
  endpoint: ENDPOINT,
  s3ForcePathStyle: true
});

function uploadDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const fileKey = filePath.substring('.next/'.length);

    if (fs.lstatSync(filePath).isDirectory()) {
      uploadDirectory(filePath);
    } else {
      const fileContent = fs.readFileSync(filePath);
      const params = {
        Bucket: BUCKET,
        Key:  'land/_next/' + fileKey,
        Body: fileContent,
        ACL: 'public-read' // Установите нужные вам права доступа
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
uploadDirectory('.next/static');
