__NUXT_JSONP__("/posts/raspberrypi-status-display", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{article:{slug:"raspberrypi-status-display",description:l,title:"Raspberry Pi Mini OLED Status Display",image:"raspberrypi-status-display.jpg",tags:["systemadministration","software","hardware","raspberry pi","3d druck"],toc:[{id:q,depth:r,text:s},{id:t,depth:m,text:u},{id:v,depth:m,text:w},{id:x,depth:m,text:y},{id:z,depth:r,text:A}],body:{type:B,children:[{type:b,tag:e,props:{},children:[{type:a,value:l}]},{type:a,value:d},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Der Bildschirm selbst sitzt in einer 3D-gedruckten Halterung am oberen Rand von einem Kallax Regalfach."}]},{type:a,value:d},{type:b,tag:C,props:{id:q},children:[{type:b,tag:f,props:{href:"#angezeigte-informationen",ariaHidden:g,tabIndex:h},children:[{type:b,tag:c,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:d},{type:b,tag:n,props:{id:t},children:[{type:b,tag:f,props:{href:"#hostname--ip",ariaHidden:g,tabIndex:h},children:[{type:b,tag:c,props:{className:[i,j]},children:[]}]},{type:a,value:u}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"In der ersten Zeile (bei diesm Modell rot) wird der Hostname sowie die externe IP des Raspberrys angezeigt. Der Hostname wird über "},{type:b,tag:D,props:{},children:[{type:a,value:"socket.gethostname()"}]},{type:a,value:" abgerufen, die IP mit diser Funktion die ich auf StackOverflow gefunden habe:"}]},{type:a,value:d},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{},children:[{type:b,tag:D,props:{className:["hljs","python"]},children:[{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"def"}]},{type:a,value:" "},{type:b,tag:c,props:{className:["hljs-title","function_"]},children:[{type:a,value:"get_ip"}]},{type:a,value:"():\n    "},{type:b,tag:c,props:{className:[o]},children:[{type:a,value:"\"\"\"https:\u002F\u002Fstackoverflow.com\u002Fa\u002F28950776\"\"\""}]},{type:a,value:"\n    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    s.settimeout("},{type:b,tag:c,props:{className:[p]},children:[{type:a,value:E}]},{type:a,value:")\n    "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"try"}]},{type:a,value:":\n        s.connect(("},{type:b,tag:c,props:{className:[o]},children:[{type:a,value:"'192.255.255.255'"}]},{type:a,value:", "},{type:b,tag:c,props:{className:[p]},children:[{type:a,value:"1"}]},{type:a,value:"))\n        IP = s.getsockname()["},{type:b,tag:c,props:{className:[p]},children:[{type:a,value:E}]},{type:a,value:"]\n    "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"except"}]},{type:a,value:" Exception:\n        IP = "},{type:b,tag:c,props:{className:[o]},children:[{type:a,value:"'127.0.0.1'"}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"finally"}]},{type:a,value:":\n        s.close()\n    "},{type:b,tag:c,props:{className:[k]},children:[{type:a,value:"return"}]},{type:a,value:" IP\n"}]}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Sie erzeugt einen socket der direkt timeouted und versucht dann eine Verbindung zu einer Broadcast IP des lokalen Netzwerks aufzubauen.\nDadurch ist es möglich die IP zu finden die normalerweise benutzt wird (keine VPS verbindungen, docker bridges oder localhost)."}]},{type:a,value:d},{type:b,tag:n,props:{id:v},children:[{type:b,tag:f,props:{href:"#load-cpu-auslastung-ram-auslastung-cpu-temperatur",ariaHidden:g,tabIndex:h},children:[{type:b,tag:c,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Diese Informationen werden über die built-in library psutil abgerufen."}]},{type:a,value:d},{type:b,tag:n,props:{id:x},children:[{type:b,tag:f,props:{href:"#firing-alerts",ariaHidden:g,tabIndex:h},children:[{type:b,tag:c,props:{className:[i,j]},children:[]}]},{type:a,value:y}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Die Anzahl der firing Alerts wird per requests von prometheus abgerufen. Das Symbol auf der rechten Seite ist ein Häkchen, wenn es keine firing Alerts gibt, sonst ein Ausrufezeichen."}]},{type:a,value:d},{type:b,tag:C,props:{id:z},children:[{type:b,tag:f,props:{href:"#burn-in-schutz",ariaHidden:g,tabIndex:h},children:[{type:b,tag:c,props:{className:[i,j]},children:[]}]},{type:a,value:A}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Wenn OLED Displays über lange Zeit das gleiche Anzeigen, kann es zu burn-in effekten kommen. Um das zu verhindern wird alle 10 Minuten ein paar mal der Bildschirm zwischen schwarz und weiß gewechselt."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fniwla23\u002Fraspberry_oled_status_display",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Source Code"}]}]}]},excerpt:{type:B,children:[{type:b,tag:e,props:{},children:[{type:a,value:l}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fraspberrypi-status-display",extension:".md",createdAt:F,updatedAt:F},_img:{"/_ipx/s_1280x584/postthumbs/raspberrypi-status-display.jpg":"\u002F_nuxt\u002Fimage\u002F8a85f9.jpg"}}],fetch:{},mutations:void 0}}("text","element","span","\n","p","a","true",-1,"icon","icon-link","hljs-keyword","Diese Statusanzeige benutzt einen SSD1306 128x64 Pixel OLED Bildschirm welcher über I2C an einen Raspberry Pi 4 angeschlossen ist.",3,"h3","hljs-string","hljs-number","angezeigte-informationen",2,"Angezeigte Informationen","hostname--ip","Hostname + IP","load-cpu-auslastung-ram-auslastung-cpu-temperatur","Load, CPU Auslastung, RAM Auslastung, CPU Temperatur","firing-alerts","firing Alerts","burn-in-schutz","Burn-In Schutz","root","h2","code","0","2022-04-18T13:29:30.563Z")));