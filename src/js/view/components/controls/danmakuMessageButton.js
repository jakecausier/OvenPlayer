/**
 * @author jakecausier
 * @date 2022/09/30
 */
import OvenTemplate from "view/engine/OvenTemplate";

const DanmakuMessageButton = ($container, api) => {

    let $textContainer = "",
        $textButton = "",
        $textInput = "";
    let isOpen = false;
    let isMobile = api.getBrowser().os === "iOS" || api.getBrowser().os === "Android";

    const onRendered = ($current, template) => {
        $textContainer = $current.find(".op-danmaku-text-container");
        $textButton = $current.find(".op-danmaku-text-button");
        $textInput = $current.find(".op-danmaku-text-input")
    };
    const onDestroyed = (template) => {
        //
    };
    const events = {
        "click .op-danmaku-text-button" : (event, $current, template) => {
            event.preventDefault();

            if (isOpen) {
                $textInput.removeClass('active');
                isOpen = false
            } else {
                $textInput.addClass('active')
                isOpen = true
            }
        }
    };

    return OvenTemplate($container, "DanmakuMessageButton", api.getConfig(), null, events, onRendered, onDestroyed);
};

export default DanmakuMessageButton;
