/**
 * @author jakecausier
 * @date 2022/09/30
 */
import OvenTemplate from 'view/engine/OvenTemplate';

const Danmaku = ($container, api, text) => {
    const onRendered = function ($current, template) {
        //
    };
    const onDestroyed = function () {
        //
    };
    const events = {
        //
    };

    return OvenTemplate($container, 'Danmaku', text, events, onRendered, onDestroyed);
};

export default Danmaku;
