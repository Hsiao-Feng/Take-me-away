// ==UserScript==
// @name         Take me away
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Exit from a page quickly.
// @author       Hsiao Feng
// @match        *
// @icon         data:image/svg+xml,%3csvg width='158.79mm' height='158.79mm' version='1.1' viewBox='0 0 158.79 158.79' xmlns='http://www.w3.org/2000/svg' xmlns:cc='http://creativecommons.org/ns%23' xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%3e %3cmetadata%3e %3crdf:RDF%3e %3ccc:Work rdf:about=''%3e %3cdc:format%3eimage/svg%2bxml%3c/dc:format%3e %3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3e %3cdc:title/%3e %3c/cc:Work%3e %3c/rdf:RDF%3e %3c/metadata%3e %3cg transform='translate(-61.214 -15.768)'%3e %3cg transform='matrix(.26458 0 0 .26458 -81.713 84.929)'%3e %3cg transform='matrix(4.6849 0 0 4.6849 -1145.9 -2197.7)' fill='%23269463'%3e %3cpath d='m471.9 510.8-3.2-8.5c-1.4-3.5-4.6-5.9-8.6-5.9h-1.4v-73.2h-69.5v40.5h9.1l10.4-13c2.1-2.4 5.3-4 8.8-4h22.2c3.5 0 6.6 1.9 8.2 5l6.6 12.5c0.3 0.5 0.5 1.1 0.5 1.9 0 2.2-1.9 4.2-4.2 4.2-1.8 0-3-0.8-3.8-2.2l-5.9-11.4h-9.6l7.4 18.4 2.2 23.5h19c3 0 5.4 1.9 6.6 4.5l2.1 5.4h-32.8c-2.4 0-4.5-1.8-4.6-4.2l-2.2-20.6-17.6 36.5c-1 2.1-3.2 3.5-5.8 3.5h-8.5l21.6-44.7-6.7-16.8-6.4 7.8c-1.6 2.1-4.3 3.5-7.2 3.5h-9.4v52.8l15 14.9h-44.3v-127.9h128.1v128.1h-14.4l-14.9-14.9v-15.7h13.2'/%3e %3cpath d='m416 529.8 11.5 11.5h-13.9l-15-14.9h9c3.1 0 6.2 1.3 8.4 3.4z'/%3e %3c/g%3e %3c/g%3e %3ccircle transform='matrix(.26458 0 0 .26458 -81.713 84.929)' cx='783.95' cy='-150.01' r='42.5' fill='%23269463'/%3e %3c/g%3e %3c/svg%3e
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    /*
    tma_JUMP_URL: 要跳转到的 URL
    tma_KEY_TIMES: 按键次数
    tma_PRESS_TIME: 按键在多少毫秒内完成
    */

    const tma_JUMP_URL = "https://yz.ustc.edu.cn/";
    const tma_KEY_TIMES = 3;
    const tma_PRESS_TIME = 2 * 1000;

    let tma_now_time = 0;

    let tma_count_key = 0;
    $(document).on('keydown', function(event) {
      tma_now_time = tma_now_time ? tma_now_time : Date.now();
      if (event.key == "Escape") {
        tma_count_key++;
        if(Date.now() - tma_now_time > 2000){
          tma_count_key = 0;
          tma_now_time = 0;
        }
        if(tma_count_key == tma_KEY_TIMES){
            document.write();
            window.location.replace(tma_JUMP_URL);
            return false;
        }
      }
    });
})();
