export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:{"content-query-T2v4tKkAha":{_path:"\u002Farticles\u002F0002",_dir:"articles",_draft:t,_partial:t,_locale:i,_empty:t,title:"Centos7 安装Nginx",description:"在linux centos7 系统中安装nginx",tags:["Linux"],keywords:"linux centos",createTime:"2020-09-07",body:{type:"root",children:[{type:a,tag:"h1",props:{id:v},children:[{type:b,value:v}]},{type:a,tag:n,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:d,props:{code:"yum install gcc-c++\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install gcc-c++"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:q},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905000501405.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_center"},children:[]}]},{type:a,tag:n,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:d,props:{code:"yum install -y pcre pcre-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y pcre pcre-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:q},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905000713407.png#pic_left"},children:[]}]},{type:a,tag:n,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:d,props:{code:"yum install -y zlib zlib-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y zlib zlib-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:q},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905001018686.png#pic_left"},children:[]}]},{type:a,tag:n,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:d,props:{code:"yum install -y openssl openssl-devel\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"yum install -y openssl openssl-devel"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:q},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F2020090500115673.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]}]},{type:a,tag:n,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:g,props:{},children:[{type:b,value:"进入官网下载 nginx。\r\n"},{type:a,tag:"a",props:{href:"http:\u002F\u002Fnginx.org\u002Fen\u002Fdownload.html",rel:["nofollow"]},children:[{type:b,value:"点这里进入官网下载界面"}]},{type:b,value:"\r\n可以看到很多版本，我们这里选择较新的稳定版。\r\n"},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200905001412999.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]},{type:b,value:"\r\n下载完成后，将下载好的压缩包移动到 "},{type:a,tag:"strong",props:{},children:[{type:b,value:"\u002Fusr\u002Flocal"}]},{type:b,value:"下，然后解压。"}]},{type:a,tag:d,props:{code:"tar -zxvf nginx-1.18.0.tar.gz\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"tar -zxvf nginx-"}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"0."}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"tar.gz"}]}]}]}]}]},{type:a,tag:n,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:g,props:{},children:[{type:b,value:"解压后切换到安装目录下。"}]},{type:a,tag:d,props:{code:"cd \u002Fusr\u002Flocal\u002Fnginx\u002Fnginx-1.18.0\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"cd \u002Fusr\u002Flocal\u002Fnginx\u002Fnginx-"}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"0"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"然后执行安装："}]},{type:a,tag:d,props:{code:".\u002Fconfigure --prefix=\u002Fusr\u002Flocal\u002Fnginx   #配置安装目录\r\n\r\nmake\r\n\r\nmake install\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fconfigure --prefix=\u002Fusr\u002Flocal\u002Fnginx   "}]},{type:a,tag:c,props:{class:K},children:[{type:b,value:"#配置安装目录\n"}]}]},{type:a,tag:c,props:{class:e,line:h},children:[{type:a,tag:c,props:{},children:[{type:b,value:u}]}]},{type:a,tag:c,props:{class:e,line:L},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"make\n"}]}]},{type:a,tag:c,props:{class:e,line:4},children:[{type:a,tag:c,props:{},children:[{type:b,value:u}]}]},{type:a,tag:c,props:{class:e,line:5},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"make install"}]}]}]}]}]},{type:a,tag:n,props:{id:s},children:[{type:b,value:s}]},{type:a,tag:g,props:{},children:[{type:b,value:"进入到上面配置的安装目录"}]},{type:a,tag:d,props:{code:"cd \u002Fusr\u002Floca\u002Fnginx\u002Fsbin\r\n\r\n.\u002Fnginx -t\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"cd \u002Fusr\u002Floca\u002Fnginx\u002Fsbin\n"}]}]},{type:a,tag:c,props:{class:e,line:h},children:[{type:a,tag:c,props:{},children:[{type:b,value:u}]}]},{type:a,tag:c,props:{class:e,line:L},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fnginx -t"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"若输出下图，则安装成功：\r\n"},{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200907145542285.png#pic_left"},children:[]}]},{type:a,tag:n,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:g,props:{},children:[{type:b,value:"在上一步的目录下"}]},{type:a,tag:d,props:{code:".\u002Fnginx #启动nginx\n",language:j,meta:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{__ignoreMap:i},children:[{type:a,tag:c,props:{class:e,line:m},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:".\u002Fnginx "}]},{type:a,tag:c,props:{class:K},children:[{type:b,value:"#启动nginx"}]}]}]}]}]},{type:a,tag:g,props:{},children:[{type:b,value:"访问 ip 地址："}]},{type:a,tag:g,props:{},children:[{type:a,tag:o,props:{alt:p,src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F20200907145849432.png?x-oss-process=image\u002Fwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU0MDcyMg==,size_16,color_FFFFFF,t_70#pic_left"},children:[]}]},{type:a,tag:"style",children:[{type:b,value:".ct-aed535{color:#6A9955}\n.ct-07aae7{color:#B5CEA8}\n.ct-7dca01{color:#D4D4D4}"}]}],toc:{title:i,searchDepth:h,depth:h,links:[{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:A,depth:h,text:B},{id:C,depth:h,text:D},{id:E,depth:h,text:F},{id:I,depth:h,text:J},{id:s,depth:h,text:s},{id:M,depth:h,text:N}]}},_type:"markdown",_id:"content:articles:0002.md",_source:"content",_file:"articles\u002F0002.md",_extension:"md"}},prerenderedAt:1683914230084}}("element","text","span","code","line","ct-7dca01","p",2,"","powershell",null,"pre",1,"h2","img","在这里插入图片描述","安装成功的界面：\r\n","ct-07aae7","检测是否安装成功",false,"\n","准备所需环境","安装-gcc","安装 gcc","安装-pcre","安装 pcre","安装-zlib","安装 zlib","最后安装-openssl","最后安装 openssl","下载-nginx","下载 nginx","1.18",".","安装-nginx","安装 nginx","ct-aed535",3,"启动-nginx","启动 nginx"))