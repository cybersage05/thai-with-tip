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
