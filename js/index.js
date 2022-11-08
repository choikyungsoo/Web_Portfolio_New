var Logo;

// 로고 호버 효과 적용
function init(){
    Logo = document.getElementById("gnb_logo");
    Logo.onmouseover = function() {
        this.src='images/H_Logo_h.png';
    };

    Logo.onmouseout = function(){
        this.src='images/H_Logo.png';
    };
}

