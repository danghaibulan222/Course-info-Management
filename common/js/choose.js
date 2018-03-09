/**
 * Created by danghaibulan on 17-6-7.
 * 选课添加课程
 */
/*choose页面添加课程*/
var count=1;//ID命名计数=节数
var jieshu=new Array();//存储课程信息




$(document).ready(function(){



    $("#choosebtn").on("click",function(){
        var len=document.getElementById('result').rows.length;//所有结果长度
        for(var i=1;i<=len;i++) {
            var search_result = document.getElementById('result').rows[i].cells;
            if (search_result[0].childNodes[0].checked) {
                search_result[0].childNodes[0].checked=false;
                search_result[0].childNodes[0].style.display='none';//选中框设置


                var loglen=document.getElementById('result2').rows.length;//记录到result2
                var newline=document.getElementById('result2').insertRow(loglen);
                var td0=newline.insertCell(0);
                var td1=newline.insertCell(1);
                var td2=newline.insertCell(2);
                var td3=newline.insertCell(3);
                var td4=newline.insertCell(4);
                var td5=newline.insertCell(5);
                td0.innerHTML=search_result[1].innerHTML;
                td1.innerHTML=search_result[5].innerHTML;
                td2.innerHTML=search_result[2].innerHTML;
                td3.innerHTML=search_result[3].innerHTML;
                td5.innerHTML=search_result[15].innerHTML;
                var btn= document.createElement("button");
                var btntext=  document.createTextNode("删除此课");
                btn.appendChild(btntext);
                btn.setAttribute("class","btn btn-danger");
                btn.setAttribute("onclick","javascript:copy(this);");
                btn.setAttribute("id",search_result[2].innerHTML+search_result[3].innerHTML);
                td4.appendChild(btn);


                var week;//添加课表
                var k;
                var len2=search_result[10].childNodes.length;
                count=1;
                for(k=1;k<len2;k=k+2){

                    switch (search_result[10].childNodes[k].innerHTML) {
                        case "一":
                            week = 1;
                            break;
                        case "二":
                            week = 2;
                            break;
                        case "三":
                            week = 3;
                            break;
                        case "四":
                            week = 4;
                            break;
                        case "五":
                            week = 5;
                            break;
                        case "六":
                            week = 6;
                            break;
                        case "日":
                            week = 7;
                            break;
                        default:
                            break;
                    }
                    var start = search_result[11].childNodes[k].innerHTML.split("-")[0];
                    var end = search_result[11].childNodes[k].innerHTML.split("-")[1];
                    for (var j = start; j <= end; j++) {
                        var course_list = document.getElementById('course1').rows[j].cells;

                        //jieshu[search_result[2].innerHTML+search_result[3].innerHTML]=search_result[15].innerHTML;
                        //生出<a>和弹框
                        var  newNode=  document.createElement("a");
                        var  text=  document.createTextNode(search_result[1].innerHTML);
                        newNode.appendChild(text);
                        var textcontent1="课程名："+search_result[1].innerHTML+"<br>"
                            +"课程号："+search_result[2].innerHTML+"<br>"
                            +"课序号："+search_result[3].innerHTML+"<br>"
                            +"学分："+search_result[4].innerHTML+"<br>"
                            +"老师："+search_result[5].innerHTML+"<br>"
                            +"考试："+search_result[6].innerHTML+"<br>"
                            +"课余量："+search_result[7].innerHTML+"<br>"
                            +"属性："+search_result[8].innerHTML+"<br>"
                            +"周次："+search_result[9].innerHTML+"<br>"
                            +"校区："+search_result[12].innerHTML+"<br>"
                            +"教学楼："+search_result[13].innerHTML+"<br>"
                            +"教室："+search_result[14].innerHTML+"<br>";
                        newNode.setAttribute("id",search_result[2].innerHTML+search_result[3].innerHTML+"_"+count);
                        count++;
                        newNode.setAttribute("class","test");
                        newNode.setAttribute("data-toggle","popover");
                        newNode.setAttribute("data-trigger","hover");
                        newNode.setAttribute("data-html","true");
                        newNode.setAttribute("title","课程信息");
                        newNode.setAttribute("data-content",textcontent1);
                        course_list[week].appendChild(newNode);
                        var  br=  document.createElement("br");
                        course_list[week].appendChild(br);
                        $(".test").popover();

                    }
                }

            }

        }

    });
    $(".test").popover();


});


/*删除课程*/
function copy(e){
    var courid=e.id;
    var ke2;
    var ke=document.getElementById(courid);
    document.getElementById(courid).cells;
    jieshu[courid]=ke.parentNode.parentNode.cells[5].innerHTML;
    for(var m=1;m<=jieshu[courid];m++){
        ke2=document.getElementById(courid+"_"+m);
        var ke2next=ke2.nextSibling;
        ke2.remove();
        ke2next.remove();
    };
    ke.parentNode.parentNode.remove();
}