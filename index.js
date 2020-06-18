'use strict';

class iTomPreloader {
    constructor(userOptions) {
        const defaultOptions = {
            timeout: 3000,
            backgroundColor: '#FFFFFF',
            dotColor: '#111111',
            images: [],
            alwaysShow: false,
            preloaderHtml: '<div class="itom-preloader"><div class="itom-preloader-spinner"><div class="itom-preloader-bounce1"></div><div class="itom-preloader-bounce2"></div><div class="itom-preloader-bounce3"></div></div></div>'
        };
        this.options = {...defaultOptions, ...userOptions};
    }

    preloadImages() {
        for (let i = 0; i < this.options.images.length; i++) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this.options.images[i], true);
            xhr.setRequestHeader('Cache-Control', 'public, max-age=99936000')
            xhr.send();
        }
    }

    check() {
        if (this.options.alwaysShow) {
            localStorage.itomPreloaded = 0;
        }
        if (typeof localStorage.itomPreloaded == 'undefined' || localStorage.itomPreloaded == 0) {
            localStorage.itomPreloaded = 1;
            setTimeout(() => {
                document.querySelector('body').insertAdjacentHTML('afterbegin', this.options.preloaderHtml);
                document.getElementsByClassName('itom-preloader')[0].style.background = this.options.backgroundColor;
                document.getElementsByClassName('itom-preloader-bounce1')[0].style.background = this.options.dotColor;
                document.getElementsByClassName('itom-preloader-bounce2')[0].style.background = this.options.dotColor;
                document.getElementsByClassName('itom-preloader-bounce3')[0].style.background = this.options.dotColor;
                setTimeout(() => {
                    document.getElementsByClassName('itom-preloader')[0].classList.add('hidden-preloader');
                    document.querySelector('body').classList.remove('itom-preloader-overflow-hidden');
                    setTimeout(() => {
                        document.getElementsByClassName('itom-preloader')[0].remove();
                    }, 200);
                }, this.options.timeout);
            }, 0);
            this.preloadImages();
        } else {
            document.querySelector('body').classList.remove('itom-preloader-overflow-hidden');
        }
    }
}

export default iTomPreloader;