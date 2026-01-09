/*
 * @Date: 2021-12-13 12:02:12
 * @LastEditors: beat
 * @LastEditTime: 2021-12-13 12:02:12
 * @FilePath: \linkbg\js\music.js
 */
$(function() {


    //music
    var music = document.getElementById('music'),
        musicFlag = true;
    usermusicFlag = true;
    try {
        var paused;
        document.addEventListener('visibilitychange', function() {
            var isHidden = document.hidden;
            if (isHidden) {
                paused = music.paused;
                music.pause();
            } else {
                if (!paused) {
                    music.play();
                }

            }
        });
    } catch (err) {

    }
    $('#musicBtn').on("click", function() {
        if (usermusicFlag) {
            usermusicFlag = false;
            $(this).find('span').removeClass('icon-music-play').addClass('icon-music-pasue');
            music.pause();
        } else {
            usermusicFlag = true;
            $(this).find('span').removeClass('icon-music-pasue').addClass('icon-music-play');
            music.play();
        }
    });

});