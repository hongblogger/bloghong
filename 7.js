function bp_thumbnail_resize(image_url,post_title){
var image_width=280;
var image_height=180;
image_tag='<img async="async" width="'+image_width+'" height="'+image_height+'" src="'+image_url.replace('/s72-c/','/w'+image_width+'-h'+image_height+'-c/')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'"/>';
if(post_title!="") return image_tag; else return ""; }
function sompret_image_creator(e,t){var n=300;var r=190;var i=true;var s="http://lh5.ggpht.com/-seTgimF08LA/VZTp6HVjSvI/AAAAAAAAAcE/_nMcfrik7OY/s1600/no_img.gif?imgmax=800";if(i==true&&e==""){e=s}image_tag='<img src="'+e.replace("/s72-c/","/w"+n+"-h190-c/")+'" alt="'+t+'" width="'+n+'" height="'+r+'"/>';if(e!="'+s+'"){return image_tag}else{return""}}
