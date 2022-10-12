window.onload=function(){

    document.onselectstart = function(e) {
        Swal.fire({
            title: '텍스트 도둑질 금지!',
            html: '텍스트 퍼가려다 나한테 제대로 걸렸냥? <br>한 번만 더 걸리면 가만 안 둔다냥! ฅ(=ↀДↀ=)ฅ',
            imageUrl: './img/기타/alert1.png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#fafafa',
            confirmButtonColor: '#ff9e00'
        })
        return false;
    }


    document.oncontextmenu = function (e) {
        Swal.fire({
            title: '냥작권 보호!',
            html: '이미지 훔쳐 가지 말고 <br>우리 길고양이들 후원 좀 해주라냥! ฅ(=ↀᴥↀ=)ฅ',
            imageUrl: './img/기타/alert1.png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#fafafa',
            confirmButtonColor: '#ff9e00'
        })
        return false;
    }



}

