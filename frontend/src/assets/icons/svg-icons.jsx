export const YellowAlertSVG = () => (
  <svg
    className='inline-icon'
    fill='#efc100'
    fillRule='evenodd'
    height='15px'
    name='icon--notification-on'
    role='img'
    viewBox='0 0 14 16'
    width='15px'
    aria-label='Announcement'
    alt='Announcement'
  >
    <title>Announcement</title>
    <path d='M11.199 9.9a.5.5 0 0 1-.2-.4V6.23a4 4 0 0 0-3.99-4A3.989 3.989 0 0 0 3.01 6.206L3 9.52a.5.5 0 0 1-.202.4L1 11.252V13h12v-1.75L11.199 9.9zM4.55 14H.5a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .202-.402l1.799-1.333.01-3.062A4.99 4.99 0 0 1 6.5 1.254V0h1v1.254a5 5 0 0 1 4.498 4.975v3.02L13.8 10.6a.5.5 0 0 1 .2.4v2.5a.5.5 0 0 1-.5.5H9.45a2.5 2.5 0 0 1-4.9 0zm1.035 0a1.5 1.5 0 0 0 2.83 0h-2.83z' />
  </svg>
)
export const MuiLeftSVG = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'></path>
  </svg>
)
export const MuiRightSVG = () => (
  <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'></path>
  </svg>
)
export const TrashSVG = () => (
  <svg viewBox='0 0 32 32' id='delete' width='16'>
    <path d='M12 12h2v12h-2zm6 0h2v12h-2z' />
    <path d='M4 6v2h2v20a2 2 0 002 2h16a2 2 0 002-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z' />
  </svg>
)

// eslint-disable-next-line react/prop-types
export const LoadingSVG = ({ color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='Layer_1'
    viewBox='0 0 64 64'
    style={{ whiteSpace: 'preserve-spaces' }}
  >
    <g>
      <path
        id='_a0'
        className='st0'
        d='M32,14.5C22.35,14.5,14.5,22.35,14.5,32C14.5,35.25,15.41,38.29,16.96,40.9C18.25,40.28,19.35,39.52,20.37,38.83C19.19,36.82,18.5,34.5,18.5,32.01C18.5,24.57,24.56,18.51,32,18.51C39.44,18.51,45.5,24.56,45.5,32C45.5,39.44,39.44,45.5,32,45.5C31.49,45.5,30.99,45.46,30.5,45.41C30.5,46.78,30.5,48.09,30.5,49.43C31,49.47,31.49,49.5,32,49.5C41.65,49.5,49.5,41.65,49.5,32C49.5,22.35,41.65,14.5,32,14.5Z'
        fill={color ? color : '#1951EB'}
        fillRule='nonzero'
        transform='translate(32,32) translate(-32,-32)'
      />
    </g>
    {`<script>
      <![CDATA[/*
      KeyshapeJS v1.1.0 (c) 2018-2019 Pixofield Ltd | pixofield.com/keyshapejs/mit-license */
      window.KeyshapeJS=function(){function t(a){return"undefined"!==typeof a}function x(a,b){return a&&0==a.indexOf(b)}function H(a){if(!isFinite(a))throw Error("Non-finite value");}function R(a){if(14>=a)return 16;var b=S[a];b||(b=t(ca[a])?0|(a.toLowerCase().indexOf("color")==a.length-5?48:0):1);return b}function K(a){return 0<=a?Math.pow(a,1/3):-Math.pow(-a,1/3)}function da(a,b,c,d){if(0==a)return 0==b?b=-d/c:(a=Math.sqrt(c*c-4*b*d),d=(-c+a)/(2*b),0<=d&&1>=d?b=d:(d=(-c-a)/(2*b),b=0<=d&&1>=d?d:0)),b;
      var e=c/a-b*b/(a*a)/3;c=b*b*b/(a*a*a)/13.5-b*c/(a*a)/3+d/a;var n=c*c/4+e*e*e/27;b=-b/(3*a);if(0>=n){if(0==e&&0==c)return-K(d/a);a=Math.sqrt(c*c/4-n);d=Math.acos(-c/2/a);c=Math.cos(d/3);d=Math.sqrt(3)*Math.sin(d/3);a=K(a);e=2*a*c+b;if(0<=e&&1>=e)return e;e=-a*(c+d)+b;if(0<=e&&1>=e)return e;e=a*(d-c)+b;if(0<=e&&1>=e)return e}else{a=K(-c/2+Math.sqrt(n));c=K(-c/2-Math.sqrt(n));d=a+c+b;if(0<=d&&1>=d)return d;d=-(a+c)/2+b;if(0<=d&&1>=d)return d}return 0}function ea(a,b){if(48==a&&"number"===typeof b)return"rgba("+
      (b>>>24)+","+(b>>>16&255)+","+(b>>>8&255)+","+(b&255)/255+")";if(64==a)return b=b.map(function(a){return a+"px"}),b.join(",");if(96==a){a="";for(var c=b.length,d=0;d<c;d+=2)a+=b[d],a+=b[d+1].join(",");return a}if(80==a){if(0==b[0])return"none";a="";c=b.length;for(d=0;d<c;)a+=T[b[d]],1==b[d]?a+="("+b[d+1]+") ":5==b[d]?(a+="("+b[d+1]+"px "+b[d+2]+"px "+b[d+3]+"px rgba("+(b[d+4]>>>24)+","+(b[d+4]>>16&255)+","+(b[d+4]>>8&255)+","+(b[d+4]&255)/255+")) ",d+=3):a=2==b[d]?a+("("+b[d+1]+"px) "):7==b[d]?a+
      ("("+b[d+1]+"deg) "):a+("("+(0>b[d+1]?0:b[d+1])+") "),d+=2;return a}return 32==a?b+"px":b}function y(a){return 0>=a?0:255<=a?255:a}function fa(a,b,c,d){if(16==a||32==a)return(c-b)*d+b;if(0==a)return.5>d?b:c;if(48==a){if("number"===typeof b&&"number"===typeof c){var e=1-d;return(y(e*(b>>>24)+d*(c>>>24))<<24|y(e*(b>>>16&255)+d*(c>>>16&255))<<16|y(e*(b>>>8&255)+d*(c>>>8&255))<<8|y(e*(b&255)+d*(c&255)))>>>0}return.5>d?b:c}if(64==a){0==b.length&&(b=[0]);0==c.length&&(c=[0]);var n=b.length;b.length!=c.length&&
      (n=b.length*c.length);var l=[];for(a=0;a<n;++a){var f=b[a%b.length];var h=(c[a%c.length]-f)*d+f;0>h&&(h=0);l.push(h)}return l}if(96==a){if(b.length!=c.length)return.5>d?b:c;n=b.length;l=[];for(a=0;a<n;a+=2){if(b[a]!==c[a])return.5>d?b:c;l[a]=b[a];l[a+1]=[];for(f=0;f<b[a+1].length;++f)l[a+1].push((c[a+1][f]-b[a+1][f])*d+b[a+1][f])}return l}if(80==a){n=b.length;if(n!=c.length)return.5>d?b:c;l=[];for(a=0;a<n;){if(b[a]!=c[a]||1==b[a])return.5>d?b:c;l[a]=b[a];l[a+1]=(c[a+1]-b[a+1])*d+b[a+1];if(5==b[a]){l[a+
      2]=(c[a+2]-b[a+2])*d+b[a+2];l[a+3]=(c[a+3]-b[a+3])*d+b[a+3];e=1-d;var g=b[a+4],q=c[a+4];h=e*(g>>>24)+d*(q>>>24);var m=e*(g>>16&255)+d*(q>>16&255);f=e*(g>>8&255)+d*(q>>8&255);e=e*(g&255)+d*(q&255);l[a+4]=(y(m)<<16|y(f)<<8|y(e))+16777216*(y(h)|0);a+=3}a+=2}return l}return 0}function U(a,b){a:{var c=a+b[2];var d=b[4].length;for(var e=0;e<d;++e)if(c<b[4][e]){c=e;break a}c=d-1}d=b[2];e=b[4][c-1]-d;a=(a-e)/(b[4][c]-d-e);if(b[6]&&b[6].length>c-1)if(d=b[6][c-1],1==d[0])if(0>=a)a=0;else if(1<=a)a=1;else{e=
      d[1];var n=d[3];a=da(3*e-3*n+1,-6*e+3*n,3*e,-a);a=3*a*(1-a)*(1-a)*d[2]+3*a*a*(1-a)*d[4]+a*a*a}else 2==d[0]?(d=d[1],a=Math.ceil(a*d)/d):3==d[0]&&(d=d[1],a=Math.floor(a*d)/d);return fa(b[1]&240,b[5][c-1],b[5][c],a)}function L(){u||(v=(new Date).getTime()+V)}function O(a){if(a||!E){for(var b=!1,c=0;c<w.length;++c)w[c].J(a)&&(b=!0);if(a)for(;0<I.length;)if(a=I.shift(),c=a[0],1==a[1])c.onfinish&&(c.onfinish(),b=!0),c.I();else if(2==a[1]&&c.onloop)c.onloop();return b}}function W(){L();O(!0)&&!u?(E=!0,M(W)):
      E=!1}function N(){E||(E=!0,M(W))}function X(a,b){var c=[];a.split(b).forEach(function(a){c.push(parseFloat(a))});return c}function A(a){-1==a.indexOf(",")&&(a=a.replace(" ",","));return X(a,",")}function Y(a){a._ks||(a._ks={});if(!a._ks.transform){for(var b=a._ks.transform=[],c=0;14>=c;++c)b[c]=0;b[10]=1;b[11]=1;if(a=a.getAttribute("transform")){a=a.trim().split(") ");for(c=a.length-2;0<=c;--c)if(x(a[c],"translate(")){for(var d=0;d<c;d++)a.shift();break}c=a.shift();x(c,"translate(")&&(c=A(c.substring(10)),
      b[1]=c[0],b[2]=t(c[1])?c[1]:0,c=a.shift());x(c,"rotate(")&&(c=A(c.substring(7)),b[6]=c[0],c=a.shift());x(c,"skewX(")&&(c=A(c.substring(6)),b[7]=c[0],c=a.shift());x(c,"skewY(")&&(c=A(c.substring(6)),b[8]=c[0],c=a.shift());x(c,"scale(")&&(c=A(c.substring(6)),b[10]=c[0],b[11]=t(c[1])?c[1]:c[0],c=a.shift());x(c,"translate(")&&(c=A(c.substring(10)),b[13]=c[0],b[14]=t(c[1])?c[1]:0)}}}function Z(a){this.l=a;this.A=[];this.C=[];this.v=0;this.s=this.a=this.c=null;this.h=this.f=this.g=0;this.b=1;this.i=this.F=
      this.o=!1}function J(a,b,c){b=a[b];void 0===b&&(b=a[c]);return b}function ha(a){return Array.isArray(a)?a:x(a,"cubic-bezier(")?(a=a.substring(13,a.length-1).split(","),[1,parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])]):x(a,"steps(")?(a=a.substring(6,a.length-1).split(","),[a[1]&&"start"==a[1].trim()?2:3,parseFloat(a[0])]):[0]}function ia(a){a=a.trim();return x(a,"#")?(parseInt(a.substring(1),16)<<8)+255:x(a,"rgba(")?(a=a.substring(5,a.length-1),a=a.split(","),(parseInt(a[0],
      10)<<24)+(parseInt(a[1],10)<<16)+(parseInt(a[2],10)<<8)+255*parseFloat(a[3])<<0):a}function aa(a){!1===a.i&&(w.push(a),a.i=!0,!1!==a.l.autoplay&&a.play());return this}function P(a){if(!0===a.i){a._cancel();var b=w.indexOf(a);-1<b&&w.splice(b,1);b=I.indexOf(a);-1<b&&I.splice(b,1);a.i=!1}return this}var Q=Error("Not in timeline list"),ba="mpath posX posY    rotate skewX skewY  scaleX scaleY  anchorX anchorY".split(" "),ja=" translate translate    rotate skewX skewY  scale scale  translate translate".split(" "),
      T="none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "),M=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;M||(M=function(a){window.setTimeout(a,16)});var S={d:97,fill:48,fillOpacity:16,filter:80,height:33,opacity:16,offsetDistance:33,stroke:48,strokeDasharray:64,strokeDashoffset:32,strokeOpacity:16,strokeWidth:32,transform:1,
      width:33},ca=window.getComputedStyle(document.documentElement),E=!1,v=(new Date).getTime(),u,V=0,w=[],I=[];Z.prototype={B:function(a){var b=0;if(null!==this.c){var c=this.j();0<this.b&&null!==c&&c>=this.f?this.h?(this.c=v-this.g/this.b,this.h--,b=2):(b=1,a?this.a=c:this.a=this.s?Math.max(this.s,this.f):this.f):0>this.b&&null!==c&&c<=this.g?this.h&&Infinity!=this.f?(this.c=v-this.f/this.b,this.h--,b=2):(this.h=0,b=1,a?this.a=c:this.a=this.s?Math.min(this.s,this.g):this.g):null!==c&&0!=this.b&&(a&&
      null!==this.a&&(this.c=v-this.a/this.b),this.a=null)}this.s=this.j();return b},J:function(a){a&&(this.o&&(this.o=!1,null===this.c&&(0!=this.b&&null!==this.a?(this.c=v-this.a/this.b,this.a=null):this.c=v)),null===this.a&&null!==this.c&&(a=this.B(!1),0!=a&&I.push([this,a])));a=this.j();if(null===a)return!1;for(var b=this.A,c=this.C,d=0;d<b.length;++d){for(var e=b[d],n=!1,l=0;l<c[d].length;++l){var f=c[d][l],h=f[0];if(null!==h){var g=f[2];var q=f[4].length,m=f[4][q-1]-g;g=0==m?f[5][q-1]:a<=g?f[5][0]:
      a>=g+f[3]?0==f[3]%m?f[5][q-1]:U(f[3]%m,f):U((a-g)%m,f);0==h?(e._ks.mpath=f[8],e._ks.transform[h]=g,n=!0):14>=h?(e._ks.transform[h]=g,n=!0):(g=ea(f[1]&240,g),f[1]&1?e.setAttribute(h,g):e.style[h]=g)}}if(n){Y(e);n=e._ks.transform;l="";if(f=e._ks.mpath)g=n[0],0>g&&(g=0),100<g&&(g=100),g=g*f[2]/100,h=f[1].getPointAtLength(g),l="translate("+h.x+","+h.y+") ",f[0]&&(.5>g?(g=h,h=f[1].getPointAtLength(.5)):g=f[1].getPointAtLength(g-.5),l+="rotate("+180*Math.atan2(h.y-g.y,h.x-g.x)/Math.PI+") ");for(f=1;f<n.length;++f)h=
      n[f],h!=(10==f||11==f?1:0)&&(l+=" "+ja[f]+"(",l=2>=f?l+(1==f?h+",0":"0,"+h):13<=f?l+(13==f?h+",0":"0,"+h):10<=f?l+(10==f?h+",1":"1,"+h):l+h,l+=")");e.setAttribute("transform",l)}}return"running"==this.m()},I:function(){!1!==this.l.autoremove&&"finished"==this.m()&&P(this)},D:function(){if(!this.F){this.F=!0;for(var a=this.A,b=this.C,c=0;c<a.length;++c)for(var d=a[c],e=0;e<b[c].length;++e)14>=b[c][e][0]&&Y(d)}},u:function(a){if("number"==typeof a)return a;if(!t(this.l.markers)||!t(this.l.markers[a]))throw Error("Invalid marker: "+
      a);return+this.l.markers[a]},play:function(a){t(a)&&null!==a&&(a=this.u(a),H(a),0>this.b&&a<this.g&&(a=this.g),0<this.b&&a>this.f&&(a=this.f),this.w(a,!0));if(!this.i)throw Q;a=this.j();if(0<this.b&&(null===a||a>=this.f))this.a=this.g;else if(0>this.b&&(null===a||a<=this.g)){if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}else 0==this.b&&null===a&&(this.a=this.g);if(null===this.a)return this;this.c=null;this.o=!0;this.D();N();return this},pause:function(a){if(!this.i)throw Q;
      t(a)&&(a=this.u(a),H(a));if("paused"!=this.m()){L();var b=this.j();if(null===b)if(0<=this.b)this.a=this.g;else{if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}null!==this.c&&null===this.a&&(this.a=b);this.c=null;this.o=!1;this.B(!1);this.D();N()}t(a)&&this.w(a,!0);return this},range:function(a,b){if(0==arguments.length)return{"in":this.g,out:this.f};var c=this.u(a),d=this.v;t(b)&&(d=this.u(b));H(c);if(0>c||0>d||c>=d||isNaN(d))throw Error("Invalid range");var e=this.m();this.g=
      c;this.f=d;"finished"==e&&"running"==this.m()&&this.play();return this},loop:function(a){if(!t(a))return{count:this.h};this.h=!0===a?Infinity:Math.floor(a);if(0>this.h||isNaN(this.h))this.h=0;return this},j:function(){return null!==this.a?this.a:null===this.c?null:(v-this.c)*this.b},w:function(a,b){b&&L();null!==a&&(this.D(),null!==this.a||null===this.c||0==this.b?(this.a=a,O(!1)):this.c=v-a/this.b,this.i||(this.c=null),this.s=null,this.B(!0),N())},G:function(){return this.j()},time:function(a){if(t(a)){if(!this.i)throw Q;
      a=this.u(a);H(a);this.w(a,!0);return this}return this.G()},m:function(){var a=this.j();return this.o?"running":null===a?"idle":null===this.c?"paused":0<this.b&&a>=this.f||0>this.b&&a<=this.g?"finished":"running"},state:function(){return this.m()},duration:function(){return this.v},H:function(a){H(a);L();var b=this.j();this.b=a;null!==b&&this.w(b,!1)},rate:function(a){return t(a)?(this.H(a),this):this.b},marker:function(a){return t(this.l.markers)?this.l.markers[a]:void 0},_cancel:function(){if(!this.i||
      "idle"==this.m())return this;this.c=this.a=null;this.o=!1;return this}};return{version:"1.1.0",animate:function(){var a={};if(1==arguments.length%2){a=arguments[arguments.length-1];var b={};for(c in a)b[c]=a[c];a=b}var c=new Z(a);a=arguments;for(var d=b=0;d<a.length-1;d+=2){var e=a[d];var n=e instanceof Element?e:document.getElementById(e.substring(1));if(!n)throw Error("Invalid target: "+e);e=n;n=a[d+1];e._ks||(e._ks={});for(var l=[],f=0;f<n.length;++f){var h=n[f],g=J(h,"p","property");if("string"!=
      typeof g||-1!=g.indexOf("-")||""===g||!(0<S[g]||0<=ba.indexOf(g)))throw Error("Invalid property: "+g);var q=ba.indexOf(g);""!==g&&0<=q&&(g=q);q=R(g);var m=J(h,"t","times");if(!m||2>m.length)throw Error("Not enough times");m=m.slice();if(!isFinite(m[0])||0>m[0])throw Error("Invalid time: "+m[0]);for(var B=1;B<m.length;++B)if(!isFinite(m[B])||0>m[B]||m[B]<m[B-1])throw Error("Invalid time: "+m[B]);B=m[0];var v=m[m.length-1]-B,y=h.iterations||0;1>y&&(y=1);v*=y;b<v+B&&(b=v+B);var u=J(h,"v","values");if(!u||
      u.length!=m.length)throw Error("Values do not match times");u=u.slice();for(var C=g,k=u,w=R(C)&240,p=0;p<k.length;++p)if(96==w){for(var G=k[p].substring(6,k[p].length-2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig),A=[],r=0;r<G.length;++r){A.push(G[r][0]);for(var z=1<G[r].trim().length?G[r].substring(1).split(","):[],F=0;F<z.length;++F)z[F]=parseFloat(z[F]);A.push(z)}k[p]=A}else if(48==w)x(k[p],"#")?(G=9==k[p].length,k[p]=parseInt(k[p].substring(1),16),G||(k[p]=256*k[p]|255)):x(k[p],"url(")||"none"==k[p]||
      (console.warn("unsupported color: "+k[p]),k[p]=0);else if(80==w){G=k;A=p;r=k[p];if("none"==r)r=[0];else{z=[];for(var D=r.indexOf("(");0<D;)if(F=T.indexOf(r.substring(0,D)),0<=F){z.push(F);var E=r.indexOf(") ");0>E&&(E=r.length-1);D=r.substring(D+1,E).split(" ");5==F?(z.push(parseFloat(D[0])),z.push(parseFloat(D[1])),z.push(parseFloat(D[2])),z.push(ia(D[3]))):1==F?z.push(D[0]):z.push(parseFloat(D[0]));r=r.substring(E+1).trim();D=r.indexOf("(")}else break;r=z}G[A]=r}else 64==w?"none"!=k[p]?/^[0-9 .]*$/.test(k[p])?
      k[p]=X(k[p]," "):(console.warn("unsupported value: "+k[p]),k[p]=[0]):k[p]=[0]:32==w?(H(k[p]),k[p]=parseFloat(k[p])):0===C&&(k[p]=parseFloat(k[p]));C=J(h,"e","easing");k=m.length;for(C||(C=[]);C.length<k;)C.push([1,0,0,.58,1]);for(k=0;k<C.length;++k)C[k]=ha(C[k]);q=[g,q,B,v,m,u,C,y];m=J(h,"mp","motionPath");t(m)&&0===g&&(q[8]=[],q[8][0]=h.motionRotate,h=document.createElementNS("http://www.w3.org/2000/svg","path"),m||(m="M0,0"),h.setAttribute("d",m),q[8][1]=h,q[8][2]=h.getTotalLength());l.push(q)}0<
      l.length&&(c.A.push(e),c.C.push(l))}c.v=b;c.g=0;c.f=c.v;aa(c);return c},add:aa,remove:P,removeAll:function(){for(var a=w.length-1;0<=a;--a)P(w[a]);return this},timelines:function(){return w.slice()},globalPlay:function(){u&&(V=u-(new Date).getTime(),u=void 0,N());return this},globalPause:function(){u||(u=v,O(!1));return this},globalState:function(){return u?"paused":"running"}}}();
      ]]>
    </script>
    <script>
      <![CDATA[if(KeyshapeJS.version.indexOf('1.')!=0)throw Error('Expected KeyshapeJS v1.*.*');window.ks=document.ks=KeyshapeJS;(function(ks){
      ks.animate("#_a0",[{p:'rotate',t:[0,800],v:[0,361],e:[[1,0,0,1,1],[0]]}],
      {autoremove:false}).range(0,800).loop(true);
      if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause()})(KeyshapeJS);
      ]]>
    </script>`}
  </svg>
)

export const RightArrowSVG = () => (
  <svg fillRule='evenodd' viewBox='0 0 16 14' id='icon--arrow--right'>
    <path
      d='M11.95 5.997L7.86 2.092 9.233.639l6.763 6.356-6.763 6.366L7.86 11.91l4.092-3.912H-.003v-2h11.952z'
      fillRule='nonzero'
    />
  </svg>
)

export const RedRequiredSVG = () => (
  <svg viewBox='0 0 1000 1000'>
    <defs>
      <style>{`.a-required{fill:#ff5050;}.b-required{fill:#fff;}`}</style>
    </defs>
    <circle className='a-required' cx='500' cy='500' r='227.67' />
    <rect className='b-required' x='480' y='573.84' width='40' height='40' />
    <rect className='b-required' x='480' y='386.16' width='40' height='147.67' />
  </svg>
)

// export const RedRequiredCircleSVG = ({ style }) => (
//   <svg style={style} viewBox='0 0 495.34 495.34' width='14' height='14'>
//     <defs>
//       <style>{`.a-circle-required{fill:red;}`}</style>
//     </defs>
//     <title>EMR Icons Expanded v2</title>
//     <path
//       className='a-circle-required'
//       d='M247.67,495.34A247.67,247.67,0,0,1,72.54,72.54,247.67,247.67,0,0,1,422.8,422.8,246,246,0,0,1,247.67,495.34Zm0-455.34C133.16,40,40,133.16,40,247.67s93.16,207.67,207.67,207.67,207.67-93.16,207.67-207.67S362.18,40,247.67,40Z'
//     />
//     <rect className='a-circle-required' x='227.67' y='121.25' width='40' height='180.84' />
//     <circle className='a-circle-required' cx='247.67' cy='350.65' r='23.44' />
//   </svg>
// )

export const GearIconSVG = () => (
  <svg
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    fill='#5aaafa'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    aria-hidden='true'
    style={{ willChange: 'transform' }}
  >
    <path d='M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z' />
    <path d='M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z' />
  </svg>
)

export const GreenGearIconSVG = () => (
  <svg
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    fill='green'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    aria-hidden='true'
    style={{ willChange: 'transform' }}
  >
    <path d='M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z' />
    <path d='M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z' />
  </svg>
)

export const LockIconSVG = () => (
  <svg
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    fill='#5aaafa'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    aria-hidden='true'
    style={{ willChange: 'transform' }}
  >
    <path d='M12,7h-1V4c0-1.7-1.3-3-3-3S5,2.3,5,4v3H4C3.4,7,3,7.4,3,8v6c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V8C13,7.4,12.6,7,12,7z M6,4	c0-1.1,0.9-2,2-2s2,0.9,2,2v3H6V4z M12,14H4V8h8V14z' />
  </svg>
)

export const NormalCloseSVG = () => (
  <svg
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    width='20'
    height='20'
    viewBox='0 0 32 32'
    aria-hidden='true'
    style={{ willChange: 'transform' }}
  >
    <path d='M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z' />
  </svg>
)

export const CloseIconSVG = () => (
  <svg viewBox='0 0 300 300'>
    <defs>
      <style>{`.a-close{fill:#323232;}`}</style>
    </defs>
    <title>X-Icon</title>
    <path
      className='a-close'
      d='M291.53,8.47a28.14,28.14,0,0,0-40.24,0L170.12,89.65a28.14,28.14,0,0,1-40.24,0L48.71,8.47a28.14,28.14,0,0,0-40.24,0,28.14,28.14,0,0,0,0,40.24l81.18,81.17a28.14,28.14,0,0,1,0,40.24L8.47,251.29a28.14,28.14,0,0,0,0,40.24,28.14,28.14,0,0,0,40.24,0l81.17-81.18a28.14,28.14,0,0,1,40.24,0l81.17,81.18a28.45,28.45,0,0,0,40.24-40.24l-81.18-81.17a28.14,28.14,0,0,1,0-40.24l81.18-81.17A28.14,28.14,0,0,0,291.53,8.47Z'
      transform='translate(0)'
    />
  </svg>
)

export const CloudIconSVG = () => (
  <svg viewBox='0 0 275.09 300'>
    <defs>
      <style>{`.a-cloud{fill:#87bff2;}.b-cloud{fill:#4d306a;}.c-cloud{fill:#fff;}`}</style>
    </defs>
    <title>Cloud-Icon</title>
    <path
      className='a-cloud'
      d='M74.1,183h77.27v-58.6A2,2,0,0,0,148,123l-31.1,31.1a2,2,0,0,1-3.42-1.41V138a3,3,0,0,1,.88-2.12l42.27-42.27a3,3,0,0,1,4.24,0l42.26,42.27A3,3,0,0,1,204,138v14.68a2,2,0,0,1-3.41,1.41L169.46,123a2,2,0,0,0-3.42,1.42V183H225.9A61.62,61.62,0,0,0,240.63,61.59a78.15,78.15,0,0,0-152.7-.23A61.63,61.63,0,1,0,74.1,183Z'
      transform='translate(-12.46)'
    />
    <path
      className='b-cloud'
      d='M284.54,211H15.46a3,3,0,0,0-3,3v83a3,3,0,0,0,3,3H284.54a3,3,0,0,0,3-3V214A3,3,0,0,0,284.54,211Zm-194.31,63a18.44,18.44,0,1,1,18.44-18.43A18.43,18.43,0,0,1,90.23,273.91Z'
      transform='translate(-12.46)'
    />
    <rect className='c-cloud' x='138.91' y='183.04' width='14.67' height='0.2' />
  </svg>
)

export const LeftCharvenSVG = () => (
  <svg
    fillRule='evenodd'
    height='12'
    name='chevron--left'
    role='img'
    viewBox='0 0 7 12'
    width='7'
    aria-label='close/open iln'
    alt='close/open iln'
  >
    <title>close/open iln</title>
    <path d='M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z' />
  </svg>
)

export const RedCloseSVG = () => (
  <svg viewBox='0 0 300 300'>
    <defs>
      <style>{`.a-circle{fill:#ce3436;}.b-rect{fill:#fff;}`}</style>
    </defs>
    <title>Red-Icon</title>
    <circle className='a-circle' cx='150' cy='150' r='150' />
    <rect
      className='b-rect'
      x='129.45'
      y='38.13'
      width='41.11'
      height='223.74'
      transform='translate(-62.13 150) rotate(-45)'
    />
  </svg>
)

export const CloseIcon = () => (
  <svg
    className='status-summary-close-icon'
    fill='grey'
    fillRule='evenodd'
    height='12'
    role='img'
    viewBox='0 0 10 10'
    width='12'
    aria-label='Close'
    alt='Close'
  >
    <title>Close</title>
    <path d='M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z' />
  </svg>
)

export const ExpandSVG = () => (
  <svg
    height='16'
    role='img'
    viewBox='0 0 16 16'
    width='16'
    alt='Open menu'
    focusable='false'
    aria-label='Open menu'
  >
    <title>Open menu</title>
    <path d='M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z' />
  </svg>
)

export const ArrowDownSVG = () => (
  <svg viewBox='0 0 12 7' className='bx--parent-item__link--expand-icon' fillRule='evenodd'>
    <path fillRule='nonzero' d='M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z' />
  </svg>
)

export const StepSVG = () => (
  <svg x='0px' y='0px' viewBox='0 0 16 16' style={{ enableBackground: 'new 0 0 16 16' }}>
    <path d='M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S12.4,16,8,16z M10.5,7.4H3v1.3h7.5l-2.6,2.5  L8.8,12L13,8L8.8,4L7.9,4.9L10.5,7.4z' />
  </svg>
)

export const SearchSVG = () => (
  <svg
    className='gs--search__icon'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    aria-label='Search icon'
  >
    <path d='M8.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.418 4.416-.708.708-4.417-4.418a6.5 6.5 0 1 1 .707-.707z' />
  </svg>
)

// export const CheckSVG = ({ ...restProps }) => (
//   <svg
//     className='healthy-icon'
//     fill='#5aa700'
//     fillRule='evenodd'
//     min-height='16px'
//     name='icon--checkmark--solid'
//     role='img'
//     viewBox='0 0 16 16'
//     width='13px'
//     aria-label='127 / 127 components healthy'
//     alt='127 / 127 components healthy'
//   >
//     <title>127 / 127 components healthy</title>
//     <path d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.293-11.332L6.75 9.21 4.707 7.168 3.293 8.582 6.75 12.04l5.957-5.957-1.414-1.414z' />
//   </svg>
// )

export const NotifySVG = () => (
  <svg viewBox='-5 -5 68 70' height='26px'>
    <g fill='none' fillRule='evenodd'>
      <g fillRule='nonzero'>
        <path fill='#AAF3E8' d='M3.613 47.177V8.165h49.685v39.012h-40.11z' />
        <path fill='#00B4A0' d='M49.684 11.794H0V59.88l7.046-9.073h42.638z' />
        <path
          fill='#FFF'
          d='M9.937 36.29h29.81v2.722H9.937zM9.937 29.032h29.81v2.722H9.937zM9.937 21.774h29.81v2.722H9.937z'
        />
        <ellipse fill='#FFF' cx='48.148' cy='10.252' rx='9.485' ry='9.526' />
        <ellipse fill='#5AAAFA' cx='48.148' cy='10.252' rx='7.588' ry='7.621' />
      </g>
      <path d='M-1 0h60v60H-1z' />
    </g>
  </svg>
)

export const AlamSVG = () => (
  <svg viewBox='-5 -5 70 70' height='26px'>
    <g fill='none' fillRule='evenodd'>
      <g>
        <circle fill='#FFA573' cx='30' cy='30' r='30' />
        <path fill='#D74108' fillRule='nonzero' d='M21.26 11.339h17.209V8.03h-17.21z' />
        <path fill='#D74108' fillRule='nonzero' d='M27.874 8.504v12.213h4.252V8.504z' />
        <ellipse fill='#FFF' cx='30' cy='30.236' rx='16.772' ry='17.008' />
        <path
          d='M31.181 16.824v-1.47a1.181 1.181 0 00-2.362 0v1.47a1.181 1.181 0 002.362 0zM31.181 44.698v-1.47a1.181 1.181 0 10-2.362 0v1.47a1.181 1.181 0 102.362 0zM43.439 30.498h1.469a1.181 1.181 0 100-2.362h-1.47a1.181 1.181 0 100 2.362zM15.565 30.498h1.469a1.181 1.181 0 100-2.362h-1.47a1.181 1.181 0 100 2.362z'
          fill='#50E3C2'
          fillRule='nonzero'
        />
        <path fill='#D74108' d='M27.874 19.843h4.252v10.394h-4.252z' />
        <path fill='#D74108' d='M39.213 27.402v4.252H27.874v-4.252z' />
      </g>
      <path d='M0 0h60v60H0z' />
    </g>
  </svg>
)

export const LearnMoreSVG = () => (
  <svg
    focusable='false'
    preserveAspectRatio='xMidYMid meet'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    aria-hidden='true'
    style={{ willChange: 'transform' }}
  >
    <path d='M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z' />
    <path d='M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z' />
  </svg>
)

export const PalMessageSVG = () => (
  <svg className='pal--message__icon' viewBox='0 0 72 72'>
    <style>{`.st5-pal{fill:#6c7185}.st6-pal{fill:#fff}`}</style>
    <g id='Small_Illustrations'>
      <circle cx='36' cy='36' r='36' fill='#eaeaea' />
      <defs>
        <circle id='SVGID_19_' cx='36' cy='36' r='36' />
      </defs>
      <use fill='#f3f3f3' overflow='visible' />
      <clipPath id='SVGID_2_'>
        <use overflow='visible' />
      </clipPath>
      <path d='M12 28h48v32H12z' className='st6-pal' />
      <path
        fill='#d8d8d8'
        d='M12 24h48v4H12zm33 11.8H16c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h29c.4 0 .8.3.8.8s-.4.8-.8.8zm-6 6H16c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h23c.4 0 .8.3.8.8s-.4.8-.8.8zm6 6H16c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h29c.4 0 .8.3.8.8s-.4.8-.8.8zm-6 6H16c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h23c.4 0 .8.3.8.8s-.4.8-.8.8z'
      />
      <circle cx='49.3' cy='14.5' r='.8' className='st5-pal' />
      <circle cx='38.6' cy='6.5' r='.8' className='st5-pal' />
      <path
        d='M22.5 9.7c1.1 0 2-.9 2-2 0-.3.2-.5.5-.5s.5.2.5.5c0 1.1.9 2 2 2 .3 0 .5.2.5.5s-.2.5-.5.5c-1.1 0-2 .9-2 2 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.1-.9-2-2-2-.3 0-.5-.2-.5-.5s.2-.5.5-.5z'
        className='st5-pal'
      />
      <path d='M65 60H17.3m53.9 0h-1.7' className='st6-pal' />
      <path
        d='M65 59.2h-4.3V24c0-.4-.3-.8-.8-.8H12c-.4 0-.8.3-.8.8v35.2H.7c-.4 0-.7.4-.7.8s.3.8.8.8H65c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM12.7 24.8h46.5v2.5H12.7v-2.5zm4.6 34.4h-4.5V28.8h46.5v30.5h-42zm53.9 0h-1.7c-.4 0-.8.3-.8.8s.3.8.8.8h1.7c.4 0 .8-.3.8-.8s-.3-.8-.8-.8z'
        className='st5-pal'
      />
    </g>
  </svg>
)

export const SummaryEmptySVG = () => (
  <svg id='Small_Illustrations' data-name='Small Illustrations' viewBox='0 0 72 72'>
    <defs>
      <style>{`.cls-summary-1{fill:#f3f3f3;}.cls-summary-2{fill:#6c7185;}.cls-summary-3,.cls-summary-9{fill:#fff;}.cls-summary-3,.cls-summary-4,.cls-summary-5{stroke:#6c7185;}.cls-summary-3,.cls-summary-4,.cls-summary-5,.cls-summary-8{stroke - linejoin:round;stroke-width:1.5px;}.cls-summary-4{fill:#d8d8d8;}.cls-summary-5,.cls-summary-8{fill:none;stroke-linecap:round;}.cls-summary-6{fill:#1a1818;opacity:0.1;}.cls-summary-7{fill:#00884b;}.cls-summary-8{stroke:#fff;}`}</style>
    </defs>
    <title>planned-maintenance_empty_v3</title>
    <circle className='cls-summary-1' cx='36' cy='36' r='36' />
    <circle className='cls-summary-2' cx='49.28' cy='14.47' r='0.75' />
    <circle className='cls-summary-2' cx='38.56' cy='6.47' r='0.75' />
    <path
      className='cls-summary-2'
      d='M22.47,9.72a2,2,0,0,0,2-2,.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5,2,2,0,0,0,2,2,.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5,2,2,0,0,0-2,2,.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5,2,2,0,0,0-2-2,.5.5,0,0,1-.5-.5A.5.5,0,0,1,22.47,9.72Z'
    />
    <rect className='cls-summary-3' x='12' y='28' width='48' height='32' />
    <rect className='cls-summary-4' x='12' y='24' width='48' height='4' />
    <line className='cls-summary-5' x1='48' y1='28' x2='48' y2='60' />
    <line className='cls-summary-5' x1='36' y1='28' x2='36' y2='60' />
    <line className='cls-summary-5' x1='60' y1='28' x2='60' y2='60' />
    <line className='cls-summary-5' x1='24' y1='28' x2='24' y2='60' />
    <line className='cls-summary-5' x1='12' y1='28' x2='12' y2='60' />
    <line className='cls-summary-5' x1='60' y1='28' x2='12' y2='28' />
    <line className='cls-summary-5' x1='60' y1='44' x2='12' y2='44' />
    <line className='cls-summary-5' x1='60' y1='36' x2='12' y2='36' />
    <line className='cls-summary-5' x1='60' y1='28' x2='12' y2='28' />
    <line className='cls-summary-5' x1='60' y1='52' x2='12' y2='52' />
    <line className='cls-summary-5' x1='60' y1='60' x2='12' y2='60' />
    <circle className='cls-summary-6' cx='64' cy='45.25' r='8' />
    <circle className='cls-summary-7' cx='64' cy='43.25' r='8' />
    <polyline className='cls-summary-8' points='60 43.33 62.61 45.94 68 40.56' />
    <rect className='cls-summary-2' x='22.5' y='22' width='3' height='4' rx='1' ry='1' />
    <rect className='cls-summary-2' x='46.5' y='22' width='3' height='4' rx='1' ry='1' />
    <line className='cls-summary-9' x1='65.05' y1='60' x2='17.28' y2='60' />
    <path
      className='cls-summary-2'
      d='M17.28,60.75H65.05a.75.75,0,0,0,0-1.5H17.28a.75.75,0,0,0,0,1.5Z'
    />
    <line className='cls-summary-9' x1='71.25' y1='60' x2='69.55' y2='60' />
    <path
      className='cls-summary-2'
      d='M69.55,60.75h1.7a.75.75,0,0,0,0-1.5h-1.7a.75.75,0,0,0,0,1.5Z'
    />
    <path className='cls-summary-2' d='M.75,60.75h12a.75.75,0,1,0,0-1.5H.75a.75.75,0,0,0,0,1.5Z' />
  </svg>
)

export const ConsumableSVG = () => (
  <svg viewBox='0 0 537.86 615.99'>
    <defs>
      <style>{`.a-consumable{fill:#ff5050;`}</style>
    </defs>
    <title>EMR Icons Expanded v3</title>
    <path
      className='a-consumable'
      d='M252.7,210.27l1.71-23.13A200.82,200.82,0,0,1,439.84,1.71L463,0l-1.7,23.13A200.87,200.87,0,0,1,275.83,208.56ZM417.44,45.53A160.88,160.88,0,0,0,298.23,164.74,160.88,160.88,0,0,0,417.44,45.53Z'
    />
    <path
      className='a-consumable'
      d='M254.41,190.08A160.83,160.83,0,0,0,207.74,88.27L236,60A200.82,200.82,0,0,1,294.3,187.14Z'
    />
    <path
      className='a-consumable'
      d='M194.34,614.38c-34.9,0-70.38-15-102.36-43.72C53.23,535.84,24,484.45,9.52,426S-2.88,308.34,15.24,259.5C34.35,208,69,173.66,112.75,162.87c21.73-5.36,44.23-4.55,66.88,2.43a302.42,302.42,0,0,0,178.6,0c22.65-7,45.15-7.79,66.88-2.43h0c43.77,10.79,78.4,45.11,97.51,96.63,18.12,48.84,20.15,108,5.72,166.45s-43.72,109.89-82.46,
          144.71c-40.88,36.72-87.5,51-131.27,40.2a118.35,118.35,0,0,1-16.9-5.53,75,75,0,0,0-57.57,0,119.79,119.79,0,0,1-45.8,9Zm-52.93-415a79.4,
          79.4,0,0,0-19.08,2.31c-30.52,7.53-55.23,33-69.59,71.71-15.36,41.4-16.91,92.17-4.39,143s37.52,95,70.36,124.52c30.72,27.6,64.45,38.65,
          95,31.13a79.12,79.12,0,0,0,11.22-3.68,114.81,114.81,0,0,1,88.08,0A79.12,79.12,0,0,0,324.19,572c30.51,7.53,64.24-3.53,94.95-31.13C452,
          511.39,477,467.17,489.5,416.38s11-101.57-4.38-143C470.76,234.7,446,209.23,415.53,201.7h0c-14.59-3.6-29.91-3-45.54,1.83a343.35,343.35,
          0,0,1-101.06,15.26,343.47,343.47,0,0,1-101.07-15.26A89.5,89.5,0,0,0,141.41,199.39Z'
    />
    <path
      className='a-consumable'
      d='M82.08,417c-9.55-38.71-9.71-77.58-.46-109.46,10.36-35.71,31.3-59.13,59-66l9.58,38.83c-13,3.22-24,17.16-30.13,38.26-7.21,24.87-6.89,57.22.88,88.74Z'
    />
  </svg>
)

export const DevicesSVG = () => (
  <svg viewBox='0 0 792.2 783.09'>
    <defs>
      <style>{`.a-devices{fill:#a1bdd9;}`}</style>
    </defs>
    <title>EMR Icons Expanded v4</title>
    <path
      className='a-devices'
      d='M699.09,259.21A20,20,0,0,1,685,253.35L534.3,102.7a20,20,0,0,1,0-28.28L602.86,5.86a20,20,0,0,1,28.28,0L781.79,156.51a20,20,0,0,1,0,28.28l-68.56,68.56A20,20,0,0,1,699.09,259.21ZM576.72,88.56,699.09,210.92l40.27-40.27L617,48.28Z'
    />
    <path
      className='a-devices'
      d='M589.49,286.72a19.94,19.94,0,0,1-14.15-5.86L506.79,212.3a20,20,0,0,1,0-28.28l68.55-68.56a20,20,0,0,1,28.29,0L672.19,184a20,20,0,0,1,0,28.28l-68.56,68.56A19.94,19.94,0,0,1,589.49,286.72Zm-40.28-88.56,40.28,40.27,40.27-40.27-40.27-40.27Z'
    />
    <path
      className='a-devices'
      d='M699.09,396.32A19.9,19.9,0,0,1,685,390.46L397.18,102.7a20,20,0,0,1,28.29-28.28L713.23,362.18a20,20,0,0,1-14.14,34.14Z'
    />
    <path
      className='a-devices'
      d='M349.25,589.19a67.49,67.49,0,0,1-48-19.9l-82.87-82.87h0a67.94,67.94,0,0,1,0-96.06L465.74,143A20,20,0,0,1,494,143L644.67,293.62a20,20,0,0,1,0,28.29L397.28,569.29A67.47,67.47,0,0,1,349.25,589.19ZM479.88,185.4,246.64,418.65a27.92,27.92,0,0,0,0,39.49h0L329.51,541A27.92,27.92,0,0,0,369,541L602.25,307.76Z'
    />
    <path
      className='a-devices'
      d='M239.16,617.67a69.18,69.18,0,0,1-48.92-118.1L225,464.8a20,20,0,0,1,28.29,0l69.54,69.55a20,20,0,0,1,0,28.28l-34.77,34.78A68.74,68.74,0,0,1,239.16,617.67Zm0-110.44-20.64,20.63a29.18,29.18,0,1,0,41.27,41.26l20.63-20.63Z'
    />
    <path
      className='a-devices'
      d='M24.56,783.09A20,20,0,0,1,10.42,749L190.24,569.12a20,20,0,0,1,28.28,28.29L38.7,777.23A19.92,19.92,0,0,1,24.56,783.09Z'
    />
    <path
      className='a-devices'
      d='M295.41,442.69a19.9,19.9,0,0,1-14.14-5.86l-40.55-40.55A20,20,0,0,1,269,368l40.55,40.55a20,20,0,0,1-14.14,34.14Z'
    />
    <path
      className='a-devices'
      d='M386.44,421.21a20,20,0,0,1-14.14-5.86L297,340a20,20,0,1,1,28.29-28.28l75.32,75.32a20,20,0,0,1-14.14,34.15Z'
    />
    <path
      className='a-devices'
      d='M407.92,330.18a20,20,0,0,1-14.14-5.86l-40.55-40.55a20,20,0,0,1,28.28-28.29L422.06,296a20,20,0,0,1-14.14,34.14Z'
    />
    <path
      className='a'
      d='M499,308.69a19.93,19.93,0,0,1-14.14-5.85l-75.33-75.33a20,20,0,0,1,28.29-28.28l75.32,75.32A20,20,0,0,1,499,308.69Z'
    />
  </svg>
)

export const DugsSVG = () => (
  <svg viewBox='0 0 583.23 419.95'>
    <defs>
      <style>{`.a-dugs{fill:#5aaafa;}`}</style>
    </defs>
    <title>EMR Icons Expanded v3</title>
    <path
      className='a-dugs'
      d='M132.47,422.08a131.65,131.65,0,0,1-93.71-38.81c-51.68-51.68-51.68-135.76,0-187.44L197.9,36.69C249.58-15,333.66-15,385.33,36.69s51.68,135.75,0,187.43L226.18,383.27A131.65,131.65,0,0,1,132.47,422.08ZM291.62,37.91A92.26,92.26,0,0,0,226.18,65L67,224.12A92.53,92.53,0,0,0,197.9,355L357.05,195.83A92.49,92.49,0,0,0,291.62,37.91Z'
    />
    <rect
      className='a-dugs'
      x='192.04'
      y='97.44'
      width='40'
      height='225.07'
      transform='translate(-86.37 211.44) rotate(-45)'
    />
    <path
      className='a-dugs'
      d='M450.76,422.08a132.54,132.54,0,1,1,93.72-38.82h0A131.66,131.66,0,0,1,450.76,422.08Zm0-225.06a92.53,92.53,0,1,0,65.43,158h0a92.53,92.53,0,0,0-65.43-158Z'
    />
  </svg>
)

// export const CreditReceivedSVG = ({ style }) => (
//   <svg viewBox='0 0 352.43 602.64' style={style}>
//     <defs>
//       <style>{`.a-credit{fill:#008571;}`}</style>
//     </defs>
//     <title>EMR Icons</title>
//     <path
//       className='a-credit'
//       d='M309.24,315.49c-26.39-23.77-63.05-41.24-113-60.85V81.4a191.55,191.55,0,0,1,80,29.59l21.71-33.6c-31.37-20.27-66.15-32.61-101.71-36.25V0h-40V40.84C113.89,44.9,87.89,63,73.07,78.5c-19.79,20.71-31.14,48.63-31.14,76.6,0,64.35,41.61,96.64,114.28,126.72V520.15c-45.09-7.71-90.4-34.11-118.65-85.81L2.46,453.53C38.8,520,98.1,552.66,156.21,560.61v42h40V562.27a201,201,0,0,0,33-4.5c33.07-7.39,62-22.65,83.54-44.12,23.7-23.57,37.28-53.48,39.28-86.5C354.92,379.86,341.31,344.38,309.24,315.49ZM103.83,206.71c-15.35-14.12-21.9-29.56-21.9-51.61,0-17.52,7.5-35.82,20.06-49,13.06-13.66,31.6-22.16,54.22-25V238.26C131.92,227.31,115.24,217.21,103.83,206.71Zm208.3,218c-2.18,36-27.4,79.65-91.63,94a160.38,160.38,0,0,1-24.29,3.48V297.72c37.58,15.34,66.82,30,86.26,47.49C305.38,365.85,314.25,389.63,312.13,424.73Z'
//     />
//   </svg>
// )

export const ShippedSVG = () => (
  <svg viewBox='0 0 805.3 457.21' style={{ width: '22px' }}>
    <defs>
      <style>{`.a-shipped{fill:#7cc7ff;}.b-shipped{fill:#fff;}`}</style>
    </defs>
    <path
      className='a-shipped'
      d='M605.23,400.14H155.05a20,20,0,0,1-20-20v-72a20,20,0,0,1,40,0v52H585.23V40H175.05V92a20,20,0,0,1-40,0V20a20,20,0,0,1,20-20H605.23a20,20,0,0,1,20,20V380.14A20,20,0,0,1,605.23,400.14Z'
    />
    <path
      className='a-shipped'
      d='M785.3,400.14H605.23a20,20,0,0,1-20-20V200.07a20,20,0,0,1,20-20H785.3a20,20,0,0,1,20,20V380.14A20,20,0,0,1,785.3,400.14Zm-160.07-40H765.3V220.07H625.23Z'
    />
    <path
      className='a-shipped'
      d='M740.28,220.07h-135a20,20,0,0,1-20-20V110a20,20,0,0,1,20-20h90a20,20,0,0,1,17.88,11l45,90a20,20,0,0,1-17.89,28.94Zm-115-40h82.69l-25-50H625.23Z'
    />
    <circle className='b-shipped' cx='695.27' cy='380.14' r='57.06' />
    <path
      className='a-shipped'
      d='M695.27,457.21a77.07,77.07,0,1,1,77.06-77.07A77.16,77.16,0,0,1,695.27,457.21Zm0-114.13a37.07,37.07,0,1,0,37.06,37.06A37.11,37.11,0,0,0,695.27,343.08Z'
    />
    <circle className='b-shipped' cx='311.03' cy='380.14' r='57.06' />
    <path
      className='a-shipped'
      d='M311,457.21a77.07,77.07,0,1,1,77.07-77.07A77.16,77.16,0,0,1,311,457.21Zm0-114.13a37.07,37.07,0,1,0,37.07,37.06A37.11,37.11,0,0,0,311,343.08Z'
    />
    <path className='a-shipped' d='M245.09,112H20a20,20,0,0,1,0-40H245.09a20,20,0,0,1,0,40Z' />
    <path className='a-shipped' d='M335.12,184.06H110a20,20,0,0,1,0-40H335.12a20,20,0,0,1,0,40Z' />
    <path className='a-shipped' d='M290.11,256.08H65a20,20,0,0,1,0-40H290.11a20,20,0,1,1,0,40Z' />
  </svg>
)

export const WaitingSVG = () => (
  <svg viewBox='0 0 440.55 457.21'>
    <defs>
      <style>{`.a-waiting{fill:#41d6c3;}`}</style>
    </defs>
    <path className='a-waiting' d='M420.55,40H20A20,20,0,0,1,20,0H420.55a20,20,0,0,1,0,40Z' />
    <path className='a-waiting' d='M420.55,457.21H20a20,20,0,0,1,0-40H420.55a20,20,0,0,1,0,40Z' />
    <path
      className='a-waiting'
      d='M354.15,457.21H220.28a20,20,0,0,1,0-40H334.15V362.48A113.8,113.8,0,0,0,265,257.74a20,20,0,0,1-12.13-18.38V217.85A20,20,0,0,1,265,199.46,113.79,113.79,0,0,0,334.15,94.73V40H220.28a20,20,0,0,1,0-40H354.15a20,20,0,0,1,20,20V94.73a153.7,153.7,0,0,1-78,133.87,153.72,153.72,0,0,1,78,133.88v74.73A20,20,0,0,1,354.15,457.21Z'
    />
    <path
      className='a-waiting'
      d='M220.28,457.21H86.4a20,20,0,0,1-20-20V362.48a153.72,153.72,0,0,1,78-133.88,153.7,153.7,0,0,1-78-133.87V20a20,20,0,0,1,20-20H220.28a20,20,0,0,1,0,40H106.4V94.73a113.79,113.79,0,0,0,69.12,104.73,20,20,0,0,1,12.13,18.39v21.51a20,20,0,0,1-12.13,18.38A113.8,113.8,0,0,0,106.4,362.48v54.73H220.28a20,20,0,1,1,0,40Z'
    />
    <path className='a-waiting' d='M280.75,377.21H159.8a20,20,0,0,1,0-40h121a20,20,0,0,1,0,40Z' />
  </svg>
)
export const SortingArrowDown = () => (
  <svg
    fill='currentColor'
    width='18'
    height='18'
    viewBox='0 0 16 16'
    style={{
      cursor: 'pointer',
      transform: 'rotate(180deg)'
    }}
  >
    <path d='M3.7 6.7L7.5 2.9 7.5 15 8.5 15 8.5 2.9 12.3 6.7 13 6 8 1 3 6z' />
  </svg>
)
export const SortingArrowUp = () => (
  <svg
    fill='currentColor'
    width='18'
    height='18'
    viewBox='0 0 16 16'
    style={{
      cursor: 'pointer',
      transform: 'rotate(0)'
    }}
  >
    <path d='M3.7 6.7L7.5 2.9 7.5 15 8.5 15 8.5 2.9 12.3 6.7 13 6 8 1 3 6z' />
  </svg>
)
export const DefaultSorting = () => (
  <svg
    fill='currentColor'
    width='18'
    height='18'
    viewBox='0 0 32 32'
    style={{
      cursor: 'pointer'
    }}
  >
    <path d='M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6zM9 4l-6 6 1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z' />
  </svg>
)

export const CursorIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)
export const ArrowIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)
export const CursorPointerIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M13.75,10.19L14.38,10.32L18.55,12.4C19.25,12.63 19.71,13.32 19.65,14.06V14.19L19.65,14.32L18.75,20.44C18.69,20.87 18.5,21.27 18.15,21.55C17.84,21.85 17.43,22 17,22H10.12C9.63,22 9.18,21.82 8.85,21.47L2.86,15.5L3.76,14.5C4,14.25 4.38,14.11 4.74,14.13H5.03L9,15V4.5A2,2 0 0,1 11,2.5A2,2 0 0,1 13,4.5V10.19H13.75Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const ZoomIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const MangnifyIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const LengthIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M1.39,18.36L3.16,16.6L4.58,18L5.64,16.95L4.22,15.54L5.64,14.12L8.11,16.6L9.17,15.54L6.7,13.06L8.11,11.65L9.53,13.06L10.59,12L9.17,10.59L10.59,9.17L13.06,11.65L14.12,10.59L11.65,8.11L13.06,6.7L14.47,8.11L15.54,7.05L14.12,5.64L15.54,4.22L18,6.7L19.07,5.64L16.6,3.16L18.36,1.39L22.61,5.64L5.64,22.61L1.39,18.36Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const ProbeIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const AngleIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M20,19H4.09L14.18,4.43L15.82,5.57L11.28,12.13C12.89,12.96 14,14.62 14,16.54C14,16.7 14,16.85 13.97,17H20V19M7.91,17H11.96C12,16.85 12,16.7 12,16.54C12,15.28 11.24,14.22 10.14,13.78L7.91,17Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const EllipticalIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M12,4C6.5,4 2,7.58 2,12C2,16.42 6.5,20 12,20C17.5,20 22,16.42 22,12C22,7.58 17.5,4 12,4Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const RectangleIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path d='M4,6V19H20V6H4Z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
  </svg>
)

export const FreehandIcon = () => (
  <svg viewBox='0 0 24 24' role='presentation' style={{ width: '1.2rem', height: '1.2rem' }}>
    <path
      d='M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z'
      style={{ fill: 'rgb(255, 255, 255)' }}
    ></path>
  </svg>
)

export const BloodVesselPlaque0 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
  </svg>
)

export const BloodVesselPlaque20 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel{fill:#fcd602;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel'
      d='M271.51,477.28a341.92,341.92,0,0,1,103.9-245.9,39.64,39.64,0,0,0,.36-56.45h0a39.66,39.66,0,0,0-45-7.83c-116.13,55-196.46,173.18-196.46,310.18s80.33,255.24,196.46,310.19a39.66,39.66,0,0,0,45-7.83h0a39.64,39.64,0,0,0-.36-56.45A341.92,341.92,0,0,1,271.51,477.28Z'
    />
  </svg>
)

export const BloodVesselPlaque40 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-1{fill:#fbd603;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-1'
      d='M408.69,477.28A342,342,0,0,1,517.23,227c35.23-33,12.19-92.09-36.08-92.63l-3.86,0c-189,0-342.93,153.88-343,342.89,0,189.45,153.53,343,343,343l3.7,0c48.35-.51,71.54-59.58,36.25-92.63A342,342,0,0,1,408.69,477.28Z'
    />
  </svg>
)

export const BloodVesselPlaque60 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-1{fill:#fbd603;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-1'
      d='M545.88,477.28a341.44,341.44,0,0,1,40.51-161.83c43.72-81.54-14.27-180.51-106.79-181.12h-2.32c-189.41,0-343,153.55-343,343s153.55,343,343,343h2.32c92.52-.61,150.51-99.59,106.79-181.12A341.45,341.45,0,0,1,545.88,477.28Z'
    />
  </svg>
)

export const BloodVesselPlaque80 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel{fill:#fcd602;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel'
      d='M484.15,134.39c-1.91,0-3.83-.06-5.76-.07-189.38-.6-344.07,153.59-344.07,343s153.55,343,343,343q3,0,6,0C621.58,817.85,722.41,688.05,692,553.08a346,346,0,0,1,0-151.6C722.33,266.87,622.12,137.1,484.15,134.39Z'
    />
  </svg>
)

export const BloodVesselPlaque100 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel{fill:#fcd602;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <circle className='b-vessel' cx='477.28' cy='477.28' r='342.96' />
  </svg>
)

export const BloodVesselPlaqueStent0 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-2{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-2'
      d='M552.54,855.29a20,20,0,0,1-4.1-39.58l.49-.1a345.39,345.39,0,0,0,266.66-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,1,1,38.07-12.27A385.53,385.53,0,0,1,557.29,854.72l-.61.13A19.63,19.63,0,0,1,552.54,855.29Zm-152.06-.24a20.35,20.35,0,0,1-4.23-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.9,345.9,0,0,0,265.7,266.49,20,20,0,0,1-4.19,39.56Zm349-602.28a20,20,0,0,1-14.88-6.62,345.94,345.94,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
  </svg>
)

export const BloodVesselPlaqueStent20 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel{fill:#fcd602;}.c-vessel{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel'
      d='M312.66,477.28a273.55,273.55,0,0,1,83.12-196.72,31.72,31.72,0,0,0,.3-45.16h0a31.74,31.74,0,0,0-36-6.26c-92.9,44-157.17,138.54-157.17,248.14s64.27,204.19,157.17,248.15a31.74,31.74,0,0,0,36-6.26h0a31.72,31.72,0,0,0-.3-45.16A273.55,273.55,0,0,1,312.66,477.28Z'
    />
    <path
      className='c-vessel'
      d='M552.54,855.29a20,20,0,0,1-4.1-39.58l.57-.12a345.38,345.38,0,0,0,266.58-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,1,1,38.07-12.27A385.53,385.53,0,0,1,557.29,854.72l-.61.13A19.56,19.56,0,0,1,552.54,855.29Zm-152.06-.24a20.42,20.42,0,0,1-4.23-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.9,345.9,0,0,0,265.7,266.49,20,20,0,0,1-4.19,39.56Zm349-602.28a20,20,0,0,1-14.88-6.62,345.94,345.94,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
  </svg>
)

export const BloodVesselPlaqueStent40 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-1{fill:#fbd603;}.c-vessel{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-1'
      d='M422.41,477.28A273.54,273.54,0,0,1,509.24,277c28.18-26.4,9.75-73.68-28.86-74.11l-3.09,0c-151.22,0-274.35,123.1-274.38,274.32,0,151.55,122.83,274.42,274.37,274.42h3c38.68-.41,57.23-47.66,29-74.11A273.55,273.55,0,0,1,422.41,477.28Z'
    />
    <path
      className='c-vessel'
      d='M552.54,855.29a20,20,0,0,1-4.11-39.58l.62-.13a345.38,345.38,0,0,0,266.54-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,0,1,38.07-12.28A385.37,385.37,0,0,1,778.3,718.65a384.22,384.22,0,0,1-221,136.07l-.6.13A20.33,20.33,0,0,1,552.54,855.29Zm-152.06-.24a20.42,20.42,0,0,1-4.23-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.9,345.9,0,0,0,265.7,266.49,20,20,0,0,1-4.19,39.56Zm349-602.28a20,20,0,0,1-14.87-6.62,345.95,345.95,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
  </svg>
)

export const BloodVesselPlaqueStent60 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-1{fill:#fbd603;}.c-vessel{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-1'
      d='M532.16,477.28a273.1,273.1,0,0,1,32.41-129.46c35-65.23-11.42-144.41-85.43-144.9h-1.86c-151.53,0-274.37,122.84-274.37,274.37S325.75,751.65,477.28,751.65h1.86c74-.49,120.41-79.67,85.43-144.9A273.11,273.11,0,0,1,532.16,477.28Z'
    />
    <path
      className='c-vessel'
      d='M552.54,855.29a20,20,0,0,1-4.11-39.58l.62-.13a345.38,345.38,0,0,0,266.54-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,0,1,38.07-12.28A385.37,385.37,0,0,1,778.3,718.65a384.22,384.22,0,0,1-221,136.07l-.6.13A20.33,20.33,0,0,1,552.54,855.29Zm-152.06-.24a20.42,20.42,0,0,1-4.23-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.9,345.9,0,0,0,265.7,266.49,20,20,0,0,1-4.19,39.56Zm349-602.28a20,20,0,0,1-14.87-6.62,345.95,345.95,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
  </svg>
)

export const BloodVesselPlaqueStent80 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel{fill:#fcd602;}.c-vessel{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel'
      d='M482.78,203c-1.53,0-3.07-.05-4.61-.05-151.5-.48-275.26,122.86-275.26,274.37S325.75,751.65,477.28,751.65c1.59,0,3.18,0,4.76,0,110.68-1.88,191.34-105.71,167-213.69a277,277,0,0,1,0-121.28C673.32,309,593.15,205.14,482.78,203Z'
    />
    <path
      className='c-vessel'
      d='M552.54,855.29a20,20,0,0,1-4.11-39.58l.62-.13a345.38,345.38,0,0,0,266.54-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,0,1,38.07-12.28A385.37,385.37,0,0,1,778.3,718.65a384.22,384.22,0,0,1-221,136.07l-.6.13A20.33,20.33,0,0,1,552.54,855.29Zm-152.06-.24a20.42,20.42,0,0,1-4.23-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.9,345.9,0,0,0,265.7,266.49,20,20,0,0,1-4.19,39.56Zm349-602.28a20,20,0,0,1-14.87-6.62,345.95,345.95,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
  </svg>
)

export const BloodVesselPlaqueStent100 = () => (
  <svg viewBox='0 0 954.57 954.57'>
    <defs>
      <style>{`.a-vessel{fill:red;}.b-vessel-2{fill:#7cc7ff;}.c-vessel-1{fill:#fcd602;}`}</style>
    </defs>
    <path
      className='a-vessel'
      d='M477.28,954.57a477.4,477.4,0,0,1-185.78-917A477.4,477.4,0,0,1,663.07,917.05,474.18,474.18,0,0,1,477.28,954.57Zm0-914.57a437.4,437.4,0,0,0-170.2,840.21A437.4,437.4,0,0,0,647.49,74.36,434.48,434.48,0,0,0,477.28,40Z'
    />
    <path
      className='b-vessel-2'
      d='M552.54,855.29a20,20,0,0,1-4.09-39.58l.49-.1a345.39,345.39,0,0,0,266.65-410,349.88,349.88,0,0,0-9.28-34.86,20,20,0,1,1,38.07-12.27A385.53,385.53,0,0,1,557.29,854.72l-.62.14A20.19,20.19,0,0,1,552.54,855.29Zm-152.07-.24a20.32,20.32,0,0,1-4.22-.45A385.86,385.86,0,0,1,110.48,357.44a20,20,0,1,1,38,12.45,343.2,343.2,0,0,0-17.11,107A348.87,348.87,0,0,0,139,549a345.87,345.87,0,0,0,265.7,266.49,20,20,0,0,1-4.2,39.56Zm349-602.28a20,20,0,0,1-14.87-6.62,345.95,345.95,0,0,0-514-.69,20,20,0,1,1-29.7-26.79A383,383,0,0,1,397.28,99.84,385.22,385.22,0,0,1,764.34,219.39a20,20,0,0,1-14.86,33.38Z'
    />
    <circle className='c-vessel-1' cx='477.28' cy='477.28' r='274.37' />
  </svg>
)

export const IVUSIcon = () => (
  <svg viewBox='0 0 745.89 828.15'>
    <defs>
      <style>{`.a-ivus{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-ivus'
      d='M373,787A373,373,0,0,1,227.77,70.45,373,373,0,0,1,518.12,757.71,370.68,370.68,0,0,1,373,787Zm0-705.89A332.95,332.95,0,0,0,137.52,649.51,332.94,332.94,0,1,0,608.37,178.65,330.73,330.73,0,0,0,373,81.13Z'
    />
    <path
      className='a-ivus'
      d='M373,645.84A231.76,231.76,0,0,1,141.18,414.08a20,20,0,0,1,40,0c0,105.74,86,191.76,191.77,191.76a20,20,0,0,1,0,40Z'
    />
    <circle className='a-ivus' cx='372.95' cy='414.08' r='70.59' />
    <path
      className='a-ivus'
      d='M373,504.67a90.59,90.59,0,1,1,90.58-90.59A90.69,90.69,0,0,1,373,504.67Zm0-141.18a50.59,50.59,0,1,0,50.58,50.59A50.64,50.64,0,0,0,373,363.49Z'
    />
    <path
      className='a-ivus'
      d='M584.71,434.08a20,20,0,0,1-20-20c0-105.74-86-191.77-191.76-191.77a20,20,0,0,1,0-40A231.76,231.76,0,0,1,604.71,414.08,20,20,0,0,1,584.71,434.08Z'
    />
    <polygon className='a-ivus' points='372.94 705.89 302.36 828.15 443.53 828.15 372.94 705.89' />
    <polygon className='a-ivus' points='372.94 122.26 443.53 0 302.36 0 372.94 122.26' />
  </svg>
)

export const AtherectomyDirectionalIcon = () => (
  <svg viewBox='0 0 246.22 828'>
    <defs>
      <style>{`.a-directional{fill:#5aaafa;}`}</style>
    </defs>
    <path
      className='a-directional'
      d='M147.45,40A58.77,58.77,0,0,1,189,140.32l-49,49a57.68,57.68,0,0,0-16.91,40.81V538.67h83.11V746.44a41.56,41.56,0,1,1-83.11,0V676.28A230.87,230.87,0,0,0,98.74,573L64.37,504.3A230.83,230.83,0,0,1,40,401.06V147.45A58.77,58.77,0,0,1,57.21,105.9L105.9,57.21A58.77,58.77,0,0,1,147.45,40m0-40A98.81,98.81,0,0,0,77.61,28.93L28.93,77.61A98.81,98.81,0,0,0,0,147.45V401.06A272.22,272.22,0,0,0,28.6,522.19L63,590.92a191.89,191.89,0,0,1,20.15,85.36v70.16a81.56,81.56,0,1,0,163.11,0V498.67H163.11V230.13a17.6,17.6,0,0,1,5.19-12.53l49-49A98.77,98.77,0,0,0,147.45,0Z'
    />
  </svg>
)

export const AtherectomyLaserIcon = () => (
  <svg viewBox='0 0 196.8 824' style={{ transform: 'rotate(180deg)' }}>
    <defs>
      <style>{`.a-laser{fill:#00b4a0;}`}</style>
    </defs>
    <path
      className='a-laser'
      d='M176.8,667.2a20,20,0,0,1-20-20V20a20,20,0,0,1,40,0V647.2A20,20,0,0,1,176.8,667.2Z'
    />
    <path
      className='a-laser'
      d='M20,667.2a20,20,0,0,1-20-20V20a20,20,0,0,1,40,0V647.2A20,20,0,0,1,20,667.2Z'
    />
    <path
      className='a-laser'
      d='M98.4,824A98.51,98.51,0,0,1,0,725.6V667.8a70.08,70.08,0,0,1,70-70h56.8a70.08,70.08,0,0,1,70,70v57.8A98.51,98.51,0,0,1,98.4,824ZM70,637.8a30,30,0,0,0-30,30v57.8a58.4,58.4,0,0,0,116.8,0V667.8a30,30,0,0,0-30-30Z'
    />
  </svg>
)

export const AtherectomyRotationalIcon = () => (
  <svg viewBox='0 0 486.57 824' style={{ transform: 'rotate(180deg)' }}>
    <defs>
      <style>{`.a-rotational{fill:#9855d4;}`}</style>
    </defs>
    <path
      className='a-rotational'
      d='M243.28,824c-.57,0-1.15,0-1.72-.07a58.34,58.34,0,0,1-19.15-5.43c-39.35-18.12-97.29-86.11-147.59-173.24-33.2-57.5-58.72-116.18-70-161-1.94-7.69-3.48-15-4.56-21.8a20,20,0,0,1,1.9-12.18c8.46-16.74,30.25-29.89,66.6-40.23,44.47-12.64,108.08-19.89,174.53-19.89s130.07,7.25,174.54,19.89h0c36.35,10.34,58.13,23.49,66.59,40.23a20,20,0,0,1,1.9,12.18c-1.08,6.77-2.61,14.11-4.55,21.8-11.3,44.82-36.82,103.5-70,161-50.3,87.13-108.23,155.12-147.59,173.24A58.29,58.29,0,0,1,245,823.93C244.43,824,243.86,824,243.28,824ZM41.37,464.85c.64,3.1,1.39,6.32,2.22,9.63C54,515.87,78,570.82,109.47,625.26c52.52,91,104,145.1,129.66,156.9a27.79,27.79,0,0,0,4.15,1.57,27.39,27.39,0,0,0,4.15-1.57c25.64-11.8,77.15-65.93,129.67-156.9,31.43-54.44,55.44-109.39,65.87-150.78.84-3.31,1.58-6.53,2.23-9.63-5.21-4-16.6-10.14-38.32-16.32h0c-41.06-11.67-100.69-18.37-163.6-18.37s-122.53,6.7-163.59,18.37C58,454.7,46.57,460.89,41.37,464.85Z'
    />
    <path
      className='a-rotational'
      d='M243.28,430.16a20,20,0,0,1-20-20V20a20,20,0,1,1,40,0V410.16A20,20,0,0,1,243.28,430.16Z'
    />
  </svg>
)

export const AtherectomyTransluminalIcon = () => (
  <svg viewBox='0 0 411.28 824'>
    <defs>
      <style>{`.a-transluminal{fill:#b4e051;}`}</style>
    </defs>
    <path
      className='a-transluminal'
      d='M298.46,824a20,20,0,0,1-20-20V692.46a159.7,159.7,0,0,1,8.21-50.6l65.79-197.37a366,366,0,0,0,18.82-116V90a50,50,0,0,0-50-50h-.08l-231.29.41A50.06,50.06,0,0,0,40,90.41V329.16a366.09,366.09,0,0,0,18.82,116l65.79,197.37a159.59,159.59,0,0,1,8.21,50.59V804a20,20,0,0,1-40,0V693.1a119.6,119.6,0,0,0-6.16-37.94L20.87,457.79A406,406,0,0,1,0,329.16V90.41A90.13,90.13,0,0,1,89.84.41L321.12,0h.17a90,90,0,0,1,90,90V328.52a406,406,0,0,1-20.87,128.62L324.62,654.51a119.71,119.71,0,0,0-6.16,38V804A20,20,0,0,1,298.46,824Z'
    />
    <path
      className='a-transluminal'
      d='M205.64,596.92A64.93,64.93,0,0,1,142,546.17L109.84,405.09a70,70,0,0,1,68.25-85.57h55.1a70,70,0,0,1,68.25,85.57L269.26,546.17A64.92,64.92,0,0,1,205.64,596.92Zm-27.55-237.4a30,30,0,0,0-29.25,36.68L181,537.28a25.26,25.26,0,0,0,49.25,0L262.44,396.2a30,30,0,0,0-29.25-36.68Z'
    />
  </svg>
)

export const BalloonIcon = () => (
  <svg viewBox='0 0 233.12 888.96'>
    <defs>
      <style>{`.a-balloon{fill:#db2780;}`}</style>
    </defs>
    <path
      className='a-balloon'
      d='M116.56,889a20,20,0,0,1-20-20V20a20,20,0,0,1,40,0V869A20,20,0,0,1,116.56,889Z'
    />
    <path
      className='a-balloon'
      d='M116.56,770.71A116.69,116.69,0,0,1,0,654.15V234.81a116.56,116.56,0,0,1,233.12,0V654.15A116.69,116.69,0,0,1,116.56,770.71Zm0-612.46A76.65,76.65,0,0,0,40,234.81V654.15a76.56,76.56,0,1,0,153.12,0V234.81A76.65,76.65,0,0,0,116.56,158.25Z'
    />
  </svg>
)

export const StentBalloonCoveredIcon = () => (
  <svg viewBox='0 0 461.36 812.11'>
    <defs>
      <style>{`.a-stent-balloon-c{fill:#41d6c3;}`}</style>
    </defs>
    <path
      className='a-stent-balloon-c'
      d='M116.42,348.54a21.38,21.38,0,0,1-17.21-8.73L43.54,263.59a21.21,21.21,0,0,1,0-25.13l55.67-76.21a21.38,21.38,0,0,1,17.2-8.73h0a21.39,21.39,0,0,1,17.2,8.74l55.67,76.21a21.2,21.2,0,0,1,0,25.12h0l-55.68,76.22A21.34,21.34,0,0,1,116.42,348.54ZM83.89,251l32.52,44.51L148.93,251l-32.52-44.51Zm73.1,11v0Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M231,348.54a21.33,21.33,0,0,1-17.2-8.74l-55.68-76.21a21.21,21.21,0,0,1,0-25.13l55.67-76.21a21.3,21.3,0,0,1,34.4,0l55.68,76.21a21.22,21.22,0,0,1,0,25.12h0l-55.68,76.22A21.35,21.35,0,0,1,231,348.54ZM198.47,251,231,295.54,263.51,251,231,206.52Zm73.09,11,0,0Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M116.42,503.57a21.39,21.39,0,0,1-17.21-8.74L43.54,418.62a21.23,21.23,0,0,1,0-25.12l55.68-76.22a21.39,21.39,0,0,1,17.2-8.74h0a21.39,21.39,0,0,1,17.2,8.74l55.67,76.21a21.23,21.23,0,0,1,0,25.13h0l-55.68,76.21A21.35,21.35,0,0,1,116.42,503.57ZM83.89,406.06l32.52,44.51,32.52-44.51-32.52-44.52Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M231,503.57a21.36,21.36,0,0,1-17.2-8.74l-55.68-76.21a21.25,21.25,0,0,1,0-25.12l55.68-76.22a21.29,21.29,0,0,1,34.4,0l55.68,76.21a21.23,21.23,0,0,1,0,25.13h0l-55.68,76.21A21.36,21.36,0,0,1,231,503.57Zm-32.52-97.51L231,450.57l32.52-44.51L231,361.54Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M345,348.54h0a21.33,21.33,0,0,1-17.2-8.74l-55.68-76.21a21.23,21.23,0,0,1,0-25.14l55.67-76.2a21.31,21.31,0,0,1,34.4,0l55.68,76.22a21.23,21.23,0,0,1,0,25.12h0l-55.68,76.22A21.38,21.38,0,0,1,345,348.54ZM312.43,251,345,295.54,377.47,251,345,206.52Zm-8,11,0,0Zm81.13-22,0,0Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M345,503.57h0a21.36,21.36,0,0,1-17.2-8.74l-55.68-76.21a21.23,21.23,0,0,1,0-25.13l55.68-76.21a21.29,21.29,0,0,1,34.4,0l55.68,76.21a21.25,21.25,0,0,1,0,25.12h0l-55.68,76.21A21.39,21.39,0,0,1,345,503.57Zm-32.52-97.51L345,450.57l32.52-44.51L345,361.54Zm73.09-11,0,0Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M116.42,658.59a21.38,21.38,0,0,1-17.21-8.73L43.54,573.65a21.22,21.22,0,0,1,0-25.12L99.21,472.3a21.38,21.38,0,0,1,17.2-8.73h0a21.39,21.39,0,0,1,17.2,8.74l55.67,76.21a21.21,21.21,0,0,1,0,25.14l-55.67,76.2A21.34,21.34,0,0,1,116.42,658.59ZM83.89,561.08l32.52,44.51,32.52-44.51-32.52-44.51Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M231,658.59a21.33,21.33,0,0,1-17.2-8.74l-55.68-76.2a21.22,21.22,0,0,1,0-25.12l55.68-76.23a21.3,21.3,0,0,1,34.4,0l55.68,76.21a21.23,21.23,0,0,1,0,25.14l-55.67,76.2A21.35,21.35,0,0,1,231,658.59Zm-32.52-97.51L231,605.59l32.52-44.51L231,516.57Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M345,658.59h0a21.33,21.33,0,0,1-17.2-8.74l-55.68-76.2a21.23,21.23,0,0,1,0-25.13l55.68-76.22a21.31,21.31,0,0,1,34.4,0l55.68,76.22a21.25,21.25,0,0,1,0,25.13l-55.68,76.21A21.38,21.38,0,0,1,345,658.59Zm-32.52-97.51L345,605.59l32.52-44.51L345,516.57Zm-8.07-11,0,0Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M461.36,697.84H0V114.27H461.36ZM40,657.84H421.36V154.27H40Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M230.68,812.11c-74,0-134.27-60.23-134.27-134.27h40a94.27,94.27,0,0,0,188.54,0h40C365,751.88,304.72,812.11,230.68,812.11Z'
    />
    <path
      className='a-stent-balloon-c'
      d='M365,134.27H325a94.27,94.27,0,1,0-188.54,0h-40C96.41,60.23,156.65,0,230.68,0S365,60.23,365,134.27Z'
    />
  </svg>
)

export const StentBalloonIcon = () => (
  <svg viewBox='0 0 382.53 733.61'>
    <defs>
      <style>{`.a-stent-balloon{fill:#7cc7ff;}`}</style>
    </defs>
    <path
      className='a-stent-balloon'
      d='M191.27,733.61c-74,0-134.27-60.23-134.27-134.27H97a94.27,94.27,0,1,0,188.53,0h40C325.53,673.38,265.3,733.61,191.27,733.61Z'
    />
    <path
      className='a-stent-balloon'
      d='M325.53,134.27h-40a94.27,94.27,0,1,0-188.53,0H57C57,60.23,117.23,0,191.27,0S325.53,60.23,325.53,134.27Z'
    />
    <path
      className='a-stent-balloon'
      d='M77,309.29a21.39,21.39,0,0,1-17.2-8.72L4.12,224.35a21.2,21.2,0,0,1,0-25.14L59.8,123A21.38,21.38,0,0,1,77,114.27h0A21.35,21.35,0,0,1,94.2,123l55.68,76.21a21.23,21.23,0,0,1,0,25.13L94.2,300.56A21.37,21.37,0,0,1,77,309.29ZM44.48,211.78,77,256.29l32.52-44.51L77,167.27Zm73.09,11v0Zm-81.14,0v0Zm0-22,0,0Z'
    />
    <path
      className='a-stent-balloon'
      d='M191.57,309.29h0a21.36,21.36,0,0,1-17.2-8.74l-55.67-76.2a21.21,21.21,0,0,1,0-25.14L174.38,123a21.34,21.34,0,0,1,17.19-8.73h0a21.38,21.38,0,0,1,17.2,8.72l55.68,76.23a21.22,21.22,0,0,1,0,25.11v0l-55.68,76.21A21.36,21.36,0,0,1,191.57,309.29Zm-32.51-97.51,32.52,44.51,32.52-44.51-32.52-44.51Zm-8.05,11v0Zm81.14-22h0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent-balloon'
      d='M77,464.32a21.38,21.38,0,0,1-17.2-8.73L4.12,379.37a21.2,21.2,0,0,1,0-25.14L59.8,278A21.39,21.39,0,0,1,77,269.29h0A21.38,21.38,0,0,1,94.2,278l55.68,76.21a21.23,21.23,0,0,1,0,25.13L94.2,455.58A21.35,21.35,0,0,1,77,464.32ZM44.48,366.81,77,411.32l32.52-44.51L77,322.29Zm73.09,11v0Zm-81.14,0v0Zm0-22.06,0,0Z'
    />
    <path
      className='a-stent-balloon'
      d='M191.57,464.32h0a21.36,21.36,0,0,1-17.2-8.74L118.7,379.37a21.21,21.21,0,0,1,0-25.14L174.38,278a21.35,21.35,0,0,1,17.19-8.74h0a21.36,21.36,0,0,1,17.2,8.73l55.68,76.22a21.23,21.23,0,0,1,0,25.12h0l-55.68,76.21A21.34,21.34,0,0,1,191.57,464.32Zm-32.51-97.51,32.52,44.51,32.52-44.51-32.52-44.52Zm-8.05,11v0Zm81.14-22h0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent-balloon'
      d='M305.53,309.29h0a21.35,21.35,0,0,1-17.19-8.74l-55.67-76.2a21.21,21.21,0,0,1,0-25.14L288.33,123a21.37,21.37,0,0,1,17.19-8.73h0a21.39,21.39,0,0,1,17.2,8.72l55.68,76.23a21.21,21.21,0,0,1,0,25.13l-55.68,76.21A21.38,21.38,0,0,1,305.53,309.29ZM273,211.78l32.52,44.51,32.52-44.51-32.52-44.51Zm73.1,11v0Zm-81.14,0,0,0Zm0-22v0Z'
    />
    <path
      className='a-stent-balloon'
      d='M305.53,464.32h0a21.35,21.35,0,0,1-17.19-8.74l-55.67-76.21a21.21,21.21,0,0,1,0-25.14L288.33,278a21.38,21.38,0,0,1,17.19-8.74h0a21.38,21.38,0,0,1,17.2,8.73l55.68,76.22a21.21,21.21,0,0,1,0,25.13l-55.68,76.21A21.36,21.36,0,0,1,305.53,464.32ZM273,366.81l32.52,44.51,32.52-44.51-32.52-44.52Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.06v0Z'
    />
    <path
      className='a-stent-balloon'
      d='M77,619.34a21.39,21.39,0,0,1-17.2-8.72L4.12,534.4a21.2,21.2,0,0,1,0-25.14L59.8,433.05A21.38,21.38,0,0,1,77,424.32h0a21.35,21.35,0,0,1,17.19,8.74l55.68,76.21a21.23,21.23,0,0,1,0,25.13L94.2,610.61A21.37,21.37,0,0,1,77,619.34ZM44.48,521.83,77,566.34l32.52-44.51L77,477.32Zm73.09,11v0Zm-81.14,0v0Zm0-22.05,0,0Z'
    />
    <path
      className='a-stent-balloon'
      d='M191.57,619.34h0a21.36,21.36,0,0,1-17.2-8.74L118.7,534.4a21.21,21.21,0,0,1,0-25.14l55.68-76.21a21.34,21.34,0,0,1,17.19-8.73h0a21.36,21.36,0,0,1,17.2,8.73l55.68,76.22a21.22,21.22,0,0,1,0,25.11v0l-55.68,76.21A21.36,21.36,0,0,1,191.57,619.34Zm-32.51-97.51,32.52,44.51,32.52-44.51-32.52-44.51Zm-8.05,11v0Zm81.14-22h0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent-balloon'
      d='M305.53,619.34h0a21.35,21.35,0,0,1-17.19-8.74l-55.67-76.2a21.21,21.21,0,0,1,0-25.14l55.67-76.21a21.37,21.37,0,0,1,17.19-8.73h0a21.38,21.38,0,0,1,17.2,8.73l55.68,76.22a21.21,21.21,0,0,1,0,25.13l-55.68,76.21A21.38,21.38,0,0,1,305.53,619.34ZM273,521.83l32.52,44.51,32.52-44.51-32.52-44.51Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.05v0Z'
    />
  </svg>
)

export const StentCoveredIcon = () => (
  <svg viewBox='0 0 461.36 583.58'>
    <defs>
      <style>{`.a-stent-covered{fill:#ba8ff7;}`}</style>
    </defs>
    <path
      className='a-stent-covered'
      d='M116.41,234.28a21.39,21.39,0,0,1-17.19-8.73L43.54,149.33a21.21,21.21,0,0,1,0-25.14L99.21,48a21.39,21.39,0,0,1,17.2-8.73h0A21.37,21.37,0,0,1,133.62,48l55.67,76.21a21.21,21.21,0,0,1,0,25.13l-55.68,76.21a21.39,21.39,0,0,1-17.19,8.74ZM83.89,136.76l32.52,44.52,32.52-44.52L116.41,92.25Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.05v0Z'
    />
    <path
      className='a-stent-covered'
      d='M231,234.28h0a21.39,21.39,0,0,1-17.19-8.75l-55.68-76.2a21.23,21.23,0,0,1,0-25.14L213.79,48A21.37,21.37,0,0,1,231,39.25h0A21.34,21.34,0,0,1,248.18,48l55.69,76.22a21.26,21.26,0,0,1,0,25.12h0l-55.68,76.21A21.39,21.39,0,0,1,231,234.28Zm-32.52-97.52L231,181.28l32.52-44.52L231,92.25Zm-8,11h0Zm81.13-22v0Zm-81.16,0,0,0Z'
    />
    <path
      className='a-stent-covered'
      d='M116.41,389.3a21.36,21.36,0,0,1-17.19-8.73L43.54,304.35a21.21,21.21,0,0,1,0-25.14L99.21,203a21.39,21.39,0,0,1,17.2-8.73h0a21.37,21.37,0,0,1,17.2,8.74l55.67,76.2a21.21,21.21,0,0,1,0,25.13l-55.68,76.22a21.36,21.36,0,0,1-17.19,8.73ZM83.89,291.79l32.52,44.51,32.52-44.51-32.52-44.51Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.05v0Z'
    />
    <path
      className='a-stent-covered'
      d='M231,389.3h0a21.35,21.35,0,0,1-17.19-8.74l-55.68-76.21a21.23,21.23,0,0,1,0-25.14L213.79,203A21.37,21.37,0,0,1,231,194.28h0A21.36,21.36,0,0,1,248.18,203l55.69,76.22a21.26,21.26,0,0,1,0,25.12h0l-55.68,76.22A21.38,21.38,0,0,1,231,389.3Zm-32.52-97.51L231,336.3l32.52-44.51L231,247.28Zm-8,11,0,0Zm81.13-22h0Zm-81.16,0,0,0Z'
    />
    <path
      className='a-stent-covered'
      d='M345,234.28h0a21.39,21.39,0,0,1-17.19-8.75l-55.68-76.2a21.23,21.23,0,0,1,0-25.14L327.75,48a21.37,21.37,0,0,1,17.19-8.73h0A21.34,21.34,0,0,1,362.14,48l55.69,76.22a21.23,21.23,0,0,1,0,25.13l-55.68,76.21A21.39,21.39,0,0,1,345,234.28Zm-32.52-97.52L345,181.28l32.52-44.52L345,92.25Zm73.09,11,0,0Zm-81.14,0h0Zm0-22.06,0,0Z'
    />
    <path
      className='a-stent-covered'
      d='M345,389.3h0a21.35,21.35,0,0,1-17.19-8.74l-55.68-76.21a21.23,21.23,0,0,1,0-25.14L327.75,203a21.37,21.37,0,0,1,17.19-8.73h0A21.36,21.36,0,0,1,362.14,203l55.69,76.22a21.23,21.23,0,0,1,0,25.13l-55.68,76.22A21.38,21.38,0,0,1,345,389.3Zm-32.52-97.51L345,336.3l32.52-44.51L345,247.28Zm73.09,11,0,0Zm-81.14,0v0Zm0-22.05,0,0Z'
    />
    <path
      className='a-stent-covered'
      d='M116.41,544.33a21.39,21.39,0,0,1-17.19-8.73L43.54,459.38a21.21,21.21,0,0,1,0-25.14L99.21,358a21.37,21.37,0,0,1,17.2-8.74h0a21.37,21.37,0,0,1,17.2,8.74l55.67,76.21a21.21,21.21,0,0,1,0,25.13l-55.68,76.21a21.37,21.37,0,0,1-17.19,8.74ZM83.89,446.81l32.52,44.52,32.52-44.52L116.41,402.3Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.06v0Z'
    />
    <path
      className='a-stent-covered'
      d='M231,544.33h0a21.36,21.36,0,0,1-17.19-8.75l-55.68-76.2a21.23,21.23,0,0,1,0-25.14L213.79,358A21.35,21.35,0,0,1,231,349.3h0A21.34,21.34,0,0,1,248.18,358l55.69,76.22a21.26,21.26,0,0,1,0,25.12h0l-55.68,76.21A21.39,21.39,0,0,1,231,544.33Zm-32.52-97.52L231,491.33l32.52-44.52L231,402.3Zm-8,11,0,0Zm81.13-22v0Zm-81.16,0,0,0Z'
    />
    <path
      className='a-stent-covered'
      d='M345,544.33h0a21.36,21.36,0,0,1-17.19-8.75l-55.68-76.2a21.23,21.23,0,0,1,0-25.14L327.75,358a21.35,21.35,0,0,1,17.19-8.74h0A21.34,21.34,0,0,1,362.14,358l55.69,76.22a21.23,21.23,0,0,1,0,25.13l-55.68,76.21A21.39,21.39,0,0,1,345,544.33Zm-32.52-97.52L345,491.33l32.52-44.52L345,402.3Zm73.09,11,0,0Zm-81.14,0v0Zm0-22.06,0,0Z'
    />
    <path className='a-stent-covered' d='M461.36,583.58H0V0H461.36ZM40,543.58H421.36V40H40Z' />
  </svg>
)

export const StentIcon = () => (
  <svg viewBox='0 0 382.53 505.08'>
    <defs>
      <style>{`.a-stent{fill:#ff71d4;}`}</style>
    </defs>
    <path
      className='a-stent'
      d='M77,195a21.4,21.4,0,0,1-17.2-8.73L4.12,110.08a21.23,21.23,0,0,1,0-25.14L59.8,8.73A21.38,21.38,0,0,1,77,0h0A21.35,21.35,0,0,1,94.2,8.74L149.88,85a21.23,21.23,0,0,1,0,25.13L94.2,186.29A21.41,21.41,0,0,1,77,195ZM44.48,97.51,77,142l32.52-44.52L77,53Zm73.09,11h0Zm-81.14,0v0Zm0-22,0,0Z'
    />
    <path
      className='a-stent'
      d='M191.58,195h0a21.41,21.41,0,0,1-17.2-8.75l-55.67-76.2a21.2,21.2,0,0,1,0-25.14L174.38,8.73A21.36,21.36,0,0,1,191.57,0h0a21.36,21.36,0,0,1,17.19,8.73L264.45,85a21.23,21.23,0,0,1,0,25.12h0l-55.68,76.21A21.37,21.37,0,0,1,191.58,195ZM159.06,97.51,191.58,142,224.1,97.51,191.58,53Zm-8.05,11v0Zm81.14-22h0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent'
      d='M77,350.05a21.38,21.38,0,0,1-17.2-8.73L4.12,265.1a21.23,21.23,0,0,1,0-25.14l55.67-76.2A21.38,21.38,0,0,1,77,155h0a21.35,21.35,0,0,1,17.19,8.74L149.88,240a21.23,21.23,0,0,1,0,25.13L94.2,341.32A21.37,21.37,0,0,1,77,350.05ZM44.48,252.54,77,297.05l32.52-44.51L77,208Zm73.09,11v0Zm-81.14,0v0Zm0-22.05,0,0Z'
    />
    <path
      className='a-stent'
      d='M191.58,350.05h0a21.37,21.37,0,0,1-17.2-8.74L118.7,265.1a21.2,21.2,0,0,1,0-25.14l55.67-76.2A21.36,21.36,0,0,1,191.57,155h0a21.38,21.38,0,0,1,17.19,8.72L264.45,240a21.23,21.23,0,0,1,0,25.12h0l-55.68,76.22A21.36,21.36,0,0,1,191.58,350.05Zm-32.52-97.51,32.52,44.51,32.52-44.51L191.58,208Zm-8.05,11v0Zm81.14-22h0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent'
      d='M305.53,195h0a21.39,21.39,0,0,1-17.19-8.75l-55.67-76.2a21.21,21.21,0,0,1,0-25.14L288.33,8.73A21.37,21.37,0,0,1,305.52,0h0a21.38,21.38,0,0,1,17.2,8.73L378.41,85a21.21,21.21,0,0,1,0,25.13l-55.68,76.21A21.39,21.39,0,0,1,305.53,195ZM273,97.51,305.53,142l32.52-44.52L305.53,53Zm73.1,11h0Zm-81.14,0,0,0Zm0-22v0Z'
    />
    <path
      className='a-stent'
      d='M305.53,350.05h0a21.35,21.35,0,0,1-17.19-8.74L232.66,265.1a21.21,21.21,0,0,1,0-25.14l55.67-76.2A21.37,21.37,0,0,1,305.52,155h0a21.39,21.39,0,0,1,17.2,8.72L378.41,240a21.21,21.21,0,0,1,0,25.13l-55.68,76.22A21.38,21.38,0,0,1,305.53,350.05ZM273,252.54l32.52,44.51,32.52-44.51L305.53,208Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.05v0Z'
    />
    <path
      className='a-stent'
      d='M77,505.08a21.4,21.4,0,0,1-17.2-8.73L4.12,420.13a21.23,21.23,0,0,1,0-25.14l55.67-76.2A21.36,21.36,0,0,1,77,310.05h0a21.35,21.35,0,0,1,17.19,8.74L149.88,395a21.23,21.23,0,0,1,0,25.13L94.2,496.34A21.38,21.38,0,0,1,77,505.08ZM44.48,407.56,77,452.08l32.52-44.52L77,363.05Zm73.09,11v0Zm-81.14,0v0Zm0-22.06,0,0Z'
    />
    <path
      className='a-stent'
      d='M191.58,505.08h0a21.38,21.38,0,0,1-17.2-8.75l-55.67-76.2a21.2,21.2,0,0,1,0-25.14l55.67-76.2a21.34,21.34,0,0,1,17.19-8.74h0a21.36,21.36,0,0,1,17.19,8.73L264.45,395a21.23,21.23,0,0,1,0,25.12h0l-55.68,76.21A21.37,21.37,0,0,1,191.58,505.08Zm-32.52-97.52,32.52,44.52,32.52-44.52-32.52-44.51Zm-8.05,11v0Zm81.14-22v0Zm-81.16,0v0Z'
    />
    <path
      className='a-stent'
      d='M305.53,505.08h0a21.36,21.36,0,0,1-17.19-8.75l-55.67-76.2a21.21,21.21,0,0,1,0-25.14l55.67-76.2a21.35,21.35,0,0,1,17.19-8.74h0a21.38,21.38,0,0,1,17.2,8.73L378.41,395a21.21,21.21,0,0,1,0,25.13l-55.68,76.21A21.39,21.39,0,0,1,305.53,505.08ZM273,407.56l32.52,44.52,32.52-44.52-32.52-44.51Zm73.1,11v0Zm-81.14,0,0,0Zm0-22.06v0Z'
    />
  </svg>
)

export const UltrasoundProbeIcon = () => (
  <svg viewBox='0 0 831.38 555.66' style={{ transform: 'rotate(90deg)' }}>
    <defs>
      <style>{`.a-prob{fill:#5aaafa;}`}</style>
    </defs>
    <path
      className='a-prob'
      d='M714.21,169.39a19.94,19.94,0,0,1,5.48,10.29,517.31,517.31,0,0,1,.23,195.14,20,20,0,0,1-17.13,16.05L584.68,405.73a90.37,90.37,0,0,0-78.93,89.49,20,20,0,0,1-40,0A130.42,130.42,0,0,1,579.69,366l103.47-13A479.44,479.44,0,0,0,683,201.61L579.85,189.15a129.74,129.74,0,0,1-114.1-128.7,20,20,0,0,1,40,0,89.71,89.71,0,0,0,78.89,89l117.82,14.23A20,20,0,0,1,714.21,169.39Z'
    />
    <path
      className='a-prob'
      d='M820.06,182.17a20,20,0,0,1,5.68,11.45A632.19,632.19,0,0,1,826,360.33a20,20,0,0,1-17.33,17.21L702.79,390.87a20,20,0,0,1-22.14-23.65,471.67,471.67,0,0,0,8.44-89.38h0a471.27,471.27,0,0,0-8.65-90.45,20,20,0,0,1,22-23.71l105.86,12.79A20,20,0,0,1,820.06,182.17ZM788.14,339.81A594.06,594.06,0,0,0,788,214.29l-63.77-7.7a517.75,517.75,0,0,1,4.89,71.25h0a517.28,517.28,0,0,1-4.72,70Z'
    />
    <path
      className='a-prob'
      d='M499.89,46.31a20,20,0,0,1,2.53,25.19c-2.29,3.46-4.55,7.09-6.72,10.81-29.38,50.34-46.23,121.61-46.23,195.53S466.32,423,495.7,473.37c2.16,3.7,4.42,7.33,6.72,10.8a20,20,0,0,1-8.86,29.46l-95.28,40.43a20,20,0,0,1-25.07-8.31l-.38-.63c-42.34-72.56-65.65-167.47-65.65-267.28S330.49,83.11,372.81,10.59l.44-.73a20.06,20.06,0,0,1,25-8.25L493.56,42A19.86,19.86,0,0,1,499.89,46.31ZM456.8,485.78c-30.15-55.63-47.33-130.8-47.33-207.95S426.65,125.52,456.8,69.89L399.23,45.46c-33.64,64.44-52.05,146.22-52.05,232.38s18.4,167.9,52.05,232.37Z'
    />
    <path
      className='a-prob'
      d='M253.22,132.31A20,20,0,0,1,258.59,151a567.23,567.23,0,0,0-14,126.89,567.21,567.21,0,0,0,14,126.88,20,20,0,0,1-39,9,607.55,607.55,0,0,1-15-135.84A607.64,607.64,0,0,1,219.6,142a20,20,0,0,1,33.62-9.68Z'
    />
    <path
      className='a-prob'
      d='M636.47,263.69a20,20,0,0,1-14.14,34.15H516.23a20,20,0,0,1,0-40h106.1A19.9,19.9,0,0,1,636.47,263.69Z'
    />
    <path
      className='a-prob'
      d='M171.14,65.69A20,20,0,0,1,175.67,87c-21.84,56.85-33.38,122.83-33.38,190.83s11.54,134,33.38,190.82A20,20,0,1,1,138.33,483c-23.58-61.37-36-132.32-36-205.16s12.46-143.8,36-205.17a20,20,0,0,1,32.81-7Z'
    />
    <path
      className='a-prob'
      d='M97.45,5.87a20,20,0,0,1,3.1,24.24l-.4.68C61.37,97.25,40,185,40,277.84s21.37,180.59,60.17,247.08l.37.6a20,20,0,1,1-34.49,20.26L66,545.7l-.36-.62C23.31,472.56,0,377.65,0,277.84S23.31,83.11,65.63,10.59L66,9.9a20,20,0,0,1,31.41-4Z'
    />
  </svg>
)

export const MenuIcon = () =>(
  <svg style={{width:'100%',height:"100%",fill:'white'}} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
)