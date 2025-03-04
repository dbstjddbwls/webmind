function go_cart() {
    window.location.href = "cart.html"
}

$(document).ready(function () {

    var $panel = $(".popup_panel");

    var $panelContents = $panel.find(".popup_contents");

    $("#btn_popup_open").on("click", function (e) {

        // 팝업 가운데 설정(가로)
        if ($panelContents.outerWidth() < $(document).width()) {
            $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
        } else {
            $panelContents.css("left", "0px");
        }

        // 팝업 가운데 설정(세로)
        if ($panelContents.outerHeight() < $(document).height()) {
            $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2 + "px");
        } else {
            $panelContents.css("top", "0px");
        }

        // 레이어 팝업 열기
        $panel.fadeIn();
    });

    // 팝업 닫기 이벤트 정의
    $("#btn_popup_close").on("click", popupClose);

    function go_shoppingbag() {
        window.location.href = "cart.html";
    }

    // 팝업 배경 클릭 이벤트 정의
    $panel.find(".popup_bg").on("click", popupClose);

    function popupClose(e) {

        $panel.fadeOut();

        // 이벤트 기본 동작 중단
        e.preventDefault();
    }
    
    $(".review_write").click(function(){
        alert("로그인 후 이용할 수 있는 서비스입니다.");
        location.href="login.html";
    });
});


