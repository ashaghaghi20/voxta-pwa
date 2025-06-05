const lawyers = [
  { name: "دکتر نسرین رضایی", field: "حقوق خانواده", phone: "09121234567" },
  { name: "مهدی یوسفی", field: "حقوق بین‌الملل", phone: "09351234567" },
  { name: "Sara Khalil", field: "Business Law", phone: "+1-234-567-8910" }
];

const translations = {
  fa: {
    lawyerListTitle: "لیست وکلا",
    showPhone: "نمایش شماره تماس",
    paidMsg: "شماره تماس: ",
  },
  en: {
    lawyerListTitle: "Lawyers List",
    showPhone: "Show Phone Number",
    paidMsg: "Phone: ",
  },
  ar: {
    lawyerListTitle: "قائمة المحامين",
    showPhone: "عرض رقم الهاتف",
    paidMsg: "رقم الهاتف: ",
  },
  tr: {
    lawyerListTitle: "Avukat Listesi",
    showPhone: "Telefonu Göster",
    paidMsg: "Telefon: ",
  }
};

let currentLang = 'fa';

function renderLawyers() {
  const list = document.getElementById('lawyerList');
  list.innerHTML = '';
  lawyers.forEach(lawyer => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${lawyer.name}</strong><br>
      ${lawyer.field}<br>
      <button onclick="revealNumber('${lawyer.phone}', this)">
        ${translations[currentLang].showPhone}
      </button>
    `;
    list.appendChild(li);
  });
}

function revealNumber(phone, btn) {
  // شبیه‌سازی پرداخت
  const ok = confirm("برای نمایش شماره باید پرداخت انجام دهید (فعلاً تستی)");
  if (ok) {
    btn.outerHTML = `<p>${translations[currentLang].paidMsg}${phone}</p>`;
  }
}

function switchLanguage(lang) {
  currentLang = lang;
  document.getElementById('lawyerListTitle').innerText = translations[lang].lawyerListTitle;
  renderLawyers();
}

renderLawyers();