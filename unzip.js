const AdmZip = require('adm-zip');

// اسم ملف الـzip
const zip = new AdmZip('commands.zip');

// استخراج جميع الملفات إلى المجلد الحالي
zip.extractAllTo('./', true);

console.log('تم استخراج الملفات بنجاح');
