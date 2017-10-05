$(document).ready(function() {
    var input = $('#input');
    var inputVal;
    var array;
    var regionArr;
    //test Regex at: https://regexr.com/
    var pattern = /([\w][\d]|[\d][\w]|\d).\w.*[^(\.\s)]/gm;
    var patternRegion = /(AN GIANG|BÀ RỊA - VŨNG TÀU|BẮC GIANG|BẮC KẠN|BẠC LIÊU|BẮC NINH|BẾN TRE|BÌNH ĐỊNH|BÌNH DƯƠNG|BÌNH PHƯỚC|BÌNH THUẬN|CÀ MAU|CAO BẰNG|ĐẮK LẮK|ĐẮK NÔNG|ĐIỆN BIÊN|ĐỒNG NAI|ĐỒNG THÁP|GIA LAI|HÀ GIANG|HÀ NAM|HÀ TĨNH|HẢI DƯƠNG|HẬU GIANG|HÒA BÌNH|HƯNG YÊN|KHÁNH HÒA|KIÊN GIANG|KON TUM|LAI CHÂU|LÂM ĐỒNG|LẠNG SƠN|LÀO CAI|LONG AN|NAM ĐỊNH|NGHỆ AN|NINH BÌNH|NINH THUẬN|PHÚ THỌ|QUẢNG BÌNH|QUẢNG NAM|QUẢNG NGÃI|QUẢNG NINH|QUẢNG TRỊ|SÓC TRĂNG|SƠN LA|TÂY NINH|THÁI BÌNH|THÁI NGUYÊN|THANH HÓA|THỪA THIÊN HUẾ|TIỀN GIANG|TRÀ VINH|TUYÊN QUANG|VĨNH LONG|VĨNH PHÚC|YÊN BÁI|PHÚ YÊN|CẦN THƠ|ĐÀ NẴNG|HẢI PHÒNG|HÀ NỘI|HỒ CHÍ MINH|AG|BRVT|BG|BK|BL|BN|BT|BĐ|BD|BP|BT|CM|CB|ĐL|ĐN|ĐB|ĐN|ĐT|GL|HG|HN|HT|HD|HG|HB|HY|KG|KT|LC|LĐ|LS|LC|LA|NĐ|NA|NB|NT|PT|QB|QN|QN|QN|QT|ST|SL|TN|TB|TN|TTH|TG|TV|TQ|VL|VP|YB|PY|CT|ĐN|HP|HN|HCM)/igm;
    input.on('change', function() {
        inputVal = input.val();
        // array = inputVal.slice(". ");
        array = inputVal.split(". ");
        // array = inputVal.slice(inputVal.match(pattern));

    });


    var sp = ["TP", "THÀNH PHỐ", "QUẬN", "Q.", "Q ", "P.", "F.", "PHƯỜNG", "SỐ", "SO", "đường", "ĐƯỜNG"];
    //output
    $('.submit').on('click', function() {
        // for (i = 0; i < array.length; i++) {
        //     // console.log(array[i].match(pattern));
        //
        // }
        if (array.length !== 0){

        for (i = 0; i < array.length; i++) {
            // console.log(array[i].match(patternRegion));
            // console.log(array[i].match(pattern));

            array[i].match(pattern).forEach(function(item, index) {
                sp.forEach(function(item2, index2) {

                    console.log(item.toUpperCase().search(item2));
                    if (item.toUpperCase().search(item2) != -1) {

                        console.log(item);
                        $('#output').append("<div>" + item + "</div>");

                    }
                })
            })
            // typeof (array[i].match(pattern));
            // console.log(typeof (array[i].match(pattern)));
            // console.log(array[i]);
            // if (array[i].search("tp") != 0){
            //     console.log(array[i].match(pattern));
            // console.log("tp");

            // }
            // console.log(array[i].search("tp"));


            // console.log(array[i].include("Thành Phố"));
        }
    } else {
        console.log("Khong có địa chỉ nào được tìm thấy");

    }


        // for (i = 0; i < regionArr.length; i++){
        //     console.log(regionArr[i].match(patternRegion));
        // }
    });
});
