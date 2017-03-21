/**
 * Created by Freed on 2017/3/14.
 */
window.onload = function () {
    //搜索框
    var headerBox = document.querySelector('.jd_header_box'),
        slideBox = document.querySelector('.jd_banner'),
        slideLists = document.querySelector('.bannerLists'),
        pointLists = document.querySelector('.point-lists'),
        points = pointLists.querySelectorAll('li');

    // 函数调用
    searchScroll();

    slide();



    // 函数封装

    /**
     * 搜索框的滚动变色
     */
    function searchScroll() {
        var height = slideBox.offsetHeight;
        window.onscroll = function () {
            var scrollTop = document.body.scrollTop;
            if (scrollTop > height/2 && scrollTop < height){
                headerBox.style.backgroundColor = 'rgba(201,21,35,'+ (scrollTop/height<0.8? this:0.8) +')';
            }else if(scrollTop>=height){
                headerBox.style.backgroundColor = 'rgba(201,21,35,0.8)';
            }else{
                headerBox.style.backgroundColor = 'rgba(201,21,35,0)';
            }
        }
    }
    
    function slide() {
        
    }









}

