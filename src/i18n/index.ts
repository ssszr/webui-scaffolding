import {createI18n} from 'vue-i18n';

const messages = {
    en: {
        home_title: 'webUI scaffolding',
        switch_to_en: "Switch to English",
        child_page_1: "Child page 1",
        child_page_2: "Child page 2",
        back:"back",
        click_button_count:"Click button count",
    },
    zh: {
        home_title: 'webUI脚手架',
        switch_to_zh: "切换为中文",
        child_page_1: "子页面1",
        child_page_2: "子页面2",
        back:"返回",
        click_button_count:"按钮点击次数",
    },
};

const index = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
});

export default index;