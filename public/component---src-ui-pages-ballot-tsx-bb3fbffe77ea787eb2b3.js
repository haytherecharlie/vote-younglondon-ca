(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{R03k:function(e){e.exports=JSON.parse('["N6A","N6B","N6C","N6E","N6G","N6H","N6J","N6K","N6L","N6M","N6N","N6P","N5V","N5W","N5X","N5Y","N5Z"]')},WMNN:function(e,a,n){"use strict";n.r(a);var i,t,l=n("nKUr"),r=n("q1tI"),o=n("kD0k"),s=n.n(o),d=(n("ls82"),n("/S4K")),c=n("YwZP"),u=n("GGV+"),v=n("X5Zu"),g=n("R03k"),p=function(e){return/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(e)?"valid":"invalid"},b=function(e){return e.length>0?"valid":"invalid"},j=function(e){return parseInt(e)>10&&parseInt(e)<=120?"valid":"invalid"},h=function(e){return/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e)?"valid":"invalid"},O=function(e){return v.some((function(a){return a===e}))?"valid":"invalid"},f=function(e){return""!==e?"valid":"invalid"},m=function(e){return e.length>0?"valid":"invalid"},x=function(){return Object(r.useReducer)((function(e,a){var n,i=a.value,t=void 0===i?e.value:i,l=a.valid;switch(a.type){case"first":return"valid"===p(t)?Object.assign({},e,{first:Object.assign({},e.first,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{first:Object.assign({},e.first,{value:t,valid:"invalid",error:"Please include a valid first name."})});case"last":return"valid"===p(t)?Object.assign({},e,{last:Object.assign({},e.last,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{last:Object.assign({},e.last,{value:t,valid:"invalid",error:"Please include a valid last name."})});case"gender":return"valid"===b(t)?Object.assign({},e,{gender:Object.assign({},e.gender,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{gender:Object.assign({},e.gender,{value:t,valid:"invalid",error:"Please include a gender or type N/A."})});case"age":return"valid"===j(t)?Object.assign({},e,{age:Object.assign({},e.age,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{age:Object.assign({},e.age,{value:t,valid:"invalid",error:"Please include a valid age between 10 - 120."})});case"email":return"valid"===h(t)?Object.assign({},e,{email:Object.assign({},e.email,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{email:Object.assign({},e.email,{value:t,valid:"invalid",error:"Please include a valid email address."})});case"phone":return"valid"===O(t)?Object.assign({},e,{phone:Object.assign({},e.phone,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{phone:Object.assign({},e.phone,{value:t,valid:"invalid",error:"Please include a valid Canadian phone number."})});case"postal":return"valid"==(n=t,g.some((function(e){return e===n.substr(0,3)}))&&/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(n)?"valid":"invalid")?Object.assign({},e,{postal:Object.assign({},e.postal,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{postal:Object.assign({},e.postal,{value:t,valid:"invalid",error:"Please include a valid London, ON postal code."})});case"vote":return"valid"===f(t)?Object.assign({},e,{vote:Object.assign({},e.vote,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{vote:Object.assign({},e.vote,{value:t,valid:"invalid",error:"Please include a vote."})});case"referendum":return"valid"===m(t)?Object.assign({},e,{referendum:Object.assign({},e.referendum,{value:t,valid:l||"valid",error:null})}):Object.assign({},e,{referendum:Object.assign({},e.referendum,{value:t,valid:"invalid",error:"Please include a response to the referendum."})});case"already-voted":return Object.assign({},e,{email:Object.assign({},e.email,{valid:"invalid",error:"This email address has already voted."})});case"find-errors":return{first:"valid"!==p(e.first.value)?Object.assign({},e.first,{valid:"invalid",error:"Please include a valid first name."}):e.first,last:"valid"!==p(e.last.value)?Object.assign({},e.last,{valid:"invalid",error:"Please include a valid last name."}):e.last,gender:"valid"!==b(e.gender.value)?Object.assign({},e.gender,{valid:"invalid",error:"Please include a gender or type N/A."}):e.gender,age:"valid"!==j(e.age.value)?Object.assign({},e.age,{valid:"invalid",error:"Please include a valid age between 10 - 120."}):e.age,email:"valid"!==h(e.email.value)?Object.assign({},e.email,{valid:"invalid",error:"Please include a valid email address."}):e.email,phone:"valid"!==O(e.phone.value)?Object.assign({},e.phone,{valid:"invalid",error:"Please include a valid Canadian phone number."}):e.phone,vote:"valid"!==f(e.vote.value)?Object.assign({},e.vote,{valid:"invalid",error:"Please include a vote."}):e.vote,referendum:"valid"!==m(e.referendum.value)?Object.assign({},e.referendum,{valid:"invalid",error:"Please include a response to the referendum."}):e.referendum};default:return e}}),{first:{value:"",valid:"pending",error:null},last:{value:"",valid:"pending",error:null},gender:{value:"",valid:"pending",error:null},age:{value:"",valid:"pending",error:null},email:{value:"",valid:"pending",error:null},phone:{value:"",valid:"pending",error:null},postal:{value:"",valid:"pending",error:null},vote:{value:"",valid:"pending",error:null},referendum:{value:"",valid:"pending",error:null}})},y=n("vOnD"),C=n("9Sct"),w=Object(y.b)("label").withConfig({displayName:"Checkboxstyle__Checkbox",componentId:"v1igg1-0"})({flex:1,display:"flex",alignItems:"center",justifyContent:"flex-start",margin:"10px 5px"}),N=Object(y.b)("div").withConfig({displayName:"Checkboxstyle__Selection",componentId:"v1igg1-1"})({position:"relative",marginRight:5}),_=Object(y.b)("input").withConfig({displayName:"Checkboxstyle__Radio",componentId:"v1igg1-2"})({position:"absolute",opacity:0,cursor:"pointer",height:15,width:15,border:"1px solid green","&:focus + div":{outline:"none",boxShadow:"0 0 3px blue"}}),k=Object(y.b)("div").withConfig({displayName:"Checkboxstyle__Box",componentId:"v1igg1-3"})({height:15,width:15,borderRadius:"50%",border:"2px solid "+C.a.DEFAULT_COLOR}),I=Object(y.b)("img").withConfig({displayName:"Checkboxstyle__Checkmark",componentId:"v1igg1-4"})({opacity:function(e){return e.checked?1:0},position:"absolute",top:-1,left:5,height:15,width:15}),A=Object(y.b)("span").withConfig({displayName:"Checkboxstyle__Name",componentId:"v1igg1-5"})({}),L=function(e){var a=e.name,n=e.id,i=e.vote,t=e.onChange,r=i===n;return Object(l.jsxs)(w,{children:[Object(l.jsxs)(N,{children:[Object(l.jsx)(_,{type:"radio",name:a,value:a,onChange:t,checked:r}),Object(l.jsx)(k,{className:"checkmark",checked:r}),r&&Object(l.jsx)(I,{src:"/images/checkmark.png",checked:r,className:"animated jackInTheBox faster"})]}),Object(l.jsx)(A,{children:a})]})},P=Object(y.b)("div").withConfig({displayName:"Ballotstyle__Ballot",componentId:"sc-1rkvp2x-0"})({display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",width:"90%",maxWidth:800,marginBottom:20,minHeight:300,overflow:"hidden"}),B=Object(y.b)("span").withConfig({displayName:"Ballotstyle__CopyText",componentId:"sc-1rkvp2x-1"})({color:C.a.DEFAULT_COLOR,opacity:.7}),D=Object(y.b)("a").withConfig({displayName:"Ballotstyle__PrivacyLink",componentId:"sc-1rkvp2x-2"})({color:C.a.BRAND_COLOR,fontSize:C.a.FONT_SMALL}),R=Object(y.b)("img").withConfig({displayName:"Ballotstyle__Logo",componentId:"sc-1rkvp2x-3"})({height:"auto",margin:"20px auto",width:100}),S=Object(y.b)("div").withConfig({displayName:"Ballotstyle__Sheet",componentId:"sc-1rkvp2x-4"})({flex:0,padding:"20px 40px 40px 40px",borderRadius:25,background:C.a.BALLOT_COLOR,boxShadow:"0px 0px 10px rgba(0,0,0,0.1)",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start"}),T=Object(y.b)("h1").withConfig({displayName:"Ballotstyle__Title",componentId:"sc-1rkvp2x-5"})(((i={textAlign:"center",fontSize:C.a.FONT_LARGE,color:C.a.DEFAULT_COLOR})[C.a.MEDIUM_QUERY]={fontSize:C.a.FONT_MEDIUM},i)),M=Object(y.b)("h2").withConfig({displayName:"Ballotstyle__SubHeading",componentId:"sc-1rkvp2x-6"})(((t={width:"100%",fontSize:20,color:C.a.DEFAULT_COLOR})[C.a.MEDIUM_QUERY]={fontSize:C.a.FONT_SMALL},t)),z=Object(y.b)("div").withConfig({displayName:"Ballotstyle__Divider",componentId:"sc-1rkvp2x-7"})({width:"100%",height:function(e){return e.height}}),E=Object(y.b)("input").withConfig({displayName:"Ballotstyle__Input",componentId:"sc-1rkvp2x-8"})((function(e){return Object.assign({},C.a.INPUT_STYLE,{"&:focus":{outline:"none",boxShadow:"invalid"===e.valid?"0 0 3px red":"0 0 3px blue"}})})),F=Object(y.b)("div").withConfig({displayName:"Ballotstyle__Text",componentId:"sc-1rkvp2x-9"})({margin:"10px 5px 0 10px"}),Y=Object(y.b)("img").withConfig({displayName:"Ballotstyle__Lock",componentId:"sc-1rkvp2x-10"})({height:12,width:"auto",margin:"0 5px 0 0"}),U=Object(y.b)("button").withConfig({displayName:"Ballotstyle__Vote",componentId:"sc-1rkvp2x-11"})((function(e){return{opacity:e.disabled?.5:1,background:C.a.PRIMARY_COLOR,padding:"10px 20px",borderRadius:5,fontSize:C.a.FONT_SMALL,border:"#000",width:"100%",textAlign:"center",color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",margin:"40px 0 20px 0"}})),Z=Object(y.b)("span").withConfig({displayName:"Ballotstyle__Error",componentId:"sc-1rkvp2x-12"})({color:"red",fontSize:12}),K=function(){var e=x(),a=e[0],n=a.first,i=a.last,t=a.gender,r=a.age,o=a.email,v=a.postal,g=a.vote,p=a.referendum,b=e[1];console.log(v);var j={"01":"Aditi Basdeo","02":"Alice Balluku","03":"Amy Jing","04":"Madeline Noftle","05":"Michelle Lim","06":"Jackson Dobbin","07":"Maddy McCarville","09":"Moeez Tahir",10:"Rimsha Ashraf",11:"Sophia Yuan",12:"Abdullah Qassab",13:"Hawa Ahmed"},h=function(){var e=Object(d.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a&&(a=null),a&&a.preventDefault(),![n,i,t,r,o,g,p].some((function(e){return""!==e.value&&"valid"===e.valid}))){e.next=6;break}return e.next=5,Object(u.a)(o.value.toLowerCase(),{age:r.value,email:o.value.toLowerCase(),first:n.value,gender:t.value,last:i.value,referendum:p.value,verified:!1,vote:j[g.value],voteId:g.value});case 5:return e.abrupt("return",Object(c.navigate)("/thanks"));case 6:return e.abrupt("return",b({type:"find-errors"}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O=function(e){if("Enter"===e.key){e.preventDefault();var a=e.target.form,n=Array.prototype.indexOf.call(a,e.target);return n<a.length-1?a.elements[n+1].focus():h()}};return Object(l.jsxs)(P,{children:[Object(l.jsx)(R,{src:"/images/lyac.png",alt:"LYAC logo"}),Object(l.jsxs)(S,{children:[Object(l.jsx)(T,{children:"London Youth Advisory Council 2020 Ballot"}),Object(l.jsx)(M,{children:"Personal Information"}),Object(l.jsxs)("div",{style:{display:"inline-block"},children:[Object(l.jsxs)(B,{children:["Please provide accurate details - false information will invalidate your ballot. To learn more, read our"," "]}),Object(l.jsx)(D,{href:"https://younglondon.ca/privacy-policy/",children:"Privacy Policy"})]}),Object(l.jsxs)("form",{onKeyDown:O,onSubmit:h,children:[Object(l.jsx)(E,{valid:n.valid,onKeyDown:O,value:n.value,onChange:function(e){return b({type:"first",value:e.target.value})},placeholder:"Your First Name",autoFocus:!0}),n.error&&Object(l.jsx)(Z,{children:n.error}),Object(l.jsx)(E,{valid:i.valid,onKeyDown:O,value:i.value,onChange:function(e){return b({type:"last",value:e.target.value})},placeholder:"Your Last Name"}),i.error&&Object(l.jsx)(Z,{children:i.error}),Object(l.jsx)(E,{valid:t.valid,onKeyDown:O,value:t.value,onChange:function(e){return b({type:"gender",value:e.target.value})},placeholder:"Gender"}),t.error&&Object(l.jsx)(Z,{children:t.error}),Object(l.jsx)(E,{valid:r.valid,onKeyDown:O,value:r.value,onChange:function(e){return b({type:"age",value:e.target.value})},placeholder:"Age"}),r.error&&Object(l.jsx)(Z,{children:r.error}),Object(l.jsx)(E,{valid:v.valid,onKeyDown:O,value:v.value,onChange:function(e){return b({type:"postal",value:e.target.value.toUpperCase().replace(/\s/g,"")})},placeholder:"Postal Code"}),v.error&&Object(l.jsx)(Z,{children:v.error}),Object(l.jsx)(E,{valid:o.valid,onKeyDown:O,value:o.value,onChange:function(e){return b({type:"email",value:e.target.value})},placeholder:"Email Address"}),o.error&&Object(l.jsx)(Z,{children:o.error}),Object(l.jsx)(z,{height:"10px"}),Object(l.jsx)(M,{children:"Your Vote (One Vote Per Person)"}),Object(l.jsxs)("div",{style:{display:"inline-block"},children:[Object(l.jsx)(B,{children:"To learn more about each candidate, please visit our "}),Object(l.jsx)(D,{href:"https://younglondon.ca/election",target:"_blank",children:"Election Page"})]}),Object.entries(j).map((function(e){var a=e[0],n=e[1];return Object(l.jsx)(L,{id:a,name:n,vote:g.value,onChange:function(){return b({type:"vote",value:a})}},a)})),g.error&&Object(l.jsx)(Z,{children:g.error}),Object(l.jsx)(z,{height:"5px"}),Object(l.jsx)(M,{children:"Referendum Question"}),Object(l.jsx)(F,{children:"What do you feel is the most pressing issue in your community?"}),Object(l.jsx)(E,{valid:p.valid,value:p.value,onChange:function(e){return b({type:"referendum",value:e.target.value})},placeholder:"Tell us what you think!"}),p.error&&Object(l.jsx)(Z,{children:p.error}),Object(l.jsxs)(U,{onClick:h,disabled:[n,i,t,r,o,g,p].some((function(e){return""===e.value&&"valid"!==e.valid})),children:[Object(l.jsx)(Y,{src:"/images/lock.png"}),"Cast Your Vote"]})]})]})]})},J=n("VvBc");a.default=function(e){e.navigate;return Object(l.jsx)(J.a,{page:"ballot",crawl:!1,style:{alignItems:"center",justifyContent:"center"},children:Object(l.jsx)(K,{})})}},X5Zu:function(e){e.exports=JSON.parse('["587","780","825","403","250","604","236","778","204","431","506","709","867","782","902","867","249","343","416","519","647","905","365","548","705","226","289","613","807","437","902","782","438","418","450","367","579","873","514","581","819","306","639","867"]')}}]);
//# sourceMappingURL=component---src-ui-pages-ballot-tsx-bb3fbffe77ea787eb2b3.js.map