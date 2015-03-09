var Slider = {
    Utils: {
        siblings: function(element) {
            var parent = element.parentNode,
                childs = parent.childNodes,
                sibls = [],
                len = childs.length,
                i;
            for (i = 0; i < len; i++) {
                var child = childs[i];
                if (child.nodeType == 1 && child.tagName.toLowerCase() == 'img' && child !== element) {
                    sibls.push(child);
                }
            }
            return sibls;
        },
        hideAll: function(elements) {
            var len = elements.length,
                i;
            for (i = 0; i < len; i++) {
                var element = elements[i];
                element.className = 'hide';

            }
        },
        show: function(element) {
            element.className = 'show';
        }
    },
    core: {
        showNav: function() {
            var images = document.getElementById('slideshow-wrapper').getElementsByTagName('img'),
                len = images.length,
                i, nav = document.getElementById('slideshow-nav'),
                html = '';
            for (i = 0; i < len; i++) {
                html += '<a href="#" data-img="' + i + '">&bull;</a>';
            }
            nav.innerHTML = html;
        },
        navigate: function() {
            var links = document.getElementById('slideshow-nav').getElementsByTagName('a'),
                len = links.length,
                i;
            for (i = 0; i < len; i++) {
                var a = links[i];
                a.onclick = function() {
                    var $i = this.getAttribute('data-img');
                    var img = document.getElementById('slideshow-wrapper').getElementsByTagName('img')[$i];
                    Slider.Utils.show(img);
                    var siblings = Slider.Utils.siblings(img);
                    Slider.Utils.hideAll(siblings);
                    return false;
                };
            }
        }
    },
    init: function() {
        for (var prop in this.core) {
            if (typeof this.core[prop] === 'function') {
                this.core[prop]();
            }
        }
    }
};
Slider.init();