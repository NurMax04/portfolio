(function () {
  const catalog = window.HIT_STROI_CATALOG || [];
  const copy = {
    kk: {
      skip: "Негізгі мазмұнға өту", navCatalog: "Каталог", navAbout: "Біз туралы", navWorks: "Жұмыстар", navContacts: "Байланыс", headerCta: "Жобаны талқылау",
      heroEyebrow: "ШЫМКЕНТТЕ ЖАСАЛҒАН • СІЗГЕ АРНАЛҒАН", heroTitle: "Үйіңізге сай<br /><em>жиһаз.</em> Мінезі бар<br />дизайн.", heroLead: "TV-аймақтан бастап жатын бөлмеге дейін — өлшеміңізге сай жасалған жиһаз, ұқыпты орнату және бір команда.", heroCta: "Өлшеуге жазылу", heroSecondary: "Каталогты көру", proofFollowers: "TikTok-та жазылушы", proofLikes: "Нақты жұмыстар мен пікірлер", heroImageLabel: "ОРЫНДАЛҒАН ЖОБА", heroNoteTop: "Тапсырыспен жасалған интерьер", heroNoteBottom: "Бір бөлшектен толық кеңістікке дейін", heroBottomLeft: "ЖИҺАЗ • ДИЗАЙН • ОРНАТУ", scroll: "ТӨМЕН ЖЫЛЖЫТУ", heroBottomRight: "ШЫМКЕНТ, ҚАЗАҚСТАН", heroVideoCaption: "КЕҢІСТІКТІ ЖОҒАРЫДАН ТӨМЕНГЕ ДЕЙІН",
      tickerOne: "Жеке өлшем", tickerTwo: "Заманауи TV-аймақтар", tickerThree: "Жатын бөлмелер", tickerFour: "Шымкент", introKicker: "БІЗ ТУРАЛЫ", introTitle: "Әдемі көрінеді.<br /><em>Күнде ыңғайлы.</em>", introText: "Біз кеңістіктің өлшемі мен үйіңіздің ырғағын ескеріп, тапсырыспен жиһаз жасаймыз. Сіз идеяңызды айтасыз — біз оны нақты жобаға айналдырамыз.", featureOneTitle: "Өлшем бойынша", featureOneText: "Жиһаз сіздің бөлмеңізге және жоспарыңызға сай жобаланады.", featureTwoTitle: "Бір команда", featureTwoText: "Жобаны келісуден бастап орнатуға дейін бір байланыс нүктесі.", featureThreeTitle: "Ұқыпты жинақ", featureThreeText: "Әр элементті біріктіріп, дайын интерьер ретінде тапсырамыз.", aboutPhotoAlt: "Макетке арналған уақытша негізін қалаушы портреті", aboutPhotoTag: "МАКЕТКЕ АРНАЛҒАН УАҚЫТША ПОРТРЕТ", aboutTitle: "Идеядан бастаймыз.<br /><em>Жиһазбен жалғастырамыз.</em>", aboutText: "HIT STROI — үйге сай жиһазды өлшеп, жобалап, орнатып беретін Шымкент командасы. Әр жоба сіздің идеяңыздан басталып, дайын кеңістікке дейін бірге жасалады.", aboutSince: "Шымкентте жұмысты бастаған жыл", aboutProjects: "аяқталған жоба", aboutDraftNote: "Жыл мен жоба саны — уақытша мысал, тапсырыс берушімен нақтылау керек.", aboutCta: "Біз туралы сұрау",
      worksKicker: "ОРЫНДАЛҒАН ЖҰМЫСТАР", worksTitle: "Әр бөлшек<br /><em>маңызды.</em>", worksText: "Біздің жұмыстарды қарап, өз үйіңізге ұнайтын шешімді таңдаңыз.", worksLink: "TikTok-тағы барлық видео", workTagOne: "TV-АЙМАҚ", workOne: "Жарық. Таза сызықтар.", workTagTwo: "LUX TV-АЙМАҚ", workTwo: "Интерьердің орталығы.", workTagThree: "КІРЕБЕРІС", workThree: "Ұқыпты сақтау орны.", catalogKicker: "КАТАЛОГ", catalogTitle: "Кеңістікке сай<br /><em>санатты таңдаңыз.</em>", catalogText: "Әр бөлімнен ұнаған үлгіні таңдап, қолжетімді өлшемдер мен бағаны біліңіз.", categoryType: "САНАТ", categoryGroup: "Жиһаз санаттары", conceptBadge: "ТҰЖЫРЫМДАМАЛЫҚ КӨРНЕК", categoryTv: "TV-аймақтар", categoryBedroom: "Жатын бөлмелер", categoryHallway: "Кіреберістер", categoryMirror: "Айналар", categoryWardrobe: "Шкафтар", filterAll: "Барлығы", filterTv: "TV-аймақ", filterBedroom: "Жатын бөлме", filterHallway: "Кіреберіс", filterMirror: "Айна", filterWardrobe: "Шкаф", catalogNote: "Каталогтағы бағалар бастапқы үлгілерге арналған. Нақты баға өлшем, материал және жобаға қарай есептеледі.", catalogAsk: "Есептеп көру", catalogNoteClose: "Ескертуді жасыру",
      priceAsk: "Бағасын сұрау", from: "бастап", priceOnRequest: "Бағасын нақтылау", itemCount: "үлгі", emptyCatalog: "Бұл бөлімде әзірге үлгі жоқ.", orderProduct: "Осы үлгіге тапсырыс беру", waProduct: "Сәлеметсіз бе! Сайттағы «{name}» үлгісіне тапсырыс беру шарттарын талқылағым келеді.",
      contactKicker: "БАЙЛАНЫС", contactTitle: "Жаңа үйге<br /><em>жаңа шешім.</em>", contactText: "Өлшеміңізді, идеяңызды немесе шабыт суретін жіберіңіз. Жобаны бірге бастайық.", contactCta: "WhatsApp-та жазу", phoneLabel: "ТЕЛЕФОН / WHATSAPP", locationLabel: "ҚЫЗМЕТ КӨРСЕТУ АЙМАҒЫ", locationValue: "Шымкент • Түркістан • Тараз", footerCopy: "Жиһазды тапсырыспен жасау • Шымкент", backTop: "БАСЫНА"
    },
    ru: {
      skip: "Перейти к основному содержимому", navCatalog: "Каталог", navAbout: "О нас", navWorks: "Работы", navContacts: "Контакты", headerCta: "Обсудить проект",
      heroEyebrow: "СДЕЛАНО В ШЫМКЕНТЕ • ДЛЯ ВАС", heroTitle: "Мебель для<br /><em>вашего</em> дома.<br />Дизайн с характером.", heroLead: "От TV-зоны до спальни — мебель по вашим размерам, аккуратная установка и одна команда на всём пути.", heroCta: "Записаться на замер", heroSecondary: "Смотреть каталог", proofFollowers: "подписчиков в TikTok", proofLikes: "Работы и отзывы клиентов", heroImageLabel: "РЕАЛИЗОВАННЫЙ ПРОЕКТ", heroNoteTop: "Интерьер на заказ", heroNoteBottom: "От одного предмета до целого пространства", heroBottomLeft: "МЕБЕЛЬ • ДИЗАЙН • УСТАНОВКА", scroll: "ЛИСТАЙТЕ ВНИЗ", heroBottomRight: "ШЫМКЕНТ, КАЗАХСТАН", heroVideoCaption: "ПЛАВНЫЙ ПРОХОД ПО ИНТЕРЬЕРУ СВЕРХУ ВНИЗ",
      tickerOne: "По вашим размерам", tickerTwo: "Современные TV-зоны", tickerThree: "Спальные зоны", tickerFour: "Шымкент", introKicker: "О НАС", introTitle: "Красиво выглядит.<br /><em>Удобно каждый день.</em>", introText: "Мы изготавливаем мебель на заказ с учётом размеров пространства и вашего уклада жизни. Вы рассказываете идею — мы превращаем её в готовый проект.", featureOneTitle: "По вашим размерам", featureOneText: "Проектируем мебель под вашу комнату и планировку.", featureTwoTitle: "Одна команда", featureTwoText: "Один контакт от согласования проекта до установки.", featureThreeTitle: "Аккуратная сборка", featureThreeText: "Собираем все элементы в единый, готовый интерьер.", aboutPhotoAlt: "Временный портрет основателя для макета", aboutPhotoTag: "ВРЕМЕННЫЙ ПОРТРЕТ ДЛЯ МАКЕТА", aboutTitle: "Начинаем с идеи.<br /><em>Продолжаем мебелью.</em>", aboutText: "HIT STROI — команда из Шымкента: замеряем, проектируем и устанавливаем мебель под ваш дом. Каждый проект начинается с вашей идеи и вместе с вами превращается в готовое пространство.", aboutSince: "год начала работы в Шымкенте", aboutProjects: "завершённых проектов", aboutDraftNote: "Год и число проектов указаны для макета — их нужно подтвердить у заказчика.", aboutCta: "Спросить о компании",
      worksKicker: "НАШИ РАБОТЫ", worksTitle: "Важна<br /><em>каждая деталь.</em>", worksText: "Посмотрите наши проекты и выберите решение для своего дома.", worksLink: "Все видео в TikTok", workTagOne: "TV-ЗОНА", workOne: "Свет. Чистые линии.", workTagTwo: "LUX TV-ЗОНА", workTwo: "Центр интерьера.", workTagThree: "ПРИХОЖАЯ", workThree: "Продуманное хранение.", catalogKicker: "КАТАЛОГ", catalogTitle: "Выберите<br /><em>подходящую категорию.</em>", catalogText: "В каждом разделе — модели мебели. Выберите понравившуюся, чтобы посмотреть варианты и узнать цену.", categoryType: "КАТЕГОРИЯ", categoryGroup: "Категории мебели", conceptBadge: "КОНЦЕПТ-ВИЗУАЛИЗАЦИЯ", categoryTv: "TV-зоны", categoryBedroom: "Спальни", categoryHallway: "Прихожие", categoryMirror: "Зеркала", categoryWardrobe: "Шкафы", filterAll: "Все", filterTv: "TV-зоны", filterBedroom: "Спальни", filterHallway: "Прихожие", filterMirror: "Зеркала", filterWardrobe: "Шкафы", catalogNote: "Цены в каталоге относятся к указанным моделям. Итоговую стоимость рассчитаем по размерам, материалам и составу проекта.", catalogAsk: "Узнать стоимость", catalogNoteClose: "Скрыть примечание",
      priceAsk: "Уточнить цену", from: "от", priceOnRequest: "Цена по запросу", itemCount: "моделей", emptyCatalog: "В этом разделе пока нет моделей.", orderProduct: "Заказать эту модель", waProduct: "Здравствуйте! Хочу обсудить заказ модели «{name}» с сайта.",
      contactKicker: "КОНТАКТЫ", contactTitle: "Новый дом —<br /><em>новое решение.</em>", contactText: "Пришлите размеры, идею или фото для вдохновения. Давайте начнём проект вместе.", contactCta: "Написать в WhatsApp", phoneLabel: "ТЕЛЕФОН / WHATSAPP", locationLabel: "РАБОТАЕМ В ГОРОДАХ", locationValue: "Шымкент • Туркестан • Тараз", footerCopy: "Мебель на заказ • Шымкент", backTop: "НАВЕРХ"
    }
  };

  Object.assign(copy.kk, {
    navProcess: "Тапсырыс кезеңдері",
    processKicker: "ҚАЛАЙ ЖҰМЫС ІСТЕЙМІЗ", processTitle: "Әр кезеңі<br /><em>түсінікті.</em>", processText: "Алдымен жоба мен бағасын келісеміз. Өндірісті сіз мақұлдағаннан кейін бастаймыз.", processCta: "Жобаны талқылау",
    processStepOneTitle: "Өтінім және өлшеу", processStepOneText: "Идеяңызды талқылап, кеңістіктің өлшемін аламыз.", processStepTwoTitle: "Жоба және есеп", processStepTwoText: "Шешімді, материалдарды және бағаны бекітеміз.", processStepThreeTitle: "Жиһаз жасау", processStepThreeText: "Келісілген жоба бойынша жиһазды дайындаймыз.", processStepFourTitle: "Жеткізу және орнату", processStepFourText: "Дайын жиһазды жеткізіп, орнына орнатамыз.",
    catalogTitle: "Санатты таңдаңыз<br /><em>үйіңізге сай.</em>", catalogText: "Санатты басып, қолжетімді үлгілерді, сипаттамасы мен бағасын көріңіз.", modalKicker: "КАТАЛОГ МОДЕЛДЕРІ", modalAllTitle: "Барлық үлгі", closeCatalog: "Каталогты жабу", catalogFilterLabel: "Каталог санаттары", productCta: "Тапсырысты талқылау"
  });
  Object.assign(copy.ru, {
    navProcess: "Этапы заказа",
    processKicker: "КАК ПРОХОДИТ ЗАКАЗ", processTitle: "Понятно на каждом<br /><em>этапе.</em>", processText: "Сначала согласуем проект и стоимость. Запустим производство после вашего подтверждения.", processCta: "Обсудить проект",
    processStepOneTitle: "Заявка и замер", processStepOneText: "Обсудим вашу идею и снимем размеры пространства.", processStepTwoTitle: "Проект и расчёт", processStepTwoText: "Согласуем решение, материалы и точную стоимость.", processStepThreeTitle: "Изготовление", processStepThreeText: "Изготовим мебель по утверждённому проекту.", processStepFourTitle: "Доставка и установка", processStepFourText: "Привезём готовую мебель и установим на месте.",
    catalogTitle: "Выберите категорию<br /><em>для вашего дома.</em>", catalogText: "Нажмите на категорию, чтобы открыть модели, описания и цены.", modalKicker: "КАТАЛОГ МОДЕЛЕЙ", modalAllTitle: "Все модели", closeCatalog: "Закрыть каталог", catalogFilterLabel: "Категории каталога", productCta: "Обсудить детали"
  });
  Object.assign(copy.kk, {
    navReviews: "Пікірлер", reviewsKicker: "ПІКІРЛЕР", reviewsTitle: "Клиенттер<br /><em>не дейді?</em>", reviewsText: "Фото мен видео-пікірлер. Жұлдызсыз — тек клиенттердің өз сөздері.", reviewPhotoLabel: "ФОТО МАКЕТІ", reviewVideoLabel: "ВИДЕО МАКЕТІ", reviewImageAltOne: "TV-аймақ жобасының уақытша суреті", reviewImageAltTwo: "Кіреберіс жобасының уақытша суреті", reviewPlaceholder: "Бұл жерде клиенттің нақты пікірі болады. Мәтінді кейін тапсырыс берушімен толтырамыз.", reviewClient: "Клиент пікірі", reviewDraft: "Уақытша мәтін", reviewsDraftNote: "Медиа мен мәтін — уақытша материалдар, оларды ауыстыру керек.", reviewsPause: "Пауза", reviewsResume: "Жалғастыру", reviewsPrev: "Алдыңғы пікір", reviewsNext: "Келесі пікір"
  });
  Object.assign(copy.ru, {
    navReviews: "Отзывы", reviewsKicker: "ОТЗЫВЫ", reviewsTitle: "Что говорят<br /><em>клиенты?</em>", reviewsText: "Фото- и видеоотзывы без рейтингов — только слова клиентов.", reviewPhotoLabel: "ФОТО-МАКЕТ", reviewVideoLabel: "ВИДЕО-МАКЕТ", reviewImageAltOne: "Временное фото проекта TV-зоны", reviewImageAltTwo: "Временное фото проекта прихожей", reviewPlaceholder: "Здесь будет настоящий отзыв клиента. Текст добавим после согласования.", reviewClient: "Отзыв клиента", reviewDraft: "Временный текст", reviewsDraftNote: "Медиа и тексты временные — заменим на настоящие отзывы.", reviewsPause: "Пауза", reviewsResume: "Продолжить", reviewsPrev: "Предыдущий отзыв", reviewsNext: "Следующий отзыв"
  });

  copy.kk.materialsFromUs = "Материалдар бізден";
  copy.ru.materialsFromUs = "Материалы от нас";

  let language = localStorage.getItem("hit-stroi-language") || "kk";
  if (!copy[language]) language = "kk";
  const productGrid = document.getElementById("catalog-products");
  const categoryCards = Array.from(document.querySelectorAll(".category-card"));
  const countLabel = document.getElementById("catalog-count");
  const catalogModal = document.getElementById("catalog-modal");
  const catalogModalTitle = document.getElementById("catalog-modal-title");
  const productDetail = document.getElementById("product-detail");
  const catalogModalCloseButton = document.querySelector(".catalog-modal-close");
  const catalogNote = document.querySelector(".catalog-note");
  const reviewsCarousel = document.getElementById("reviews-carousel");
  const reviewsTrack = reviewsCarousel?.querySelector(".reviews-track");
  const reviewsViewport = reviewsCarousel?.querySelector(".reviews-viewport");
  const reviewsAutoplayButton = reviewsCarousel?.querySelector(".reviews-autoplay");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeCategory = "all";
  let reviewsPaused = false;
  let reviewsMoving = false;
  let reviewsTimer = null;
  const categoryTitleKeys = { all: "modalAllTitle", tv: "categoryTv", bedroom: "categoryBedroom", hallway: "categoryHallway", mirror: "categoryMirror", wardrobe: "categoryWardrobe" };
  let selectedProduct = null;
  let selectedProductImage = 0;
  let catalogNoteDismissed = localStorage.getItem("hit-stroi-catalog-note-dismissed") === "true";

  function formatPrice(price) {
    return new Intl.NumberFormat(language === "ru" ? "ru-RU" : "kk-KZ").format(price) + " ₸";
  }

  function renderCatalog() {
    if (!productGrid) return;
    productGrid.hidden = false;
    productDetail.hidden = true;
    if (catalogNote) catalogNote.hidden = catalogNoteDismissed;
    countLabel.hidden = false;
    selectedProduct = null;
    const products = catalog.filter((product) => activeCategory === "all" || product.category === activeCategory);
    productGrid.innerHTML = products.map((product, index) => {
      const name = product.name[language];
      const priceLabel = product.price ? formatPrice(product.price) : copy[language].priceOnRequest;
      const image = product.images?.[0] || { src: product.image, alt: product.imageAlt };
      return `<button class="product-card product-card-trigger" type="button" data-product-id="${product.id}" style="--card-index:${index}" aria-label="${name}, ${priceLabel}. ${language === "kk" ? "Толығырақ көру" : "Подробнее"}">
        <span class="product-image"><img src="assets/images/${image.src}" alt="${image.alt[language]}" loading="lazy" /></span>
        <span class="product-info"><span class="product-info-heading"><span><span class="product-category">${categoryName(product.category)}</span><strong>${name}</strong><span class="product-description">${copy[language].materialsFromUs}</span></span><svg class="icon-svg product-card-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#arrow-up-right"></use></svg></span>
        <span class="product-card-bottom"><span class="product-price"><strong>${priceLabel}</strong></span><span class="product-more">${language === "kk" ? "Толығырақ" : "Подробнее"}</span></span>
      </button>`;
    }).join("");
    if (!products.length) productGrid.innerHTML = `<p class="empty-state">${copy[language].emptyCatalog}</p>`;
    if (countLabel) countLabel.textContent = `${products.length} ${copy[language].itemCount}`;
    if (catalogModalTitle) catalogModalTitle.textContent = copy[language][categoryTitleKeys[activeCategory]];
    catalogModalCloseButton?.setAttribute("aria-label", copy[language].closeCatalog);
  }

  function openProductDetail(product) {
    selectedProduct = product;
    selectedProductImage = 0;
    productGrid.hidden = true;
    productDetail.hidden = false;
    document.querySelector(".catalog-note")?.setAttribute("hidden", "");
    catalogModalCloseButton?.setAttribute("aria-label", language === "kk" ? "Тауарлар тізіміне қайту" : "Назад к списку товаров");
    countLabel.hidden = true;
    catalogModalTitle.textContent = product.name[language];
    renderProductDetail();
    productDetail.scrollTop = 0;
  }

  function renderProductDetail() {
    if (!selectedProduct || !productDetail) return;
    const product = selectedProduct;
    const images = product.images?.length ? product.images : [{ src: product.image, alt: product.imageAlt }];
    const priceLabel = product.price ? formatPrice(product.price) : copy[language].priceOnRequest;
    const waText = copy[language].waProduct.replace("{name}", product.name[language]);
    const waLink = "https://wa.me/77087211565?text=" + encodeURIComponent(waText);
    const activeImage = images[selectedProductImage] || images[0];
    const features = product.features?.[language] || [];
    productDetail.innerHTML = `<div class="product-detail-gallery">
      <div class="product-detail-main"><img src="assets/images/${activeImage.src}" alt="${activeImage.alt[language]}" /><span class="product-image-count">${String(selectedProductImage + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}</span></div>
      <div class="product-detail-thumbnails" aria-label="${language === "kk" ? "Өнім фотолары" : "Фотографии товара"}">
        ${images.map((image, index) => `<button class="product-thumbnail${index === selectedProductImage ? " is-active" : ""}" type="button" data-product-image="${index}" aria-label="${language === "kk" ? "Фото" : "Фото"} ${index + 1}" aria-pressed="${index === selectedProductImage}"><img src="assets/images/${image.src}" alt="${image.alt[language]}" /></button>`).join("")}
      </div>
    </div><div class="product-detail-info">
      <p class="product-detail-kicker">${categoryName(product.category)}</p>
      <h3>${product.name[language]}</h3>
      <p class="product-detail-description">${product.details[language]}</p>
      ${features.length ? `<h4>${language === "kk" ? "Жиынтықта" : "В комплекте"}</h4><ul>${features.map((feature) => `<li>${feature}</li>`).join("")}</ul>` : ""}
      <div class="product-detail-bottom"><strong>${priceLabel}</strong><a class="product-action" href="${waLink}" target="_blank" rel="noopener"><span>${copy[language].productCta}</span><svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#arrow-up-right"></use></svg></a></div>
    </div>`;
  }

  function setActiveCategory(nextCategory) {
    activeCategory = nextCategory;
    categoryCards.forEach((card) => card.setAttribute("aria-pressed", String(card.dataset.category === activeCategory)));
    renderCatalog();
  }

  function categoryName(category) {
    const labels = {
      tv: { kk: "TV-АЙМАҚ", ru: "TV-ЗОНА" }, bedroom: { kk: "ЖАТЫН БӨЛМЕ", ru: "СПАЛЬНЯ" },
      hallway: { kk: "КІРЕБЕРІС", ru: "ПРИХОЖАЯ" }, mirror: { kk: "АЙНА", ru: "ЗЕРКАЛО" }, wardrobe: { kk: "ШКАФ", ru: "ШКАФ" }
    };
    return labels[category][language];
  }

  function reviewStepWidth() {
    if (!reviewsTrack?.firstElementChild) return 0;
    const gap = Number.parseFloat(getComputedStyle(reviewsTrack).columnGap || getComputedStyle(reviewsTrack).gap) || 0;
    return reviewsTrack.firstElementChild.getBoundingClientRect().width + gap;
  }

  function nextReview() {
    if (!reviewsTrack || reviewsTrack.children.length < 2 || reviewsMoving) return;
    const step = reviewStepWidth();
    if (prefersReducedMotion) {
      reviewsTrack.append(reviewsTrack.firstElementChild);
      return;
    }
    reviewsMoving = true;
    reviewsTrack.style.transform = `translateX(-${step}px)`;
    reviewsTrack.addEventListener("transitionend", () => {
      reviewsTrack.style.transition = "none";
      reviewsTrack.append(reviewsTrack.firstElementChild);
      reviewsTrack.style.transform = "translateX(0)";
      reviewsTrack.offsetHeight;
      reviewsTrack.style.transition = "";
      reviewsMoving = false;
    }, { once: true });
  }

  function previousReview() {
    if (!reviewsTrack || reviewsTrack.children.length < 2 || reviewsMoving) return;
    if (prefersReducedMotion) {
      reviewsTrack.prepend(reviewsTrack.lastElementChild);
      return;
    }
    reviewsMoving = true;
    const step = reviewStepWidth();
    reviewsTrack.style.transition = "none";
    reviewsTrack.prepend(reviewsTrack.lastElementChild);
    reviewsTrack.style.transform = `translateX(-${step}px)`;
    reviewsTrack.offsetHeight;
    reviewsTrack.style.transition = "";
    requestAnimationFrame(() => { reviewsTrack.style.transform = "translateX(0)"; });
    reviewsTrack.addEventListener("transitionend", () => { reviewsMoving = false; }, { once: true });
  }

  function startReviewsAutoplay() {
    if (!reviewsTrack || reviewsPaused || prefersReducedMotion || document.hidden || reviewsCarousel.matches(":hover") || reviewsCarousel.contains(document.activeElement)) return;
    window.clearInterval(reviewsTimer);
    reviewsTimer = window.setInterval(nextReview, 5200);
  }

  function stopReviewsAutoplay() {
    window.clearInterval(reviewsTimer);
    reviewsTimer = null;
  }

  function updateReviewsPauseButton() {
    if (!reviewsAutoplayButton) return;
    reviewsAutoplayButton.hidden = prefersReducedMotion;
    const key = reviewsPaused ? "reviewsResume" : "reviewsPause";
    reviewsAutoplayButton.textContent = copy[language][key];
    reviewsAutoplayButton.setAttribute("aria-label", copy[language][key]);
    reviewsAutoplayButton.setAttribute("aria-pressed", String(reviewsPaused));
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    localStorage.setItem("hit-stroi-language", language);
    document.documentElement.lang = language === "ru" ? "ru" : "kk";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translation = copy[language][element.dataset.i18n];
      if (translation) element.innerHTML = translation;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const translation = copy[language][element.dataset.i18nAria];
      if (translation) element.setAttribute("aria-label", translation);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const translation = copy[language][element.dataset.i18nAlt];
      if (translation) element.setAttribute("alt", translation);
    });
    document.querySelectorAll(".lang-button").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderCatalog();
    updateReviewsPauseButton();
  }

  document.querySelectorAll(".lang-button").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  productGrid?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-product-id]");
    if (!card) return;
    const product = catalog.find((item) => item.id === card.dataset.productId);
    if (product) openProductDetail(product);
  });
  productDetail?.addEventListener("click", (event) => {
    const thumbnail = event.target.closest("[data-product-image]");
    if (!thumbnail || !selectedProduct) return;
    selectedProductImage = Number(thumbnail.dataset.productImage);
    renderProductDetail();
  });
  categoryCards.forEach((card) => card.addEventListener("click", () => {
    setActiveCategory(card.dataset.category);
    catalogModal?.showModal();
    document.documentElement.classList.add("catalog-open");
    document.body.classList.add("catalog-open");
  }));

  reviewsCarousel?.querySelector("[data-review-next]")?.addEventListener("click", () => { nextReview(); startReviewsAutoplay(); });
  reviewsCarousel?.querySelector("[data-review-prev]")?.addEventListener("click", () => { previousReview(); startReviewsAutoplay(); });
  reviewsAutoplayButton?.addEventListener("click", () => {
    reviewsPaused = !reviewsPaused;
    updateReviewsPauseButton();
    if (reviewsPaused) stopReviewsAutoplay(); else startReviewsAutoplay();
  });
  reviewsCarousel?.addEventListener("pointerenter", stopReviewsAutoplay);
  reviewsCarousel?.addEventListener("pointerleave", startReviewsAutoplay);
  reviewsCarousel?.addEventListener("focusin", stopReviewsAutoplay);
  reviewsCarousel?.addEventListener("focusout", (event) => {
    if (!reviewsCarousel.contains(event.relatedTarget)) startReviewsAutoplay();
  });
  if (reviewsViewport) {
    let pointerStart = null;
    reviewsViewport.addEventListener("pointerdown", (event) => {
      if (event.target.closest("video,button,a")) return;
      pointerStart = event.clientX;
    });
    reviewsViewport.addEventListener("pointerup", (event) => {
      if (pointerStart === null) return;
      const delta = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(delta) > 48) {
        if (delta < 0) nextReview(); else previousReview();
        startReviewsAutoplay();
      }
    });
    reviewsViewport.addEventListener("pointercancel", () => { pointerStart = null; });
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopReviewsAutoplay(); else startReviewsAutoplay();
  });
  startReviewsAutoplay();

  catalogModalCloseButton?.addEventListener("click", () => {
    if (selectedProduct) renderCatalog();
    else catalogModal?.close();
  });
  catalogModal?.addEventListener("close", () => {
    document.documentElement.classList.remove("catalog-open");
    document.body.classList.remove("catalog-open");
  });
  catalogModal?.addEventListener("click", (event) => {
    if (event.target === catalogModal) catalogModal.close();
  });
  document.querySelector(".catalog-note-close")?.addEventListener("click", () => {
    catalogNoteDismissed = true;
    localStorage.setItem("hit-stroi-catalog-note-dismissed", "true");
    if (catalogNote) catalogNote.hidden = true;
  });

  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo && prefersReducedMotion) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));

  document.getElementById("year").textContent = new Date().getFullYear();
  setLanguage(language);
})();
