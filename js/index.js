/**
 * Created by Dell on 2017/7/5.
 */
window.onload=function () {
    //获取img元素中的src
    var pImgs=document.getElementById("picture").getElementsByTagName("img");
    // 获取list li元素
    var l_list=document.getElementById("list").getElementsByTagName("li");
    var lidedex=0;
    var rightdom=document.getElementById("right");
    var lestdom=document.getElementById("left");
    for(var i=0;i<l_list.length;i++) {
        l_list[i].index=i;
        l_list[i].onclick=function () {
            l_list[lidedex].className = "";
            pImgs[lidedex].style.display="none";
            lidedex=this.index;

            l_list[lidedex].className="on";
            pImgs[lidedex].style.display="block";
        };
    };
    //点击右按钮
    rightdom.onclick=function () {
        l_list[lidedex].className = "";
        pImgs[lidedex].style.display="none";
        lidedex++;
        if (lidedex>l_list.length-1){
            lidedex=0;
        }
        l_list[lidedex].className="on";
        pImgs[lidedex].style.display="block";
    };
    //点击左按钮
    lestdom.onclick=function () {
        l_list[lidedex].className = "";
        pImgs[lidedex].style.display="none";
        lidedex--;
        if (lidedex<0){
            lidedex=l_list.length-1;
        }
        l_list[lidedex].className="on";
        pImgs[lidedex].style.display="block";
    };
};