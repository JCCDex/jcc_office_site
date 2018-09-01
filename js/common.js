function dialog_div(o_w,o_h,url,page_name){
	var divname='ajax_dialog';
	$(document.body).append('<div id="'+divname+'" class="ajax_dialog"><div id="btl" class="btl"><span>点击拖拽</span><a href="javascript:void(0)" onclick="dialog_div_close(\''+divname+'\')"> 关闭 </a> </div><div id="nr" class="nr"></div></div><div id="'+divname+'divLock" class="divLock"><iframe style="position:absolute;width:100%;height:100%;_filter:alpha(opacity=0);opacity=0;border-style:none;"></iframe></div>');
		
	divname='#'+divname;
	var _move=false;//移动标记
	var _x,_y;//鼠标离控件左上角的相对位置
	var div_name=""+divname+" #btl";
	$(div_name).click(function(){
	}).mousedown(function(e){
		_move=true;
		$(div_name).css("cursor","move");
		_x=e.pageX-parseInt($(divname).css("left"));
		_y=e.pageY-parseInt($(divname).css("top"));
		});
		$(document).mousemove(function(e){
		if(_move){
			var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
			var y=e.pageY-_y;
			$(divname).css({top:y,left:x});//控件新位置
		}
		}).mouseup(function(){
		_move=false;
	});
	
	$(divname).css("width",o_w);
	$(divname).css("height",o_h);
	$(".nr").css("height",o_h-35);
	if(page_name=='') page_name='index.php';
	$.ajax({
		type: "get",
		url: page_name,
		data: url,
		dataType:"html",
		beforeSend:function()
		{
		msg_show('数据加载中,请稍候!',999);
		},
		success: function(html){
			msg_close();
			$(""+divname+" .nr").html(html)
			$('.ajax_dialog input:text:first').focus();//焦点丢失获取焦点
		}
	});
	div_center(divname);
	$(""+divname+"divLock").height($("body").height());
}
function dialog_div2(o_w,o_h,url,page_name){
	var divname='ajax_dialog';
	$(document.body).append('<div id="'+divname+'" class="ajax_dialog"><div id="btl" class="btl"><span>点击拖拽</span><a href="javascript:void(0)" onclick="dialog_div_close(\''+divname+'\')"> 关闭 </a> </div><div id="nr" class="nr"></div></div><div id="'+divname+'divLock" class="divLock"><iframe style="position:absolute;width:100%;height:100%;_filter:alpha(opacity=0);opacity=0;border-style:none;"></iframe></div>');

	divname='#'+divname;
	var _move=false;//移动标记
	var _x,_y;//鼠标离控件左上角的相对位置
	var div_name=""+divname+" #btl";
	$(div_name).click(function(){
	}).mousedown(function(e){
		_move=true;
		$(div_name).css("cursor","move");
		_x=e.pageX-parseInt($(divname).css("left"));
		_y=e.pageY-parseInt($(divname).css("top"));
		});
		$(document).mousemove(function(e){
		if(_move){
			var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
			var y=e.pageY-_y;
			$(divname).css({top:y,left:x});//控件新位置
		}
		}).mouseup(function(){
		_move=false;
	});

	$(divname).css("width",o_w);
	$(divname).css("height",o_h);
	$(".nr").css("height",o_h-35);
	if(page_name=='') page_name='index.php';
	$.ajax({
		type: "get",
		url: page_name,
		data: url,
		dataType:"html",
		beforeSend:function()
		{
		msg_show('数据加载中,请稍候!',999);
		},
		success: function(html){
			msg_close();
			$(""+divname+" .nr").html(html)
			$('.ajax_dialog input:text:first').focus();//焦点丢失获取焦点
		}
	});
	div_center(divname);
	$(""+divname+"divLock").height($("body").height());
}
function dialog_div_close(obj){
	$("#"+obj+"").remove();
	$("#"+obj+"divLock").remove();
}
function div_display(div_name,status,obj){
	if($(div_name).css("display")=="block")
	{
	$(div_name).css("display","none");
	obj.find("img").attr("src","/bzy/img/add.gif");
	}
	else
	{
	$(div_name).css("display",status);
	obj.find("img").attr("src","/bzy/img/decrease.gif");
	}
}
function msg_show(n,t)
{
	//if(n==null) n='操作成功!';
	$(document.body).append('<div class="msg_show" id="msg_show"></div>');
	div_center('#msg_show');
	$('#msg_show').html(n);
	$('#msg_show').show();
	if(t!=999)
	{
		if(t==null) t=500;
		if(t!='')
		{
		setTimeout("$('#msg_show').hide();$('#msg_show').remove();",t); 
		}
		else
		{
		$('#msg_show').hide();
		$('#msg_show').remove();
		}
	}
}
function msg_close()
{
	$('#msg_show').remove();
}
function div_center(obj){
	var windowWidth = $(window).width();   
	var windowHeight = $(window).height();   
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"top": (windowHeight-popupHeight)/2+$(document).scrollTop(),   
		"left": (windowWidth-popupWidth)/2   
	});  
}
function goto_url(url){
	if(url=='')url=location.href;
	location.href=url;
}
function ajax_list(path,go_url){
	$.ajax({
	type: "post",
	url: path,
	data: '',
	async:false,
	dataType:"html",
	success: function(html)
	{
		msg_show(html,5000000);
		goto_url(go_url)
	}
	});
}
function ajax_load(path){
	var htmls;
	$.ajax({
	type: "post",
	url: path,
	data: '',
	async:false,
	dataType:"html",
	success: function(html){
		htmls=html;
	}
	});
	return htmls;
}

$(document).ready(function(){
	//win_size()
})
$(window).resize(function(){
	//win_size()
})
function win_size(){
	if($("#left").height()>$("#right").height())
	{
		$("#right").height($("#left").height());
	}
	else
	{
		$("#left").height($("#right").height());
	}
}

function delete_img(url,obj){
	var html=ajax_load(url);
	msg_show(html,1000);
	obj.prev().remove();
	obj.remove();
}

function SelectAll(name) { var checkboxs=document.getElementsByName(name); for (var i=0;i<checkboxs.length;i++) {  var e=checkboxs[i];  e.checked=!e.checked; }}
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
   }catch(e){
       if(window.netscape){
          try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
         }catch(e){
              alert("抱歉，此操作被浏览器拒绝！nn请在浏览器地址栏输入about:config并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
          }
       }else{
        alert("抱歉，您所使用的浏览器无法完成此操作。nn您需要手动将【"+url+"】设置为首页。");
       }
  }
}


//收藏本站
function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    }
     catch (e) {
         alert("对不起，您的浏览器不支持此操作！\n请您使用菜单栏或Ctrl+D收藏本站。");
     }
  }
}

function buy_now()
{
	var id = new Array(),name = new Array();
	$("input[class='specifications_radio']:checked").each(function(i){
	  id[i]=($(this).val());
	  name[i]=$(this).next().val();
	});
	window.location.href="index.php?m=cart&a=buy_now&goods_id="+$("#goods_id").val()+"&name="+name+"&value="+id+"&number="+$("#number").val();
}


function control_number(obj,id)
{
	var number=parseInt($("#"+id).val());
	var inventory=parseInt($("#inventory").val());
	if(obj=='add')
	{
		number+=1;
		if(number>inventory)
		{
			msg_show("选择数量不能大于库存",1000);
			$("#"+id).val(inventory);
		}
		else
		{
			$("#"+id).val(number);
		}
	}
	else if(obj=='reduction')
	{
		number-=1;
		if(number<1)number=1;
		$("#"+id).val(number);
	}
	else if(obj=='input')
	{
		if(number>inventory)
		{
			msg_show("选择数量不能大于库存",1000);
			$("#"+id).val(inventory);
			number=parseFloat($("#"+id).val());
		}
		if(number<1 || isNaN(number))
		{
			$("#"+id).val(1);
		}
	}
}


function menu_ca(obj,id)
{
	var html=ajax_load("index.php?m=member&a=menu_cascade&region_id="+obj.val());
	$("#"+id).next('select').html(html);
}

function set_default_address(address_id,obj)
{
	var html=ajax_load("index.php?m=member&a=set_default_address&address_id="+address_id);
	$(".defalut").addClass("reset");
	$(".defalut").removeClass("defalut");
	obj.parent().removeClass("reset");
	obj.parent().addClass("defalut");
}


function use_address(address_id,obj)
{
	$(".defalut").addClass("reset");	
	$(".defalut").removeClass("defalut");
	obj.removeClass("reset");
	obj.addClass("defalut");
	$("#address_id").val(address_id);
	select_address($("#xdz01"));
	if($("#freight_switch").val()==1)
	{
		freight();//运费计算
	}
	else if($("#freight_switch").val()==2)
	{
		freight_total();//运费计算
	}
	else if($("#freight_switch").val()==3)
	{
		package_freight();//运费计算
	}
}

function select_address(obj)
{
	obj.children("input").attr("checked","checked");
	if(obj.children("input").val()==1)
	{
		$(".add-news").hide();
	}
	else
	{		
		$(".add-news").show();
	}
}


function add_address_save()
{
	if($("#consignee").val()=='')
	{
		alert("请输入收货人姓名");
	}
	else if($("#province").val()=='')
	{
		alert("请选择收货省份");
	}
	else if($("#city").val()=='')
	{
		alert("请选择收货城市");
	}
	else if($("#area").val()=='')
	{
		alert("请选择收货区、县");
	}
	else if($("#address").val()=='')
	{
		alert("请输入收货地址");
	}
	else if($("#phone").val()=='')
	{
		alert("请输入收货联系电话");
	}
	else
	{
		var html=ajax_load("index.php?m=order&a=add_address_save&consignee="+$("#consignee").val()+"&province="+$("#province").val()+"&city="+$("#city").val()+"&area="+$("#area").val()+"&address="+$("#address").val()+"&phone="+$("#phone").val());
		var json_obj = jQuery.parseJSON(html);
		$("#add_address_btn").attr({"disabled":"disabled"});
		$("#address_prompt").html(json_obj.address_prompt);
		$("#address_id").val(json_obj.insert_id);
		if($("#shopping_cart_id").val())
		{
			//freight_total($("#shopping_cart_id").val());//运费计算
		}
		else
		{
			//freight();//运费计算
		}
	}
}

function return_mycart1()
{
	if($("#shopping_address_id").val()=='')
	{
		alert("请选择收货地址");
		return false;
	}
	else
	{
		return true;
	}
}

function add_cart()
{
	var id = new Array(),name = new Array();
	$("input[class='specifications_radio']:checked").each(function(i){
		id[i]=($(this).val());
		name[i]=$(this).next().val();
	});
	
	var html=ajax_load("index.php?m=cart&a=add_cart&goods_id="+$("#goods_id").val()+"&value="+id+"&name="+name+"&number="+$("#number").val());
	var json_obj = jQuery.parseJSON(html);
	alert(json_obj.note);
	$("#cart_number").html(json_obj.cart_number);
}

function cart_total_amount()
{
	var cart_id = new Array();
	$(".bgcolor").removeClass("bgcolor");
	$("input[name='cart_id[]']:checked").each(function(i)
	{
		cart_id[i]=$(this).val();
		$(this).parent().parent().addClass("bgcolor");
	});
	$(".number_b").html($("input[name='cart_id[]']:checked").length);
	var html=ajax_load("index.php?m=cart&a=cart_total_amount&cart_id="+cart_id);
	var json_obj = jQuery.parseJSON(html);
	$("#cart_total_amount").html("¥"+json_obj.cart_total_amount);
}






function cart_control_number(obj,id,goods_id,cart_id)
{
	var number=parseFloat($("#"+id).val());
	if(obj=='add')
	{
		number+=1;
		$("#"+id).val(number);
	}
	else if(obj=='reduction')
	{
		number-=1;
		if(number<1)number=1;
		$("#"+id).val(number);
		
	}
	
	if(number<1)
	{
		$("#"+id).val(1);
	}

	var html=ajax_load("index.php?m=cart&a=edit_cart_save&goods_id="+goods_id+"&cart_id="+cart_id+"&number="+number);
	var json_obj = jQuery.parseJSON(html);		
	$("#sum_"+cart_id).html(json_obj.sum_price);
	$("#goods_price_"+cart_id).val(json_obj.sum_price);
	cart_total_amount();
}

function del_cart(cart_id,obj)
{
	var html=ajax_load("index.php?m=cart&a=del_cart&cart_id="+cart_id);
	//msg_show(html,500);
	obj.parent().parent().remove();
	cart_total_amount();
}

function weixin_qrcode_pay(order_id)
{
	$.ajax({
	type: "post",
	url: "index.php?m=order&a=weixin_qrcode&order_id="+order_id,
	data: "",
	dataType:"html",
	success: function(html){
			$("#weixin_bg").show();	
			$(".qrcode").html(html);
			//setInterval("order_state()",3000);
		}
	});
}








