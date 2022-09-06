/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/footer_wave.svg */ "./src/assets/svg/footer_wave.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/2.svg */ "./src/assets/svg/2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".textbookContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 40px;\n  margin-top: 130px;\n  border-radius: 20px;\n  margin-bottom: 70px;\n}\n\n.contentContainer {\n  display: flex;\n  position: relative;\n}\n\n.gameLogo {\n  width: 40px;\n  height: 40px;\n}\n\n.gamesContainer {\n  width: 400px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  font-size: 17px;\n}\n\n.gameBtn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n  padding: 10px;\n  cursor: pointer;\n  background-color: rgb(250, 252, 254);\n  border-radius: 10px;\n  width: 150px;\n}\n\n.pageSelector {\n  width: 130px;\n  height: 40px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  color: rgb(250, 252, 254);\n  margin-top: 35px;\n  margin-bottom: 10px;\n  font-size: 32px;\n  background: rgba(255, 255, 255, 0.1215686275);\n  padding: 10px;\n}\n\n.groupSelector {\n  margin: 10px 30px 10px 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30px;\n  background-color: rgba(255, 255, 255, 0.1215686275);\n  border-radius: 50px;\n  width: 90px;\n  height: 470px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n}\n\n#currentPage {\n  width: 33px;\n  text-align: center;\n}\n\n.groupCircle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n.groupCircle:hover {\n  transform: scale(1.4);\n}\n\n.selectedGroup {\n  border: 2px solid rgb(240, 199, 67);\n}\n\n[data-group=\"0\"] {\n  background-color: #7B7FF1;\n}\n\n[data-group=\"1\"] {\n  background-color: #7276E0;\n}\n\n[data-group=\"2\"] {\n  background-color: #6569C7;\n}\n\n[data-group=\"3\"] {\n  background-color: #5255A1;\n}\n\n[data-group=\"4\"] {\n  background-color: #313361;\n}\n\n[data-group=\"5\"] {\n  background-color: #2A1D61;\n}\n\n.disabled {\n  pointer-events: none;\n  filter: grayscale(1);\n}\n\n.completedIcon {\n  position: absolute;\n  top: 0px;\n  right: -120px;\n  height: 65px;\n  width: 65px;\n  display: none;\n}\n\n.onlyDifficultToggle {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: -100px;\n  left: 50px;\n  cursor: pointer;\n}\n.onlyDifficultToggle span {\n  font-size: 44px;\n}\n.onlyDifficultToggle span:hover {\n  color: #ffbb33;\n}\n\n.difficultPlaceholder {\n  width: 800px;\n  padding-top: 50px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 22px;\n}\n\n.difIcon {\n  display: flex;\n  justify-content: center;\n}\n\n.material-icons {\n  cursor: pointer;\n}\n\nfooter {\n  background: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 5vh;\n  padding: 0 20px;\n  font-weight: 500;\n  background: #ffbb33;\n  font-family: \"DynaPuff\", cursive;\n}\n\na {\n  text-decoration: none;\n}\n\nheader {\n  display: flex;\n  min-height: 5vh;\n  position: relative;\n  background: #ffbb33;\n}\nheader #logged-user-container {\n  display: flex;\n  position: absolute;\n  border: none;\n  right: 0;\n}\nheader #page-title {\n  position: relative;\n  font-size: 32px;\n  text-transform: uppercase;\n  line-height: 40px;\n  color: black;\n  margin-left: 570px;\n  font-family: \"DynaPuff\", cursive;\n}\n\n.mainPageContainer {\n  width: 600px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin: 110px 0 30px 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n  row-gap: 45px;\n}\n\n.teamCard {\n  height: 460px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 5px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n}\n\n.photo {\n  width: 300px;\n  height: 340px;\n  margin-bottom: 10px;\n}\n\n.git {\n  height: 18px;\n  width: 18px;\n}\n\n.teamDescription {\n  margin-top: 10px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tittle_text {\n  background-color: #ffb108;\n  border-radius: 10px;\n  padding: 10px 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  letter-spacing: 0.05rem;\n  margin: 1rem 0;\n  font-size: 30px;\n}\n.tittle_text:hover {\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\n  transform: scale(1.02);\n}\n\n.main_text {\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n\n.gamesPageContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n  margin-top: 130px;\n}\n\n.gameCard {\n  width: 200px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n  padding: 30px;\n}\n.gameCard img {\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n}\n.gameCard div:last-child {\n  margin-top: 15px;\n}\n\n.gameDescription {\n  margin-top: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.gameBackBtn {\n  width: 140px;\n  height: 35px;\n  margin-top: 30px;\n  background-color: coral;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.gameBackBtn:hover {\n  transform: scale(1.1);\n}\n\n#statistic-container {\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n  margin: 0 auto;\n  align-items: center;\n  text-transform: uppercase;\n  font-size: 22px;\n  text-align: center;\n  margin-top: 130px;\n  margin-bottom: 100px;\n}\n#statistic-container h3, #statistic-container h2 {\n  flex: 100%;\n  margin: 10px 0;\n}\n#statistic-container h2 {\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n  border-radius: 10px;\n  padding: 5px;\n}\n#statistic-container #statistic-for-this-day {\n  background: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n#statistic-container #statistic-for-this-day #words-statistic, #statistic-container #statistic-for-this-day #game-statistic {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n#statistic-container #statistic-for-this-day #words-statistic p, #statistic-container #statistic-for-this-day #game-statistic p {\n  padding: 0 10px;\n}\n#statistic-container #statistic-for-this-day h2::after, #statistic-container #statistic-for-this-day h2::before {\n  font-family: \"Material Icons\";\n  color: rgb(255, 162, 0);\n  content: \"\\e885\";\n}\n\n#statistic-for-this-day h2 {\n  flex: 1 0 100%;\n}\n#statistic-for-this-day #words-statistic, #statistic-for-this-day #game-statistic {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#day-stat-container {\n  box-shadow: 0 0 10px 5px rgb(221, 221, 221);\n  display: flex;\n  flex-direction: column;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n}\n\n#game-stat-container {\n  display: flex;\n  -moz-column-gap: 50px;\n       column-gap: 50px;\n  justify-content: center;\n}\n\n#new-words-per-day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n  border-radius: 10px;\n}\n\n#sprint-stat-container, #audio-challenge-stat-container, #words-stat-container {\n  padding: 20px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n  border-radius: 10px;\n}\n\n.inactive {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n#wrapper_sprint_game {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10%;\n}\n\n#header_game_sprint {\n  width: 50%;\n  background-color: rgb(239, 196, 87);\n  display: flex;\n  justify-content: space-between;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n  margin-bottom: 10px;\n  padding-right: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  opacity: 0.7;\n}\n\n.header_div_1 {\n  display: flex;\n  width: 50px;\n  height: 100%;\n  font-size: 24px;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_div_2 {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-items: center;\n}\n.header_div_2 .score_sprint {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 32px;\n  width: 70px;\n  background-color: yellow;\n  border-radius: 5px;\n  box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\n}\n.header_div_2 .exet_sprint {\n  width: 50px;\n  height: 100%;\n  background-color: yellow;\n}\n\n#main_game_sprint {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  width: 50%;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgb(246, 238, 238);\n  margin-bottom: 10px;\n}\n\n.main_div_2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 20px;\n}\n\n.img_panda_sprint {\n  width: 100%;\n  height: 100%;\n}\n\n.main_div_word_question, .main_div_word_option {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  height: 30px;\n  background-color: white;\n  border-radius: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n#footer_game_sprint {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  width: 50%;\n  background-color: rgb(239, 196, 87);\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  opacity: 0.7;\n}\n\n.button_false, .button_true {\n  font-size: 16px;\n  width: 100px;\n  height: 100%;\n  padding: 5px;\n  font-weight: bold;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(239, 196, 87);\n  cursor: pointer;\n}\n\n.button_false:hover:after,\n.button_true:hover:after {\n  background-color: transparent;\n}\n\n.button_false:hover:active,\n.button_true:hover:active {\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n}\n\n.button_false:hover:active,\n.button_true:hover:active {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 15px;\n}\n\n.exit_sprint {\n  position: absolute;\n  right: 32px;\n  top: 50px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.exit_sprint:hover {\n  opacity: 1;\n}\n\n.exit_sprint:before, .exit_sprint:after {\n  position: absolute;\n  left: 15px;\n  content: \" \";\n  height: 33px;\n  width: 4px;\n  background-color: rgb(250, 247, 247);\n}\n\n.exit_sprint:before {\n  transform: rotate(45deg);\n}\n\n.exit_sprint:after {\n  transform: rotate(-45deg);\n}\n\n.blok_for_H3 {\n  box-shadow: 0 0 10px rgb(246, 238, 238);\n  border-radius: 15px;\n}\n.blok_for_H3 .form_result_h3 {\n  font-size: 26px;\n  color: rgb(250, 250, 187);\n  background-color: rgb(113, 112, 112);\n  padding: 5px;\n  opacity: 0.8;\n  box-shadow: 0 0 10px rgb(246, 238, 238);\n  border-radius: 15px;\n}\n\n.wrapper_game_sptint_result {\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n  row-gap: 10px;\n}\n.wrapper_game_sptint_result .blok_for_result {\n  display: flex;\n  justify-content: space-between;\n  width: 97%;\n  gap: 5px;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_1, .wrapper_game_sptint_result .blok_for_result .form_result_3 {\n  background-color: rgb(250, 250, 187);\n  opacity: 0.8;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_1 {\n  width: 0%;\n  opacity: 0;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 {\n  display: grid;\n  grid-template-columns: 4fr 1fr 0.5fr;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  grid-gap: 10px;\n  gap: 10px;\n  opacity: 0.8;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .tbody_result, .wrapper_game_sptint_result .blok_for_result .form_result_2 .td_wrapper, .wrapper_game_sptint_result .blok_for_result .form_result_2 .td_wrapper_true {\n  background-color: rgb(250, 250, 187);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .tbody_result {\n  min-width: 300px;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .td_wrapper_true {\n  display: grid;\n  grid-template-columns: 0.5fr;\n  border-bottom-style: dotted;\n  border-bottom-width: 3px;\n  border-bottom-color: rgb(220, 213, 213);\n  justify-content: center;\n  padding-top: 5px;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .td_wrapper_true .colore_ansver {\n  border: 2px solid black;\n  width: 70%;\n  height: 70%;\n  border-radius: 100%;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult {\n  display: grid;\n  grid-template-columns: 4fr 0.5fr 4fr;\n  border-bottom-style: dotted;\n  border-bottom-width: 3px;\n  border-bottom-color: rgb(220, 213, 213);\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult .english_word, .wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult .single, .wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult .translate_word {\n  display: grid;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n  justify-items: center;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult_ansver {\n  display: grid;\n  grid-template-columns: 1fr;\n  border-bottom-style: dotted;\n  border-bottom-width: 3px;\n  border-bottom-color: rgb(220, 213, 213);\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_2 .wrapper_rezult_ansver .correct_ansver {\n  display: grid;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n  justify-items: center;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_3 {\n  display: none;\n  width: 5%;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_3 .repeat_btn {\n  display: flex;\n  justify-content: center;\n}\n.wrapper_game_sptint_result .blok_for_result .form_result_3 .repeat_btn img {\n  width: 50%;\n}\n.wrapper_game_sptint_result .form_result_3 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n}\n.wrapper_game_sptint_result .form_result_3 .houme_btn, .wrapper_game_sptint_result .form_result_3 .return_btn, .wrapper_game_sptint_result .form_result_3 .rezerv_btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n}\n.wrapper_game_sptint_result .form_result_3 .houme_btn .img_houme_page, .wrapper_game_sptint_result .form_result_3 .return_btn .img_houme_page, .wrapper_game_sptint_result .form_result_3 .rezerv_btn .img_houme_page {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.close_btn {\n  display: flex;\n  justify-content: center;\n}\n.close_btn .level_0_number,\n.close_btn .level_1_number,\n.close_btn .level_2_number,\n.close_btn .level_3_number,\n.close_btn .level_4_number,\n.close_btn .level_5_number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 5rem;\n  height: 5rem;\n  background-color: #ffbb33;\n  border-radius: 100px;\n  font-size: 3rem;\n  font-weight: bold;\n  color: wheat;\n  opacity: 0.9;\n  cursor: pointer;\n}\n.close_btn .level_0_number:hover,\n.close_btn .level_1_number:hover,\n.close_btn .level_2_number:hover,\n.close_btn .level_3_number:hover,\n.close_btn .level_4_number:hover,\n.close_btn .level_5_number:hover {\n  box-shadow: 0 0 30px rgb(0, 0, 0);\n  font-size: 4rem;\n  color: white;\n}\n.close_btn .img_panda_0,\n.close_btn .img_panda_1,\n.close_btn .img_panda_2,\n.close_btn .img_panda_3,\n.close_btn .img_panda_4,\n.close_btn .img_panda_5 {\n  width: 6rem;\n  height: 6rem;\n}\n.close_btn .sprint_level {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.close_btn .sprint_level .level_0_imeg,\n.close_btn .sprint_level .level_1_imeg,\n.close_btn .sprint_level .level_2_imeg,\n.close_btn .sprint_level .level_3_imeg,\n.close_btn .sprint_level .level_4_imeg,\n.close_btn .sprint_level .level_5_imeg {\n  width: 6rem;\n  height: 6rem;\n  display: flex;\n  justify-content: flex-end;\n  opacity: 0;\n}\n.close_btn .sprint_level .level_0_number:hover ~ .level_0_imeg,\n.close_btn .sprint_level .level_1_number:hover ~ .level_1_imeg,\n.close_btn .sprint_level .level_2_number:hover ~ .level_2_imeg,\n.close_btn .sprint_level .level_3_number:hover ~ .level_3_imeg,\n.close_btn .sprint_level .level_4_number:hover ~ .level_4_imeg,\n.close_btn .sprint_level .level_5_number:hover ~ .level_5_imeg {\n  opacity: 1;\n}\n\n.close_btn_sprint_interfece {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form_result_word {\n  display: grid;\n}\n\n.close_btn {\n  gap: 15px;\n}\n\n#blok_three {\n  display: flex;\n  width: 20vw;\n  height: 7vh;\n  background-color: goldenrod;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n}\n#blok_three .blok_one_three {\n  width: 100%;\n  height: 90%;\n  background-color: transparent;\n  border-radius: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);\n}\n#blok_three .blok_one_three .button_if_cant_0 {\n  text-align: center;\n  padding-top: 10px;\n}\n#blok_three .blok_one_three:hover {\n  cursor: pointer;\n}\n#blok_three .blok_one_three:hover:after {\n  background-color: transparent;\n}\n#blok_three .blok_one_three:active {\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n}\n#blok_three .blok_one_three:active {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 19px;\n}\n\n#blok_one, #blok_two {\n  display: flex;\n  width: 80vw;\n  height: 20vh;\n  background-color: rgb(239, 196, 87);\n  border-radius: 15px;\n  gap: 5px;\n  opacity: 0.9;\n}\n#blok_one .blok_one_in_one,\n#blok_one .blok_two_in_one,\n#blok_one .blok_three_in_one,\n#blok_one .blok_one_in_two,\n#blok_one .blok_two_in_two,\n#blok_one .blok_three_in_two, #blok_two .blok_one_in_one,\n#blok_two .blok_two_in_one,\n#blok_two .blok_three_in_one,\n#blok_two .blok_one_in_two,\n#blok_two .blok_two_in_two,\n#blok_two .blok_three_in_two {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n#blok_one .blok_one_in_one .blok_one_0,\n#blok_one .blok_one_in_one .blok_two_0,\n#blok_one .blok_one_in_one .blok_three_0,\n#blok_one .blok_one_in_one .blok_four_0,\n#blok_one .blok_one_in_one .blok_five_0,\n#blok_one .blok_two_in_one .blok_one_0,\n#blok_one .blok_two_in_one .blok_two_0,\n#blok_one .blok_two_in_one .blok_three_0,\n#blok_one .blok_two_in_one .blok_four_0,\n#blok_one .blok_two_in_one .blok_five_0,\n#blok_one .blok_three_in_one .blok_one_0,\n#blok_one .blok_three_in_one .blok_two_0,\n#blok_one .blok_three_in_one .blok_three_0,\n#blok_one .blok_three_in_one .blok_four_0,\n#blok_one .blok_three_in_one .blok_five_0,\n#blok_one .blok_one_in_two .blok_one_0,\n#blok_one .blok_one_in_two .blok_two_0,\n#blok_one .blok_one_in_two .blok_three_0,\n#blok_one .blok_one_in_two .blok_four_0,\n#blok_one .blok_one_in_two .blok_five_0,\n#blok_one .blok_two_in_two .blok_one_0,\n#blok_one .blok_two_in_two .blok_two_0,\n#blok_one .blok_two_in_two .blok_three_0,\n#blok_one .blok_two_in_two .blok_four_0,\n#blok_one .blok_two_in_two .blok_five_0,\n#blok_one .blok_three_in_two .blok_one_0,\n#blok_one .blok_three_in_two .blok_two_0,\n#blok_one .blok_three_in_two .blok_three_0,\n#blok_one .blok_three_in_two .blok_four_0,\n#blok_one .blok_three_in_two .blok_five_0, #blok_two .blok_one_in_one .blok_one_0,\n#blok_two .blok_one_in_one .blok_two_0,\n#blok_two .blok_one_in_one .blok_three_0,\n#blok_two .blok_one_in_one .blok_four_0,\n#blok_two .blok_one_in_one .blok_five_0,\n#blok_two .blok_two_in_one .blok_one_0,\n#blok_two .blok_two_in_one .blok_two_0,\n#blok_two .blok_two_in_one .blok_three_0,\n#blok_two .blok_two_in_one .blok_four_0,\n#blok_two .blok_two_in_one .blok_five_0,\n#blok_two .blok_three_in_one .blok_one_0,\n#blok_two .blok_three_in_one .blok_two_0,\n#blok_two .blok_three_in_one .blok_three_0,\n#blok_two .blok_three_in_one .blok_four_0,\n#blok_two .blok_three_in_one .blok_five_0,\n#blok_two .blok_one_in_two .blok_one_0,\n#blok_two .blok_one_in_two .blok_two_0,\n#blok_two .blok_one_in_two .blok_three_0,\n#blok_two .blok_one_in_two .blok_four_0,\n#blok_two .blok_one_in_two .blok_five_0,\n#blok_two .blok_two_in_two .blok_one_0,\n#blok_two .blok_two_in_two .blok_two_0,\n#blok_two .blok_two_in_two .blok_three_0,\n#blok_two .blok_two_in_two .blok_four_0,\n#blok_two .blok_two_in_two .blok_five_0,\n#blok_two .blok_three_in_two .blok_one_0,\n#blok_two .blok_three_in_two .blok_two_0,\n#blok_two .blok_three_in_two .blok_three_0,\n#blok_two .blok_three_in_two .blok_four_0,\n#blok_two .blok_three_in_two .blok_five_0 {\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);\n  text-align: center;\n}\n#blok_one .blok_one_in_one .blok_one_0:hover,\n#blok_one .blok_one_in_one .blok_two_0:hover,\n#blok_one .blok_one_in_one .blok_three_0:hover,\n#blok_one .blok_one_in_one .blok_four_0:hover,\n#blok_one .blok_one_in_one .blok_five_0:hover,\n#blok_one .blok_two_in_one .blok_one_0:hover,\n#blok_one .blok_two_in_one .blok_two_0:hover,\n#blok_one .blok_two_in_one .blok_three_0:hover,\n#blok_one .blok_two_in_one .blok_four_0:hover,\n#blok_one .blok_two_in_one .blok_five_0:hover,\n#blok_one .blok_three_in_one .blok_one_0:hover,\n#blok_one .blok_three_in_one .blok_two_0:hover,\n#blok_one .blok_three_in_one .blok_three_0:hover,\n#blok_one .blok_three_in_one .blok_four_0:hover,\n#blok_one .blok_three_in_one .blok_five_0:hover,\n#blok_one .blok_one_in_two .blok_one_0:hover,\n#blok_one .blok_one_in_two .blok_two_0:hover,\n#blok_one .blok_one_in_two .blok_three_0:hover,\n#blok_one .blok_one_in_two .blok_four_0:hover,\n#blok_one .blok_one_in_two .blok_five_0:hover,\n#blok_one .blok_two_in_two .blok_one_0:hover,\n#blok_one .blok_two_in_two .blok_two_0:hover,\n#blok_one .blok_two_in_two .blok_three_0:hover,\n#blok_one .blok_two_in_two .blok_four_0:hover,\n#blok_one .blok_two_in_two .blok_five_0:hover,\n#blok_one .blok_three_in_two .blok_one_0:hover,\n#blok_one .blok_three_in_two .blok_two_0:hover,\n#blok_one .blok_three_in_two .blok_three_0:hover,\n#blok_one .blok_three_in_two .blok_four_0:hover,\n#blok_one .blok_three_in_two .blok_five_0:hover, #blok_two .blok_one_in_one .blok_one_0:hover,\n#blok_two .blok_one_in_one .blok_two_0:hover,\n#blok_two .blok_one_in_one .blok_three_0:hover,\n#blok_two .blok_one_in_one .blok_four_0:hover,\n#blok_two .blok_one_in_one .blok_five_0:hover,\n#blok_two .blok_two_in_one .blok_one_0:hover,\n#blok_two .blok_two_in_one .blok_two_0:hover,\n#blok_two .blok_two_in_one .blok_three_0:hover,\n#blok_two .blok_two_in_one .blok_four_0:hover,\n#blok_two .blok_two_in_one .blok_five_0:hover,\n#blok_two .blok_three_in_one .blok_one_0:hover,\n#blok_two .blok_three_in_one .blok_two_0:hover,\n#blok_two .blok_three_in_one .blok_three_0:hover,\n#blok_two .blok_three_in_one .blok_four_0:hover,\n#blok_two .blok_three_in_one .blok_five_0:hover,\n#blok_two .blok_one_in_two .blok_one_0:hover,\n#blok_two .blok_one_in_two .blok_two_0:hover,\n#blok_two .blok_one_in_two .blok_three_0:hover,\n#blok_two .blok_one_in_two .blok_four_0:hover,\n#blok_two .blok_one_in_two .blok_five_0:hover,\n#blok_two .blok_two_in_two .blok_one_0:hover,\n#blok_two .blok_two_in_two .blok_two_0:hover,\n#blok_two .blok_two_in_two .blok_three_0:hover,\n#blok_two .blok_two_in_two .blok_four_0:hover,\n#blok_two .blok_two_in_two .blok_five_0:hover,\n#blok_two .blok_three_in_two .blok_one_0:hover,\n#blok_two .blok_three_in_two .blok_two_0:hover,\n#blok_two .blok_three_in_two .blok_three_0:hover,\n#blok_two .blok_three_in_two .blok_four_0:hover,\n#blok_two .blok_three_in_two .blok_five_0:hover {\n  cursor: pointer;\n}\n#blok_one .blok_one_in_one .blok_one_0:hover:after,\n#blok_one .blok_one_in_one .blok_two_0:hover:after,\n#blok_one .blok_one_in_one .blok_three_0:hover:after,\n#blok_one .blok_one_in_one .blok_four_0:hover:after,\n#blok_one .blok_one_in_one .blok_five_0:hover:after,\n#blok_one .blok_two_in_one .blok_one_0:hover:after,\n#blok_one .blok_two_in_one .blok_two_0:hover:after,\n#blok_one .blok_two_in_one .blok_three_0:hover:after,\n#blok_one .blok_two_in_one .blok_four_0:hover:after,\n#blok_one .blok_two_in_one .blok_five_0:hover:after,\n#blok_one .blok_three_in_one .blok_one_0:hover:after,\n#blok_one .blok_three_in_one .blok_two_0:hover:after,\n#blok_one .blok_three_in_one .blok_three_0:hover:after,\n#blok_one .blok_three_in_one .blok_four_0:hover:after,\n#blok_one .blok_three_in_one .blok_five_0:hover:after,\n#blok_one .blok_one_in_two .blok_one_0:hover:after,\n#blok_one .blok_one_in_two .blok_two_0:hover:after,\n#blok_one .blok_one_in_two .blok_three_0:hover:after,\n#blok_one .blok_one_in_two .blok_four_0:hover:after,\n#blok_one .blok_one_in_two .blok_five_0:hover:after,\n#blok_one .blok_two_in_two .blok_one_0:hover:after,\n#blok_one .blok_two_in_two .blok_two_0:hover:after,\n#blok_one .blok_two_in_two .blok_three_0:hover:after,\n#blok_one .blok_two_in_two .blok_four_0:hover:after,\n#blok_one .blok_two_in_two .blok_five_0:hover:after,\n#blok_one .blok_three_in_two .blok_one_0:hover:after,\n#blok_one .blok_three_in_two .blok_two_0:hover:after,\n#blok_one .blok_three_in_two .blok_three_0:hover:after,\n#blok_one .blok_three_in_two .blok_four_0:hover:after,\n#blok_one .blok_three_in_two .blok_five_0:hover:after, #blok_two .blok_one_in_one .blok_one_0:hover:after,\n#blok_two .blok_one_in_one .blok_two_0:hover:after,\n#blok_two .blok_one_in_one .blok_three_0:hover:after,\n#blok_two .blok_one_in_one .blok_four_0:hover:after,\n#blok_two .blok_one_in_one .blok_five_0:hover:after,\n#blok_two .blok_two_in_one .blok_one_0:hover:after,\n#blok_two .blok_two_in_one .blok_two_0:hover:after,\n#blok_two .blok_two_in_one .blok_three_0:hover:after,\n#blok_two .blok_two_in_one .blok_four_0:hover:after,\n#blok_two .blok_two_in_one .blok_five_0:hover:after,\n#blok_two .blok_three_in_one .blok_one_0:hover:after,\n#blok_two .blok_three_in_one .blok_two_0:hover:after,\n#blok_two .blok_three_in_one .blok_three_0:hover:after,\n#blok_two .blok_three_in_one .blok_four_0:hover:after,\n#blok_two .blok_three_in_one .blok_five_0:hover:after,\n#blok_two .blok_one_in_two .blok_one_0:hover:after,\n#blok_two .blok_one_in_two .blok_two_0:hover:after,\n#blok_two .blok_one_in_two .blok_three_0:hover:after,\n#blok_two .blok_one_in_two .blok_four_0:hover:after,\n#blok_two .blok_one_in_two .blok_five_0:hover:after,\n#blok_two .blok_two_in_two .blok_one_0:hover:after,\n#blok_two .blok_two_in_two .blok_two_0:hover:after,\n#blok_two .blok_two_in_two .blok_three_0:hover:after,\n#blok_two .blok_two_in_two .blok_four_0:hover:after,\n#blok_two .blok_two_in_two .blok_five_0:hover:after,\n#blok_two .blok_three_in_two .blok_one_0:hover:after,\n#blok_two .blok_three_in_two .blok_two_0:hover:after,\n#blok_two .blok_three_in_two .blok_three_0:hover:after,\n#blok_two .blok_three_in_two .blok_four_0:hover:after,\n#blok_two .blok_three_in_two .blok_five_0:hover:after {\n  background-color: transparent;\n}\n#blok_one .blok_one_in_one .blok_one_0:hover:active,\n#blok_one .blok_one_in_one .blok_two_0:hover:active,\n#blok_one .blok_one_in_one .blok_three_0:hover:active,\n#blok_one .blok_one_in_one .blok_four_0:hover:active,\n#blok_one .blok_one_in_one .blok_five_0:hover:active,\n#blok_one .blok_two_in_one .blok_one_0:hover:active,\n#blok_one .blok_two_in_one .blok_two_0:hover:active,\n#blok_one .blok_two_in_one .blok_three_0:hover:active,\n#blok_one .blok_two_in_one .blok_four_0:hover:active,\n#blok_one .blok_two_in_one .blok_five_0:hover:active,\n#blok_one .blok_three_in_one .blok_one_0:hover:active,\n#blok_one .blok_three_in_one .blok_two_0:hover:active,\n#blok_one .blok_three_in_one .blok_three_0:hover:active,\n#blok_one .blok_three_in_one .blok_four_0:hover:active,\n#blok_one .blok_three_in_one .blok_five_0:hover:active,\n#blok_one .blok_one_in_two .blok_one_0:hover:active,\n#blok_one .blok_one_in_two .blok_two_0:hover:active,\n#blok_one .blok_one_in_two .blok_three_0:hover:active,\n#blok_one .blok_one_in_two .blok_four_0:hover:active,\n#blok_one .blok_one_in_two .blok_five_0:hover:active,\n#blok_one .blok_two_in_two .blok_one_0:hover:active,\n#blok_one .blok_two_in_two .blok_two_0:hover:active,\n#blok_one .blok_two_in_two .blok_three_0:hover:active,\n#blok_one .blok_two_in_two .blok_four_0:hover:active,\n#blok_one .blok_two_in_two .blok_five_0:hover:active,\n#blok_one .blok_three_in_two .blok_one_0:hover:active,\n#blok_one .blok_three_in_two .blok_two_0:hover:active,\n#blok_one .blok_three_in_two .blok_three_0:hover:active,\n#blok_one .blok_three_in_two .blok_four_0:hover:active,\n#blok_one .blok_three_in_two .blok_five_0:hover:active, #blok_two .blok_one_in_one .blok_one_0:hover:active,\n#blok_two .blok_one_in_one .blok_two_0:hover:active,\n#blok_two .blok_one_in_one .blok_three_0:hover:active,\n#blok_two .blok_one_in_one .blok_four_0:hover:active,\n#blok_two .blok_one_in_one .blok_five_0:hover:active,\n#blok_two .blok_two_in_one .blok_one_0:hover:active,\n#blok_two .blok_two_in_one .blok_two_0:hover:active,\n#blok_two .blok_two_in_one .blok_three_0:hover:active,\n#blok_two .blok_two_in_one .blok_four_0:hover:active,\n#blok_two .blok_two_in_one .blok_five_0:hover:active,\n#blok_two .blok_three_in_one .blok_one_0:hover:active,\n#blok_two .blok_three_in_one .blok_two_0:hover:active,\n#blok_two .blok_three_in_one .blok_three_0:hover:active,\n#blok_two .blok_three_in_one .blok_four_0:hover:active,\n#blok_two .blok_three_in_one .blok_five_0:hover:active,\n#blok_two .blok_one_in_two .blok_one_0:hover:active,\n#blok_two .blok_one_in_two .blok_two_0:hover:active,\n#blok_two .blok_one_in_two .blok_three_0:hover:active,\n#blok_two .blok_one_in_two .blok_four_0:hover:active,\n#blok_two .blok_one_in_two .blok_five_0:hover:active,\n#blok_two .blok_two_in_two .blok_one_0:hover:active,\n#blok_two .blok_two_in_two .blok_two_0:hover:active,\n#blok_two .blok_two_in_two .blok_three_0:hover:active,\n#blok_two .blok_two_in_two .blok_four_0:hover:active,\n#blok_two .blok_two_in_two .blok_five_0:hover:active,\n#blok_two .blok_three_in_two .blok_one_0:hover:active,\n#blok_two .blok_three_in_two .blok_two_0:hover:active,\n#blok_two .blok_three_in_two .blok_three_0:hover:active,\n#blok_two .blok_three_in_two .blok_four_0:hover:active,\n#blok_two .blok_three_in_two .blok_five_0:hover:active {\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n}\n#blok_one .blok_one_in_one .blok_one_0:hover:active,\n#blok_one .blok_one_in_one .blok_two_0:hover:active,\n#blok_one .blok_one_in_one .blok_three_0:hover:active,\n#blok_one .blok_one_in_one .blok_four_0:hover:active,\n#blok_one .blok_one_in_one .blok_five_0:hover:active,\n#blok_one .blok_two_in_one .blok_one_0:hover:active,\n#blok_one .blok_two_in_one .blok_two_0:hover:active,\n#blok_one .blok_two_in_one .blok_three_0:hover:active,\n#blok_one .blok_two_in_one .blok_four_0:hover:active,\n#blok_one .blok_two_in_one .blok_five_0:hover:active,\n#blok_one .blok_three_in_one .blok_one_0:hover:active,\n#blok_one .blok_three_in_one .blok_two_0:hover:active,\n#blok_one .blok_three_in_one .blok_three_0:hover:active,\n#blok_one .blok_three_in_one .blok_four_0:hover:active,\n#blok_one .blok_three_in_one .blok_five_0:hover:active,\n#blok_one .blok_one_in_two .blok_one_0:hover:active,\n#blok_one .blok_one_in_two .blok_two_0:hover:active,\n#blok_one .blok_one_in_two .blok_three_0:hover:active,\n#blok_one .blok_one_in_two .blok_four_0:hover:active,\n#blok_one .blok_one_in_two .blok_five_0:hover:active,\n#blok_one .blok_two_in_two .blok_one_0:hover:active,\n#blok_one .blok_two_in_two .blok_two_0:hover:active,\n#blok_one .blok_two_in_two .blok_three_0:hover:active,\n#blok_one .blok_two_in_two .blok_four_0:hover:active,\n#blok_one .blok_two_in_two .blok_five_0:hover:active,\n#blok_one .blok_three_in_two .blok_one_0:hover:active,\n#blok_one .blok_three_in_two .blok_two_0:hover:active,\n#blok_one .blok_three_in_two .blok_three_0:hover:active,\n#blok_one .blok_three_in_two .blok_four_0:hover:active,\n#blok_one .blok_three_in_two .blok_five_0:hover:active, #blok_two .blok_one_in_one .blok_one_0:hover:active,\n#blok_two .blok_one_in_one .blok_two_0:hover:active,\n#blok_two .blok_one_in_one .blok_three_0:hover:active,\n#blok_two .blok_one_in_one .blok_four_0:hover:active,\n#blok_two .blok_one_in_one .blok_five_0:hover:active,\n#blok_two .blok_two_in_one .blok_one_0:hover:active,\n#blok_two .blok_two_in_one .blok_two_0:hover:active,\n#blok_two .blok_two_in_one .blok_three_0:hover:active,\n#blok_two .blok_two_in_one .blok_four_0:hover:active,\n#blok_two .blok_two_in_one .blok_five_0:hover:active,\n#blok_two .blok_three_in_one .blok_one_0:hover:active,\n#blok_two .blok_three_in_one .blok_two_0:hover:active,\n#blok_two .blok_three_in_one .blok_three_0:hover:active,\n#blok_two .blok_three_in_one .blok_four_0:hover:active,\n#blok_two .blok_three_in_one .blok_five_0:hover:active,\n#blok_two .blok_one_in_two .blok_one_0:hover:active,\n#blok_two .blok_one_in_two .blok_two_0:hover:active,\n#blok_two .blok_one_in_two .blok_three_0:hover:active,\n#blok_two .blok_one_in_two .blok_four_0:hover:active,\n#blok_two .blok_one_in_two .blok_five_0:hover:active,\n#blok_two .blok_two_in_two .blok_one_0:hover:active,\n#blok_two .blok_two_in_two .blok_two_0:hover:active,\n#blok_two .blok_two_in_two .blok_three_0:hover:active,\n#blok_two .blok_two_in_two .blok_four_0:hover:active,\n#blok_two .blok_two_in_two .blok_five_0:hover:active,\n#blok_two .blok_three_in_two .blok_one_0:hover:active,\n#blok_two .blok_three_in_two .blok_two_0:hover:active,\n#blok_two .blok_three_in_two .blok_three_0:hover:active,\n#blok_two .blok_three_in_two .blok_four_0:hover:active,\n#blok_two .blok_three_in_two .blok_five_0:hover:active {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 15px;\n}\n#blok_one .blok_one_in_one .blok_one_1,\n#blok_one .blok_one_in_one .blok_two_1,\n#blok_one .blok_one_in_one .blok_three_1,\n#blok_one .blok_one_in_one .blok_four_1,\n#blok_one .blok_one_in_one .blok_five_1,\n#blok_one .blok_two_in_one .blok_one_1,\n#blok_one .blok_two_in_one .blok_two_1,\n#blok_one .blok_two_in_one .blok_three_1,\n#blok_one .blok_two_in_one .blok_four_1,\n#blok_one .blok_two_in_one .blok_five_1,\n#blok_one .blok_three_in_one .blok_one_1,\n#blok_one .blok_three_in_one .blok_two_1,\n#blok_one .blok_three_in_one .blok_three_1,\n#blok_one .blok_three_in_one .blok_four_1,\n#blok_one .blok_three_in_one .blok_five_1,\n#blok_one .blok_one_in_two .blok_one_1,\n#blok_one .blok_one_in_two .blok_two_1,\n#blok_one .blok_one_in_two .blok_three_1,\n#blok_one .blok_one_in_two .blok_four_1,\n#blok_one .blok_one_in_two .blok_five_1,\n#blok_one .blok_two_in_two .blok_one_1,\n#blok_one .blok_two_in_two .blok_two_1,\n#blok_one .blok_two_in_two .blok_three_1,\n#blok_one .blok_two_in_two .blok_four_1,\n#blok_one .blok_two_in_two .blok_five_1,\n#blok_one .blok_three_in_two .blok_one_1,\n#blok_one .blok_three_in_two .blok_two_1,\n#blok_one .blok_three_in_two .blok_three_1,\n#blok_one .blok_three_in_two .blok_four_1,\n#blok_one .blok_three_in_two .blok_five_1, #blok_two .blok_one_in_one .blok_one_1,\n#blok_two .blok_one_in_one .blok_two_1,\n#blok_two .blok_one_in_one .blok_three_1,\n#blok_two .blok_one_in_one .blok_four_1,\n#blok_two .blok_one_in_one .blok_five_1,\n#blok_two .blok_two_in_one .blok_one_1,\n#blok_two .blok_two_in_one .blok_two_1,\n#blok_two .blok_two_in_one .blok_three_1,\n#blok_two .blok_two_in_one .blok_four_1,\n#blok_two .blok_two_in_one .blok_five_1,\n#blok_two .blok_three_in_one .blok_one_1,\n#blok_two .blok_three_in_one .blok_two_1,\n#blok_two .blok_three_in_one .blok_three_1,\n#blok_two .blok_three_in_one .blok_four_1,\n#blok_two .blok_three_in_one .blok_five_1,\n#blok_two .blok_one_in_two .blok_one_1,\n#blok_two .blok_one_in_two .blok_two_1,\n#blok_two .blok_one_in_two .blok_three_1,\n#blok_two .blok_one_in_two .blok_four_1,\n#blok_two .blok_one_in_two .blok_five_1,\n#blok_two .blok_two_in_two .blok_one_1,\n#blok_two .blok_two_in_two .blok_two_1,\n#blok_two .blok_two_in_two .blok_three_1,\n#blok_two .blok_two_in_two .blok_four_1,\n#blok_two .blok_two_in_two .blok_five_1,\n#blok_two .blok_three_in_two .blok_one_1,\n#blok_two .blok_three_in_two .blok_two_1,\n#blok_two .blok_three_in_two .blok_three_1,\n#blok_two .blok_three_in_two .blok_four_1,\n#blok_two .blok_three_in_two .blok_five_1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n  height: 30%;\n  background-color: bisque;\n  border-radius: 5px;\n}\n\n.wrapper_start_game {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  width: 9.375rem;\n  height: 9.375rem;\n  border-radius: 100%;\n}\n.wrapper_start_game .img_panda_audio {\n  display: flex;\n  align-items: center;\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 9.375rem;\n  height: 9.375rem;\n  border-radius: 100%;\n  -webkit-animation: Slip 1s 1s forwards;\n          animation: Slip 1s 1s forwards;\n}\n@-webkit-keyframes Slip {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n  99% {\n    opacity: 0;\n    visibility: hidden;\n    position: relative;\n  }\n  100% {\n    opacity: 0;\n    position: fixed;\n  }\n}\n@keyframes Slip {\n  0% {\n    opacity: 1;\n    visibility: visible;\n  }\n  99% {\n    opacity: 0;\n    visibility: hidden;\n    position: relative;\n  }\n  100% {\n    opacity: 0;\n    position: fixed;\n  }\n}\n\n.wrapper_rezult_audio {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 300px;\n  border-radius: 5px;\n  background-color: rgb(239, 196, 87);\n  opacity: 0.8;\n  box-shadow: 0 0 15px rgb(98, 98, 97);\n}\n.wrapper_rezult_audio .one_rezult,\n.wrapper_rezult_audio .two_rezult,\n.wrapper_rezult_audio .three_rezult {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 25%;\n}\n.wrapper_rezult_audio .one_rezult .one_rezult_0,\n.wrapper_rezult_audio .one_rezult .two_rezult_0,\n.wrapper_rezult_audio .one_rezult .three_rezult_0,\n.wrapper_rezult_audio .two_rezult .one_rezult_0,\n.wrapper_rezult_audio .two_rezult .two_rezult_0,\n.wrapper_rezult_audio .two_rezult .three_rezult_0,\n.wrapper_rezult_audio .three_rezult .one_rezult_0,\n.wrapper_rezult_audio .three_rezult .two_rezult_0,\n.wrapper_rezult_audio .three_rezult .three_rezult_0 {\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 70%;\n  height: 50%;\n  border-radius: 15px;\n  background-color: bisque;\n  box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\n}\n.wrapper_rezult_audio .one_rezult .one_rezult_1,\n.wrapper_rezult_audio .one_rezult .two_rezult_1,\n.wrapper_rezult_audio .one_rezult .three_rezult_1,\n.wrapper_rezult_audio .two_rezult .one_rezult_1,\n.wrapper_rezult_audio .two_rezult .two_rezult_1,\n.wrapper_rezult_audio .two_rezult .three_rezult_1,\n.wrapper_rezult_audio .three_rezult .one_rezult_1,\n.wrapper_rezult_audio .three_rezult .two_rezult_1,\n.wrapper_rezult_audio .three_rezult .three_rezult_1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20%;\n  height: 50%;\n  border-radius: 15px;\n  background-color: bisque;\n  box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\n}\n\n.menu_rezult {\n  display: flex;\n  justify-content: space-between;\n}\n.menu_rezult .menu_rezult_1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu_rezult .menu_rezult_1 .img_panda_logo {\n  width: 70px;\n  height: 70px;\n}\n\n.wrapper_score {\n  padding: 10px;\n  border-radius: 15px;\n  color: white;\n  font-weight: bold;\n  background-color: rgb(98, 98, 97);\n  opacity: 0.6;\n}\n\n#main-navigation {\n  transition: 1s;\n  display: flex;\n  flex-direction: column;\n  background: #ffbb33;\n  font-family: \"Rubik\";\n  border-radius: 30px;\n  margin-top: 150px;\n  margin-bottom: 50px;\n}\n#main-navigation .nav-item-wrapper {\n  display: flex;\n}\n#main-navigation .nav-item-wrapper:hover {\n  background: #7b7ff1;\n  transform: scale(1.08);\n}\n#main-navigation #control-btn-wrapper:hover {\n  background: none;\n  transform: none;\n}\n#main-navigation .nav-item-text {\n  width: 100%;\n  text-align: center;\n  line-height: 50px;\n  font-style: 32px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n#main-navigation button {\n  box-sizing: border-box;\n  border: none;\n  background-size: contain;\n  min-width: 50px;\n  min-height: 50px;\n  padding: 0 10px;\n  margin: 0;\n  font-family: \"Material Icons\";\n  font-size: 36px;\n  background: none;\n  cursor: pointer;\n}\n#main-navigation button[data-page=main]:after {\n  content: \"\\e9b0\";\n}\n#main-navigation button[data-page=statistics]:after {\n  content: \"\\e202\";\n}\n#main-navigation button[data-page=dictionary]:after {\n  content: \"\\e666\";\n}\n#main-navigation button[data-page=games]:after {\n  content: \"\\eb40\";\n}\n#main-navigation button[data-page=team]:after {\n  content: \"\\e7ef\";\n}\n\n.navigation-hide {\n  flex: 0 0 50px;\n  transition: 1s;\n}\n\n.navigation-show {\n  flex: 0 0 250px;\n  transition: 1s;\n}\n\n.content-container {\n  flex: 1 1 auto;\n}\n\n.open-menu:after {\n  content: \"\\e9bd\";\n  font-family: \"Material Icons\";\n  font-size: 36px;\n}\n\n.close-menu:after {\n  content: \"\\e5d2\";\n  font-family: \"Material Icons\";\n  font-size: 36px;\n}\n\nbody {\n  background-color: #ffffff;\n  font-family: \"Rubik\";\n  margin: 0;\n  padding: 0;\n  position: relative;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: bottom;\n}\n\n.container {\n  display: flex;\n  min-height: 90vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n}\n\n#app {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: \"Rubik\";\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWkU1Z4Y.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFU0U1Z4Y.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUU1Z4Y.woff2) format(\"woff2\");\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Rubik\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.teamContainer {\n  width: 800px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 90px 0 80px 0;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n  row-gap: 20px;\n}\n\n.teamCard {\n  height: 340px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n}\n.teamCard:hover {\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.3);\n  transform: scale(1.05);\n}\n\n.team-lead {\n  margin-top: 80px;\n}\n\n.photo {\n  width: 170px;\n  height: 170px;\n  margin-bottom: 10px;\n}\n\n.git {\n  height: 18px;\n  width: 18px;\n}\n\n.teamDescription {\n  margin-top: 10px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 10px;\n  font-size: 17px;\n}\n\n#logged-user-container {\n  margin: 10px;\n  padding: 5px;\n  border-radius: 10px;\n  background: rgb(254, 226, 187);\n  text-transform: uppercase;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n#logged-user-container button {\n  background: none;\n  border: 0px solid rgb(255, 255, 255);\n  border-radius: 10px;\n  text-transform: uppercase;\n  line-height: 30px;\n  width: 100px;\n  text-align: left;\n}\n#logged-user-container button:after {\n  position: absolute;\n  content: \"\\e853\";\n  font-family: \"Material Icons\";\n  font-size: 32px;\n}\n\n#login-form-container, #registration-form-container {\n  width: 30%;\n  margin: 0 auto;\n  display: none;\n  flex-direction: column;\n  background: linear-gradient(177.09deg, #FFFFFF 6.15%, #ffbb33 202.69%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  color: #000;\n  padding: 40px 20px;\n  align-items: center;\n}\n#login-form-container #close-modal, #registration-form-container #close-modal {\n  margin-left: auto;\n  cursor: pointer;\n}\n#login-form-container form, #registration-form-container form {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  width: 300px;\n  align-items: center;\n}\n#login-form-container form h2, #registration-form-container form h2 {\n  margin: 0;\n}\n#login-form-container form button, #registration-form-container form button {\n  font-size: 14px;\n  text-transform: uppercase;\n  background-color: #fb3;\n  color: #fff;\n  border: 2px solid #fb3;\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 3px;\n}\n#login-form-container form button:hover, #registration-form-container form button:hover {\n  border: 2px solid white;\n  background: #ffffff;\n  color: rgb(0, 0, 0);\n}\n#login-form-container form #signup-btn, #login-form-container form #login-btn, #registration-form-container form #signup-btn, #registration-form-container form #login-btn {\n  margin: 10px 0;\n  width: 260px;\n  height: 33px;\n}\n#login-form-container input, #registration-form-container input {\n  width: 250px;\n  height: 30px;\n  border-radius: 10px;\n}\n\n#registration-form-container {\n  display: flex;\n}\n\n#login-form-container {\n  display: flex;\n}\n\ninput:required:invalid {\n  position: relative;\n  border: 2px solid red;\n}\n\ninput:required:valid {\n  border: 2px solid green;\n}\n\n.wordCard {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 60vw;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;\n  padding: 10px;\n  margin: 10px 30px;\n  font-size: 12px;\n  border-radius: 10px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);\n  background-color: #f9f8fa;\n  font-size: 13px;\n}\n\n.cardImage {\n  border-radius: 10px;\n  width: 35%;\n  height: 90%;\n  margin-right: 20px;\n}\n\n.cardContent {\n  color: black;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  position: relative;\n}\n\n.cardHeader .subHeader span:nth-child(1) {\n  text-transform: capitalize;\n  font-weight: bold;\n  font-size: 18px;\n}\n.cardHeader div:nth-child(2) {\n  text-transform: capitalize;\n  color: rgb(138, 131, 131);\n}\n\n.cardBody {\n  margin: 10px 0 10px 0;\n}\n\n.subSentence {\n  color: rgb(138, 131, 131);\n}\n\n.cardAudioIcon {\n  height: 15px;\n  width: 15px;\n}\n\n.cardIndicators {\n  width: 150px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-around;\n}\n.cardIndicators span:nth-child(1)::first-letter {\n  color: green;\n}\n\n.difficult {\n  border: 2px solid rgb(255, 223, 45);\n  box-shadow: 0 0 30px #ffbb33;\n}\n.difficult .difficultIcon {\n  color: #ffbb33;\n}\n\n.learnt {\n  border: 3px solid green;\n  box-shadow: 0 0 30px green;\n}\n.learnt .learntIcon {\n  color: green;\n}\n\n.material-icons {\n  cursor: pointer;\n}\n\n.learntIcon:hover {\n  color: green;\n}\n\n.difficultIcon:hover {\n  color: #ffbb33;\n}\n\n.hidden {\n  display: none;\n}\n\n.email, .password {\n  display: block;\n  width: 20rem;\n  height: 2.5rem;\n  margin: 0 auto;\n  padding-left: 1rem;\n  border-radius: 0.3rem;\n  border: none;\n  margin-bottom: 1rem;\n}\n\n.reg_btn, .sign_btn {\n  width: 5rem;\n  height: 2.5rem;\n  background-color: #ffe474;\n  border-radius: 0.3rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  margin-bottom: 1rem;\n}\n\n.info_div {\n  margin: 0 auto;\n  width: 65%;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 1rem;\n  font-weight: 600;\n  color: red;\n  align-items: center;\n  text-align: center;\n}\n\n.name_container {\n  margin: -2.2rem 0px 4rem 0px;\n}\n\n#logged-user-container {\n  margin: 10px;\n  padding: 5px;\n  border-radius: 10px;\n  background: rgb(254, 226, 187);\n  text-transform: uppercase;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n#logged-user-container button {\n  background: none;\n  border: 0px solid rgb(255, 255, 255);\n  border-radius: 10px;\n  text-transform: uppercase;\n  line-height: 30px;\n  width: 100px;\n  text-align: left;\n}\n#logged-user-container button:after {\n  position: absolute;\n  content: \"\\e853\";\n  font-family: \"Material Icons\";\n  font-size: 32px;\n}\n\n#registration-form-container {\n  width: 30%;\n  margin: 0 auto;\n  flex-direction: column;\n  background: linear-gradient(177.09deg, #FFFFFF 6.15%, #ffbb33 202.69%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 16px;\n  color: #000;\n  padding: 40px 20px;\n  align-items: center;\n  min-width: 310px;\n}\n#registration-form-container #close-modal {\n  margin-left: auto;\n  cursor: pointer;\n}\n#registration-form-container button {\n  font-size: 14px;\n  text-transform: uppercase;\n  background-color: #fb3;\n  color: #fff;\n  border: 2px solid #fb3;\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 3px;\n}\n#registration-form-container button:hover {\n  border: 2px solid white;\n  background: #ffffff;\n  color: rgb(0, 0, 0);\n}\n#registration-form-container #close-modal {\n  text-align: center;\n  text-decoration: none;\n  padding: 10px;\n}\n\n#logged-user-container .test:after {\n  position: absolute;\n  content: \"\\e879\";\n  font-family: \"Material Icons\";\n  font-size: 32px;\n}\n\n.email-div {\n  display: flex;\n  position: absolute;\n  border: none;\n  right: 8rem;\n  top: 1.2rem;\n}\n\n.tooltip {\n  position: relative;\n  display: block;\n  height: 20px;\n  width: 20px;\n  background-color: white;\n  color: rgb(131, 131, 131);\n  box-shadow: rgb(187, 187, 187) 0 1px 2px 0;\n  text-align: center;\n  line-height: 60px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.space {\n  display: flex;\n  width: 310px;\n  margin: 0 auto;\n}\n\n.tooltip-one, .tooltip-two {\n  margin-top: 5px;\n  background-image: url(\"https://st4.depositphotos.com/20523700/37871/v/450/depositphotos_378715988-stock-illustration-question-mark-icon-flat-design.jpg\");\n  background-position: 50% 50%;\n  background-size: 20px;\n  border-radius: 50%;\n}\n\n.tooltip::before {\n  position: absolute;\n  z-index: 2;\n  display: none;\n  width: 200px;\n  max-width: 200px;\n  padding: 10px;\n  font-size: 0.8em;\n  line-height: 1.4;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  content: attr(data-title);\n}\n\n.tooltip::after {\n  position: absolute;\n  z-index: 1;\n  display: none;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  content: \"\";\n}\n\n.tooltip:hover::before,\n.tooltip:hover::after {\n  display: inline-block;\n}\n\n.tooltip.right::before {\n  top: 50%;\n  left: calc(100% + 5px);\n  transform: translateY(-50%);\n}\n\n.tooltip.right::after {\n  top: 50%;\n  left: 100%;\n  transform: translateY(-50%);\n  border-left-width: 0;\n  border-right-color: rgba(0, 0, 0, 0.8);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/style/_dictionary.scss","webpack://./src/style.scss","webpack://./src/style/_footer.scss","webpack://./src/style/_header.scss","webpack://./src/style/_main.scss","webpack://./src/style/_stats.scss","webpack://./src/games/sprint/_gameSprint.scss","webpack://./src/style/_const.scss","webpack://./src/games/audio/_gameAudio.scss","webpack://./src/style/_navigation.scss","webpack://./src/style/_global.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_team.scss","webpack://./src/style/_autorization.scss","webpack://./src/style/_wordCard.scss","webpack://./src/style/_reg.scss","webpack://./src/style/_tooltip.scss"],"names":[],"mappings":"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","sourcesContent":[".textbookContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    margin-top: 130px;\r\n    border-radius: 20px;\r\n    margin-bottom: 70px;\r\n  }\r\n  \r\n  .contentContainer{\r\n    display: flex;\r\n    position: relative;\r\n  }\r\n  \r\n  .gameLogo {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  \r\n  .gamesContainer{\r\n    width: 400px;\r\n    height: 50px;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    position: relative;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .gameBtn{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n    padding: 10px;\r\n  \r\n    cursor: pointer;\r\n    background-color: rgb(250, 252, 254);\r\n    border-radius: 10px;\r\n    width: 150px;\r\n  }\r\n  \r\n  .pageSelector{\r\n    width: 130px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n    backdrop-filter: blur(6px);\r\n    color: rgb(250, 252, 254);\r\n    margin-top: 35px;\r\n    margin-bottom: 10px;\r\n    font-size: 32px;\r\n    background: rgba(255, 255, 255, 0.1215686275);\r\n    padding: 10px;\r\n    \r\n  }\r\n  \r\n  .groupSelector{\r\n    margin: 10px 30px 10px 0;\r\n    position: sticky;\r\n    top: 30px;\r\n    background-color: #ffffff1f;\r\n    border-radius: 50px;\r\n    width: 90px;\r\n    height: 470px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  #currentPage {\r\n    width: 33px;\r\n    text-align: center;\r\n  }\r\n  .groupCircle{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  \r\n    color: white;\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n  \r\n    transition: all .1s ease-in-out;\r\n  \r\n    &:hover {\r\n      transform: scale(1.4);\r\n    }\r\n  }\r\n  \r\n  .selectedGroup{\r\n    border: 2px solid rgb(240, 199, 67)\r\n  }\r\n  \r\n  [data-group=\"0\"] {\r\n    background-color: #7B7FF1;\r\n  }\r\n  \r\n  [data-group=\"1\"] {\r\n    background-color: #7276E0;\r\n  }\r\n  \r\n  [data-group=\"2\"] {\r\n    background-color: #6569C7;\r\n  }\r\n  \r\n  [data-group=\"3\"] {\r\n    background-color: #5255A1;\r\n  }\r\n  \r\n  [data-group=\"4\"] {\r\n    background-color: #313361;\r\n  }\r\n  \r\n  [data-group=\"5\"] {\r\n    background-color: #2A1D61;\r\n  }\r\n  \r\n  .disabled{\r\n    pointer-events: none;\r\n    filter: grayscale(1);\r\n  }\r\n  \r\n  .completedIcon{\r\n    position: absolute;\r\n    top: 0px;\r\n    right: -120px;\r\n    height: 65px;\r\n    width: 65px;\r\n    display: none;\r\n  }\r\n  \r\n  .onlyDifficultToggle{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n  \r\n    position: absolute;\r\n    top: -100px;\r\n    left: 50px;\r\n  \r\n    span{\r\n      font-size: 44px;\r\n      &:hover {\r\n        color: #ffbb33;\r\n      }\r\n    }\r\n  \r\n    cursor: pointer;\r\n  }\r\n  \r\n  .difficultPlaceholder{\r\n    width: 800px;\r\n    padding-top: 50px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .difIcon{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .material-icons {\r\n    cursor: pointer;\r\n  }","@import './style/dictionary';\r\n//<<<<<<< HEAD\r\n@import './style/footer';\r\n//=======\r\n//@import './style/footer.scss';\r\n//@import './style/game№1.scss';\r\n//@import './style/game№2';\r\n//>>>>>>> develop\r\n@import './style/header';\r\n@import './style/main';\r\n@import './style/stats';\r\n@import './style/const';\r\n@import './games/sprint/gameSprint';\r\n@import './games/audio/gameAudio';\r\n@import './style/navigation';\r\n@import './style/global';\r\n@import './style/fonts';\r\n@import './style/team';\r\n@import './style/autorization';\r\n@import './style/wordCard';\r\n@import './style/reg';\r\n@import './style/tooltip';\r\n\r\n*{\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\n","footer {\r\n    background: #ffffff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    min-height: 5vh;\r\n    padding: 0 20px;\r\n    font-weight: 500;\r\n    background:#ffbb33;\r\n    font-family: 'DynaPuff', cursive;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}","header {\r\n    display: flex;\r\n    min-height: 5vh;\r\n    position: relative;\r\n    background:#ffbb33;\r\n    #logged-user-container {\r\n        display: flex;\r\n        position: absolute;\r\n        border: none;\r\n        right: 0;\r\n      }\r\n    #page-title {\r\n        position: relative;\r\n        font-size: 32px;\r\n        text-transform: uppercase;\r\n        line-height: 40px;\r\n        color: black;\r\n        margin-left: 570px;\r\n        font-family: 'DynaPuff', cursive;\r\n      \r\n      }\r\n}\r\n",".mainPageContainer{\r\n    width: 600px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    margin: 110px 0 30px 0;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    column-gap: 30px;\r\n    row-gap: 45px;\r\n  }\r\n  \r\n  .teamCard{\r\n    height: 460px;\r\n    width: 300px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n  }\r\n  \r\n  .photo{\r\n    width: 300px;\r\n    height: 340px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .git{\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n  \r\n  .teamDescription{\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n  }\r\n  \r\n  .tittle_text {\r\n    background-color: #ffb108;\r\n    border-radius: 10px;\r\n    padding: 10px 20px;\r\n    width: fit-content;\r\n    letter-spacing: 0.05rem;\r\n    margin: 1rem 0;\r\n    font-size: 30px;\r\n    &:hover {\r\n      box-shadow: 1px 3px 4px rgb(0 0 0 / 20%);\r\n      transform: scale(1.02);\r\n  }\r\n  }\r\n  .main_text {\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n  }\r\n  \r\n  .gamesPageContainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 600px;\r\n    margin-top: 130px;\r\n}\r\n\r\n\r\n.gameCard {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n    padding: 30px;\r\n\r\n\r\n    img {\r\n        width: 50px;\r\n        height: 50px;\r\n        margin: 10px;\r\n    }\r\n\r\n    div:last-child {\r\n        margin-top: 15px;\r\n    }\r\n}\r\n\r\n.gameDescription {\r\n    margin-top: 5px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.gameBackBtn{\r\n    width: 140px;\r\n    height: 35px;\r\n    margin-top: 30px;\r\n    background-color: coral;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  \r\n    transition: all .1s ease-in-out;\r\n    cursor: pointer;\r\n  \r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }","#statistic-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 30px;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    margin-top: 130px;\r\n    margin-bottom: 100px;\r\n    h3, h2{\r\n        flex: 100%;\r\n        margin: 10px 0;\r\n    }\r\n    h2{\r\n        box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n        background-color: #f9f8fa;\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n    }\r\n\r\n    #statistic-for-this-day{\r\n        background: white;\r\n        border-radius: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        #words-statistic, #game-statistic{\r\n            padding: 20px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            p{\r\n                padding: 0 10px;\r\n            }\r\n        }\r\n        h2::after, h2::before{\r\n            font-family: \"Material Icons\";\r\n            color: rgb(255, 162, 0);\r\n            content: '\\e885';   \r\n        }\r\n    }\r\n}\r\n\r\n#statistic-for-this-day{\r\n    h2{\r\n        flex: 1 0 100%;\r\n    }\r\n    #words-statistic, #game-statistic{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n#day-stat-container{\r\n    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    column-gap: 30px;\r\n}\r\n\r\n#game-stat-container{\r\n    display: flex;\r\n    column-gap: 50px;\r\n    justify-content: center;\r\n}\r\n\r\n#new-words-per-day{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background: white;\r\n    border-radius: 10px;\r\n}\r\n#sprint-stat-container, #audio-challenge-stat-container, #words-stat-container{\r\n    padding: 20px;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n    border-radius: 10px;\r\n\r\n}\r\n.inactive{\r\n    display: none;\r\n}\r\n.active{\r\n    display: block;\r\n}\r\n","// .container{\r\n//   background: url('./assets/png/bambuk_1.jpg');\r\n// }\r\n#wrapper_sprint_game{\r\n  padding-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 10%;\r\n}\r\n#header_game_sprint{\r\n  width: 50%;\r\n  background-color:  rgb(239, 196, 87); \r\n  display: flex;\r\n  justify-content:space-between;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.7);\r\n  margin-bottom: 10px;\r\n  padding-right: 5px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  opacity: 0.7;\r\n\r\n}\r\n.header_div_1{\r\n  display: flex;\r\n  width: 50px;\r\n  height: 100%;\r\n  font-size: 24px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.header_div_2{\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  justify-items: center;\r\n  .score_sprint{\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 32px;\r\n    width: 70px;\r\n    background-color: yellow;\r\n    border-radius: 5px;\r\n    box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\r\n  }\r\n  .exet_sprint{\r\n    width: 50px;\r\n    height: 100%;\r\n    background-color: yellow;\r\n  }\r\n}\r\n#main_game_sprint{\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  width: 50%;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 20px rgb(246, 238, 238);\r\n  margin-bottom: 10px; \r\n}\r\n.main_div_2{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  gap: 20px;\r\n}\r\n.img_panda_sprint{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.main_div_word_question, .main_div_word_option{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 80%;\r\n  height: 30px;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n#footer_game_sprint{\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  width: 50%;\r\n  background-color:  rgb(239, 196, 87);\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.7);\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  opacity: 0.7;\r\n}\r\n.button_false, .button_true{\r\n  font-size: 16px;\r\n  width: 100px;\r\n  height: 100%;\r\n  padding: 5px;  \r\n  font-weight: bold;\r\n  box-shadow: 0 0 5px rgb(0, 0, 0, 0.7);\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: rgb(239, 196, 87);\r\n  cursor: pointer;\r\n}\r\n.button_false:hover:after,\r\n.button_true:hover:after{\r\n  background-color: transparent;\r\n}\r\n.button_false:hover:active,\r\n.button_true:hover:active{\r\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  font-size: 15px;\r\n}\r\n.exit_sprint {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 50px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n  }\r\n  .exit_sprint:hover {\r\n  opacity: 1;\r\n  }\r\n  .exit_sprint:before, .exit_sprint:after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 4px;\r\n  background-color: rgb(250, 247, 247);\r\n  }\r\n  .exit_sprint:before {\r\n  transform: rotate(45deg);\r\n  }\r\n  .exit_sprint:after {\r\n  transform: rotate(-45deg);\r\n  }\r\n.blok_for_H3{\r\n  box-shadow: 0 0 10px rgb(246, 238, 238);\r\n  border-radius: 15px;\r\n  .form_result_h3{\r\n    font-size: 26px;\r\n    color: $color-h3;\r\n    background-color: rgb(113, 112, 112);\r\n    padding: 5px;\r\n    opacity: 0.8;    \r\n    box-shadow: 0 0 10px rgb(246, 238, 238); \r\n    border-radius: 15px;  \r\n  } \r\n} \r\n.wrapper_game_sptint_result{\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 50%;\r\n  row-gap: 10px;\r\n  .blok_for_result{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 97%;\r\n    gap: 5px;\r\n    .form_result_1, .form_result_3{\r\n      background-color: $background-gameSprint;\r\n      opacity: 0.8;      \r\n    }\r\n    .form_result_1{\r\n      width: 0%;\r\n      opacity: 0;\r\n    }\r\n    .form_result_2{\r\n      display: grid;\r\n      grid-template-columns: 4fr 1fr 0.5fr;\r\n      padding-top: 5px;\r\n      padding-bottom: 5px;\r\n      gap: 10px;\r\n      opacity: 0.8;      \r\n      .tbody_result, .td_wrapper, .td_wrapper_true{\r\n        background-color: $background-gameSprint;\r\n        box-shadow: 0 0 10px rgba(0,0,0,0.7);        \r\n      }\r\n      .tbody_result{\r\n        min-width: 300px;\r\n      }\r\n      .td_wrapper_true{\r\n        display: grid;\r\n        grid-template-columns: 0.5fr;\r\n        border-bottom-style: dotted;\r\n        border-bottom-width: 3px;\r\n        border-bottom-color: rgb(220, 213, 213);\r\n        justify-content: center;\r\n        padding-top: 5px;\r\n        .colore_ansver{\r\n          border: 2px solid black;\r\n          width: 70%;\r\n          height: 70%;\r\n          border-radius: 100%;\r\n        }\r\n      }\r\n      .wrapper_rezult{\r\n        display: grid;\r\n        grid-template-columns: 4fr 0.5fr 4fr;\r\n        border-bottom-style: dotted;\r\n        border-bottom-width: 3px;\r\n        border-bottom-color: rgb(220, 213, 213);           \r\n        .english_word, .single, .translate_word{\r\n          display: grid;\r\n          overflow: hidden;\r\n          font-size: 14px;\r\n          font-weight: bold;\r\n          justify-items: center;\r\n        }\r\n      }\r\n      .wrapper_rezult_ansver{ \r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        border-bottom-style: dotted;\r\n        border-bottom-width: 3px;\r\n        border-bottom-color: rgb(220, 213, 213);  \r\n        .correct_ansver{\r\n          display: grid;\r\n          overflow: hidden;\r\n          font-size: 14px;\r\n          font-weight: bold;\r\n          justify-items: center;\r\n        }\r\n      }\r\n    }\r\n    .form_result_3{\r\n      display: none;\r\n      width: 5%;\r\n      .repeat_btn{\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n      .repeat_btn img{\r\n        width: 50%;\r\n      }\r\n    }\r\n  }  \r\n  .form_result_3{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 32px;\r\n    .houme_btn, .return_btn, .rezerv_btn{\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 30px;\r\n      height: 30px;\r\n      .img_houme_page{\r\n        width: 30px;\r\n        height: 30px;\r\n        border-radius: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n.close_btn{\r\n  display: flex;\r\n  justify-content: center;\r\n  .level_0_number, \r\n  .level_1_number, \r\n  .level_2_number, \r\n  .level_3_number, \r\n  .level_4_number, \r\n  .level_5_number{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-color: $color-active;\r\n    border-radius: 100px;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n    color: wheat;\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n  }\r\n  .level_0_number:hover, \r\n  .level_1_number:hover,\r\n  .level_2_number:hover,\r\n  .level_3_number:hover,\r\n  .level_4_number:hover,\r\n  .level_5_number:hover{\r\n    box-shadow: 0 0 30px rgba(0,0,0,1);\r\n    font-size: 4rem;\r\n    color:white;\r\n  }  \r\n  .img_panda_0,\r\n  .img_panda_1,\r\n  .img_panda_2,\r\n  .img_panda_3,\r\n  .img_panda_4,\r\n  .img_panda_5{\r\n  width: 6rem;\r\n  height: 6rem;\r\n  }\r\n  .sprint_level{\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    .level_0_imeg,\r\n    .level_1_imeg,\r\n    .level_2_imeg,\r\n    .level_3_imeg,\r\n    .level_4_imeg,\r\n    .level_5_imeg{\r\n      width: 6rem;\r\n      height: 6rem;\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      opacity: 0;   \r\n    }\r\n    .level_0_number:hover ~ .level_0_imeg,\r\n    .level_1_number:hover ~ .level_1_imeg,\r\n    .level_2_number:hover ~ .level_2_imeg,\r\n    .level_3_number:hover ~ .level_3_imeg,\r\n    .level_4_number:hover ~ .level_4_imeg,\r\n    .level_5_number:hover ~ .level_5_imeg{\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n.close_btn_sprint_interfece{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.form_result_word{\r\n  display: grid;\r\n}","//font\r\n$size-h1: 35px;\r\n$size-p: 16px;\r\n\r\n//text color\r\n//<<<<<<< HEAD\r\n$color-h1:#1010dd;\r\n$color-p:#1010dd;\r\n$color-h3:rgb(250, 250, 187);\r\n//=======\r\n$color-h1: #000000;\r\n$color-correct-answer: #078528;\r\n$color-incorrect-answer: #ff1919;\r\n\r\n$background-reg-div: #ffe474;\r\n\r\n//>>>>>>> develop\r\n\r\n// wigth\r\n$wigth-wrapper: 75rem;\r\n\r\n// background-color\r\n//<<<<<<< HEAD\r\n$background-dark: #211F20;\r\n$background-footer:#ddf80d;\r\n$background-header:#1fe768;\r\n$background-main: #413d93;\r\n$background-gameSprint:rgb(250, 250, 187);\r\n\r\n// =======\r\n$color-header: #58dba6;\r\n$background-main: #ffffff;\r\n$color-active: #ffbb33;\r\n$color-little-window: #fffec2;\r\n$color-little-window-1: #595ED6;\r\n// >>>>>>> develop\r\n\r\n//fill\r\n$background-fill: url('../img/png/panda_main.png');\r\n$background-logo: url('./src/img/png/pngwing.com.png');\r\n",".close_btn{\r\n  gap: 15px;\r\n}\r\n#blok_three{\r\n  display: flex;\r\n  width: 20vw;\r\n  height: 7vh;\r\n  background-color: goldenrod;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 15px;\r\n  .blok_one_three{\r\n    width: 100%;\r\n    height: 90%;\r\n    background-color: transparent;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 5px rgb(0, 0, 0, 0.7);\r\n    .button_if_cant_0{\r\n      text-align: center;\r\n      padding-top: 10px;\r\n      // font-size: 16px;\r\n    }\r\n    &:hover{\r\n      cursor: pointer;\r\n     }\r\n  }\r\n  .blok_one_three:hover:after{\r\n    background-color: transparent;\r\n  }\r\n  .blok_one_three:active{\r\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    font-size: 19px;\r\n  }\r\n}\r\n#blok_one, #blok_two{\r\n  display: flex;\r\n  width: 80vw;\r\n  height: 20vh;\r\n  background-color: rgb(239, 196, 87);\r\n  border-radius: 15px;\r\n  gap: 5px;\r\n  opacity: 0.9;\r\n  .blok_one_in_one, \r\n  .blok_two_in_one, \r\n  .blok_three_in_one, \r\n  .blok_one_in_two, \r\n  .blok_two_in_two,\r\n  .blok_three_in_two{\r\n     width: 50%;\r\n     display: flex;\r\n     flex-direction: column;\r\n     justify-content: space-around;\r\n     align-items: center;    \r\n     .blok_one_0,\r\n     .blok_two_0,\r\n     .blok_three_0,\r\n     .blok_four_0,\r\n     .blok_five_0{\r\n      width: 40px;\r\n      height: 40px;\r\n      background-color: transparent;\r\n      border-radius: 10px;\r\n      box-shadow: 0 0 5px rgb(0, 0, 0, 0.7);\r\n      text-align: center;\r\n      &:hover{\r\n        cursor: pointer;\r\n       }\r\n      }\r\n     .blok_one_0:hover:after,\r\n     .blok_two_0:hover:after,\r\n     .blok_three_0:hover:after,\r\n     .blok_four_0:hover:after,\r\n     .blok_five_0:hover:after{\r\n        background-color: transparent;\r\n      }\r\n      .blok_one_0:hover:active,\r\n      .blok_two_0:hover:active,\r\n      .blok_three_0:hover:active,\r\n      .blok_four_0:hover:active,\r\n      .blok_five_0:hover:active{\r\n        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\r\n        border: 1px solid rgba(0, 0, 0, 0.1);\r\n        font-size: 15px;\r\n      }\r\n     .blok_one_1,\r\n     .blok_two_1,\r\n     .blok_three_1,\r\n     .blok_four_1,\r\n     .blok_five_1{\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 90%;\r\n      height: 30%;\r\n      background-color: bisque;\r\n      border-radius: 5px;\r\n     }    \r\n  }      \r\n}\r\n.wrapper_start_game{\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  width: 9.375rem;\r\n  height: 9.375rem;\r\n  border-radius: 100%;\r\n   .img_panda_audio{\r\n    display: flex;\r\n    align-items: center;\r\n    object-fit: fill;\r\n    width: 9.375rem;\r\n    height: 9.375rem;\r\n    border-radius: 100%;\r\n    animation: Slip 1s 1s forwards;    \r\n    }\r\n    @keyframes Slip {\r\n      0% {\r\n        opacity: 1;\r\n        visibility: visible;\r\n      }\r\n      99% {\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        position: relative;\r\n      }\r\n      100% {\r\n        opacity: 0;\r\n        position: fixed;\r\n      }\r\n    }\r\n}  \r\n.wrapper_rezult_audio{\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 5px;\r\n  background-color: rgb(239, 196, 87);\r\n  opacity: 0.8;\r\n  box-shadow: 0 0 15px  rgb(98, 98, 97);\r\n  .one_rezult,\r\n  .two_rezult,\r\n  .three_rezult{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 25%;\r\n    .one_rezult_0,\r\n    .two_rezult_0,\r\n    .three_rezult_0{\r\n      padding-left: 10px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-start;\r\n      width: 70%;\r\n      height: 50%;\r\n      border-radius: 15px;\r\n      background-color: bisque;\r\n      box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\r\n    }\r\n    .one_rezult_1,\r\n    .two_rezult_1,\r\n    .three_rezult_1{\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 20%;\r\n      height: 50%;\r\n      border-radius: 15px;\r\n      background-color: bisque;\r\n      box-shadow: inset 2px 2px 10px rgba(154, 147, 140, 0.8);\r\n    }\r\n  }\r\n  \r\n}\r\n.menu_rezult{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  .menu_rezult_1{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    .img_panda_logo{\r\n      width: 70px;\r\n      height: 70px;\r\n    }\r\n  }  \r\n}\r\n.wrapper_score{\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  color: white;\r\n  font-weight: bold;\r\n  background-color:  rgb(98, 98, 97);\r\n  opacity: 0.6;\r\n}\r\n","#main-navigation {\r\n    transition: 1s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #ffbb33;\r\n    font-family: \"Rubik\";\r\n    border-radius: 30px;\r\n    margin-top: 150px;\r\n    margin-bottom: 50px;\r\n\r\n    .nav-item-wrapper {\r\n        display: flex;\r\n\r\n        &:hover {\r\n            background: #7b7ff1;\r\n            transform: scale(1.08);\r\n        }\r\n    }\r\n\r\n    #control-btn-wrapper {\r\n        &:hover {\r\n            background: none;\r\n            transform: none;\r\n        }\r\n    }\r\n\r\n    .nav-item-text {\r\n        width: 100%;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        font-style: 32px;\r\n        text-transform: uppercase;\r\n        cursor: pointer;\r\n    }\r\n\r\n    button {\r\n        box-sizing: border-box;\r\n        border: none;\r\n        background-size: contain;\r\n        min-width: 50px;\r\n        min-height: 50px;\r\n        padding: 0 10px;\r\n        margin: 0;\r\n        font-family: \"Material Icons\";\r\n        font-size: 36px; \r\n        background: none;\r\n        cursor: pointer;\r\n\r\n        &[data-page=\"main\"] {\r\n            &:after {\r\n              content: \"\\e9b0\";\r\n            }\r\n          }\r\n          &[data-page=\"statistics\"] {\r\n            &:after {\r\n              content: \"\\e202\";\r\n            }\r\n          }\r\n        &[data-page=\"dictionary\"] {\r\n            &:after {\r\n                content: \"\\e666\";\r\n            }\r\n        }\r\n\r\n        &[data-page=\"games\"] {\r\n            &:after {\r\n                content: \"\\eb40\";\r\n            }\r\n        }\r\n\r\n        &[data-page=\"team\"] {\r\n            &:after {\r\n                content: \"\\e7ef\";\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.navigation-hide {\r\n    flex: 0 0 50px;\r\n    transition: 1s;\r\n}\r\n\r\n.navigation-show {\r\n    flex: 0 0 250px;\r\n    transition: 1s;\r\n}\r\n\r\n.content-container {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.open-menu {\r\n    & {\r\n        &:after {\r\n            content: \"\\e9bd\";\r\n            font-family: \"Material Icons\";\r\n            font-size: 36px; \r\n            \r\n        }\r\n    }\r\n}\r\n\r\n.close-menu {\r\n    & {\r\n        &:after {\r\n            content: \"\\e5d2\";\r\n            font-family: \"Material Icons\";\r\n            font-size: 36px; \r\n            \r\n        }\r\n    }\r\n}","body {\r\n    background-color: $background-main;\r\n    font-family: \"Rubik\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n    background: url(../src/assets/svg/footer_wave.svg) no-repeat;\r\n    background-position: bottom;\r\n\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    min-height: 90vh;\r\n    background: url(../src/assets/svg/2.svg) no-repeat;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    // padding-bottom: 50px;\r\nfont-size: 20px;\r\nfont-family: \"Rubik\";\r\n}","/* cyrillic-ext */\r\n@font-face {\r\n    font-family: 'Rubik';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWkU1Z4Y.woff2) format('woff2');\r\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n  }\r\n  /* cyrillic */\r\n  @font-face {\r\n    font-family: 'Rubik';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFU0U1Z4Y.woff2) format('woff2');\r\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n  }\r\n  /* hebrew */\r\n  @font-face {\r\n    font-family: 'Rubik';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUU1Z4Y.woff2) format('woff2');\r\n    unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\r\n  }\r\n  /* latin-ext */\r\n  @font-face {\r\n    font-family: 'Rubik';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n  }\r\n  /* latin */\r\n  @font-face {\r\n    font-family: 'Rubik';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(https://fonts.gstatic.com/s/rubik/v18/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n  }\r\n  ",".teamContainer {\r\n    width: 800px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 90px 0 80px 0;\r\n    column-gap: 30px;\r\n    row-gap: 20px;\r\n}\r\n\r\n.teamCard {\r\n    height: 340px;\r\n    width: 300px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 10px;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n\r\n    &:hover {\r\n        box-shadow: 1px 3px 4px rgb(0 0 0 / 30%);\r\n        transform: scale(1.05);\r\n    }\r\n}\r\n\r\n.team-lead {\r\n    margin-top: 80px;\r\n}\r\n\r\n.photo {\r\n    width: 170px;\r\n    height: 170px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.git {\r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.teamDescription {\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    padding: 10px;\r\n    font-size: 17px;\r\n}","#logged-user-container{\r\n    margin: 10px;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background: rgb(254, 226, 187);\r\n    text-transform: uppercase;\r\n    column-gap: 20px;\r\n    button{\r\n        background: none;\r\n        border: 0px solid rgb(255, 255, 255);\r\n        border-radius: 10px;\r\n        text-transform: uppercase;\r\n        line-height: 30px;\r\n        width: 100px;\r\n        text-align: left;\r\n        &:after{\r\n            position: absolute;\r\n            content: '\\e853';\r\n            font-family: \"Material Icons\";\r\n            font-size: 32px;\r\n        }\r\n    }\r\n}\r\n#login-form-container, #registration-form-container{\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    display: none;\r\n    flex-direction: column;\r\n    background: linear-gradient(177.09deg, #FFFFFF 6.15%, #ffbb33 202.69%);\r\n    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);\r\n    border-radius: 16px;\r\n    color: #000;\r\n    padding: 40px 20px;\r\n    align-items: center;\r\n    #close-modal{\r\n        margin-left: auto;\r\n        cursor:pointer;\r\n    }\r\n    form{\r\n        display: flex;\r\n        flex-direction: column;\r\n        row-gap: 10px;\r\n        width: 300px;\r\n        align-items: center;\r\n        h2{\r\n            margin: 0;\r\n        }\r\n        button{\r\n            font-size: 14px;\r\n            text-transform: uppercase;\r\n            background-color: #fb3;\r\n            color: #fff;\r\n            border: 2px solid #fb3;\r\n            cursor: pointer;\r\n            border-radius: 10px;\r\n            padding: 3px;\r\n            &:hover{\r\n                border: 2px solid white;\r\n                background: #ffffff;\r\n                color: rgb(0, 0, 0);\r\n            }\r\n        }\r\n        #signup-btn, #login-btn{\r\n            margin: 10px 0;\r\n            width: 260px;\r\n            height: 33px;\r\n        }\r\n    }\r\n    input{\r\n        width: 250px;\r\n        height: 30px;\r\n        border-radius: 10px;\r\n    }\r\n}\r\n#registration-form-container{\r\n    display: flex;\r\n}\r\n#login-form-container{\r\n    display: flex;\r\n}\r\n\r\ninput:required:invalid {\r\n    position: relative;\r\n    border: 2px solid red;\r\n}\r\ninput:required:valid {\r\n    border: 2px solid green;\r\n}",".wordCard{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 60vw;\r\n    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;\r\n    padding: 10px;\r\n    margin: 10px 30px;\r\n    font-size: 12px;\r\n    border-radius: 10px;\r\n    box-shadow: 1px 3px 4px rgb(0 0 0 / 10%);\r\n    background-color: #f9f8fa;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .cardImage{\r\n    border-radius: 10px;\r\n    width: 35%;\r\n    height: 90%;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .cardContent{\r\n    color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    position: relative;\r\n  }\r\n  \r\n  .cardHeader{\r\n    .subHeader span:nth-child(1) {\r\n      text-transform: capitalize;\r\n      font-weight: bold;\r\n      font-size: 18px;\r\n    }\r\n    div:nth-child(2) {\r\n      text-transform: capitalize;\r\n      color: rgb(138, 131, 131)\r\n    }\r\n  }\r\n  \r\n \r\n  \r\n  .cardBody{\r\n    margin: 10px 0 10px 0;\r\n  }\r\n  \r\n  .subSentence{\r\n    color: rgb(138, 131, 131)\r\n  }\r\n  \r\n  .cardAudioIcon{\r\n    height: 15px;\r\n    width: 15px;\r\n  }\r\n  \r\n \r\n  \r\n  .cardIndicators{\r\n    width: 150px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  \r\n    span:nth-child(1)::first-letter {\r\n      color: green;\r\n  }\r\n  }\r\n\r\n  .difficult {\r\n    border: 2px solid rgb(255, 223, 45);\r\n    box-shadow: 0 0 30px #ffbb33;\r\n    .difficultIcon{\r\n      color: #ffbb33;\r\n    }\r\n  }\r\n  \r\n  .learnt {\r\n    border: 3px solid green;\r\n    box-shadow: 0 0 30px green;\r\n  \r\n    .learntIcon{\r\n      color: green;\r\n    }\r\n  }\r\n  \r\n  .material-icons{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .learntIcon{\r\n    &:hover {\r\n      color: green;\r\n    }\r\n  }\r\n  \r\n  .difficultIcon{\r\n    &:hover {\r\n      color: #ffbb33;\r\n    }\r\n  }\r\n  \r\n  .hidden{\r\n    display: none;\r\n  }\r\n  ",".email, .password{\r\n    display: block;\r\n    width: 20rem;\r\n    height: 2.5rem;\r\n    margin: 0 auto;\r\n    padding-left: 1rem;\r\n    border-radius: 0.3rem;\r\n    border: none;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.reg_btn, .sign_btn{\r\n    width: 5rem;\r\n    height: 2.5rem;\r\n    background-color: $background-reg-div;\r\n    border-radius: 0.3rem;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.info_div{\r\n    margin: 0 auto;\r\n    width: 65%;\r\n    font-size: 0.8rem;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding: 1rem;\r\n    font-weight: 600;\r\n    color: red;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.name_container{\r\n    margin: -2.2rem 0px 4rem 0px;\r\n}\r\n\r\n/////////////////////////////////////\r\n\r\n#logged-user-container{\r\n    margin: 10px;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    background: rgb(254, 226, 187);\r\n    text-transform: uppercase;\r\n    column-gap: 20px;\r\n\r\n    button{\r\n        background: none;\r\n        border: 0px solid rgb(255, 255, 255);\r\n        border-radius: 10px;\r\n        text-transform: uppercase;\r\n        line-height: 30px;\r\n        width: 100px;\r\n        text-align: left;\r\n\r\n        &:after{\r\n            position: absolute;\r\n            content: '\\e853';\r\n            font-family: \"Material Icons\";\r\n            font-size: 32px;\r\n        }\r\n    }\r\n}\r\n\r\n#registration-form-container{\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    flex-direction: column;\r\n    background: linear-gradient(177.09deg, #FFFFFF 6.15%, #ffbb33 202.69%);\r\n    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);\r\n    border-radius: 16px;\r\n    color: #000;\r\n    padding: 40px 20px;\r\n    align-items: center;\r\n    min-width: 310px;\r\n\r\n    #close-modal{\r\n        margin-left: auto;\r\n        cursor:pointer;\r\n    }\r\n\r\n    button{\r\n        font-size: 14px;\r\n        text-transform: uppercase;\r\n        background-color: #fb3;\r\n        color: #fff;\r\n        border: 2px solid #fb3;\r\n        cursor: pointer;\r\n        border-radius: 10px;\r\n        padding: 3px;\r\n        &:hover{\r\n            border: 2px solid white;\r\n            background: #ffffff;\r\n            color: rgb(0, 0, 0);\r\n        }\r\n    }\r\n\r\n    #close-modal{\r\n        text-align: center;\r\n        text-decoration: none;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n#logged-user-container {\r\n    .test{\r\n        &:after{\r\n            position: absolute;\r\n            content: '\\e879';\r\n            font-family: \"Material Icons\";\r\n            font-size: 32px;\r\n        }\r\n    }\r\n}\r\n\r\n.email-div {\r\n    display: flex;\r\n    position: absolute;\r\n    border: none;\r\n    right: 8rem;\r\n    top: 1.2rem;\r\n}",".tooltip{\r\n    // position: absolute;\r\n    position: relative;\r\n    display: block;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: white;\r\n    color: rgb(131, 131, 131);\r\n    box-shadow: rgb(187, 187, 187) 0 1px 2px 0;\r\n    text-align: center;\r\n    line-height: 60px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n// .tooltip-one{\r\n//     left: 58%;\r\n//     top: 33%;\r\n// }\r\n\r\n// .tooltip-two{\r\n//     left: 58%;\r\n//     top: 43.5%;\r\n// }\r\n\r\n\r\n.space {\r\n    display: flex;\r\n    width: 310px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.tooltip-one, .tooltip-two{\r\n    margin-top: 5px;\r\n    background-image: url('https://st4.depositphotos.com/20523700/37871/v/450/depositphotos_378715988-stock-illustration-question-mark-icon-flat-design.jpg');\r\n    background-position: 50% 50%;\r\n    background-size: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.tooltip::before{\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: none;\r\n    width: 200px;\r\n    max-width: 200px;\r\n    padding: 10px;\r\n    font-size: 0.8em;\r\n    line-height: 1.4;\r\n    border-radius: 5px;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    content: attr(data-title);\r\n}\r\n  \r\n.tooltip::after{\r\n    position: absolute;\r\n    z-index: 1;\r\n    display: none;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid transparent;\r\n    content: \"\";\r\n}\r\n  \r\n.tooltip:hover::before,\r\n.tooltip:hover::after{\r\n    display: inline-block;\r\n}\r\n  \r\n.tooltip.right::before{\r\n    top: 50%;\r\n    left: calc(100% + 5px);\r\n    transform: translateY(-50%);\r\n}\r\n  \r\n.tooltip.right::after {\r\n    top: 50%;\r\n    left: 100%;\r\n    transform: translateY(-50%);\r\n    border-left-width: 0;\r\n    border-right-color: rgba(0, 0, 0,0.8);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/fetchquery.ts":
/*!*******************************!*\
  !*** ./src/api/fetchquery.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "getWord": () => (/* binding */ getWord),
/* harmony export */   "getWords": () => (/* binding */ getWords),
/* harmony export */   "urlAdress": () => (/* binding */ urlAdress),
/* harmony export */   "urlAdressUser": () => (/* binding */ urlAdressUser),
/* harmony export */   "urlAdressWords": () => (/* binding */ urlAdressWords)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlAdress = 'https://rs-lang-english.herokuapp.com';
const urlAdressWords = `${urlAdress}/words`;
const urlAdressUser = `${urlAdress}/users`;
const getWords = (group, page) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`${urlAdressWords}?group=${group}&page=${page}`);
    const data_1 = yield data.json();
    return data_1;
});
const getWord = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`${urlAdressWords}/${id}`);
    const data_1 = yield data.json();
    console.log(data_1);
    return data_1;
});
const createUser = (obj) => {
    fetch(`${urlAdressUser}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });
};
// const user = {
//     name: 'Anatoliy',
//     email: 'Andrean-82@mail.ru',
//     password: '12345678',
// };
//createUser(user);


/***/ }),

/***/ "./src/api/userWordsApi.ts":
/*!*********************************!*\
  !*** ./src/api/userWordsApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUserWord": () => (/* binding */ createUserWord),
/* harmony export */   "getDifficultWords": () => (/* binding */ getDifficultWords),
/* harmony export */   "getUserWordById": () => (/* binding */ getUserWordById),
/* harmony export */   "getUsersWords": () => (/* binding */ getUsersWords),
/* harmony export */   "isWordNew": () => (/* binding */ isWordNew),
/* harmony export */   "markWordAsDifficult": () => (/* binding */ markWordAsDifficult),
/* harmony export */   "markWordAsLearned": () => (/* binding */ markWordAsLearned),
/* harmony export */   "resetWordLearnProgress": () => (/* binding */ resetWordLearnProgress),
/* harmony export */   "unmarkWordAsDifficult": () => (/* binding */ unmarkWordAsDifficult),
/* harmony export */   "unmarkWordAsLearned": () => (/* binding */ unmarkWordAsLearned),
/* harmony export */   "updateUserWord": () => (/* binding */ updateUserWord)
/* harmony export */ });
/* harmony import */ var _components_loginUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loginUtils */ "./src/components/loginUtils.ts");
/* harmony import */ var _fetchquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchquery */ "./src/api/fetchquery.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function createUserWord(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/words/${userWord.wordId}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                difficulty: userWord.difficulty,
                optional: {
                    learned: userWord.optional.learned,
                    learningProgress: userWord.optional.learningProgress,
                    correctAnswerCounter: userWord.optional.correctAnswerCounter,
                    incorrectAnswerCounter: userWord.optional.incorrectAnswerCounter,
                },
            }),
        });
        yield response.json();
    });
}
function updateUserWord(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/words/${userWord.wordId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                difficulty: userWord.difficulty,
                optional: {
                    learned: userWord.optional.learned,
                    learningProgress: userWord.optional.learningProgress,
                    correctAnswerCounter: userWord.optional.correctAnswerCounter,
                    incorrectAnswerCounter: userWord.optional.incorrectAnswerCounter,
                },
            }),
        });
        yield response.json();
    });
}
function getUsersWords() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/words`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const userWords = [];
        const res = (yield response.json());
        res.forEach((e) => {
            var _a, _b, _c, _d;
            const userWord = {
                wordId: e.wordId,
                difficulty: e.difficulty || 'notDifficult',
                optional: {
                    learned: ((_a = e.optional) === null || _a === void 0 ? void 0 : _a.learned) || false,
                    learningProgress: ((_b = e.optional) === null || _b === void 0 ? void 0 : _b.learningProgress) || 0,
                    correctAnswerCounter: ((_c = e.optional) === null || _c === void 0 ? void 0 : _c.correctAnswerCounter) || 0,
                    incorrectAnswerCounter: ((_d = e.optional) === null || _d === void 0 ? void 0 : _d.incorrectAnswerCounter) || 0,
                },
            };
            userWords.push(userWord);
        });
        return userWords;
    });
}
function getUserWordById(userWordId) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/words/${userWordId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const res = (yield response.json());
        return {
            wordId: res.wordId,
            difficulty: res.difficulty || 'notDifficult',
            optional: {
                learned: ((_a = res.optional) === null || _a === void 0 ? void 0 : _a.learned) || false,
                learningProgress: ((_b = res.optional) === null || _b === void 0 ? void 0 : _b.learningProgress) || 0,
                correctAnswerCounter: ((_c = res.optional) === null || _c === void 0 ? void 0 : _c.correctAnswerCounter) || 0,
                incorrectAnswerCounter: ((_d = res.optional) === null || _d === void 0 ? void 0 : _d.incorrectAnswerCounter) || 0,
            },
        };
    });
}
function markWordAsDifficult(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const userWords = (yield getUsersWords());
        const chosenWord = userWords.filter((word) => word.wordId === userWord);
        const params = {
            wordId: userWord,
            difficulty: 'difficult',
            optional: {
                learned: false,
                learningProgress: 0,
                correctAnswerCounter: 0,
                incorrectAnswerCounter: 0,
            },
        };
        if (chosenWord.length > 0) {
            const word = yield getUserWordById(userWord);
            word.difficulty = 'difficult';
            yield updateUserWord(word);
        }
        else {
            yield createUserWord(params);
        }
    });
}
function unmarkWordAsDifficult(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const word = yield getUserWordById(userWord);
        word.difficulty = 'notDifficult';
        if (word.optional.learningProgress >= 3) {
            word.optional.learned = true;
            word.optional.learningProgress = 0;
        }
        yield updateUserWord(word);
    });
}
function getDifficultWords() {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = JSON.stringify({ $or: [{ 'userWord.difficulty': 'difficult' }] });
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/aggregatedWords?wordsPerPage=100&filter=${filter}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const arr = yield response.json();
        return arr[0].paginatedResults;
    });
}
function markWordAsLearned(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const userWords = (yield getUsersWords());
        const chosenWord = userWords.filter((word) => word.wordId === userWord);
        const params = {
            wordId: userWord,
            difficulty: 'notDifficult',
            optional: {
                learned: true,
                learningProgress: 0,
                correctAnswerCounter: 0,
                incorrectAnswerCounter: 0,
            },
        };
        if (chosenWord.length > 0) {
            const word = yield getUserWordById(userWord);
            word.optional.learned = true;
            word.optional.learningProgress = 0;
            word.difficulty = 'notDifficult';
            yield updateUserWord(word);
        }
        else {
            yield createUserWord(params);
        }
    });
}
function unmarkWordAsLearned(userWord) {
    return __awaiter(this, void 0, void 0, function* () {
        const word = yield getUserWordById(userWord);
        word.optional.learned = false;
        word.optional.learningProgress = 0;
        yield updateUserWord(word);
    });
}
function isWordNew(word) {
    var _a, _b;
    const wordHasCorrectAnswers = !!((_a = word.userWord) === null || _a === void 0 ? void 0 : _a.optional.correctAnswerCounter);
    const wordHasIncorrectAnswers = !!((_b = word.userWord) === null || _b === void 0 ? void 0 : _b.optional.incorrectAnswerCounter);
    return !(wordHasCorrectAnswers && wordHasIncorrectAnswers);
}
function resetWordLearnProgress(wordId) {
    return __awaiter(this, void 0, void 0, function* () {
        const word = yield getUserWordById(wordId);
        word.optional.learningProgress = 0;
        updateUserWord(word);
    });
}


/***/ }),

/***/ "./src/api/wordsApi.ts":
/*!*****************************!*\
  !*** ./src/api/wordsApi.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAggregatedWords": () => (/* binding */ getAggregatedWords),
/* harmony export */   "getWordbyId": () => (/* binding */ getWordbyId),
/* harmony export */   "getWords": () => (/* binding */ getWords)
/* harmony export */ });
/* harmony import */ var _components_loginUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loginUtils */ "./src/components/loginUtils.ts");
/* harmony import */ var _fetchquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchquery */ "./src/api/fetchquery.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function getWords(groupNumber, pageNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressWords}?group=${groupNumber}&page=${pageNumber}`, {
            method: 'GET',
        });
        return response.json();
    });
}
function getWordbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressWords}/${id}`, {
            method: 'GET',
        });
        return response.json();
    });
}
function getAggregatedWords(groupNumber, pageNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdressUser}/${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().userId}/aggregatedWords?group=${groupNumber}&page=${pageNumber}&wordsPerPage=20`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${(0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const words = yield response.json();
        console.log(words[0].paginatedResults);
        return words[0].paginatedResults;
    });
}


/***/ }),

/***/ "./src/autorization/autorizationLayout.ts":
/*!************************************************!*\
  !*** ./src/autorization/autorizationLayout.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registrationLayout": () => (/* binding */ registrationLayout)
/* harmony export */ });
const registrationLayout = `
    <div class="reg_container" id="registration-form-container">
        <button id="close-modal">X</button>
        <div class="name_container"><h2>Registration</h2></div>
        <div class="space">
            <input class="email" type="email" placeholder="Enter your email..">
            <div class="tooltip right tooltip-one" data-title="Example: person@gmail.com"></div>
        </div>
        <div class="space">
            <input class="password" type="password" placeholder="Enter your password..">
            <div class="tooltip right tooltip-two" data-title="The password must contain at least one uppercase letter, one lowercase letter, and one number. The minimum password length is 8 characters."></div>
        </div>
        <button class="reg_btn">Log In</button>
        <p>Already have an account? <button class="sign_btn" id="sign_btn">Sign In</button></p>
        <div class="info_div"></div>
    </div>
`;


/***/ }),

/***/ "./src/autorization/autorizationWindow.ts":
/*!************************************************!*\
  !*** ./src/autorization/autorizationWindow.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticator": () => (/* binding */ authenticator),
/* harmony export */   "checkIn": () => (/* binding */ checkIn),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "personID": () => (/* binding */ personID),
/* harmony export */   "sendData": () => (/* binding */ sendData),
/* harmony export */   "token": () => (/* binding */ token)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_loginUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loginUtils */ "./src/components/loginUtils.ts");
/* harmony import */ var _pages_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/dictionary */ "./src/pages/dictionary.ts");
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/main */ "./src/pages/main.ts");
/* harmony import */ var _autorizationLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autorizationLayout */ "./src/autorization/autorizationLayout.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const form = document.querySelector('#logged-user-container');
const openRegFormBtn = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', form, ['openBtn']);
openRegFormBtn.innerText = 'SIGN IN';
const overlay = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', document.body, ['overlay']);
const layout = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', document.body, ['layout']);
const divForEmail = document.createElement('div');
divForEmail.className = 'email-div';
let isOpenForm = false;
let token;
let personID;
const openForm = () => {
    //localStorage.clear();
    const userData = localStorage.getItem('user');
    if ((userData === null || userData === void 0 ? void 0 : userData.includes('"logOut":"false"')) && (userData === null || userData === void 0 ? void 0 : userData.includes('"email"'))) {
        if (userData.length > 299) {
            openRegFormBtn.classList.add('test');
            openRegFormBtn.textContent = 'LOG OUT';
            const newstr = userData.split('');
            const one = newstr.splice(508);
            const two = one.splice(-19);
            const result = one.join('');
            divForEmail.textContent = result;
            form.before(divForEmail);
        }
        else if (userData.length < 300) {
            openRegFormBtn.classList.add('test');
            openRegFormBtn.textContent = 'LOG OUT';
            const newstr = userData.split('');
            const one = newstr.splice(42);
            const two = one.splice(-19);
            const result = one.join('');
            divForEmail.textContent = result;
            form.before(divForEmail);
        }
    }
    if (userData === null || userData === void 0 ? void 0 : userData.includes('"logOut":"true"')) {
        (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_1__.hideStatNav)();
        localStorage.removeItem('user');
        new _pages_dictionary__WEBPACK_IMPORTED_MODULE_2__["default"]().openPage();
    }
    const clearBtn = openRegFormBtn.addEventListener('click', () => {
        // if (isUserLoggedIn()) {
        // hideStatNav(); //убираю статистику иконку
        // localStorage.removeItem('user');//очищает локал сторидж
        // new Dictionary().openPage();//автоматически перерисовывает и скрывает кнопку сложных слов
        // }
        if (openRegFormBtn.textContent !== 'SIGN IN') {
            openRegFormBtn.textContent = 'SIGN IN';
            (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_1__.hideStatNav)();
            divForEmail.textContent = '';
            openRegFormBtn.classList.remove('test');
            new _pages_main__WEBPACK_IMPORTED_MODULE_3__["default"]().openPage();
            localStorage.removeItem('user');
            if (userData === null || userData === void 0 ? void 0 : userData.includes('"logOut":"false"')) {
                const newstr = userData.replace(/false/i, 'true');
                divForEmail.textContent = '';
                localStorage.setItem('user', newstr);
            }
        }
        else if (!isOpenForm) {
            overlay.style.display = 'block';
            layout.style.display = 'block';
            overlay.style.position = 'absolute';
            overlay.style.background = 'rgba(0, 0, 0, 0.8)';
            overlay.style.left = '0';
            overlay.style.top = '0';
            overlay.style.right = '0';
            overlay.style.bottom = '0';
            layout.innerHTML = _autorizationLayout__WEBPACK_IMPORTED_MODULE_4__.registrationLayout;
            layout.style.position = 'absolute';
            layout.style.zIndex = '1';
            layout.style.top = '5rem';
            layout.style.right = '0rem';
            layout.style.left = '0rem';
            const closeFormBtn = layout.childNodes[1].childNodes[1];
            const logInBtn = layout.childNodes[1].childNodes[9];
            const signInBtn = layout.childNodes[1].childNodes[11].childNodes[1];
            const infoDiv = layout.childNodes[1].childNodes[13];
            const logIn = logInBtn.addEventListener('click', () => {
                sendData();
                setTimeout(() => {
                    if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${layout.childNodes[1].childNodes[5].childNodes[1].textContent}!`) {
                        openRegFormBtn.classList.add('test');
                        (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_1__.showStatNav)();
                    }
                }, 1000);
            });
            const signIn = signInBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
                yield checkIn();
                //new Dictionary().openPage();
                setTimeout(() => {
                    if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${layout.childNodes[1].childNodes[5].childNodes[1].textContent}!`) {
                        openRegFormBtn.classList.add('test');
                        (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_1__.showStatNav)();
                    }
                }, 300);
            }));
            const closeForm = closeFormBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
                layout.style.display = 'none';
                isOpenForm = false;
            });
        }
    });
};
const authenticator = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const infoDiv = layout.childNodes[1].childNodes[13];
    return yield fetch('https://rs-lang-english.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
        infoDiv.innerText = '';
        data.logOut = 'false';
        localStorage.setItem('user', JSON.stringify(data));
        divForEmail.textContent = `${data.email}`;
        form.before(divForEmail);
        openRegFormBtn.textContent = 'LOG OUT';
        personID = data.id;
    })
        .catch((e) => (infoDiv.innerText = `This email address: '${email}' is already being used!\n\nTry again, but click on "SIGN IN" button.`))
        .finally(() => __awaiter(void 0, void 0, void 0, function* () {
        const rawResponse = yield fetch('https://rs-lang-english.herokuapp.com/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const content = yield rawResponse.json();
        token = content.token;
        //////////////////////////////// В случае успешной регистрации - выводит сообщение и через секунду окно закрывается.
        setTimeout(() => {
            if (infoDiv.textContent === '') {
                infoDiv.textContent = `Welcome ${email}!`;
            }
        }, 1000);
        setTimeout(() => {
            if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
                overlay.style.display = 'none';
                layout.style.display = 'none';
                isOpenForm = false;
            }
        }, 2000);
    }));
});
const sendData = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    const emailPattern = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/;
    const infoDiv = layout.childNodes[1].childNodes[13];
    const email = layout.childNodes[1].childNodes[5].childNodes[1].value.toLowerCase();
    const password = layout.childNodes[1].childNodes[7].childNodes[1].value;
    if (password.match(passwordPattern) && email.match(emailPattern)) {
        authenticator(email, password);
    }
    else {
        infoDiv.innerText = 'Incorrect login or password..';
    }
};
const checkIn = () => __awaiter(void 0, void 0, void 0, function* () {
    const emailPattern = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/;
    const email = layout.childNodes[1].childNodes[5].childNodes[1].value.toLowerCase();
    const password = layout.childNodes[1].childNodes[7].childNodes[1].value;
    const infoDiv = layout.childNodes[1].childNodes[13];
    infoDiv.innerText = '';
    const rawResponse = yield fetch('https://rs-lang-english.herokuapp.com/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const content = yield rawResponse.json().catch((e) => {
        const err = `${e}`;
        console.log(err);
        if (err.includes("Unexpected token 'F'")) {
            infoDiv.innerText = `Incorrect password: '${email}'`;
        }
        if (err.includes("Unexpected token 'C'")) {
            infoDiv.innerText = `The user does not exists: '${email}'`;
        }
    });
    if (email.match(emailPattern) && infoDiv.textContent === '') {
        divForEmail.textContent = email;
        form.before(divForEmail);
        openRegFormBtn.textContent = 'LOG OUT';
    }
    token = content.token;
    personID = content.userId;
    //////////////////////////////// В случае успешной регистрации - выводит сообщение и через секунду окно закрывается.
    setTimeout(() => {
        if (infoDiv.textContent === '') {
            infoDiv.textContent = `Welcome ${email}!`;
        }
    }, 1000);
    setTimeout(() => {
        if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
            overlay.style.display = 'none';
            layout.style.display = 'none';
            isOpenForm = false;
        }
    }, 2000);
    content.email = email;
    content.logOut = 'false';
    localStorage.setItem('user', JSON.stringify(content)); //сохранение всех данных юзера в локал сторидж
});


/***/ }),

/***/ "./src/components/bookPage.ts":
/*!************************************!*\
  !*** ./src/components/bookPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/fetchquery */ "./src/api/fetchquery.ts");
/* harmony import */ var _api_wordsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/wordsApi */ "./src/api/wordsApi.ts");
/* harmony import */ var _loginUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginUtils */ "./src/components/loginUtils.ts");
/* harmony import */ var _api_userWordsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/userWordsApi */ "./src/api/userWordsApi.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-underscore-dangle */




class BookPage {
    constructor(groupNumber, pageNumber) {
        this.pageNumber = pageNumber;
        this.groupNumber = groupNumber;
        this.isUserLoggedIn = (0,_loginUtils__WEBPACK_IMPORTED_MODULE_2__.isUserLoggedIn)();
    }
    getWords() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.isUserLoggedIn ? (0,_api_wordsApi__WEBPACK_IMPORTED_MODULE_1__.getAggregatedWords)(this.groupNumber, this.pageNumber) : (0,_api_wordsApi__WEBPACK_IMPORTED_MODULE_1__.getWords)(this.groupNumber, this.pageNumber);
        });
    }
    render(isOnlyDifficultWords = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const container = document.getElementById('content');
            const words = isOnlyDifficultWords ? yield (0,_api_userWordsApi__WEBPACK_IMPORTED_MODULE_3__.getDifficultWords)() : yield this.getWords();
            let wordsHtml = words.map((word) => this.createWordCard(word)).join('');
            if (isOnlyDifficultWords && words.length === 0) {
                wordsHtml = `
      <div class="difficultPlaceholder">
        There are no words marked as Difficult.</br>
        Click <span class="material-icons">star</span> icon on a word card to add it to this section.
      </div>
      `;
            }
            container.innerHTML = wordsHtml;
        });
    }
    createWordCard(word) {
        let isDifficult = '';
        let isLearnt = '';
        let wordGameScore = '0 / 0';
        if (word.userWord) {
            if (word.userWord.difficulty === 'difficult') {
                isDifficult = 'difficult';
            }
            if (word.userWord.optional.learned) {
                isLearnt = 'learnt';
            }
            wordGameScore = `${word.userWord.optional.correctAnswerCounter} / ${word.userWord.optional.incorrectAnswerCounter}`;
        }
        const isHidden = this.isUserLoggedIn ? '' : 'hidden';
        return `
      <div class="wordCard ${isDifficult} ${isLearnt}" data-wordId=${word._id || word.id}>
        <img class="cardImage" src="${_api_fetchquery__WEBPACK_IMPORTED_MODULE_0__.urlAdress}/${word.image}"></img>
        <div class="cardContent">
          <div class="cardHeader">
            <div class="subHeader">
              <span>${word.word}</span>
              <span>${word.transcription}</span>
              <span data-sound="${word.audio}" class="material-icons">volume_down</span>
            </div>
            <div>${word.wordTranslate}</div>
          </div>

          <div class="cardBody">
            <div>${word.textExample}</div>
            <div class="subSentence">${word.textExampleTranslate}</div>
          </div>
          <div class="cardBody">
            <div>${word.textMeaning}</div>
            <div class="subSentence">${word.textMeaningTranslate}</div>
          </div>

          <div class="cardIndicators ${isHidden}">
            <span>${wordGameScore}</span>
            <span class="material-icons learntIcon" >done</span>
            <span class="material-icons difficultIcon">star</span>
          </div>

        </div>
      </div>
    `;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookPage);


/***/ }),

/***/ "./src/components/createElement.ts":
/*!*****************************************!*\
  !*** ./src/components/createElement.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = (elementName, parent, classNames, attributes) => {
    const tag = document.createElement(elementName);
    if (classNames)
        tag.classList.add(...classNames);
    if (attributes) {
        for (const key in attributes) {
            tag.setAttribute(key, attributes[key]);
        }
    }
    if (parent)
        parent.append(tag);
    return tag;
};


/***/ }),

/***/ "./src/components/createTitle.ts":
/*!***************************************!*\
  !*** ./src/components/createTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPageTitle": () => (/* binding */ addPageTitle)
/* harmony export */ });
function addPageTitle(name) {
    const header = document.querySelector('header');
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerHTML = name;
    header.prepend(pageTitle);
}


/***/ }),

/***/ "./src/components/loginUtils.ts":
/*!**************************************!*\
  !*** ./src/components/loginUtils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorizationShowHide": () => (/* binding */ authorizationShowHide),
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "getCurrentUser": () => (/* binding */ getCurrentUser),
/* harmony export */   "hideStatNav": () => (/* binding */ hideStatNav),
/* harmony export */   "isUserLoggedIn": () => (/* binding */ isUserLoggedIn),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "showStatNav": () => (/* binding */ showStatNav)
/* harmony export */ });
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/fetchquery */ "./src/api/fetchquery.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function hideStatNav() {
    const el1 = document.querySelector('div[data-page="statistics"]');
    const el2 = document.querySelector('button[data-page="statistics"]');
    el1.classList.add('inactive');
    el2.classList.add('inactive');
}
function showStatNav() {
    const el1 = document.querySelector('div[data-page="statistics"]');
    const el2 = document.querySelector('button[data-page="statistics"]');
    el1.classList.remove('inactive');
    el2.classList.remove('inactive');
}
function authorizationShowHide(el) {
    el.classList.toggle('authorization-hide');
    el.classList.toggle('authorization-show');
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '');
}
function isUserLoggedIn() {
    return !!localStorage.getItem('user');
}
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetch(`${_api_fetchquery__WEBPACK_IMPORTED_MODULE_0__.urlAdress}/users`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        yield user.json();
    });
}
function loadUser() {
    const isLog = isUserLoggedIn();
    if (isLog) {
        showStatNav();
    }
    else {
        hideStatNav();
    }
}


/***/ }),

/***/ "./src/components/navigation.ts":
/*!**************************************!*\
  !*** ./src/components/navigation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigationFunc() {
    const controlNavBtn = document.getElementById('control-btn-nav');
    const navigation = document.getElementById('main-navigation');
    const navBtns = navigation.querySelectorAll('button');
    const navItemsText = navigation.querySelectorAll('.nav-item-text');
    let isHide = true;
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target === controlNavBtn) {
            navigation.classList.toggle('navigation-hide');
            navigation.classList.toggle('navigation-show');
            if (isHide) {
                setTimeout(() => {
                    for (let i = 0; i < navItemsText.length; i++) {
                        if (navBtns[i].dataset.page) {
                            navItemsText[i].innerHTML = `${navBtns[i].dataset.page}`;
                        }
                        else {
                            navItemsText[i].innerHTML = ' ';
                        }
                    }
                    isHide = false;
                }, 500);
                controlNavBtn.classList.add('open-menu');
                controlNavBtn.classList.remove('close-menu');
            }
            else {
                for (let i = 0; i < navItemsText.length; i++) {
                    navItemsText[i].innerHTML = '';
                }
                isHide = true;
                controlNavBtn.classList.remove('open-menu');
                controlNavBtn.classList.add('close-menu');
            }
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationFunc);


/***/ }),

/***/ "./src/components/parseJson.ts":
/*!*************************************!*\
  !*** ./src/components/parseJson.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseJsonFile": () => (/* binding */ parseJsonFile)
/* harmony export */ });
const parseJsonFile = (key) => {
    //const objString = sessionStorage.getItem(key) as string;
    //const objectForJson = JSON.parse(objString);
    //return objectForJson;
    return JSON.parse(`${sessionStorage.getItem(key)}`);
};


/***/ }),

/***/ "./src/games/audio/clickEventListenerAudio.ts":
/*!****************************************************!*\
  !*** ./src/games/audio/clickEventListenerAudio.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickButtonAudio": () => (/* binding */ clickButtonAudio)
/* harmony export */ });
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");
/* harmony import */ var _components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/gameComplecteForClickLevel */ "./src/games/components-game/gameComplecteForClickLevel.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const clickButtonAudio = () => {
    document.querySelector('.audio_challenge').onclick = function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = event.target;
            const Zero = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeZero)();
            const One = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeOne)();
            const Two = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeTwo)();
            const Three = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeThree)();
            const Four = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeFour)();
            const Five = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeFive)();
            if (button === Zero) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(Zero);
            }
            if (button === One) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(One);
            }
            if (button === Two) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(Two);
            }
            if (button === Three) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(Three);
            }
            if (button === Four) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(Four);
            }
            if (button === Five) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementAudio)(Five);
            }
        });
    };
};


/***/ }),

/***/ "./src/games/audio/gameAudioComplecteNameBtn.ts":
/*!******************************************************!*\
  !*** ./src/games/audio/gameAudioComplecteNameBtn.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nameBtn": () => (/* binding */ nameBtn)
/* harmony export */ });
function nameBtn(ArrayNumber, ArrayName) {
    for (let i = 0; i < ArrayNumber.length; i++) {
        ArrayName[i].textContent = `${ArrayNumber[i]}`;
    }
}


/***/ }),

/***/ "./src/games/audio/gameAudioInterface.ts":
/*!***********************************************!*\
  !*** ./src/games/audio/gameAudioInterface.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioGame": () => (/* binding */ audioGame)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/gameMenyDiv */ "./src/games/components-game/gameMenyDiv.ts");
/* harmony import */ var _gameAudioComplecteNameBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameAudioComplecteNameBtn */ "./src/games/audio/gameAudioComplecteNameBtn.ts");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one */ "./src/games/audio/one.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// import { keyButton } from './clickEventCode';
// import { clickButtonAnswer } from './clickEventListenerButtonAnswer';


const arrayButton = [1, 2, 3, 4, 5];
function audioGame() {
    return __awaiter(this, void 0, void 0, function* () {
        //arrayObject: []
        const closeBtn = document.querySelector('.close_btn');
        closeBtn.classList.toggle('close_btn_sprint_interfece');
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['exit_sprint'], {
            ['id']: 'exit_sprint',
            ['onclick']: `this.parentElement.style.display='none'`,
        });
        const blokOne = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['blok_one'], { ['id']: 'blok_one' });
        const blokTwo = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['blok_two'], { ['id']: 'blok_two' });
        const blokThree = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['blok_three'], { ['id']: 'blok_three' });
        const blokOneinOne = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokOne, ['blok_one_in_one'], { ['id']: 'blok_one_in_one' });
        const blokTwoinOne = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokOne, ['blok_two_in_one'], { ['id']: 'blok_two_in_one' });
        const blokThreeinOne = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokOne, ['blok_three_in_one'], { ['id']: 'blok_three_in_one' });
        const blokOneinTwo = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokTwo, ['blok_one_in_two'], { ['id']: 'blok_one_in_two' });
        const blokThreeinTwo = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokTwo, ['blok_three_in_two'], { ['id']: 'blok_three_in_two' });
        const blokTwoinTwo = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokTwo, ['blok_two_in_two'], { ['id']: 'blok_two_in_two' });
        const blokOneinThree = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokThree, ['blok_one_three'], { ['id']: 'blok_one_three' });
        const wrapperStart = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokThreeinTwo, ['wrapper_start_game']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(2, 'div', blokOneinOne, ['blok_one_']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(2, 'div', blokTwoinOne, ['blok_two_']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(2, 'div', blokThreeinOne, ['blok_three_']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(2, 'div', blokOneinTwo, ['blok_four_']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(2, 'div', blokTwoinTwo, ['blok_five_']);
        (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_1__.menyDiv)(1, 'div', blokOneinThree, ['button_if_cant_']);
        const oneKey = document.querySelector('.blok_one_0');
        const twoKey = document.querySelector('.blok_two_0');
        const threeKey = document.querySelector('.blok_three_0');
        const fourKey = document.querySelector('.blok_four_0');
        const fiveKey = document.querySelector('.blok_five_0');
        const dont = document.querySelector('.button_if_cant_0');
        dont.textContent = `I DON'T KNOW`;
        const arrayNameButton = [oneKey, twoKey, threeKey, fourKey, fiveKey];
        (0,_gameAudioComplecteNameBtn__WEBPACK_IMPORTED_MODULE_2__.nameBtn)(arrayButton, arrayNameButton);
        (0,_one__WEBPACK_IMPORTED_MODULE_3__.complecteElementAudioWord)();
    });
}


/***/ }),

/***/ "./src/games/audio/gameAudioLives.ts":
/*!*******************************************!*\
  !*** ./src/games/audio/gameAudioLives.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countLife": () => (/* binding */ countLife),
/* harmony export */   "countLifeScore": () => (/* binding */ countLifeScore)
/* harmony export */ });
/* harmony import */ var _gameCreateImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameCreateImg */ "./src/games/audio/gameCreateImg.ts");
/* harmony import */ var _gameRezultAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameRezultAudio */ "./src/games/audio/gameRezultAudio.ts");


let countLifeScore = 5;
const countLife = (trable) => {
    countLifeScore -= 1;
    if (countLifeScore > 0) {
        if (trable === 'false') {
            (0,_gameCreateImg__WEBPACK_IMPORTED_MODULE_0__.imagAnswer)('false');
        }
    }
    if (countLifeScore === 0) {
        (0,_gameRezultAudio__WEBPACK_IMPORTED_MODULE_1__.gameRezultAudio)();
    }
};


/***/ }),

/***/ "./src/games/audio/gameAudioPlayLink.ts":
/*!**********************************************!*\
  !*** ./src/games/audio/gameAudioPlayLink.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioPlayLink": () => (/* binding */ audioPlayLink)
/* harmony export */ });
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/fetchquery */ "./src/api/fetchquery.ts");

function audioPlayLink(musikLink) {
    return new Audio(`${_api_fetchquery__WEBPACK_IMPORTED_MODULE_0__.urlAdress}/${musikLink}`).play();
}


/***/ }),

/***/ "./src/games/audio/gameAudioScore.ts":
/*!*******************************************!*\
  !*** ./src/games/audio/gameAudioScore.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countAnswer": () => (/* binding */ countAnswer),
/* harmony export */   "countAnswerFalse": () => (/* binding */ countAnswerFalse),
/* harmony export */   "countAnswerScore": () => (/* binding */ countAnswerScore),
/* harmony export */   "countFalseAnswer": () => (/* binding */ countFalseAnswer),
/* harmony export */   "countTrueAnswer": () => (/* binding */ countTrueAnswer)
/* harmony export */ });
let countAnswerScore = 0;
let countTrueAnswer = 0;
let countFalseAnswer = 0;
const countAnswer = () => {
    countAnswerScore += 10;
    countTrueAnswer += 1;
};
const countAnswerFalse = () => {
    countFalseAnswer += 1;
    return countFalseAnswer;
};


/***/ }),

/***/ "./src/games/audio/gameCreateImg.ts":
/*!******************************************!*\
  !*** ./src/games/audio/gameCreateImg.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imagAnswer": () => (/* binding */ imagAnswer)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");


function imagAnswer(boolenAnswer) {
    const divForPic = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.wsg)();
    if (boolenAnswer === 'false') {
        divForPic.innerHTML = '';
        const img = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '../assets/png/angry-panda.png',
            ['alt']: 'Angry',
        });
    }
    if (boolenAnswer === 'true') {
        divForPic.innerHTML = '';
        const img = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', divForPic, ['img_panda_audio'], {
            ['id']: 'img_panda_audio',
            ['src']: '../assets/png/free-sticker-panda-7603475.png',
            ['alt']: 'Like',
        });
    }
}


/***/ }),

/***/ "./src/games/audio/gameRezultAudio.ts":
/*!********************************************!*\
  !*** ./src/games/audio/gameRezultAudio.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameRezultAudio": () => (/* binding */ gameRezultAudio)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");
/* harmony import */ var _components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-game/gameMenyDiv */ "./src/games/components-game/gameMenyDiv.ts");
/* harmony import */ var _gameAudioScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameAudioScore */ "./src/games/audio/gameAudioScore.ts");




function gameRezultAudio() {
    const app = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallenge)();
    app.innerHTML = '';
    const wrapperScore = ((0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', app, ['wrapper_score']).textContent = `YOURE SCORE: ${_gameAudioScore__WEBPACK_IMPORTED_MODULE_3__.countAnswerScore}`);
    const wrapperRezult = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', app, ['wrapper_rezult_audio']);
    const oneBlok = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['one_rezult']);
    const twoBlok = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['two_rezult']);
    const threeBlok = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['three_rezult']);
    const menuBlok = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['menu_rezult']);
    (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_2__.menyDiv)(2, 'div', oneBlok, ['one_rezult_']);
    (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_2__.menyDiv)(2, 'div', twoBlok, ['two_rezult_']);
    (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_2__.menyDiv)(2, 'div', threeBlok, ['three_rezult_']);
    (0,_components_game_gameMenyDiv__WEBPACK_IMPORTED_MODULE_2__.menyDiv)(2, 'div', menuBlok, ['menu_rezult_']);
    const trueAnswer = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultTrue)();
    const falseAnswer = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultFalse)();
    const learnWords = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultlearn)();
    trueAnswer.innerHTML = 'Correct answers';
    falseAnswer.innerHTML = 'Wrong answers';
    learnWords.innerHTML = 'Learn words today';
    const trueScore = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultScore)();
    trueScore.innerHTML = `${_gameAudioScore__WEBPACK_IMPORTED_MODULE_3__.countTrueAnswer}`;
    const falseScore = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultScoreFalse)();
    falseScore.innerHTML = `${_gameAudioScore__WEBPACK_IMPORTED_MODULE_3__.countFalseAnswer}`;
    const pic = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.audioChallengeRezultScorePic)();
    const img = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', pic, ['img_panda_logo'], {
        ['id']: 'img_panda_logo',
        ['src']: '../assets/png/pngwing.jpg',
        ['alt']: 'Logo',
    });
}


/***/ }),

/***/ "./src/games/audio/gameWrapper.ts":
/*!****************************************!*\
  !*** ./src/games/audio/gameWrapper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _gameAudioLives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameAudioLives */ "./src/games/audio/gameAudioLives.ts");
/* harmony import */ var _gameAudioScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameAudioScore */ "./src/games/audio/gameAudioScore.ts");
/* harmony import */ var _gameCreateImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameCreateImg */ "./src/games/audio/gameCreateImg.ts");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one */ "./src/games/audio/one.ts");




function wrapper(trable) {
    if (trable === 'false') {
        (0,_gameAudioLives__WEBPACK_IMPORTED_MODULE_0__.countLife)('false');
        (0,_gameAudioScore__WEBPACK_IMPORTED_MODULE_1__.countAnswerFalse)();
        (0,_one__WEBPACK_IMPORTED_MODULE_3__.complecteElementAudioWord)();
    }
    if (trable === 'true') {
        (0,_gameCreateImg__WEBPACK_IMPORTED_MODULE_2__.imagAnswer)('true');
        (0,_gameAudioScore__WEBPACK_IMPORTED_MODULE_1__.countAnswer)();
        (0,_one__WEBPACK_IMPORTED_MODULE_3__.complecteElementAudioWord)();
    }
}


/***/ }),

/***/ "./src/games/audio/one.ts":
/*!********************************!*\
  !*** ./src/games/audio/one.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complecteElementAudioWord": () => (/* binding */ complecteElementAudioWord),
/* harmony export */   "numberArray": () => (/* binding */ numberArray)
/* harmony export */ });
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/fetchquery */ "./src/api/fetchquery.ts");
/* harmony import */ var _components_parseJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/parseJson */ "./src/components/parseJson.ts");
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");
/* harmony import */ var _components_game_gameArrayforGetWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components-game/gameArrayforGetWord */ "./src/games/components-game/gameArrayforGetWord.ts");
/* harmony import */ var _components_game_gameSotrArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components-game/gameSotrArray */ "./src/games/components-game/gameSotrArray.ts");
/* harmony import */ var _sprint_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sprint/gemeSprintGetWords */ "./src/games/sprint/gemeSprintGetWords.ts");
/* harmony import */ var _gameAudioLives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameAudioLives */ "./src/games/audio/gameAudioLives.ts");
/* harmony import */ var _gameAudioPlayLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameAudioPlayLink */ "./src/games/audio/gameAudioPlayLink.ts");
/* harmony import */ var _gameRezultAudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameRezultAudio */ "./src/games/audio/gameRezultAudio.ts");
/* harmony import */ var _wrapperEventListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrapperEventListener */ "./src/games/audio/wrapperEventListener.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let numberArray = [];
function complecteElementAudioWord() {
    return __awaiter(this, void 0, void 0, function* () {
        const lengthArray = 20;
        const arrayAudioLinks = [];
        const arrayAudioIndex = [];
        const arrayIndex = (0,_components_game_gameArrayforGetWord__WEBPACK_IMPORTED_MODULE_3__.generateArray)(lengthArray).sort(() => Math.random() - 0.5);
        const one = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_2__.blokOne)();
        const two = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_2__.blokTwo)();
        const three = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_2__.blokThree)();
        const four = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_2__.blokFour)();
        const five = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_2__.blokFive)();
        const arrayHTMLElem = [one, two, three, four, five];
        try {
            const page = (0,_sprint_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_5__.randomPage)();
            const grupe = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_1__.parseJsonFile)('grupe');
            const words = yield (0,_api_fetchquery__WEBPACK_IMPORTED_MODULE_0__.getWords)(grupe, page);
            for (let i = 0; i < arrayIndex.length - 15; i++) {
                arrayHTMLElem[i].innerHTML = words[arrayIndex[i]].wordTranslate;
                arrayAudioIndex.push(arrayIndex[i]);
                arrayAudioLinks.push(words[i].audio);
            }
            numberArray = (0,_components_game_gameSotrArray__WEBPACK_IMPORTED_MODULE_4__.copySorted)(arrayAudioIndex);
            const indexForAudio = numberArray[0];
            (0,_gameAudioPlayLink__WEBPACK_IMPORTED_MODULE_7__.audioPlayLink)(words[indexForAudio].audio);
            (0,_wrapperEventListener__WEBPACK_IMPORTED_MODULE_9__.wrapperEvent)(indexForAudio, arrayAudioIndex);
        }
        catch (_a) {
            if (_gameAudioLives__WEBPACK_IMPORTED_MODULE_6__.countLifeScore > 0) {
                complecteElementAudioWord();
            }
            else {
                (0,_gameRezultAudio__WEBPACK_IMPORTED_MODULE_8__.gameRezultAudio)();
            }
        }
    });
}


/***/ }),

/***/ "./src/games/audio/wrapperEventListener.ts":
/*!*************************************************!*\
  !*** ./src/games/audio/wrapperEventListener.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperEvent": () => (/* binding */ wrapperEvent)
/* harmony export */ });
/* harmony import */ var _gameWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameWrapper */ "./src/games/audio/gameWrapper.ts");
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");


function wrapperEvent(one, numberArray) {
    const blokOneWord = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.buttonOne)();
    const blokTwoWord = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.buttonTwo)();
    const blokThreeWord = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.buttonThree)();
    const blokFourWord = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.buttonFour)();
    const blokFiveWord = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_1__.buttonFive)();
    function clickButton(event) {
        const button = event.target;
        if (one === numberArray[0]) {
            if (button === blokOneWord) {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[1]) {
            if (button === blokTwoWord) {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[2]) {
            if (button === blokThreeWord) {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[3]) {
            if (button === blokFourWord) {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[4]) {
            if (button === blokFiveWord) {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        numberArray = [];
    }
    function keyButton(event) {
        const button = event.code;
        if (one === numberArray[0]) {
            if (button === 'Digit1') {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[1]) {
            if (button === 'Digit2') {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[2]) {
            if (button === 'Digit3') {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[3]) {
            if (button === 'Digit4') {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        if (one === numberArray[4]) {
            if (button === 'Digit5') {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('true');
            }
            else {
                (0,_gameWrapper__WEBPACK_IMPORTED_MODULE_0__.wrapper)('false');
            }
        }
        numberArray = [];
    }
    const rout = document.querySelector('.audio_challenge');
    rout.addEventListener('click', clickButton);
    document.addEventListener('keyup', keyButton);
}


/***/ }),

/***/ "./src/games/components-game/constants.ts":
/*!************************************************!*\
  !*** ./src/games/components-game/constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioChallenge": () => (/* binding */ audioChallenge),
/* harmony export */   "audioChallengeRezultFalse": () => (/* binding */ audioChallengeRezultFalse),
/* harmony export */   "audioChallengeRezultScore": () => (/* binding */ audioChallengeRezultScore),
/* harmony export */   "audioChallengeRezultScoreError": () => (/* binding */ audioChallengeRezultScoreError),
/* harmony export */   "audioChallengeRezultScoreFalse": () => (/* binding */ audioChallengeRezultScoreFalse),
/* harmony export */   "audioChallengeRezultScorePic": () => (/* binding */ audioChallengeRezultScorePic),
/* harmony export */   "audioChallengeRezultTrue": () => (/* binding */ audioChallengeRezultTrue),
/* harmony export */   "audioChallengeRezultlearn": () => (/* binding */ audioChallengeRezultlearn),
/* harmony export */   "blokFive": () => (/* binding */ blokFive),
/* harmony export */   "blokFour": () => (/* binding */ blokFour),
/* harmony export */   "blokOne": () => (/* binding */ blokOne),
/* harmony export */   "blokThree": () => (/* binding */ blokThree),
/* harmony export */   "blokTwo": () => (/* binding */ blokTwo),
/* harmony export */   "buttonCant": () => (/* binding */ buttonCant),
/* harmony export */   "buttonFive": () => (/* binding */ buttonFive),
/* harmony export */   "buttonFour": () => (/* binding */ buttonFour),
/* harmony export */   "buttonOne": () => (/* binding */ buttonOne),
/* harmony export */   "buttonThree": () => (/* binding */ buttonThree),
/* harmony export */   "buttonTwo": () => (/* binding */ buttonTwo),
/* harmony export */   "grupeFive": () => (/* binding */ grupeFive),
/* harmony export */   "grupeFour": () => (/* binding */ grupeFour),
/* harmony export */   "grupeOne": () => (/* binding */ grupeOne),
/* harmony export */   "grupeThree": () => (/* binding */ grupeThree),
/* harmony export */   "grupeTwo": () => (/* binding */ grupeTwo),
/* harmony export */   "grupeZero": () => (/* binding */ grupeZero),
/* harmony export */   "picture": () => (/* binding */ picture),
/* harmony export */   "wsg": () => (/* binding */ wsg)
/* harmony export */ });
const grupeZero = () => {
    return document.getElementById('level_0_number');
};
const grupeOne = () => {
    return document.getElementById('level_1_number');
};
const grupeTwo = () => {
    return document.getElementById('level_2_number');
};
const grupeThree = () => {
    return document.getElementById('level_3_number');
};
const grupeFour = () => {
    return document.getElementById('level_4_number');
};
const grupeFive = () => {
    return document.getElementById('level_5_number');
};
const blokOne = () => {
    return document.querySelector('.blok_one_1');
};
const blokTwo = () => {
    return document.querySelector('.blok_two_1');
};
const blokThree = () => {
    return document.querySelector('.blok_three_1');
};
const blokFour = () => {
    return document.querySelector('.blok_four_1');
};
const blokFive = () => {
    return document.querySelector('.blok_five_1');
};
const picture = () => {
    return document.querySelector('.picture_0');
};
// export const hourMeterParagraf = () => {
//     return <HTMLParagraphElement>document.querySelector('.hour_meter');
// };
const buttonCant = () => {
    return document.querySelector('.button_if_cant_0');
};
const buttonOne = () => {
    return document.querySelector('.blok_one_0');
};
const buttonTwo = () => {
    return document.querySelector('.blok_two_0');
};
const buttonThree = () => {
    return document.querySelector('.blok_three_0');
};
const buttonFour = () => {
    return document.querySelector('.blok_four_0');
};
const buttonFive = () => {
    return document.querySelector('.blok_five_0');
};
const wsg = () => {
    return document.querySelector('.wrapper_start_game');
};
const audioChallenge = () => {
    return document.querySelector('.audio_challenge');
};
const audioChallengeRezultTrue = () => {
    return document.querySelector('.one_rezult_0');
};
const audioChallengeRezultFalse = () => {
    return document.querySelector('.two_rezult_0');
};
const audioChallengeRezultlearn = () => {
    return document.querySelector('.three_rezult_0');
};
const audioChallengeRezultScore = () => {
    return document.querySelector('.one_rezult_1');
};
const audioChallengeRezultScoreFalse = () => {
    return document.querySelector('.two_rezult_1');
};
const audioChallengeRezultScorePic = () => {
    return document.querySelector('.menu_rezult_1');
};
const audioChallengeRezultScoreError = () => {
    return document.querySelector('.menu_rezult_0');
};


/***/ }),

/***/ "./src/games/components-game/gameArrayforGetWord.ts":
/*!**********************************************************!*\
  !*** ./src/games/components-game/gameArrayforGetWord.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateArray": () => (/* binding */ generateArray)
/* harmony export */ });
const generateArray = (lengthArray) => {
    const arrayForGetWord = [];
    for (let i = 0; i < lengthArray; i++) {
        arrayForGetWord.push(i);
    }
    return arrayForGetWord;
};


/***/ }),

/***/ "./src/games/components-game/gameComplecteForClickLevel.ts":
/*!*****************************************************************!*\
  !*** ./src/games/components-game/gameComplecteForClickLevel.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complecteElementAudio": () => (/* binding */ complecteElementAudio),
/* harmony export */   "complecteElementSprint": () => (/* binding */ complecteElementSprint)
/* harmony export */ });
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/fetchquery */ "./src/api/fetchquery.ts");
/* harmony import */ var _audio_gameAudioInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/gameAudioInterface */ "./src/games/audio/gameAudioInterface.ts");
/* harmony import */ var _sprint_gameSprintInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprint/gameSprintInterface */ "./src/games/sprint/gameSprintInterface.ts");
/* harmony import */ var _sprint_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprint/gemeSprintGetWords */ "./src/games/sprint/gemeSprintGetWords.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function complecteElementSprint(Element) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = (0,_sprint_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_3__.randomPage)();
        const closeBtn = document.querySelector('.close_btn');
        const grupe = Number(Element.textContent) - 1;
        closeBtn.innerHTML = '';
        const words = yield (0,_api_fetchquery__WEBPACK_IMPORTED_MODULE_0__.getWords)(grupe, page);
        (0,_sprint_gameSprintInterface__WEBPACK_IMPORTED_MODULE_2__.sprintGame)(words.sort(() => Math.random() - 0.5));
        return words;
    });
}
function complecteElementAudio(Element) {
    return __awaiter(this, void 0, void 0, function* () {
        const closeBtn = document.querySelector('.close_btn');
        const grupe = Number(Element.textContent) - 1;
        sessionStorage.setItem('grupe', `${grupe}`);
        closeBtn.innerHTML = '';
        (0,_audio_gameAudioInterface__WEBPACK_IMPORTED_MODULE_1__.audioGame)();
        return grupe;
    });
}


/***/ }),

/***/ "./src/games/components-game/gameLevel.ts":
/*!************************************************!*\
  !*** ./src/games/components-game/gameLevel.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLevel": () => (/* binding */ gameLevel)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _audio_clickEventListenerAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/clickEventListenerAudio */ "./src/games/audio/clickEventListenerAudio.ts");
/* harmony import */ var _sprint_clickEventListenerSprint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprint/clickEventListenerSprint */ "./src/games/sprint/clickEventListenerSprint.ts");



function gameLevel() {
    const whatLevel = 6;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgLevelOne = __webpack_require__(/*! ../sprint/pandaLevel.json */ "./src/games/sprint/pandaLevel.json");
    const app = document.getElementById('app');
    const container = document.querySelector('.content-container');
    const clickPlay = sessionStorage.getItem('clickPlay');
    app.innerHTML = '';
    app.className = '';
    app.classList.toggle('close_btn');
    if (clickPlay === '1') {
        const forGameSprint = document.getElementById('app');
        forGameSprint.classList.toggle('sprint_challenge');
        (0,_sprint_clickEventListenerSprint__WEBPACK_IMPORTED_MODULE_2__.clickButtonSprint)();
    }
    if (clickPlay === '2') {
        const forGameAudio = document.getElementById('app');
        forGameAudio.classList.toggle('audio_challenge');
        (0,_audio_clickEventListenerAudio__WEBPACK_IMPORTED_MODULE_1__.clickButtonAudio)();
    }
    const contBackground = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', container, ['container_background_image'], {
        ['id']: 'container_background_image',
    });
    contBackground.append(app);
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    for (let i = 0; i < whatLevel; i++) {
        const level = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', app, ['sprint_level'], { ['id']: 'sprint_level' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', level, [`level_${i}_number`], { ['id']: `level_${i}_number` }).textContent = `${i + 1}`;
        const divImg = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', level, [`level_${i}_imeg`], { ['id']: `level_${i}_imeg` });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', divImg, [`img_panda_${i}`], {
            ['id']: `img_panda_${i}`,
            ['src']: `${imgLevelOne[i]}`,
            ['alt']: 'panda',
        });
    }
}


/***/ }),

/***/ "./src/games/components-game/gameMenyDiv.ts":
/*!**************************************************!*\
  !*** ./src/games/components-game/gameMenyDiv.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menyDiv": () => (/* binding */ menyDiv)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");

function menyDiv(quantity, div_name, perent, class_name) {
    for (let i = 0; i < quantity; i++) {
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(div_name, perent, [class_name + `${i}`]);
    }
}


/***/ }),

/***/ "./src/games/components-game/gameSotrArray.ts":
/*!****************************************************!*\
  !*** ./src/games/components-game/gameSotrArray.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copySorted": () => (/* binding */ copySorted)
/* harmony export */ });
const copySorted = (arr) => {
    return arr.slice().sort();
};


/***/ }),

/***/ "./src/games/sprint/clickEventListenerSprint.ts":
/*!******************************************************!*\
  !*** ./src/games/sprint/clickEventListenerSprint.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickButtonSprint": () => (/* binding */ clickButtonSprint)
/* harmony export */ });
/* harmony import */ var _components_game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-game/constants */ "./src/games/components-game/constants.ts");
/* harmony import */ var _components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-game/gameComplecteForClickLevel */ "./src/games/components-game/gameComplecteForClickLevel.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const clickButtonSprint = () => {
    document.querySelector('.sprint_challenge').onclick = function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = event.target;
            const Zero = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeZero)();
            const One = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeOne)();
            const Two = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeTwo)();
            const Three = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeThree)();
            const Four = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeFour)();
            const Five = (0,_components_game_constants__WEBPACK_IMPORTED_MODULE_0__.grupeFive)();
            if (button === Zero) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(Zero);
            }
            if (button === One) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(One);
            }
            if (button === Two) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(Two);
            }
            if (button === Three) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(Three);
            }
            if (button === Four) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(Four);
            }
            if (button === Five) {
                (0,_components_game_gameComplecteForClickLevel__WEBPACK_IMPORTED_MODULE_1__.complecteElementSprint)(Five);
            }
        });
    };
};


/***/ }),

/***/ "./src/games/sprint/clickEventListnerNoYes.ts":
/*!****************************************************!*\
  !*** ./src/games/sprint/clickEventListnerNoYes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickButtonNoYes": () => (/* binding */ clickButtonNoYes)
/* harmony export */ });
/* harmony import */ var _components_parseJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/parseJson */ "./src/components/parseJson.ts");
/* harmony import */ var _gameSprintResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSprintResult */ "./src/games/sprint/gameSprintResult.ts");
/* harmony import */ var _gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gemeSprintGetWords */ "./src/games/sprint/gemeSprintGetWords.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let count = 0;
let i = 0;
const j = 0;
const k = 1;
const arrayNumber = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_0__.parseJsonFile)('arrayNumberaddWord');
const arrayColor = [];
const clickButtonNoYes = () => {
    document.querySelector('.close_btn').onclick = function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = event.target;
            const score = document.getElementById('score_sprint');
            const buttonFalse = document.getElementById('button_false');
            const buttonTrue = document.getElementById('button_true');
            if (this.onclick) {
                try {
                    if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonFalse) {
                        count += 10;
                        score.textContent = `${count}`;
                        arrayColor.push('white');
                        sessionStorage.setItem('count', `${count}`);
                        const arrayColorModif = JSON.stringify(arrayColor);
                        sessionStorage.setItem('arrayColorModif', arrayColorModif);
                        const getmodify = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_0__.parseJsonFile)('modifyArray');
                        (0,_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_2__.getWordsinGemeSprint)(getmodify);
                    }
                    if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonFalse) {
                        arrayColor.push('black');
                        sessionStorage.setItem('count', `${count}`);
                        const arrayColorModif = JSON.stringify(arrayColor);
                        sessionStorage.setItem('arrayColorModif', arrayColorModif);
                        const getmodify = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_0__.parseJsonFile)('modifyArray');
                        (0,_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_2__.getWordsinGemeSprint)(getmodify);
                    }
                    if (arrayNumber[i][j] === arrayNumber[i][k] && button === buttonTrue) {
                        count += 10;
                        score.textContent = `${count}`;
                        arrayColor.push('white');
                        const getmodify = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_0__.parseJsonFile)('modifyArray');
                        sessionStorage.setItem('count', `${count}`);
                        const arrayColorModif = JSON.stringify(arrayColor);
                        sessionStorage.setItem('arrayColorModif', arrayColorModif);
                        (0,_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_2__.getWordsinGemeSprint)(getmodify);
                    }
                    if (arrayNumber[i][j] != arrayNumber[i][k] && button === buttonTrue) {
                        arrayColor.push('black');
                        sessionStorage.setItem('count', `${count}`);
                        const arrayColorModif = JSON.stringify(arrayColor);
                        sessionStorage.setItem('arrayColorModif', arrayColorModif);
                        const getmodify = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_0__.parseJsonFile)('modifyArray');
                        (0,_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_2__.getWordsinGemeSprint)(getmodify);
                        sessionStorage.setItem('count', `${count}`);
                    }
                    i++;
                }
                catch (_a) {
                    (0,_gameSprintResult__WEBPACK_IMPORTED_MODULE_1__.sprintGameResult)();
                }
            }
        });
    };
};


/***/ }),

/***/ "./src/games/sprint/gameSprintCreateDivAnsver.ts":
/*!*******************************************************!*\
  !*** ./src/games/sprint/gameSprintCreateDivAnsver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameSprintAddAnsver": () => (/* binding */ gameSprintAddAnsver)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_parseJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/parseJson */ "./src/components/parseJson.ts");


function gameSprintAddAnsver() {
    const allWordAfterGameModif = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_1__.parseJsonFile)('wordForRezult');
    const formRezult2 = document.getElementById('form_result_2');
    const tdWrapperAnsver = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formRezult2, ['tbody_result'], { ['id']: 'tbody_result' });
    allWordAfterGameModif.forEach((elem) => {
        const wrapperRezult = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', tdWrapperAnsver, ['wrapper_rezult'], { ['id']: 'wrapper_rezult' });
        const englishWord = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['english_word'], { ['id']: 'english_word' });
        englishWord.textContent = elem[0].toUpperCase();
        const single = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('td', wrapperRezult, ['single'], { ['id']: 'single' });
        single.textContent = '&';
        const tranclateWord = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezult, ['translate_word'], { ['id']: 'translate_word' });
        tranclateWord.textContent = elem[1].toUpperCase();
    });
}


/***/ }),

/***/ "./src/games/sprint/gameSprintCreateDivColor.ts":
/*!******************************************************!*\
  !*** ./src/games/sprint/gameSprintCreateDivColor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameSprintAddColor": () => (/* binding */ gameSprintAddColor)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");

function gameSprintAddColor() {
    const arrayColorModif = sessionStorage.getItem('arrayColorModif');
    const arrayColor = JSON.parse(`${arrayColorModif}`);
    const formRezult2 = document.getElementById('form_result_2');
    const tdWrapperTrue = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formRezult2, ['td_wrapper_true'], { ['id']: 'td_wrapper_true' });
    arrayColor.forEach((elem) => {
        const wrapperRezultTrue = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', tdWrapperTrue, ['wrapper_rezult_true'], {
            ['id']: 'wrapper_rezult_ansver',
        });
        const colorAnsver = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezultTrue, ['colore_ansver'], {
            ['id']: 'colore_ansver',
        });
        colorAnsver.style.backgroundColor = elem;
    });
}


/***/ }),

/***/ "./src/games/sprint/gameSprintCreateDivYN.ts":
/*!***************************************************!*\
  !*** ./src/games/sprint/gameSprintCreateDivYN.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameSprintAddYN": () => (/* binding */ gameSprintAddYN)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _components_parseJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/parseJson */ "./src/components/parseJson.ts");


function gameSprintAddYN() {
    const arrayCorrect = (0,_components_parseJson__WEBPACK_IMPORTED_MODULE_1__.parseJsonFile)('arrayAnsver');
    const formRezult2 = document.getElementById('form_result_2');
    const tdWrapper = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formRezult2, ['td_wrapper'], { ['id']: 'td_wrapper' });
    arrayCorrect.forEach((elem) => {
        const wrapperRezultAnsver = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', tdWrapper, ['wrapper_rezult_ansver'], {
            ['id']: 'wrapper_rezult_ansver',
        });
        const correctAnsver = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', wrapperRezultAnsver, ['correct_ansver'], {
            ['id']: 'correct_ansver',
        });
        correctAnsver.textContent = elem;
    });
}


/***/ }),

/***/ "./src/games/sprint/gameSprintInterface.ts":
/*!*************************************************!*\
  !*** ./src/games/sprint/gameSprintInterface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sprintGame": () => (/* binding */ sprintGame)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _timeDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeDown */ "./src/games/sprint/timeDown.ts");
/* harmony import */ var _clickEventListnerNoYes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickEventListnerNoYes */ "./src/games/sprint/clickEventListnerNoYes.ts");
/* harmony import */ var _gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gemeSprintGetWords */ "./src/games/sprint/gemeSprintGetWords.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function sprintGame(arrayObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const closeBtn = document.querySelector('.close_btn');
        closeBtn.classList.toggle('close_btn_sprint_interfece');
        const header = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['header_game_sprint'], { ['id']: 'header_game_sprint' });
        const headerDiv_1 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', header, ['header_div_1'], { ['id']: 'header_div_1' });
        const pForTime = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', headerDiv_1, ['hour_meter'], { ['id']: 'hour_meter' });
        const headerDiv_2 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', header, ['header_div_2'], { ['id']: 'header_div_1' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', headerDiv_2, ['score_sprint_text'], { ['id']: 'score_sprint_text' }).textContent = 'SCORE:';
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', headerDiv_2, ['score_sprint'], { ['id']: 'score_sprint' }).textContent = '0'; //const scoreSprint =
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['exit_sprint'], {
            ['id']: 'exit_sprint',
            ['onclick']: `this.parentElement.style.display='none'`,
        });
        const main = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['main'], { ['id']: 'main_game_sprint' });
        const mainDiv_1 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', main, ['main_div_1'], { ['id']: 'main_div_1' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', mainDiv_1, ['img_panda_sprint'], {
            ['id']: 'img_panda_sprint',
            ['src']: '../assets/png/panda_look.jpg',
            ['alt']: 'Panda_look',
        });
        const mainDiv_2 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', main, ['main_div_2'], { ['id']: 'main_div_2' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', mainDiv_2, ['main_div_word_question'], { ['id']: 'main_div_word_question' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', mainDiv_2, ['main_div_word_option'], { ['id']: 'main_div_word_option' });
        const footer = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['footer'], { ['id']: 'footer_game_sprint' });
        const footerDiv_1 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', footer, ['footer_div_1'], { ['id']: 'footer_div_1' });
        const footerDiv_2 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', footer, ['footer_div_2'], { ['id']: 'footer_div_2' });
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', footerDiv_1, ['button_false'], {
            ['id']: 'button_false',
        }).textContent = 'NO';
        (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', footerDiv_2, ['button_true'], {
            ['id']: 'button_true',
        }).textContent = 'YES';
        (0,_clickEventListnerNoYes__WEBPACK_IMPORTED_MODULE_2__.clickButtonNoYes)();
        (0,_gemeSprintGetWords__WEBPACK_IMPORTED_MODULE_3__.getWordsinGemeSprint)(arrayObject);
        const times = (0,_timeDown__WEBPACK_IMPORTED_MODULE_1__.wrapperTime)(pForTime);
        const interval = setInterval(times, 1000);
        sessionStorage.setItem('interval', `${interval}`);
    });
}


/***/ }),

/***/ "./src/games/sprint/gameSprintResult.ts":
/*!**********************************************!*\
  !*** ./src/games/sprint/gameSprintResult.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sprintGameResult": () => (/* binding */ sprintGameResult)
/* harmony export */ });
/* harmony import */ var _components_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/createElement */ "./src/components/createElement.ts");
/* harmony import */ var _gameSprintCreateDivAnsver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSprintCreateDivAnsver */ "./src/games/sprint/gameSprintCreateDivAnsver.ts");
/* harmony import */ var _gameSprintCreateDivColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameSprintCreateDivColor */ "./src/games/sprint/gameSprintCreateDivColor.ts");
/* harmony import */ var _gameSprintCreateDivYN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameSprintCreateDivYN */ "./src/games/sprint/gameSprintCreateDivYN.ts");




function sprintGameResult() {
    let count = sessionStorage.getItem('count');
    if (count === null) {
        count = '0';
    }
    const closeBtn = document.querySelector('.close_btn');
    closeBtn.innerHTML = '';
    closeBtn.classList.toggle('wrapper_game_sptint_result');
    const blokForH3 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['blok_for_H3'], { ['id']: 'blok_for_H3' });
    const blokForResult = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', closeBtn, ['blok_for_result'], { ['id']: 'blok_for_result' });
    const h3 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', blokForH3, ['form_result_h3'], { ['id']: 'form_result_h3' });
    h3.textContent = `YOUR SCORE: ${count}`;
    (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokForResult, ['form_result_1'], { ['id']: 'form_result_1' });
    (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokForResult, ['form_result_2'], { ['id']: 'form_result_2' });
    (0,_gameSprintCreateDivAnsver__WEBPACK_IMPORTED_MODULE_1__.gameSprintAddAnsver)();
    (0,_gameSprintCreateDivYN__WEBPACK_IMPORTED_MODULE_3__.gameSprintAddYN)();
    (0,_gameSprintCreateDivColor__WEBPACK_IMPORTED_MODULE_2__.gameSprintAddColor)();
    const formResult3 = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', blokForResult, ['form_result_3'], { ['id']: 'form_result_3' });
    const houmePage = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formResult3, ['houme_btn'], { ['id']: 'houme_btn' });
    (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', houmePage, ['img_houme_page'], {
        ['src']: '../assets/png/home.png',
        ['alt']: 'Houme',
    });
    const repetPage = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formResult3, ['repeat_btn'], { ['id']: 'repeat_btn' });
    (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', repetPage, ['img_houme_page'], {
        ['src']: '../assets/png/repeat.png',
        ['alt']: 'Repeat',
    });
    const rezervePage = (0,_components_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', formResult3, ['rezerve_btn'], { ['id']: 'rezerve_btn' });
    rezervePage.textContent = 'X';
    sessionStorage.clear();
}


/***/ }),

/***/ "./src/games/sprint/gemeSprintGetWords.ts":
/*!************************************************!*\
  !*** ./src/games/sprint/gemeSprintGetWords.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWordsinGemeSprint": () => (/* binding */ getWordsinGemeSprint),
/* harmony export */   "randomPage": () => (/* binding */ randomPage)
/* harmony export */ });
/* harmony import */ var _components_game_gameArrayforGetWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-game/gameArrayforGetWord */ "./src/games/components-game/gameArrayforGetWord.ts");
/* harmony import */ var _gameSprintResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSprintResult */ "./src/games/sprint/gameSprintResult.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const lengthArrayIndex = 20;
const arrayPosEng = (0,_components_game_gameArrayforGetWord__WEBPACK_IMPORTED_MODULE_0__.generateArray)(lengthArrayIndex); //.sort(() => Math.random() - 0.5);
const arrayPosTranslete = (0,_components_game_gameArrayforGetWord__WEBPACK_IMPORTED_MODULE_0__.generateArray)(lengthArrayIndex).sort(() => Math.random() - 0.5);
const arrayMod = [];
for (let i = 0; i < arrayPosEng.length; i++) {
    arrayMod.push([arrayPosEng[i], arrayPosTranslete[i]]);
}
const arrayNumberaddWord = JSON.stringify(arrayMod);
sessionStorage.setItem('arrayNumberaddWord', arrayNumberaddWord);
const randomPage = () => {
    const pageRand = 1 + Math.random() * (30 + 1 - 1);
    return Math.floor(pageRand);
};
let count = arrayPosEng.length - 1;
const divQuestionWord = [];
const ansver = [];
const getWordsinGemeSprint = function (words) {
    return __awaiter(this, void 0, void 0, function* () {
        if (count >= 0) {
            const divQuestion = document.getElementById('main_div_word_question');
            const divOption = document.getElementById('main_div_word_option');
            const wordEng = words[arrayPosEng[count]].word;
            const wordTrans = words[arrayPosTranslete[count]].wordTranslate;
            divQuestionWord.push([wordEng, wordTrans]);
            divQuestion.innerHTML = wordEng;
            divOption.innerHTML = wordTrans;
            if (arrayPosEng[count] === arrayPosTranslete[count]) {
                ansver.push('YES');
            }
            else {
                ansver.push('NO');
            }
            count--;
            const wordForRezult = JSON.stringify(divQuestionWord);
            sessionStorage.setItem('wordForRezult', wordForRezult);
            const modifyArray = JSON.stringify(words);
            sessionStorage.setItem('modifyArray', modifyArray);
            const arrayAnsver = JSON.stringify(ansver);
            sessionStorage.setItem('arrayAnsver', arrayAnsver);
        }
        else {
            (0,_gameSprintResult__WEBPACK_IMPORTED_MODULE_1__.sprintGameResult)();
        }
    });
};


/***/ }),

/***/ "./src/games/sprint/index.ts":
/*!***********************************!*\
  !*** ./src/games/sprint/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickButtonPlay": () => (/* binding */ clickButtonPlay)
/* harmony export */ });
/* harmony import */ var _components_game_gameLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-game/gameLevel */ "./src/games/components-game/gameLevel.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const clickButtonPlay = () => {
    document.querySelector('.gamesPageContainer').onclick = function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = event.target;
            sessionStorage.setItem('buttonChioce', `${button}`);
            const sprint = document.querySelector('.sprint');
            const challenge = document.querySelector('.challenge');
            if (button === sprint) {
                sessionStorage.setItem('clickPlay', '1');
                (0,_components_game_gameLevel__WEBPACK_IMPORTED_MODULE_0__.gameLevel)();
            }
            if (button === challenge) {
                sessionStorage.setItem('clickPlay', '2');
                (0,_components_game_gameLevel__WEBPACK_IMPORTED_MODULE_0__.gameLevel)();
            }
        });
    };
};


/***/ }),

/***/ "./src/games/sprint/timeDown.ts":
/*!**************************************!*\
  !*** ./src/games/sprint/timeDown.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperTime": () => (/* binding */ wrapperTime)
/* harmony export */ });
/* harmony import */ var _gameSprintResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSprintResult */ "./src/games/sprint/gameSprintResult.ts");

// export function wrapperTime(hourMeter: number, time: HTMLParagraphElement) {
let hourMeter = 30;
function wrapperTime(timeAtribut) {
    return function timeDown() {
        const inter = sessionStorage.getItem('interval');
        const seconds = hourMeter % 60;
        timeAtribut.textContent = `${seconds}`;
        hourMeter -= 1;
        if (hourMeter < 0) {
            clearInterval(`${inter}`);
            (0,_gameSprintResult__WEBPACK_IMPORTED_MODULE_0__.sprintGameResult)();
        }
    };
}


/***/ }),

/***/ "./src/pages/dictionary.ts":
/*!*********************************!*\
  !*** ./src/pages/dictionary.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_bookPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/bookPage */ "./src/components/bookPage.ts");
/* harmony import */ var _api_fetchquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/fetchquery */ "./src/api/fetchquery.ts");
/* harmony import */ var _components_createTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createTitle */ "./src/components/createTitle.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");
/* harmony import */ var _api_userWordsApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/userWordsApi */ "./src/api/userWordsApi.ts");
/* harmony import */ var _components_loginUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loginUtils */ "./src/components/loginUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class Dictionary extends _page__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super('Dictionary');
        this.currentPage = 0;
        this.currentGroup = 0;
        this.isDifficultSectionOpened = false;
        this.isPageCompleted = false;
        this.isHandlersInited = false;
    }
    openPage() {
        this.renderPageElements();
        this.renderPageContent();
        (0,_components_createTitle__WEBPACK_IMPORTED_MODULE_2__.addPageTitle)(this.name);
        if (!this.isHandlersInited) {
            this.initHandlers();
        }
    }
    renderPageElements() {
        const isHidden = (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_5__.isUserLoggedIn)() ? '' : 'hidden';
        const pageHtml = `
    <div class="textbookContainer">
      <div class="gamesContainer">
        <div class="gameBtn" data-game="sprint">
        <img class="gameLogo" src="../assets/png/sprint.png" data-game="sprint"></img>
          <div data-game="sprint">Sprint</div>
        </div>
        <div class="gameBtn" data-game="challenge">
        <img class="gameLogo" src="../assets/png/audio.png" data-game="challenge"></img>
          <div data-game="challenge">Audio Challenge</div>
        </div>
        <img src="../assets/png/completed.png" class="completedIcon"></img>
      </div>

      <div class="pageSelector">
        <div data-pageNav="prev"><</div>
        <div id="currentPage">${this.currentPage + 1}</div>
        <div data-pageNav="next">></div>
      </div>

      <div class="contentContainer">
        <div id="content"></div>

        <div class="groupSelector">
        <img class="groupCircle" data-group="0" src="../assets/main_pandas/3.png" width="40" >
        <img class="groupCircle" data-group="1" src="../assets/main_pandas/7.png" width="40" >
        <img class="groupCircle" data-group="2" src="../assets/main_pandas/9.png" width="40" >
        <img class="groupCircle" data-group="3" src="../assets/main_pandas/13.png" width="40" >
        <img class="groupCircle" data-group="4" src="../assets/main_pandas/14.png" width="40" >
        <img class="groupCircle" data-group="5" src="../assets/main_pandas/15.png" width="40" >
      </div>

        <div class="onlyDifficultToggle ${isHidden}">
          <div class="difIcon">
            <span class="material-icons" id="difficultWords">star</span>
          </div>
          <div>Difficult Words Section</div>
        </div>
      </div>

    </div>
  `;
        this.appContainer.innerHTML = pageHtml;
    }
    renderPageContent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isDifficultSectionOpened) {
                new _components_bookPage__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0).render(true);
            }
            else {
                yield new _components_bookPage__WEBPACK_IMPORTED_MODULE_0__["default"](this.currentGroup, this.currentPage).render();
                this.checkIfPageIsCompleted();
                this.updatePageCounters();
                this.setPageBackground();
            }
        });
    }
    initHandlers() {
        document.addEventListener('click', this.scrollPage.bind(this));
        document.addEventListener('click', this.openSelectedGroup.bind(this));
        document.addEventListener('click', this.markUnmarkWordAsDifficult.bind(this));
        document.addEventListener('click', this.markUnmarkWordAsLearnt.bind(this));
        document.addEventListener('click', this.toggleDifficultWordsSection.bind(this));
        document.addEventListener('click', Dictionary.playCardSound);
        this.isHandlersInited = true;
    }
    scrollPage(event) {
        const element = event.target;
        const buttonName = element.dataset.pagenav;
        if (buttonName === 'prev' && this.currentPage > 0) {
            this.currentPage -= 1;
            this.renderPageContent();
        }
        if (buttonName === 'next' && this.currentPage < 29) {
            this.currentPage += 1;
            this.renderPageContent();
        }
    }
    openSelectedGroup(event) {
        var _a;
        const element = event.target;
        const groupId = element.dataset.group;
        if (groupId && ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.className) === 'groupSelector') {
            this.currentGroup = Number(groupId);
            this.currentPage = 0;
            this.renderPageContent();
        }
    }
    updatePageCounters() {
        document.getElementById('currentPage').innerText = `${this.currentPage + 1}`;
    }
    markUnmarkWordAsDifficult(event) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const element = event.target;
            const wordCard = (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
            const wordId = wordCard === null || wordCard === void 0 ? void 0 : wordCard.dataset.wordid;
            if (element.className.includes('difficultIcon') && wordId) {
                if (wordCard.classList.contains('difficult')) {
                    yield (0,_api_userWordsApi__WEBPACK_IMPORTED_MODULE_4__.unmarkWordAsDifficult)(wordId);
                }
                else {
                    yield (0,_api_userWordsApi__WEBPACK_IMPORTED_MODULE_4__.markWordAsDifficult)(wordId);
                }
                this.renderPageContent();
            }
        });
    }
    markUnmarkWordAsLearnt(event) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const element = event.target;
            const wordCard = (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
            const wordId = wordCard === null || wordCard === void 0 ? void 0 : wordCard.dataset.wordid;
            if (element.className.includes('learntIcon') && wordId) {
                if (wordCard.classList.contains('learnt')) {
                    yield (0,_api_userWordsApi__WEBPACK_IMPORTED_MODULE_4__.unmarkWordAsLearned)(wordId);
                }
                else {
                    yield (0,_api_userWordsApi__WEBPACK_IMPORTED_MODULE_4__.markWordAsLearned)(wordId);
                }
                this.renderPageContent();
            }
        });
    }
    toggleDifficultWordsSection(event) {
        const element = event.target;
        if (element.id === 'difficultWords') {
            if (this.isDifficultSectionOpened) {
                this.isDifficultSectionOpened = false;
                document.querySelector('.groupSelector').classList.remove('disabled');
                document.querySelector('.pageSelector').classList.remove('disabled');
                document.querySelector('.gamesContainer').classList.remove('disabled');
                document.getElementById('difficultWords').style.color = 'black';
                this.renderPageContent();
            }
            else {
                this.isDifficultSectionOpened = true;
                document.querySelector('.groupSelector').classList.add('disabled');
                document.querySelector('.pageSelector').classList.add('disabled');
                document.querySelector('.gamesContainer').classList.add('disabled');
                document.getElementById('difficultWords').style.color = '#ffbb33';
                new _components_bookPage__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0).render(true);
            }
        }
    }
    checkIfPageIsCompleted() {
        const wordCards = Array.from(document.getElementsByClassName('wordCard'));
        const cards = wordCards.filter((card) => card.classList.contains('difficult') || card.classList.contains('learnt'));
        if (cards.length === 20 && !this.isDifficultSectionOpened) {
            document.querySelectorAll('.gameBtn').forEach((btn) => btn.classList.add('disabled'));
            document.querySelector('.completedIcon').style.display = 'block';
        }
        else {
            document.querySelectorAll('.gameBtn').forEach((btn) => btn.classList.remove('disabled'));
            document.querySelector('.completedIcon').style.display = 'none';
        }
    }
    static playCardSound(event) {
        const element = event.target;
        const audio = element.dataset.sound;
        if (audio) {
            new Audio(`${_api_fetchquery__WEBPACK_IMPORTED_MODULE_1__.urlAdress}/${audio}`).play();
        }
    }
    setPageBackground() {
        const container = document.querySelector('.textbookContainer');
        switch (this.currentGroup) {
            case 0:
                container.style.backgroundColor = '#7B7FF1';
                break;
            case 1:
                container.style.backgroundColor = '#7276E0';
                break;
            case 2:
                container.style.backgroundColor = '#6569C7';
                break;
            case 3:
                container.style.backgroundColor = '#5255A1';
                break;
            case 4:
                container.style.backgroundColor = '#313361';
                break;
            case 5:
                container.style.backgroundColor = '#2A1D61';
                break;
            default:
                break;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dictionary);


/***/ }),

/***/ "./src/pages/games.ts":
/*!****************************!*\
  !*** ./src/pages/games.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_createTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createTitle */ "./src/components/createTitle.ts");
/* harmony import */ var _games_sprint_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games/sprint/index */ "./src/games/sprint/index.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");



class Games extends _page__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super('Games');
    }
    openPage() {
        const pageName = this.name;
        const pageHtml = `
        <div class="gamesPageContainer">
          <div class="gameCard">
            <img src="../assets/png/sprint.png"></img>
            <div><b>Sprint</b></div>
            <div class="gameDescription">
              You have one minute to guess as many words as you can!
            </div>
            <div data-gameType="sprint" class="gameBackBtn sprint">Play</div>
          </div>
  
          <div class="gameCard">
            <img src="../assets/png/audio.png"></img>
            <div><b>Audio Challenge</b></div>
            <div class="gameDescription">
              Listen to words and choose their translation!
            </div>
            <div data-gameType="challenge" class="gameBackBtn challenge">Play</div>
          </div>
        </div>
    `;
        this.appContainer.innerHTML = pageHtml;
        (0,_components_createTitle__WEBPACK_IMPORTED_MODULE_0__.addPageTitle)(pageName);
        (0,_games_sprint_index__WEBPACK_IMPORTED_MODULE_1__.clickButtonPlay)();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Games);


/***/ }),

/***/ "./src/pages/main.ts":
/*!***************************!*\
  !*** ./src/pages/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _autorization_autorizationWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../autorization/autorizationWindow */ "./src/autorization/autorizationWindow.ts");
/* harmony import */ var _components_createTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/createTitle */ "./src/components/createTitle.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");



(0,_autorization_autorizationWindow__WEBPACK_IMPORTED_MODULE_0__.openForm)();
class Main extends _page__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super('Main');
    }
    openPage() {
        const pageHtml = `
      <div class="mainPageContainer">
        <h1>Welcome to RS Lang </h1>  
        <img src="../assets/png/panda_main.png" alt="logo" width="160">
        <div class="tittle_text">
          Learn more than 3500 new English words with <b>Panda</b>! <BR/>
        <br/>
          Track your progress <b>every day</b>!
        </div>
        <h2>Learn and Play!</h2>
        <div class="main_text">
        Play games, listen to pronunciation, improve your knowledge.<br/> With our app, learning is a joy!
        </div>
        <div class="gamesPageContainer">
          <div class="gameCard">
            <img src="../assets/png/sprint.png"></img>
            <div><b>Sprint</b></div>
            <div class="gameDescription">
              You have one minute to guess as many words as you can!
            </div>
          </div>
  
          <div class="gameCard">
            <img src="../assets/png/audio.png"></img>
            <div><b>Audio Challenge</b></div>
            <div class="gameDescription">
              Listen to words and choose their translation!
            </div>
          </div>
        </div>
        <h2>Dictionary</h2>
        <div class="main_text">
          This section allows you too see multiple more than 3000 words divided into 6 levels according to their difficulty.
          Logged users received access to game statistics for each word card, as well as the possibility for
          marking each word as Learned or Difficult.
        </div>
        <img src="../assets/png/library.jpg" alt="Dictionary" width="500px">
        <h2>Statistics</h2>
        <div class="main_text">
          Track you progress using the Statistics section.
          This section is available for logged users only!
        </div>
      </div>
     `;
        this.appContainer.innerHTML = pageHtml;
        (0,_components_createTitle__WEBPACK_IMPORTED_MODULE_1__.addPageTitle)(this.name);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/pages/page.ts":
/*!***************************!*\
  !*** ./src/pages/page.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Page {
    constructor(name) {
        this.pageContainer = null;
        this.name = name;
        this.appContainer = document.getElementById('app');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ "./src/pages/stats.ts":
/*!****************************!*\
  !*** ./src/pages/stats.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_createTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createTitle */ "./src/components/createTitle.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");


class Statistics extends _page__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super('Statistics');
    }
    openPage() {
        const pageName = this.name;
        const pageHtml = `
        <div id="statistic-container">
        <div id="statistic-for-this-day">
    <h2>For this day</h2>
    
    <div id="words-statistic">
    <h3>Words statistic</h3>
        <div id="words-stat-container">
            <p>new words:<span id="day-new-words">0</span></p>

            <p>correct answers:<span id="day-correct-answers">0</span></p>

            <p>learned words:<span id="day-learned-words">0</span></p>
        </div>
    </div>

    <div id="game-statistic">
    <h3>Game statistic</h3>
        <div id="game-stat-container">
            
            <div id="audio-challenge-stat-container">
                <h3>audio-challenge
                    <img src="../assets/png/audio.png" alt="audio-challenge" id="audio-challenge-img" width="58">
                </h3>
                <p>new words:<span id="audio-challenge-new-words">0</span></p>

                <p>correct answers:<span id="audio-challenge-correct-answers">0</span> </p>

                <p>correct answers streak:<span id="audio-challenge-streak">0</span></p>
            </div>

            <div id="sprint-stat-container">
                <h3>
                    Sprint<img src="../assets/png/sprint.png" alt="sprint" id="sprint-img" width="58">
                </h3>
                <p>new words:<span id="sprint-new-words">0</span></p>
                <p>correct answers:<span id="sprint-correct-answers">0</span> </p>
                <p>correct answers streak:<span id="sprint-streak">0</span></p>
            </div> 
        </div>
    </div>
</div>
</div>`;
        this.appContainer.innerHTML = pageHtml;
        (0,_components_createTitle__WEBPACK_IMPORTED_MODULE_0__.addPageTitle)(pageName);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistics);


/***/ }),

/***/ "./src/pages/team.ts":
/*!***************************!*\
  !*** ./src/pages/team.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_createTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createTitle */ "./src/components/createTitle.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");


class Team extends _page__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super('Team');
    }
    openPage() {
        const pageName = this.name;
        const pageHtml = `
        <div class="teamContainer">
          <div class="teamCard">
            <img src="../assets/main_pandas/8.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/marumaru1">Maria</a></span>
            </div>
            <div class="teamDescription">
              Developer. 
              <br/>"For two weeks I tried to understand what to do"
            </div>
          </div>

          <div class="teamCard team-lead">
            <img src="../assets/main_pandas/13.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/Andrean-82">Anatoliy</a></span>
            </div>
            <div class="teamDescription">
            Developer, team lead.
            </div>
          </div>
    
          <div class="teamCard">
            <img src="../assets/main_pandas/4.png" class="photo"></img>
            <div>
              <span><img src="../assets/svg/github.svg" class="git"></img></span>
              <span><a class="link-github" href="https://github.com/SPECTRA995">Maksim</a></span>
            </div>
            <div class="teamDescription">
              Was responsible for: Developer.
            </div>
          </div>
    
        </div>`;
        this.appContainer.innerHTML = pageHtml;
        (0,_components_createTitle__WEBPACK_IMPORTED_MODULE_0__.addPageTitle)(pageName);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);


/***/ }),

/***/ "./src/router/router.ts":
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navigation */ "./src/components/navigation.ts");
/* harmony import */ var _components_loginUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loginUtils */ "./src/components/loginUtils.ts");
/* eslint-disable import/no-cycle */


class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPage = 'main';
        (0,_components_loginUtils__WEBPACK_IMPORTED_MODULE_1__.loadUser)();
        this.routes.main.openPage();
    }
    init() {
        document.addEventListener('click', this.openPage.bind(this));
        (0,_components_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    openPage(event) {
        const element = event.target;
        const selectedPage = element.dataset.page;
        if (selectedPage) {
            window.history.pushState('', '', `/${selectedPage}`);
            this.routes[selectedPage].openPage();
            this.currentPage = selectedPage;
        }
    }
    openSelectedPage(page) {
        window.history.pushState('', '', `/${page}`);
        this.routes[page].openPage();
        this.currentPage = page;
    }
    refreshCurrentPage() {
        this.routes[this.currentPage].openPage();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/assets/svg/2.svg":
/*!******************************!*\
  !*** ./src/assets/svg/2.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2.svg";

/***/ }),

/***/ "./src/assets/svg/footer_wave.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/footer_wave.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/footer_wave.svg";

/***/ }),

/***/ "./src/games/sprint/pandaLevel.json":
/*!******************************************!*\
  !*** ./src/games/sprint/pandaLevel.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('["../assets/png/panda_three_level.png","../assets/png/panda_two_level.png","../assets/png/panda_one_level.png","../assets/png/panda_four_level.png","../assets/png/panda_five_level.png","../assets/png/panda_six_level.png"]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _pages_games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/games */ "./src/pages/games.ts");
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.ts");
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router */ "./src/router/router.ts");
/* harmony import */ var _pages_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/team */ "./src/pages/team.ts");
/* harmony import */ var _pages_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dictionary */ "./src/pages/dictionary.ts");
/* harmony import */ var _pages_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/stats */ "./src/pages/stats.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");







const router = new _router_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
    main: new _pages_main__WEBPACK_IMPORTED_MODULE_1__["default"](),
    team: new _pages_team__WEBPACK_IMPORTED_MODULE_3__["default"](),
    games: new _pages_games__WEBPACK_IMPORTED_MODULE_0__["default"](),
    dictionary: new _pages_dictionary__WEBPACK_IMPORTED_MODULE_4__["default"](),
    statistics: new _pages_stats__WEBPACK_IMPORTED_MODULE_5__["default"](),
});
router.init();

})();

/******/ })()
;
//# sourceMappingURL=index.8ce366501ceb8c8583c9.js.map