/**
 * Created by mishrab on 6/18/14.
 */

document.addEventListener('DOMContentLoaded', function (){
    var trs = document.getElementById('CompanylistResults').firstElementChild.children;
    var len = (trs.length - 1) / 2;

    var arr_companies = [];
    for (var i = 0; i < len; i++) {
        var td = trs[ 2 * i + 1].firstElementChild;
        if (td.children.length) {
            arr_companies.push(td.firstElementChild.innerHTML);
        } else {
            arr_companies.push(td.innerHTML);
        }
    }

    console.log(arr_companies);



});