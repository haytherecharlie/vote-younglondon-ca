(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WMNN:function(e,a,n){"use strict";n.r(a);var i,t,r=n("nKUr"),l=n("q1tI"),o=n("kD0k"),s=n.n(o),d=(n("ls82"),n("/S4K")),c=n("YwZP"),u=n("GGV+"),v=n("X5Zu"),g=function(e){return/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(e)?"valid":"invalid"},b=function(e){return e.length>0?"valid":"invalid"},p=function(e){return parseInt(e)>10&&parseInt(e)<=120?"valid":"invalid"},h=function(e){return/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e)?"valid":"invalid"},j=function(e){return v.some((function(a){return a===e}))?"valid":"invalid"},f=function(e){return""!==e?"valid":"invalid"},m=function(e){return e.length>0?"valid":"invalid"},O=function(){return Object(l.useReducer)((function(e,a){var n=a.value,i=void 0===n?e.value:n,t=a.valid;switch(a.type){case"first":return"valid"===g(i)?Object.assign({},e,{first:Object.assign({},e.first,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{first:Object.assign({},e.first,{value:i,valid:"invalid",error:"Please include a valid first name."})});case"last":return"valid"===g(i)?Object.assign({},e,{last:Object.assign({},e.last,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{last:Object.assign({},e.last,{value:i,valid:"invalid",error:"Please include a valid last name."})});case"gender":return"valid"===b(i)?Object.assign({},e,{gender:Object.assign({},e.gender,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{gender:Object.assign({},e.gender,{value:i,valid:"invalid",error:"Please include a gender or type N/A."})});case"age":return"valid"===p(i)?Object.assign({},e,{age:Object.assign({},e.age,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{age:Object.assign({},e.age,{value:i,valid:"invalid",error:"Please include a valid age between 10 - 120."})});case"email":return"valid"===h(i)?Object.assign({},e,{email:Object.assign({},e.email,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{email:Object.assign({},e.email,{value:i,valid:"invalid",error:"Please include a valid email address."})});case"phone":return"valid"===j(i)?Object.assign({},e,{phone:Object.assign({},e.phone,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{phone:Object.assign({},e.phone,{value:i,valid:"invalid",error:"Please include a valid Canadian phone number."})});case"vote":return"valid"===f(i)?Object.assign({},e,{vote:Object.assign({},e.vote,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{vote:Object.assign({},e.vote,{value:i,valid:"invalid",error:"Please include a vote."})});case"referendum":return"valid"===m(i)?Object.assign({},e,{referendum:Object.assign({},e.referendum,{value:i,valid:t||"valid",error:null})}):Object.assign({},e,{referendum:Object.assign({},e.referendum,{value:i,valid:"invalid",error:"Please include a response to the referendum."})});case"already-voted":return Object.assign({},e,{email:Object.assign({},e.email,{valid:"invalid",error:"This email address has already voted."})});case"find-errors":return{first:"valid"!==g(e.first.value)?Object.assign({},e.first,{valid:"invalid",error:"Please include a valid first name."}):e.first,last:"valid"!==g(e.last.value)?Object.assign({},e.last,{valid:"invalid",error:"Please include a valid last name."}):e.last,gender:"valid"!==b(e.gender.value)?Object.assign({},e.gender,{valid:"invalid",error:"Please include a gender or type N/A."}):e.gender,age:"valid"!==p(e.age.value)?Object.assign({},e.age,{valid:"invalid",error:"Please include a valid age between 10 - 120."}):e.age,email:"valid"!==h(e.email.value)?Object.assign({},e.email,{valid:"invalid",error:"Please include a valid email address."}):e.email,phone:"valid"!==j(e.phone.value)?Object.assign({},e.phone,{valid:"invalid",error:"Please include a valid Canadian phone number."}):e.phone,vote:"valid"!==f(e.vote.value)?Object.assign({},e.vote,{valid:"invalid",error:"Please include a vote."}):e.vote,referendum:"valid"!==m(e.referendum.value)?Object.assign({},e.referendum,{valid:"invalid",error:"Please include a response to the referendum."}):e.referendum};default:return e}}),{first:{value:"",valid:"pending",error:null},last:{value:"",valid:"pending",error:null},gender:{value:"",valid:"pending",error:null},age:{value:"",valid:"pending",error:null},email:{value:"",valid:"pending",error:null},phone:{value:"",valid:"pending",error:null},vote:{value:"",valid:"pending",error:null},referendum:{value:"",valid:"pending",error:null}})},x=n("vOnD"),y=n("9Sct"),w=Object(x.b)("label").withConfig({displayName:"Checkboxstyle__Checkbox",componentId:"v1igg1-0"})({flex:1,display:"flex",alignItems:"center",justifyContent:"flex-start",margin:"10px 5px"}),C=Object(x.b)("div").withConfig({displayName:"Checkboxstyle__Selection",componentId:"v1igg1-1"})({position:"relative",marginRight:5}),_=Object(x.b)("input").withConfig({displayName:"Checkboxstyle__Radio",componentId:"v1igg1-2"})({position:"absolute",opacity:0,cursor:"pointer",height:15,width:15,border:"1px solid green","&:focus + div":{outline:"none",boxShadow:"0 0 3px blue"}}),k=Object(x.b)("div").withConfig({displayName:"Checkboxstyle__Box",componentId:"v1igg1-3"})({height:15,width:15,borderRadius:"50%",border:"2px solid "+y.a.DEFAULT_COLOR}),I=Object(x.b)("img").withConfig({displayName:"Checkboxstyle__Checkmark",componentId:"v1igg1-4"})({opacity:function(e){return e.checked?1:0},position:"absolute",top:-1,left:5,height:15,width:15}),N=Object(x.b)("span").withConfig({displayName:"Checkboxstyle__Name",componentId:"v1igg1-5"})({}),A=function(e){var a=e.name,n=e.id,i=e.vote,t=e.onChange,l=i===n;return Object(r.jsxs)(w,{children:[Object(r.jsxs)(C,{children:[Object(r.jsx)(_,{type:"radio",name:a,value:a,onChange:t,checked:l}),Object(r.jsx)(k,{className:"checkmark",checked:l}),l&&Object(r.jsx)(I,{src:"/images/checkmark.png",checked:l,className:"animated jackInTheBox faster"})]}),Object(r.jsx)(N,{children:a})]})},L=Object(x.b)("div").withConfig({displayName:"Ballotstyle__Ballot",componentId:"sc-1rkvp2x-0"})({display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",width:"90%",maxWidth:800,marginBottom:20,minHeight:300,overflow:"hidden"}),P=Object(x.b)("img").withConfig({displayName:"Ballotstyle__Logo",componentId:"sc-1rkvp2x-1"})({height:"auto",margin:"20px auto",width:100}),B=Object(x.b)("div").withConfig({displayName:"Ballotstyle__Sheet",componentId:"sc-1rkvp2x-2"})({flex:0,padding:"20px 40px 40px 40px",borderRadius:25,background:y.a.BALLOT_COLOR,boxShadow:"0px 0px 10px rgba(0,0,0,0.1)",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start"}),D=Object(x.b)("h1").withConfig({displayName:"Ballotstyle__Title",componentId:"sc-1rkvp2x-3"})(((i={textAlign:"center",fontSize:y.a.FONT_LARGE,color:y.a.DEFAULT_COLOR})[y.a.MEDIUM_QUERY]={fontSize:y.a.FONT_MEDIUM},i)),S=Object(x.b)("h2").withConfig({displayName:"Ballotstyle__SubHeading",componentId:"sc-1rkvp2x-4"})(((t={width:"100%",fontSize:20,color:y.a.DEFAULT_COLOR})[y.a.MEDIUM_QUERY]={fontSize:y.a.FONT_SMALL},t)),R=Object(x.b)("div").withConfig({displayName:"Ballotstyle__Divider",componentId:"sc-1rkvp2x-5"})({width:"100%",height:function(e){return e.height}}),T=Object(x.b)("input").withConfig({displayName:"Ballotstyle__Input",componentId:"sc-1rkvp2x-6"})((function(e){return Object.assign({},y.a.INPUT_STYLE,{"&:focus":{outline:"none",boxShadow:"invalid"===e.valid?"0 0 3px red":"0 0 3px blue"}})})),M=Object(x.b)("div").withConfig({displayName:"Ballotstyle__Text",componentId:"sc-1rkvp2x-7"})({margin:"10px 5px 0 10px"}),E=Object(x.b)("img").withConfig({displayName:"Ballotstyle__Lock",componentId:"sc-1rkvp2x-8"})({height:12,width:"auto",margin:"0 5px 0 0"}),z=Object(x.b)("button").withConfig({displayName:"Ballotstyle__Vote",componentId:"sc-1rkvp2x-9"})((function(e){return{opacity:e.disabled?.5:1,background:y.a.PRIMARY_COLOR,padding:"10px 20px",borderRadius:5,fontSize:y.a.FONT_SMALL,border:"#000",width:"100%",textAlign:"center",color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",margin:"40px 0 20px 0"}})),F=Object(x.b)("span").withConfig({displayName:"Ballotstyle__Error",componentId:"sc-1rkvp2x-10"})({color:"red",fontSize:12}),Y=function(){var e=O(),a=e[0],n=a.first,i=a.last,t=a.gender,l=a.age,o=a.email,v=a.vote,g=a.referendum,b=e[1];console.log(n);var p={"01":"Aditi Basdeo","02":"Alice Balluku","03":"Amy Jing","04":"Madeline Noftle","05":"Michelle Lim","06":"Jackson Dobbin","07":"Maddy McCarville","09":"Moeez Tahir",10:"Rimsha Ashraf",11:"Sophia Yuan",12:"Abdullah Qassab",13:"Hawa Ahmed"},h=function(){var e=Object(d.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a&&(a=null),a&&a.preventDefault(),![n,i,t,l,o,v,g].some((function(e){return""!==e.value&&"valid"===e.valid}))){e.next=6;break}return e.next=5,Object(u.a)(o.value.toLowerCase(),{age:l.value,email:o.value.toLowerCase(),first:n.value,gender:t.value,last:i.value,referendum:g.value,verified:!1,vote:p[v.value],voteId:v.value});case 5:return e.abrupt("return",Object(c.navigate)("/thanks"));case 6:return e.abrupt("return",b({type:"find-errors"}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j=function(e){if("Enter"===e.key){e.preventDefault();var a=e.target.form,n=Array.prototype.indexOf.call(a,e.target);return n<a.length-1?a.elements[n+1].focus():h()}};return Object(r.jsxs)(L,{children:[Object(r.jsx)(P,{src:"/images/lyac.png",alt:"LYAC logo"}),Object(r.jsxs)(B,{children:[Object(r.jsx)(D,{children:"Young London 2020 Ballot"}),Object(r.jsx)(S,{children:"Personal Information"}),Object(r.jsxs)("form",{onKeyDown:j,onSubmit:h,children:[Object(r.jsx)(T,{valid:n.valid,onKeyDown:j,value:n.value,onChange:function(e){return b({type:"first",value:e.target.value})},placeholder:"Your First Name",autoFocus:!0}),n.error&&Object(r.jsx)(F,{children:n.error}),Object(r.jsx)(T,{valid:i.valid,onKeyDown:j,value:i.value,onChange:function(e){return b({type:"last",value:e.target.value})},placeholder:"Your Last Name"}),i.error&&Object(r.jsx)(F,{children:i.error}),Object(r.jsx)(T,{valid:t.valid,onKeyDown:j,value:t.value,onChange:function(e){return b({type:"gender",value:e.target.value})},placeholder:"Gender"}),t.error&&Object(r.jsx)(F,{children:t.error}),Object(r.jsx)(T,{valid:l.valid,onKeyDown:j,value:l.value,onChange:function(e){return b({type:"age",value:e.target.value})},placeholder:"Age"}),l.error&&Object(r.jsx)(F,{children:l.error}),Object(r.jsx)(T,{valid:o.valid,onKeyDown:j,value:o.value,onChange:function(e){return b({type:"email",value:e.target.value})},placeholder:"Email Address"}),o.error&&Object(r.jsx)(F,{children:o.error}),Object(r.jsx)(R,{height:"10px"}),Object(r.jsx)(S,{children:"Your Vote (One Vote Per Person)"}),Object.entries(p).map((function(e){var a=e[0],n=e[1];return Object(r.jsx)(A,{id:a,name:n,vote:v.value,onChange:function(){return b({type:"vote",value:a})}},a)})),v.error&&Object(r.jsx)(F,{children:v.error}),Object(r.jsx)(R,{height:"5px"}),Object(r.jsx)(S,{children:"Referendum Question"}),Object(r.jsx)(M,{children:"What could London do to improve transportation for youth?"}),Object(r.jsx)(T,{valid:g.valid,value:g.value,onChange:function(e){return b({type:"referendum",value:e.target.value})},placeholder:"Tell us what you think!"}),g.error&&Object(r.jsx)(F,{children:g.error}),Object(r.jsxs)(z,{onClick:h,disabled:[n,i,t,l,o,v,g].some((function(e){return""===e.value&&"valid"!==e.valid})),children:[Object(r.jsx)(E,{src:"/images/lock.png"}),"Cast Your Vote"]})]})]})]})},U=n("VvBc");a.default=function(e){e.navigate;return Object(r.jsx)(U.a,{page:"ballot",crawl:!1,style:{alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(Y,{})})}},X5Zu:function(e){e.exports=JSON.parse('["587","780","825","403","250","604","236","778","204","431","506","709","867","782","902","867","249","343","416","519","647","905","365","548","705","226","289","613","807","437","902","782","438","418","450","367","579","873","514","581","819","306","639","867"]')}}]);
//# sourceMappingURL=component---src-ui-pages-ballot-tsx-7379cbbd89ced46310e8.js.map