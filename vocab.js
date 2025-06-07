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
    image: 'images/vocab/please.svg',
  },
  {
    thai: 'ขอโทษ',
    roman: 'kho thot',
    english: 'Sorry',
    image: 'images/vocab/sorry.svg',
  },
  {
    thai: 'ขอโทษ',
    roman: 'kho thot',
    english: 'Excuse me',
    image: 'images/vocab/excuse_me.svg',
  },
  {
    thai: 'ที่ไหน?',
    roman: 'tee nai?',
    english: 'Where?',
    image: 'images/vocab/where_.svg',
  },
  {
    thai: 'เมื่อไหร่?',
    roman: 'meua rai?',
    english: 'When?',
    image: 'images/vocab/when_.svg',
  },
  {
    thai: 'ใคร?',
    roman: 'krai?',
    english: 'Who?',
    image: 'images/vocab/who_.svg',
  },
  {
    thai: 'อะไร?',
    roman: 'arai?',
    english: 'What?',
    image: 'images/vocab/what_.svg',
  },
  {
    thai: 'ทำไม?',
    roman: 'tammai?',
    english: 'Why?',
    image: 'images/vocab/why_.svg',
  },
  {
    thai: 'ยังไง?',
    roman: 'yang ngai?',
    english: 'How?',
    image: 'images/vocab/how_.svg',
  },
  {
    thai: 'สวัสดีตอนเช้า',
    roman: 'sawatdee ton chao',
    english: 'Good morning',
    image: 'images/vocab/good_morning.svg',
  },
  {
    thai: 'ราตรีสวัสดิ์',
    roman: 'ratri sawat',
    english: 'Good night',
    image: 'images/vocab/good_night.svg',
  },
  {
    thai: 'ลาก่อน',
    roman: 'laa gon',
    english: 'Goodbye',
    image: 'images/vocab/goodbye.svg',
  },
  {
    thai: 'เจอกัน',
    roman: 'jer gan',
    english: 'See you',
    image: 'images/vocab/see_you.svg',
  },
  {
    thai: 'ผม',
    roman: 'phom',
    english: 'I',
    image: 'images/vocab/i.svg',
  },
  {
    thai: 'คุณ',
    roman: 'khun',
    english: 'You',
    image: 'images/vocab/you.svg',
  },
  {
    thai: 'เขา',
    roman: 'khao',
    english: 'He',
    image: 'images/vocab/he.svg',
  },
  {
    thai: 'เธอ',
    roman: 'ter',
    english: 'She',
    image: 'images/vocab/she.svg',
  },
  {
    thai: 'พวกเขา',
    roman: 'phuak khao',
    english: 'They',
    image: 'images/vocab/they.svg',
  },
  {
    thai: 'เรา',
    roman: 'rao',
    english: 'We',
    image: 'images/vocab/we.svg',
  },
  {
    thai: 'เพื่อน',
    roman: 'phuean',
    english: 'Friend',
    image: 'images/vocab/friend.svg',
  },
  {
    thai: 'ครอบครัว',
    roman: 'krob krua',
    english: 'Family',
    image: 'images/vocab/family.svg',
  },
  {
    thai: 'พ่อ',
    roman: 'phaw',
    english: 'Father',
    image: 'images/vocab/father.svg',
  },
  {
    thai: 'แม่',
    roman: 'mae',
    english: 'Mother',
    image: 'images/vocab/mother.svg',
  },
  {
    thai: 'พี่ชาย',
    roman: 'phi chai',
    english: 'Brother',
    image: 'images/vocab/brother.svg',
  },
  {
    thai: 'พี่สาว',
    roman: 'phi sao',
    english: 'Sister',
    image: 'images/vocab/sister.svg',
  },
  {
    thai: 'สามี',
    roman: 'sami',
    english: 'Husband',
    image: 'images/vocab/husband.svg',
  },
  {
    thai: 'ภรรยา',
    roman: 'panraya',
    english: 'Wife',
    image: 'images/vocab/wife.svg',
  },
  {
    thai: 'ลูกชาย',
    roman: 'luk chai',
    english: 'Son',
    image: 'images/vocab/son.svg',
  },
  {
    thai: 'ลูกสาว',
    roman: 'luk sao',
    english: 'Daughter',
    image: 'images/vocab/daughter.svg',
  },
  {
    thai: 'หมา',
    roman: 'maa',
    english: 'Dog',
    image: 'images/vocab/dog.svg',
  },
  {
    thai: 'แมว',
    roman: 'maew',
    english: 'Cat',
    image: 'images/vocab/cat.svg',
  },
  {
    thai: 'น้ำ',
    roman: 'nam',
    english: 'Water',
    image: 'images/vocab/water.svg',
  },
  {
    thai: 'อาหาร',
    roman: 'ahaan',
    english: 'Food',
    image: 'images/vocab/food.svg',
  },
  {
    thai: 'ข้าว',
    roman: 'khao',
    english: 'Rice',
    image: 'images/vocab/rice.svg',
  },
  {
    thai: 'กาแฟ',
    roman: 'kaafae',
    english: 'Coffee',
    image: 'images/vocab/coffee.svg',
  },
  {
    thai: 'ชา',
    roman: 'cha',
    english: 'Tea',
    image: 'images/vocab/tea.svg',
  },
  {
    thai: 'เบียร์',
    roman: 'bia',
    english: 'Beer',
    image: 'images/vocab/beer.svg',
  },
  {
    thai: 'ไวน์',
    roman: 'wain',
    english: 'Wine',
    image: 'images/vocab/wine.svg',
  },
  {
    thai: 'โรงแรม',
    roman: 'rong raem',
    english: 'Hotel',
    image: 'images/vocab/hotel.svg',
  },
  {
    thai: 'แท็กซี่',
    roman: 'taksi',
    english: 'Taxi',
    image: 'images/vocab/taxi.svg',
  },
  {
    thai: 'รถเมล์',
    roman: 'rot mee',
    english: 'Bus',
    image: 'images/vocab/bus.svg',
  },
  {
    thai: 'รถไฟ',
    roman: 'rot fai',
    english: 'Train',
    image: 'images/vocab/train.svg',
  },
  {
    thai: 'สนามบิน',
    roman: 'sanam bin',
    english: 'Airport',
    image: 'images/vocab/airport.svg',
  },
  {
    thai: 'ตลาด',
    roman: 'ta lat',
    english: 'Market',
    image: 'images/vocab/market.svg',
  },
  {
    thai: 'ห้องน้ำ',
    roman: 'hong nam',
    english: 'Bathroom',
    image: 'images/vocab/bathroom.svg',
  },
  {
    thai: 'ช่วยด้วย',
    roman: 'chuay duay',
    english: 'Help',
    image: 'images/vocab/help.svg',
  },
  {
    thai: 'ราคา',
    roman: 'rakha',
    english: 'Price',
    image: 'images/vocab/price.svg',
  },
  {
    thai: 'แพง',
    roman: 'paeng',
    english: 'Expensive',
    image: 'images/vocab/expensive.svg',
  },
  {
    thai: 'ถูก',
    roman: 'thuk',
    english: 'Cheap',
    image: 'images/vocab/cheap.svg',
  },
  {
    thai: 'สวย',
    roman: 'suai',
    english: 'Beautiful',
    image: 'images/vocab/beautiful.svg',
  },
  {
    thai: 'อร่อย',
    roman: 'aroy',
    english: 'Delicious',
    image: 'images/vocab/delicious.svg',
  },
  {
    thai: 'ร้อน',
    roman: 'ron',
    english: 'Hot',
    image: 'images/vocab/hot.svg',
  },
  {
    thai: 'หนาว',
    roman: 'nao',
    english: 'Cold',
    image: 'images/vocab/cold.svg',
  },
  {
    thai: 'ใหญ่',
    roman: 'yai',
    english: 'Big',
    image: 'images/vocab/big.svg',
  },
  {
    thai: 'เล็ก',
    roman: 'lek',
    english: 'Small',
    image: 'images/vocab/small.svg',
  },
  {
    thai: 'ใกล้',
    roman: 'glai',
    english: 'Near',
    image: 'images/vocab/near.svg',
  },
  {
    thai: 'ไกล',
    roman: 'klai',
    english: 'Far',
    image: 'images/vocab/far.svg',
  },
  {
    thai: 'วันนี้',
    roman: 'wan nee',
    english: 'Today',
    image: 'images/vocab/today.svg',
  },
  {
    thai: 'พรุ่งนี้',
    roman: 'phrung nii',
    english: 'Tomorrow',
    image: 'images/vocab/tomorrow.svg',
  },
  {
    thai: 'เมื่อวาน',
    roman: 'muea waan',
    english: 'Yesterday',
    image: 'images/vocab/yesterday.svg',
  },
  {
    thai: 'วัน',
    roman: 'wan',
    english: 'Day',
    image: 'images/vocab/day.svg',
  },
  {
    thai: 'สัปดาห์',
    roman: 'sap daa',
    english: 'Week',
    image: 'images/vocab/week.svg',
  },
  {
    thai: 'เดือน',
    roman: 'duean',
    english: 'Month',
    image: 'images/vocab/month.svg',
  },
  {
    thai: 'ปี',
    roman: 'pii',
    english: 'Year',
    image: 'images/vocab/year.svg',
  },
  {
    thai: 'เวลา',
    roman: 'welaa',
    english: 'Time',
    image: 'images/vocab/time.svg',
  },
  {
    thai: 'เงิน',
    roman: 'ngern',
    english: 'Money',
    image: 'images/vocab/money.svg',
  },
  {
    thai: 'ตั๋ว',
    roman: 'tua',
    english: 'Ticket',
    image: 'images/vocab/ticket.svg',
  },
  {
    thai: 'เลข',
    roman: 'lek',
    english: 'Number',
    image: 'images/vocab/number.svg',
  },
  {
    thai: 'ภาษา',
    roman: 'phasa',
    english: 'Language',
    image: 'images/vocab/language.svg',
  },
  {
    thai: 'โรงเรียน',
    roman: 'rong rian',
    english: 'School',
    image: 'images/vocab/school.svg',
  },
  {
    thai: 'เมือง',
    roman: 'muang',
    english: 'City',
    image: 'images/vocab/city.svg',
  },
  {
    thai: 'ประเทศ',
    roman: 'prathet',
    english: 'Country',
    image: 'images/vocab/country.svg',
  },
  {
    thai: 'รัก',
    roman: 'rak',
    english: 'Love',
    image: 'images/vocab/love.svg',
  },
  {
    thai: 'ชอบ',
    roman: 'chob',
    english: 'Like',
    image: 'images/vocab/like.svg',
  },
  {
    thai: 'อยาก',
    roman: 'yak',
    english: 'Want',
    image: 'images/vocab/want.svg',
  },
  {
    thai: 'ต้องการ',
    roman: 'tongkan',
    english: 'Need',
    image: 'images/vocab/need.svg',
  },
  {
    thai: 'รู้',
    roman: 'roo',
    english: 'Know',
    image: 'images/vocab/know.svg',
  },
  {
    thai: 'เข้าใจ',
    roman: 'kao jai',
    english: 'Understand',
    image: 'images/vocab/understand.svg',
  },
  {
    thai: 'พูด',
    roman: 'phood',
    english: 'Speak',
    image: 'images/vocab/speak.svg',
  },
  {
    thai: 'อ่าน',
    roman: 'aan',
    english: 'Read',
    image: 'images/vocab/read.svg',
  },
  {
    thai: 'เขียน',
    roman: 'khian',
    english: 'Write',
    image: 'images/vocab/write.svg',
  },
  {
    thai: 'ฟัง',
    roman: 'fang',
    english: 'Listen',
    image: 'images/vocab/listen.svg',
  },
  {
    thai: 'กิน',
    roman: 'kin',
    english: 'Eat',
    image: 'images/vocab/eat.svg',
  },
  {
    thai: 'ดื่ม',
    roman: 'deum',
    english: 'Drink',
    image: 'images/vocab/drink.svg',
  },
  {
    thai: 'นอน',
    roman: 'non',
    english: 'Sleep',
    image: 'images/vocab/sleep.svg',
  },
  {
    thai: 'มา',
    roman: 'maa',
    english: 'Come',
    image: 'images/vocab/come.svg',
  },
  {
    thai: 'ไป',
    roman: 'bpai',
    english: 'Go',
    image: 'images/vocab/go.svg',
  },
  {
    thai: 'ทำงาน',
    roman: 'tam ngaan',
    english: 'Work',
    image: 'images/vocab/work.svg',
  },
  {
    thai: 'เรียน',
    roman: 'rian',
    english: 'Study',
    image: 'images/vocab/study.svg',
  },
  {
    thai: 'รอ',
    roman: 'ror',
    english: 'Wait',
    image: 'images/vocab/wait.svg',
  },
  {
    thai: 'เดิน',
    roman: 'dern',
    english: 'Walk',
    image: 'images/vocab/walk.svg',
  },
  {
    thai: 'วิ่ง',
    roman: 'wing',
    english: 'Run',
    image: 'images/vocab/run.svg',
  },
  {
    thai: 'หยุด',
    roman: 'yut',
    english: 'Stop',
    image: 'images/vocab/stop.svg',
  },
  {
    thai: 'นั่ง',
    roman: 'nang',
    english: 'Sit',
    image: 'images/vocab/sit.svg',
  },
  {
    thai: 'ยืน',
    roman: 'yeun',
    english: 'Stand',
    image: 'images/vocab/stand.svg',
  },
  {
    thai: 'เปิด',
    roman: 'bpert',
    english: 'Open',
    image: 'images/vocab/open.svg',
  }
];

const cardColors = [
  '#FFD166', '#06D6A0', '#118AB2', '#EF476F',
  '#FF9F1C', '#2EC4B6', '#A5668B', '#C30010',
  '#4D9078', '#FF6B6B', '#48CAE4', '#9D4EDD'
];

function getRandomColor() {
  return cardColors[Math.floor(Math.random() * cardColors.length)];
}

function renderVocabulary() {
  const container = document.getElementById('vocabContainer');
  vocabulary.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    if (!item.image.startsWith('data:image')) {
      card.style.backgroundColor = getRandomColor();
      card.style.color = '#fff';
    }

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
