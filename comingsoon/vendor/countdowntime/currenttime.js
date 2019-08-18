(function ($) {
    "use strict";

    $.fn.extend({ 

      startCurrentDateTime: function() {

        return this.each(function() {
          const obj = $(this);

          const yearsSpan = $(obj).find('.years');
          const monthsSpan = $(obj).find('.months');
          const daysSpan = $(obj).find('.days');
          const hoursSpan = $(obj).find('.hours');
          const minutesSpan = $(obj).find('.minutes');
          const secondsSpan = $(obj).find('.seconds');

          function updateClock() {
            const d = moment();

            yearsSpan.html(d.format('YYYY'));
            monthsSpan.html(d.format('MM'));
            daysSpan.html(d.format('DD'));
            hoursSpan.html(d.format('hh'));
            minutesSpan.html(d.format('mm'));
            secondsSpan.html(d.format('ss'));

            if (d <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
          
        });
      }
    });

})(jQuery);