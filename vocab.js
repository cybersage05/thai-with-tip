const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjRkZEMTY2Jy8+PC9zdmc+';
const vocabulary = [
  {
    thai: 'สวัสดี',
    roman: 'sawatdee',
    english: 'Hello',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjRkZEMTY2Jy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGRvbWluYW50LWJhc2VsaW5lPSdtaWRkbGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtc2l6ZT0nNDgnIGZpbGw9J2JsYWNrJz5IaTwvdGV4dD48L3N2Zz4='
  },
  {
    thai: 'ขอบคุณ',
    roman: 'khob khun',
    english: 'Thank you',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMDZENkEwJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGRvbWluYW50LWJhc2VsaW5lPSdtaWRkbGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtc2l6ZT0nNDAnIGZpbGw9J2JsYWNrJz5UaGFua3M8L3RleHQ+PC9zdmc+'
  },
  {
    thai: 'ใช่',
    roman: 'chai',
    english: 'Yes',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMTE4QUIyJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGRvbWluYW50LWJhc2VsaW5lPSdtaWRkbGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtc2l6ZT0nNDgnIGZpbGw9J3doaXRlJz5ZZXM8L3RleHQ+PC9zdmc+'
  },
  {
    thai: 'ไม่ใช่',
    roman: 'mai chai',
    english: 'No',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjRUY0NzZGJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGRvbWluYW50LWJhc2VsaW5lPSdtaWRkbGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnIGZvbnQtc2l6ZT0nNDgnIGZpbGw9J3doaXRlJz5ObzwvdGV4dD48L3N2Zz4='
  },
  {
    thai: 'กรุณา',
    roman: 'karuna',
    english: 'Please',
    image: placeholderImage
  },
  {
    thai: 'ขอโทษ',
    roman: 'kho thot',
    english: 'Sorry',
    image: placeholderImage
  },
  {
    thai: 'ขอโทษ',
    roman: 'kho thot',
    english: 'Excuse me',
    image: placeholderImage
  },
  {
    thai: 'ที่ไหน?',
    roman: 'tee nai?',
    english: 'Where?',
    image: placeholderImage
  },
  {
    thai: 'เมื่อไหร่?',
    roman: 'meua rai?',
    english: 'When?',
    image: placeholderImage
  },
  {
    thai: 'ใคร?',
    roman: 'krai?',
    english: 'Who?',
    image: placeholderImage
  },
  {
    thai: 'อะไร?',
    roman: 'arai?',
    english: 'What?',
    image: placeholderImage
  },
  {
    thai: 'ทำไม?',
    roman: 'tammai?',
    english: 'Why?',
    image: placeholderImage
  },
  {
    thai: 'ยังไง?',
    roman: 'yang ngai?',
    english: 'How?',
    image: placeholderImage
  },
  {
    thai: 'สวัสดีตอนเช้า',
    roman: 'sawatdee ton chao',
    english: 'Good morning',
    image: placeholderImage
  },
  {
    thai: 'ราตรีสวัสดิ์',
    roman: 'ratri sawat',
    english: 'Good night',
    image: placeholderImage
  },
  {
    thai: 'ลาก่อน',
    roman: 'laa gon',
    english: 'Goodbye',
    image: placeholderImage
  },
  {
    thai: 'เจอกัน',
    roman: 'jer gan',
    english: 'See you',
    image: placeholderImage
  },
  {
    thai: 'ผม',
    roman: 'phom',
    english: 'I',
    image: placeholderImage
  },
  {
    thai: 'คุณ',
    roman: 'khun',
    english: 'You',
    image: placeholderImage
  },
  {
    thai: 'เขา',
    roman: 'khao',
    english: 'He',
    image: placeholderImage
  },
  {
    thai: 'เธอ',
    roman: 'ter',
    english: 'She',
    image: placeholderImage
  },
  {
    thai: 'พวกเขา',
    roman: 'phuak khao',
    english: 'They',
    image: placeholderImage
  },
  {
    thai: 'เรา',
    roman: 'rao',
    english: 'We',
    image: placeholderImage
  },
  {
    thai: 'เพื่อน',
    roman: 'phuean',
    english: 'Friend',
    image: placeholderImage
  },
  {
    thai: 'ครอบครัว',
    roman: 'krob krua',
    english: 'Family',
    image: placeholderImage
  },
  {
    thai: 'พ่อ',
    roman: 'phaw',
    english: 'Father',
    image: placeholderImage
  },
  {
    thai: 'แม่',
    roman: 'mae',
    english: 'Mother',
    image: placeholderImage
  },
  {
    thai: 'พี่ชาย',
    roman: 'phi chai',
    english: 'Brother',
    image: placeholderImage
  },
  {
    thai: 'พี่สาว',
    roman: 'phi sao',
    english: 'Sister',
    image: placeholderImage
  },
  {
    thai: 'สามี',
    roman: 'sami',
    english: 'Husband',
    image: placeholderImage
  },
  {
    thai: 'ภรรยา',
    roman: 'panraya',
    english: 'Wife',
    image: placeholderImage
  },
  {
    thai: 'ลูกชาย',
    roman: 'luk chai',
    english: 'Son',
    image: placeholderImage
  },
  {
    thai: 'ลูกสาว',
    roman: 'luk sao',
    english: 'Daughter',
    image: placeholderImage
  },
  {
    thai: 'หมา',
    roman: 'maa',
    english: 'Dog',
    image: placeholderImage
  },
  {
    thai: 'แมว',
    roman: 'maew',
    english: 'Cat',
    image: placeholderImage
  },
  {
    thai: 'น้ำ',
    roman: 'nam',
    english: 'Water',
    image: placeholderImage
  },
  {
    thai: 'อาหาร',
    roman: 'ahaan',
    english: 'Food',
    image: placeholderImage
  },
  {
    thai: 'ข้าว',
    roman: 'khao',
    english: 'Rice',
    image: placeholderImage
  },
  {
    thai: 'กาแฟ',
    roman: 'kaafae',
    english: 'Coffee',
    image: placeholderImage
  },
  {
    thai: 'ชา',
    roman: 'cha',
    english: 'Tea',
    image: placeholderImage
  },
  {
    thai: 'เบียร์',
    roman: 'bia',
    english: 'Beer',
    image: placeholderImage
  },
  {
    thai: 'ไวน์',
    roman: 'wain',
    english: 'Wine',
    image: placeholderImage
  },
  {
    thai: 'โรงแรม',
    roman: 'rong raem',
    english: 'Hotel',
    image: placeholderImage
  },
  {
    thai: 'แท็กซี่',
    roman: 'taksi',
    english: 'Taxi',
    image: placeholderImage
  },
  {
    thai: 'รถเมล์',
    roman: 'rot mee',
    english: 'Bus',
    image: placeholderImage
  },
  {
    thai: 'รถไฟ',
    roman: 'rot fai',
    english: 'Train',
    image: placeholderImage
  },
  {
    thai: 'สนามบิน',
    roman: 'sanam bin',
    english: 'Airport',
    image: placeholderImage
  },
  {
    thai: 'ตลาด',
    roman: 'ta lat',
    english: 'Market',
    image: placeholderImage
  },
  {
    thai: 'ห้องน้ำ',
    roman: 'hong nam',
    english: 'Bathroom',
    image: placeholderImage
  },
  {
    thai: 'ช่วยด้วย',
    roman: 'chuay duay',
    english: 'Help',
    image: placeholderImage
  },
  {
    thai: 'ราคา',
    roman: 'rakha',
    english: 'Price',
    image: placeholderImage
  },
  {
    thai: 'แพง',
    roman: 'paeng',
    english: 'Expensive',
    image: placeholderImage
  },
  {
    thai: 'ถูก',
    roman: 'thuk',
    english: 'Cheap',
    image: placeholderImage
  },
  {
    thai: 'สวย',
    roman: 'suai',
    english: 'Beautiful',
    image: placeholderImage
  },
  {
    thai: 'อร่อย',
    roman: 'aroy',
    english: 'Delicious',
    image: placeholderImage
  },
  {
    thai: 'ร้อน',
    roman: 'ron',
    english: 'Hot',
    image: placeholderImage
  },
  {
    thai: 'หนาว',
    roman: 'nao',
    english: 'Cold',
    image: placeholderImage
  },
  {
    thai: 'ใหญ่',
    roman: 'yai',
    english: 'Big',
    image: placeholderImage
  },
  {
    thai: 'เล็ก',
    roman: 'lek',
    english: 'Small',
    image: placeholderImage
  },
  {
    thai: 'ใกล้',
    roman: 'glai',
    english: 'Near',
    image: placeholderImage
  },
  {
    thai: 'ไกล',
    roman: 'klai',
    english: 'Far',
    image: placeholderImage
  },
  {
    thai: 'วันนี้',
    roman: 'wan nee',
    english: 'Today',
    image: placeholderImage
  },
  {
    thai: 'พรุ่งนี้',
    roman: 'phrung nii',
    english: 'Tomorrow',
    image: placeholderImage
  },
  {
    thai: 'เมื่อวาน',
    roman: 'muea waan',
    english: 'Yesterday',
    image: placeholderImage
  },
  {
    thai: 'วัน',
    roman: 'wan',
    english: 'Day',
    image: placeholderImage
  },
  {
    thai: 'สัปดาห์',
    roman: 'sap daa',
    english: 'Week',
    image: placeholderImage
  },
  {
    thai: 'เดือน',
    roman: 'duean',
    english: 'Month',
    image: placeholderImage
  },
  {
    thai: 'ปี',
    roman: 'pii',
    english: 'Year',
    image: placeholderImage
  },
  {
    thai: 'เวลา',
    roman: 'welaa',
    english: 'Time',
    image: placeholderImage
  },
  {
    thai: 'เงิน',
    roman: 'ngern',
    english: 'Money',
    image: placeholderImage
  },
  {
    thai: 'ตั๋ว',
    roman: 'tua',
    english: 'Ticket',
    image: placeholderImage
  },
  {
    thai: 'เลข',
    roman: 'lek',
    english: 'Number',
    image: placeholderImage
  },
  {
    thai: 'ภาษา',
    roman: 'phasa',
    english: 'Language',
    image: placeholderImage
  },
  {
    thai: 'โรงเรียน',
    roman: 'rong rian',
    english: 'School',
    image: placeholderImage
  },
  {
    thai: 'เมือง',
    roman: 'muang',
    english: 'City',
    image: placeholderImage
  },
  {
    thai: 'ประเทศ',
    roman: 'prathet',
    english: 'Country',
    image: placeholderImage
  },
  {
    thai: 'รัก',
    roman: 'rak',
    english: 'Love',
    image: placeholderImage
  },
  {
    thai: 'ชอบ',
    roman: 'chob',
    english: 'Like',
    image: placeholderImage
  },
  {
    thai: 'อยาก',
    roman: 'yak',
    english: 'Want',
    image: placeholderImage
  },
  {
    thai: 'ต้องการ',
    roman: 'tongkan',
    english: 'Need',
    image: placeholderImage
  },
  {
    thai: 'รู้',
    roman: 'roo',
    english: 'Know',
    image: placeholderImage
  },
  {
    thai: 'เข้าใจ',
    roman: 'kao jai',
    english: 'Understand',
    image: placeholderImage
  },
  {
    thai: 'พูด',
    roman: 'phood',
    english: 'Speak',
    image: placeholderImage
  },
  {
    thai: 'อ่าน',
    roman: 'aan',
    english: 'Read',
    image: placeholderImage
  },
  {
    thai: 'เขียน',
    roman: 'khian',
    english: 'Write',
    image: placeholderImage
  },
  {
    thai: 'ฟัง',
    roman: 'fang',
    english: 'Listen',
    image: placeholderImage
  },
  {
    thai: 'กิน',
    roman: 'kin',
    english: 'Eat',
    image: placeholderImage
  },
  {
    thai: 'ดื่ม',
    roman: 'deum',
    english: 'Drink',
    image: placeholderImage
  },
  {
    thai: 'นอน',
    roman: 'non',
    english: 'Sleep',
    image: placeholderImage
  },
  {
    thai: 'มา',
    roman: 'maa',
    english: 'Come',
    image: placeholderImage
  },
  {
    thai: 'ไป',
    roman: 'bpai',
    english: 'Go',
    image: placeholderImage
  },
  {
    thai: 'ทำงาน',
    roman: 'tam ngaan',
    english: 'Work',
    image: placeholderImage
  },
  {
    thai: 'เรียน',
    roman: 'rian',
    english: 'Study',
    image: placeholderImage
  },
  {
    thai: 'รอ',
    roman: 'ror',
    english: 'Wait',
    image: placeholderImage
  },
  {
    thai: 'เดิน',
    roman: 'dern',
    english: 'Walk',
    image: placeholderImage
  },
  {
    thai: 'วิ่ง',
    roman: 'wing',
    english: 'Run',
    image: placeholderImage
  },
  {
    thai: 'หยุด',
    roman: 'yut',
    english: 'Stop',
    image: placeholderImage
  },
  {
    thai: 'นั่ง',
    roman: 'nang',
    english: 'Sit',
    image: placeholderImage
  },
  {
    thai: 'ยืน',
    roman: 'yeun',
    english: 'Stand',
    image: placeholderImage
  },
  {
    thai: 'เปิด',
    roman: 'bpert',
    english: 'Open',
    image: placeholderImage
  }
];

function renderVocabulary() {
  const container = document.getElementById('vocabContainer');
  vocabulary.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vocab-card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.english;

    const thai = document.createElement('div');
    thai.className = 'thai';
    thai.textContent = item.thai;

    const roman = document.createElement('div');
    roman.className = 'roman';
    roman.textContent = item.roman;

    const english = document.createElement('div');
    english.className = 'english';
    english.textContent = item.english;

    card.appendChild(img);
    card.appendChild(thai);
    card.appendChild(roman);
    card.appendChild(english);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderVocabulary);
