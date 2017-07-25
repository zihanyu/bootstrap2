$(function(){
    var i=0;
    function fun1(){
        if(i==0){
            $(".header ul").animate({left:-1366*i+"px"},500);
            $(".num li").eq(i).css({"background":"red"});
            $(".num li").eq(i).siblings("li").css({"background":"#cdcdcd"});
            $(".i1").animate({top:"120px",opacity: "1"},1500);
            $(".i3").animate({left:"200px",opacity: "1"},1500);
            $(".i2").animate({opacity: "1"},2500);
            $(".i4").css({left:"-600px",opacity: "0"});
            $(".i5").css({left:"1200px",opacity: "0"});
            $(".s1").css({top:"60px",opacity: "0"});
            $(".s2").css({top:"60px",opacity: "0"});
        }
        if(i==1){
            $(".header ul").animate({left:-1366*i+"px"},500);
            $(".num li").eq(i).css({"background":"red"});
            $(".num li").eq(i).siblings("li").css({"background":"#cdcdcd"});
            $(".i4").animate({left:"0px",opacity: "1"},2500);
            $(".i5").animate({left:"900px",opacity: "1"},2500);
            $(".i1").css({top:"100px",opacity: "0"});
            $(".i3").css({left:"180px",opacity: "0"});
            $(".i2").css({"opacity": "0"});
            $(".s1").css({top:"60px",opacity: "0"});
            $(".s2").css({top:"60px",opacity: "0"});
        }
        if(i==2){
            $(".header ul").animate({left:-1366*i+"px"},500);
            $(".num li").eq(i).css({"background":"red"});
            $(".num li").eq(i).siblings("li").css({"background":"#cdcdcd"});
            $(".i1").css({top:"100px",opacity: "0"});
            $(".i3").css({left:"180px",opacity: "0"});
            $(".i2").css({"opacity": "0"});
            $(".i4").css({left:"-600px",opacity: "0"});
            $(".i5").css({left:"1200px",opacity: "0"});
            $(".s1").animate({top:"100px",opacity: "1"},2500);
            $(".s2").animate({top:"100px",opacity: "1"},2500);
        }
        i++;
        if(i>3){
            $(".header ul").animate({left:"0px"},500);
            i=0
        }
    }
    var timer;
    timer=setInterval(fun1,2000);
    $(".num li").hover(function(){
        clearInterval(timer);
        var m=$(this).index();
        i=m;
        fun1(i);
    },function(){timer=setInterval(fun1,2000);})
});

function fun(){
    //提取页面数据
    var v_name=document.getElementById("user").value;
    var v_pwd=document.getElementById("pwd").value;

    if(v_name=='' && v_pwd==''){

        show.innerText="请输入用户名和密码";
    }else if(v_name=='' && v_pwd!=''){

        show.innerText="请输入用户名";
    }else if(v_name!='' && v_pwd==''){

        show.innerText="请输入密码";
    }else {
        var XHRequest;
        //创建XMLHttpRequest
        if(window.XMLHttpRequest){//目前的高级浏览器
            XHRequest=  new XMLHttpRequest();
        }else if(window.ActiveXObject){
            try {
                XHRequest = new ActiveXObject("Msxm12.XMLHTTP")//IE7及以上 firefox 低版本
            }catch(e) {
                XHRequest = new ActiveXObject("Microsoft.XMLHTTP")//IE5/6
            }
        }

        //传送数据--get方式
        var v_url="login1.php?uname="+v_name+"&upwd="+v_pwd;
        //  XHRequest.open(请求方式，请求地址，是否异步)
        XHRequest.open('get',v_url,true);
        //回调函数--接受服务器返回的数据
        XHRequest.onreadystatechange=function(){
            if(XHRequest.status==200 && XHRequest.readyState==4){
                var str=XHRequest.responseText;
//                        alert(str.replace(/(^\s*)|(\s*$)/g,""));
                if(str.replace(/(^\s*)|(\s*$)/g,"")=='success'){
                    location.href="login.2.php";
//                            location.href="index.php";
                }else if(str='false') {
                    show.style.display="block";
                    show.innerText="登录失败！";
                }
            }
        }
        XHRequest.send();
    }
}
function fun1(){
    user.value=null;
}


function loading(){
    var s1=document.getElementById("login_s1").value;
    var s2=document.getElementById("login_s2").value;
    var name=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var XHRquest;
    if(window.XMLHttpRequest){
        XHRquest= new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            XHRquest =new ActiveXObject("Msxml2.XMLHTTP")
        }catch(e){
            XHRquest =new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    var url="login.php?user="+name+"&pwd="+password;
    XHRquest.open('get',url,true);
    XHRquest.onreadystatechange=function(){
        if(XHRquest.status==200 && XHRquest.readyState==4){
            var str=XHRquest.responseText;
            if(str=="false"){
                alert("用户名或密码错误")
            }
            if(str=="success"){
                alert("登录成功！！");
                location.href="index.html";
            }
        }
    };
    XHRquest.send();

}

function createXHR(){
    var XHRequest;
    //创建XMLHttpRequest  考虑浏览器兼容性
    if(window.XMLHttpRequest){ //目前的高版本浏览器
        XHRequest= new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            XHRequest= new ActiveXObject("Msxml2.XMLHTTP");//ie7及以上，firefox低版本
        }catch(e){
            XHRequest= new ActiveXObject("Microsoft.XMLHTTP");//ie5\6
        }
    }
    return XHRequest;
}
function hyqueryall(){
    var XHR=createXHR();
    var v_url="admin.php";
    XHR.open('get',v_url,true);
    XHR.onreadystatechange=function(){
        if(XHR.status==200 && XHR.readyState==4){
            var str=XHR.responseText;
//                    alert(str);
            var json_v=eval(str);
            var v_show=document.getElementById("show");
            var str="";
            for(var i=0;i<json_v.length;i++){
                str+= "<tr>"+"<td>"+json_v[i].aid+"</td>"+"<td>"+json_v[i].aname+"</td>"+
                    "<td>"+ json_v[i].apwd+"</td>"+ "<td>"+json_v[i].aemail+"</td>"+
                    "<td>"+"<a href='#' onclick=hydel("+json_v[i].aid+")>删除</a>"+"</td>"+"</tr>";
            }
            v_show.innerHTML="<tr>"+"<td>"+"序号"+"</td>"+"<td>"+"用户名"+"</td>"+"<td>"+"密码"+"</td>"+"<td>"+"邮箱"+"</td>"+"<td>"+"操作"+"</td>"+"</tr>"+"<br>"+str;
//                    v_show.style.background="red";

        }
    }
    XHR.send();
}
//删除-按用户id
function hydel(delid){
//            alert(delid);
    //确认消息提示
//            var v1=confirm("确定删除吗?")
//            if (v1){
    if (confirm("确定删除吗?")){
        var XHR=createXHR();
        var v_url="admin_sq.php?vdelid="+delid;
        XHR.open('get',v_url,true);
        XHR.onreadystatechange=function() {
            if (XHR.status == 200 && XHR.readyState == 4) {
                var str = XHR.responseText;
                // alert(str);
                if (str=="success"){
                    hyqueryall();
                }
            }
        }
        XHR.send();
    }
}



function createXHR(){
    var XHRequest;
    //创建XMLHttpRequest  考虑浏览器兼容性
    if(window.XMLHttpRequest){ //目前的高版本浏览器
        XHRequest= new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            XHRequest= new ActiveXObject("Msxml2.XMLHTTP");//ie7及以上，firefox低版本
        }catch(e){
            XHRequest= new ActiveXObject("Microsoft.XMLHTTP");//ie5\6
        }
    }
    return XHRequest;
}

function sphyqueryall(){
    var XHR=createXHR();
    var v_url="spgl.php";
    XHR.open('get',v_url,true);
    XHR.onreadystatechange=function(){
        if(XHR.status==200 && XHR.readyState==4){
            var str=XHR.responseText;
//                    alert(str);
            var json_v=eval(str);
            var v_show_1=document.getElementById("show_1");
            var str="";
            for(var i=0;i<json_v.length;i++){
                str+= "<tr>"+"<td>"+json_v[i].aid+"</td>"+"<td>"+json_v[i].aname+"</td>"+
                    "<td>"+ json_v[i].aprice+"</td>"+ "<td>"+json_v[i].acontent+"</td>"+
                    "<td>"+json_v[i].apimage+"</td>"+"<td>"+json_v[i].atid+"</td>"+
                    "<td>"+"<a href='#' onclick=hydel("+json_v[i].aid+")>删除</a>"+"</td>"+"</tr>";
            }
            v_show_1.innerHTML="<tr>"+"<td>"+"序号"+"</td>"+"<td>"+"商品名称"+"</td>"+"<td>"+"商品价格"+"</td>"+"<td>"+"商品介绍"+"</td>"+"<td>"+"商品图片路径"+"</td>"+"<td>"+"商品类型"+"</td>"+"<td>"+"操作"+"</td>"+"</tr>"+"<br>"+str;

        }
    }
    XHR.send();
}

function sphydel(delid){

    if (confirm("确定删除吗?")){
        var XHR=createXHR();
        var v_url="spsq.php?vdelid="+delid;
        XHR.open('get',v_url,true);
        XHR.onreadystatechange=function() {
            if (XHR.status == 200 && XHR.readyState == 4) {
                var str = XHR.responseText;
                //alert(str);
                if (str=="success"){
                    sphyqueryall();
                }
            }
        }
        XHR.send();
    }
}
function createXHR(){
    var XHRequest;
    //创建XMLHttpRequest  考虑浏览器兼容性
    if(window.XMLHttpRequest){ //目前的高版本浏览器
        XHRequest= new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            XHRequest= new ActiveXObject("Msxml2.XMLHTTP");//ie7及以上，firefox低版本
        }catch(e){
            XHRequest= new ActiveXObject("Microsoft.XMLHTTP");//ie5\6
        }
    }
    return XHRequest;
}
function ddhyqueryall(){
    var XHR=createXHR();
    var v_url="dingdangl.php";
    XHR.open('get',v_url,true);
    XHR.onreadystatechange=function(){
        if(XHR.status==200 && XHR.readyState==4){
            var str=XHR.responseText;
//                    alert(str);
            var json_v=eval(str);
            var v_show_1=document.getElementById("show_2");
            var str="";
            for(var i=0;i<json_v.length;i++){
                str+= "<tr>"+"<td>"+json_v[i].aid+"</td>"+"<td>"+json_v[i].auid+"</td>"+
                    "<td>"+ json_v[i].anum+"</td>"+ "<td>"+json_v[i].aodate+"</td>"+
                    "<td>"+"<a href='#' onclick=hydel("+json_v[i].aid+")>删除</a>"+"</td>"+"</tr>";
            }
            v_show_1.innerHTML="<tr>"+"<td>"+"订单id"+"</td>"+"<td>"+"用户id"+"</td>"+"<td>"+"数量"+"</td>"+"<td>"+"订单日期"+"</td>"+"<td>"+"操作"+"</td>"+"</tr>"+"<br>"+str;

        }
    }
    XHR.send();
}

function ddhydel(delid){

    if (confirm("确定删除吗?")){
        var XHR=createXHR();
        var v_url="dingdansq.php?vdelid="+delid;
        XHR.open('get',v_url,true);
        XHR.onreadystatechange=function() {
            if (XHR.status == 200 && XHR.readyState == 4) {
                var str = XHR.responseText;
                //alert(str);
                if (str=="success"){
                    ddhyqueryall();
                }
            }
        }
        XHR.send();
    }
}

$(function(){
    //隐藏
    $("#mb").hide();
    $("#close").hide();
    $("#img img").hide();

    var big_arr=["images/sp1.png","images/sp2.png","images/sp3.png","images/sp4.png","images/sp5.png","images/sp6.png","images/sp7.png","images/sp8.png","images/sp9.png"];
    $(".content_ul01 li").click(function(){
//                alert( $(this).index());
        $("#big img").attr("src",big_arr[$(this).index()]);

        //显示蒙版
        $("#mb").show();
        $("#close").show();
        $("#img").show();
        $("#img img").show();
        $(" #img img").attr("src",big_arr[$(this).index()]);
    });
    $("#close").click(function(){
//             $("#mb01").hide();

        //显示蒙版
        $("#mb").hide();
        $("#close").hide();
        $("#img").hide();
        $("#img img").hide();
//                $(" #img img").attr("src",big_arr[$(this).index()]);
    });

});


$(function(){
    //隐藏
    $("#mb").hide();
    $("#close").hide();
    $("#img img").hide();

    var big_arr=["images/sp1.png","images/sp2.png","images/sp3.png","images/sp4.png","images/sp5.png","images/sp6.png","images/sp7.png","images/sp8.png","images/sp9.png"];
    $(".content_right2 img").click(function(){
//                alert( $(this).index());
        $("#big img").attr("src",big_arr[$(this).index()]);

        //显示蒙版
        $("#mb").show();
        $("#close").show();
        $("#img").show();
        $("#img img").show();
        $(" #img img").attr("src",big_arr[$(this).index()]);
    });
    $("#close").click(function(){
//             $("#mb01").hide();

        //显示蒙版
        $("#mb").hide();
        $("#close").hide();
        $("#img").hide();
        $("#img img").hide();
//                $(" #img img").attr("src",big_arr[$(this).index()]);
    });

});




$(function(){

    $(".magnify").hover(function(){
        $.fn.imageZoom({
            small :"small",
            large : "large",
            magnify: "magnify"
        });

    },function(){});

    $(".magnify_02").hover(function(){
        $.fn.imageZoom({
            small : "small_02",
            large : "large_02",
            magnify: "magnify_02"
        });

    },function(){})

});




$(function(){
    $(".upfil_0").hide();
    $(".a8").click(function(){
        $(".upfil_0").show();

        //$("#admin_form").hide();
        //$(".usp2_div").hide();
        //$(".upimg1").hide();
        //
        //$("#show_1").hide();
        //$(".usp3_div").hide();
        //$(".upimg3").hide();
        //
        //$("#show_2").hide();
        //$(".usp4_div").hide();
        //$(".upimg4").hide();
        //


    });
});
$(function() {
    $(".upimg").click(function () {
        $(".upfil_0").hide();
    });
});





$(function() {
    $(".ups2").hide();
    $(".admin_hygl").click(function () {
        $(".ups2").show();
        //
        //$(".upfil_0").hide();
        //
        //$("#show_1").hide();
        //$(".usp3_div").hide();
        //$(".upimg3").hide();
        //
        //$("#show_2").hide();
        //$(".usp4_div").hide();
        //$(".upimg4").hide();
    });
});
$(function() {
    $(".upimg1").click(function () {
        $("#admin_form").hide();
        $(".usp2_div").hide();
        $(".upimg1").hide();
    });
});

$(function() {
    $(".ups3").hide();
    $(".spguanli_1").click(function () {
        $(".ups3").show();
        //
        //$(".upfil_0").hide();
        //
        //$("#admin_form").hide();
        //$(".usp2_div").hide();
        //$(".upimg1").hide();
        //
        //$("#show_2").hide();
        //$(".usp4_div").hide();
        //$(".upimg4").hide();
    });
});
$(function() {
    $(".upimg3").click(function () {
        $(".spguanli_2").hide();
        $("#show_1").hide();
        $(".usp3_div").hide();
        $(".upimg3").hide();
    });
});

$(function() {
    $(".ups4").hide();
    $(".dingdanguanli_1").click(function () {
        $(".ups4").show();
        //
        //$(".upfil_0").hide();
        //
        //$("#admin_form").hide();
        //$(".usp2_div").hide();
        //$(".upimg1").hide();
        //
        //$("#show_1").hide();
        //$(".usp3_div").hide();
        //$(".upimg3").hide();
    });
});
$(function() {
    $(".upimg4").click(function () {
        $(".dingdanguanli_2").hide();
        $("#show_2").hide();
        $(".usp4_div").hide();
        $(".upimg4").hide();
    });
});




function fungm(){

    document.write("购买成功！！！");

//alert("购买成功！");
//if(  $v1['uname']==null) {
    //alert("您还没有登录，请登录！！！");
    //document.write("您还没有登录，请" + "<a href='login.html'>登录</a>" + "！");
//}
//}else if($_SESSION["sid"]= $v1['uid']){
    var v_pid=document.getElementById("inp_pid").value;
    var v_uid= document.getElementById("inp_uid").value;
    var v_num= document.getElementById("pnum").value;
    location.href="order.php?pid="+v_pid+"&uid="+v_uid+"&num="+v_num;
   //}
}



$(function(){
    $("#register_jg1,#register_jg2,#register_jg3").hide();
    $("#register_sub").attr("disabled","disabled");//按钮失效
    $("#register_zh").focus(function(){
        $(this).val("");
        $("#register_jg1").hide();
    });
    $("#register_zh").blur(function(){//焦点消失
        var v1=$(this).val();
        if(v1==""||v1==null) {
            alert("用户名不能为空");
            $(this).focus();
            $(this).val("");
            $("#register_jg1").show();
        }else {
            $("#register_sub").removeAttr("disabled");
        }
    });
    $("#register_pwd").focus(function(){
        $(this).val("");
        $("#register_jg2").hide();
    });
    $("#register_pwd").blur(function(){//焦点消失
        var v2=$(this).val();
        if(v2==""||v2==null) {
            alert("用户密码不能为空");
            $(this).focus();
            $("#register_jg2").show();
        }else {
            $("#register_sub").removeAttr("disabled");
        }
    });
    $("#register_email").focus(function(){
        $(this).val("");
        $("#register_jg3").hide();
    });
    $("#register_email").blur(function(){//焦点消失
        var v3=$(this).val();
        $("#register_jg3").hide();
        if(v3==""||v3==null) {
            alert("用户邮箱不能为空");
            $(this).focus();
            $("#register_jg3").show();
        }else {
            $("#register_sub").removeAttr("disabled");
        }
    });
});
$(function(){
    $("#register_sub").removeAttr("disabled");
    $("#register_sub").click(function(){
        var v1=$("#register_zh").val();
        var v2=$("#register_pwd").val();
        var v3=$("#register_email").val();
        if(v1==""||v1==null||v2==""||v2==null||v3==""||v3==null){
            alert("您还没有注册完善，请填写完基本信息！！！");
            //$("#register_sub").attr("disabled","disabled");//按钮失效
        }
    });
});

$(function(){
    $("#register_jg01,#register_jg02").hide();
    $("#user").focus(function(){
        $(this).val("");
        $("#register_jg01").hide();
    });
    $("#user").blur(function(){//焦点消失
        var v1=$(this).val();
        if(v1==""||v1==null) {
            alert("用户名不能为空");
            $(this).focus();
            $(this).val("");
            $("#register_jg01").show();
        }
    });
    $("#pwd").focus(function(){
        $(this).val("");
        $("#register_jg02").hide();
    });
    $("#pwd").blur(function(){//焦点消失
        var v2=$(this).val();
        if(v2==""||v2==null) {
            alert("用户密码不能为空");
            $(this).focus();
            $("#register_jg02").show();
        }
    });
});