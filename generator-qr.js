const qr = require('qrcode');
const fs = require('fs');

const url = 'http://localhost:3000/merak/qr-1';
const qrCodeFilePath = 'img/qrcode'+1+'.png';

qr.toFile(qrCodeFilePath, url, {
  color: {
    dark: '#000',   
    light: '#fff'   
  }
}, (err) => {
  if (err) {
    console.error('Error al generar el código QR:', err);
  } else {
    console.log('Código QR generado con éxito');
  }
});
