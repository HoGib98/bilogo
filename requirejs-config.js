var config = {
    paths: {
        slick: 'js/slick'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    map: {
        '*': {
            qtyInput:               'js/widgets/qty-input',
            customCalendar:         'js/widgets/custom-calendar'
        }
    }
};