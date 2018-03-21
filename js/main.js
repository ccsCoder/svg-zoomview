var renderer_module = (function (element, def_values) {
    let paper = SVG(element);
    let defaults = def_values;
    let currentItems = undefined;

    function _draw(element) {

    }
    function _drawShape(element) {
        switch (element.shape) {
            case "rect":
                paper.rect(defaults["rect-width"], defaults["rect-width"]);
                break;
            case "circle":
                paper.circle(defaults["circle-radius"]);
                break;

            default:
                break;
        }
    }
    return {
        draw: _draw
    }
});

SVG.on(document, 'DOMContentLoaded', function () {
    $.get('js/config.json').done((config)=>{
        init(config);
    });
});






function init(config) {
    let renderer = renderer_module($('#diagram')[0], config.defaults);
    config.items.forEach(element => {
        renderer.draw(element);
    });

}

