import {version} from "version";
export default (uiText) => {
    return (
        `<div class="op-context-panel animated fadeIn">` +
            `<div class="op-context-item" tabindex="1">` +
                `<span class="op-context-item-text" data-href="https://galax.moe/">GALAX</span>` +
            `</div>`+
            `<div class="op-context-item" tabindex="1">` +
                `<span class="op-context-item-text" data-href="https://github.com/AirenSoft/OvenPlayer">${uiText.context} ${version}</span>` +
            `</div>`+
        `</div>`
    );
};
