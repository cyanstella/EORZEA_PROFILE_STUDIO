let currentLanguage = "ja";


const translations = {

  ja: {

    heroLine1:
      "あなたのキャラクターを、",

    heroLine2:
      "もっとあなたらしく。",

    heroDescription:
      "EORZEA PROFILE STUDIOは、FINAL FANTASY XIVのキャラクターや冒険の記録を楽しむための非公式Webツールシリーズです。",

    profileDescription:
      "キャラクター設定についての20の質問に答えて、4枚のカラフルなプロフィールカードを作成できます。",

    portraitDescription:
      "Lodestoneのキャラクター情報と20の質問、スクリーンショットを組み合わせて、あなたの冒険を4枚のカードに。",

    snapshotDescription:
      "スクリーンショットにキャラクター情報、ジョブ、プレイスタイル、質問への回答を添えて一枚のスナップショットに。",

    examples:
      "作成例",

    openTool:
      "OPEN TOOL →",

    aboutText:
      "EORZEA PROFILE STUDIOでは、FINAL FANTASY XIVのキャラクターをテーマにしたプロフィール・カード・画像作成ツールを公開しています。",

    disclaimerTitle:
      "免責事項",

    disclaimerText:
      "本サイトおよび各ツールは個人が制作・運営する非公式Webツールであり、株式会社スクウェア・エニックスとは関係ありません。本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。"

  },


  en: {

    heroLine1:
      "Your character,",

    heroLine2:
      "more uniquely yours.",

    heroDescription:
      "EORZEA PROFILE STUDIO is an unofficial series of web tools created for enjoying FINAL FANTASY XIV characters and memories from your adventures.",

    profileDescription:
      "Answer 20 questions about your character and create four colorful character profile cards.",

    portraitDescription:
      "Combine your Lodestone character information, answers to 20 questions and screenshots to create four portrait cards.",

    snapshotDescription:
      "Combine a screenshot with character information, jobs, play style and answers to create a single character snapshot.",

    examples:
      "EXAMPLES",

    openTool:
      "OPEN TOOL →",

    aboutText:
      "EORZEA PROFILE STUDIO provides profile, card and image-making tools themed around FINAL FANTASY XIV characters.",

    disclaimerTitle:
      "DISCLAIMER",

    disclaimerText:
      "This site and its tools are unofficial fan-made web tools and are not affiliated with or endorsed by SQUARE ENIX CO., LTD. The creator assumes no responsibility for any loss or damage arising from the use of this site."

  }

};



/* ==========================================
   LANGUAGE
========================================== */

const languageButtons =
  document.querySelectorAll(
    ".language-switch button"
  );


function changeLanguage(language) {

  currentLanguage =
    language;


  document.documentElement.lang =
    language;


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      element => {

        const key =
          element.dataset.i18n;


        const value =
          translations[language][key];


        if (
          value !== undefined
        ) {

          element.textContent =
            value;

        }

      }
    );


  languageButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === language
      );

    }
  );

}


languageButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  }
);



/* ==========================================
   IMAGE LIGHTBOX
========================================== */

const imageLightbox =
  document.getElementById(
    "imageLightbox"
  );


const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );


const lightboxClose =
  document.getElementById(
    "lightboxClose"
  );


const exampleImageButtons =
  document.querySelectorAll(
    ".example-image-button"
  );


function openLightbox(image) {

  if (
    !image ||
    !imageLightbox ||
    !lightboxImage
  ) {

    return;

  }


  lightboxImage.src =
    image.src;


  lightboxImage.alt =
    image.alt;


  imageLightbox.classList.add(
    "active"
  );


  imageLightbox.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "lightbox-open"
  );

}


function closeLightbox() {

  if (
    !imageLightbox ||
    !lightboxImage
  ) {

    return;

  }


  imageLightbox.classList.remove(
    "active"
  );


  imageLightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "lightbox-open"
  );


  lightboxImage.src =
    "";

}


exampleImageButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        event.stopPropagation();


        const image =
          button.querySelector(
            "img"
          );


        openLightbox(
          image
        );

      }
    );

  }
);


if (
  lightboxClose
) {

  lightboxClose.addEventListener(
    "click",
    event => {

      event.preventDefault();

      event.stopPropagation();


      closeLightbox();

    }
  );

}


if (
  imageLightbox
) {

  imageLightbox.addEventListener(
    "click",
    event => {

      if (
        event.target === imageLightbox
      ) {

        closeLightbox();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      imageLightbox &&
      imageLightbox.classList.contains(
        "active"
      )
    ) {

      closeLightbox();

    }

  }
);



/* ==========================================
   INITIAL LANGUAGE
========================================== */

changeLanguage("ja");