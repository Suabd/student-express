(function(){"use strict";var t={8516:function(t,e,n){var d=n(9963),r=n(6252);const s={id:"app"};function u(t,e,n,d,u,a){const i=(0,r.up)("new-student-form"),l=(0,r.up)("student-table"),o=(0,r.up)("student-message");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(i,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(l,{students:u.students,onStudentArrivedOrLeft:a.studentArrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(o,{student:u.mostRecentStudent},null,8,["student"])])}var a=n(3577);const i={key:0,class:"alert alert-danger"},l={class:"card add-student m-2 p-2"},o=(0,r._)("h4",{class:"card-title"},"Add new student",-1),c={class:"form-group"},h=(0,r._)("label",{for:"name"},"Name",-1),p={class:"form-group"},m=(0,r._)("label",{for:"starID"},"Star ID",-1);function f(t,e,n,s,u,f){return(0,r.wg)(),(0,r.iD)("div",null,[u.errors.length>0?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.errors,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t},(0,a.zw)(t),1)))),128))])])):(0,r.kq)("",!0),(0,r._)("div",l,[o,(0,r._)("div",c,[h,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>u.newStudentName=t)},null,512),[[d.nr,u.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",p,[m,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>u.newStarID=t)},null,512),[[d.nr,u.newStarID,void 0,{trim:!0}]])]),(0,r._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>f.addStudent&&f.addStudent(...t))},"Add")])])}n(7658);var w={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("Student name must be entered "),this.newStarID||this.errors.push("StarID must be entered"),0==this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},v=n(3744);const S=(0,v.Z)(w,[["render",f]]);var g=S;const b={key:0},A={key:0,class:"alert alert-info"},D={key:1,class:"alert alert-success"};function O(t,e,n,d,s,u){return n.student.name?((0,r.wg)(),(0,r.iD)("div",b,[n.student.present?((0,r.wg)(),(0,r.iD)("div",A," Welcome, "+(0,a.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",D," Goodbye, "+(0,a.zw)(n.student.name)+". see you later! ",1))])):(0,r.kq)("",!0)}var y={name:"StudentMessage",props:{student:Object}};const _=(0,v.Z)(y,[["render",O]]);var k=_;const C=t=>((0,r.dD)("data-v-5e3e4b17"),t=t(),(0,r.Cn)(),t),j={class:"card student-list m-2 p-2"},L=C((()=>(0,r._)("h4",{class:"card-title"},"Student List",-1))),U={class:"edit-table-toggle form-check"},I=C((()=>(0,r._)("label",{for:"edit-table",class:"form-check-label"}," Edit Table",-1))),x={id:"student-table"},E={class:"table"},Z=C((()=>(0,r._)("th",null,"Name",-1))),J=C((()=>(0,r._)("th",null,"StarID",-1))),B=C((()=>(0,r._)("th",null,"Present?",-1)));function V(t,e,n,s,u,a){const i=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",j,[L,(0,r._)("div",U,[(0,r.wy)((0,r._)("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=t=>u.editTable=t)},null,512),[[d.e8,u.editTable]]),I]),(0,r._)("div",x,[(0,r._)("table",E,[(0,r._)("tr",null,[Z,J,B,(0,r.wy)((0,r._)("th",null,"Delete",512),[[d.F8,u.editTable]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(i,{student:t,key:t.starID,edit:u.editTable,onArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.deleteStudent},null,8,["student","edit","onArrivedOrLeft","onDeleteStudent"])))),128))])])])])}var W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDUlEQVR4nO1Zy2oUQRRtfC1c+lj5+ABXQs+9TlYDVW1w4XZQdOnadWICBg1ksjdhIn6CqAsTQQX/QdEPMLoyiWiqZuhxHiW3cGZ0ppOu6q7uHmEuFAx00XNO1X2ce9vzpja1qaU2Va0ebXKYkQwXJMNnksMnyeG74PiLFv2WHD/qZwwXGgGW1ZJ3xCvamrOlC4LjquDwVXJUNktw+CIY1hoVPJ878P1rl88KBo8Fw5Yt8DEiDFuCY32/4p/JBbwI4JZksJcW+NhiuCvYlZuZAVe+f1xwfOIcOB9zrQ36L7fgr/snBcdXWYOXQxJb9J8uTz438HLoUm9V9dKJ1ATycBt54E1gPSV4uF0UeDkgUbqRCPxPDqclx52iCUgGe4lSLOX5wsHzQTysW4Gn6mhVpIKyat69YwxI7w3K5m7EsNUM/Ivmp89x1QZ8+/WmUt2uCmtLsfvDh/eU6nRU+90bJWdnbEjUjMCTyCKdYgW+bzEk+uD71rYgQXqLRGMsAa0qLVzhb0DaOh0VLi+Og19ejNzbtHC9BvMxloCWxBYBFj6YHwc2chOjJz/Ys3LfLpgDmDfx/+dWL40h4Qw8pwVP42+AGg/rFx9AotfVYN2AR6oJHwxcKLlUjiThCjzXayfehVI2KZrE6Knr2+ilBa8EwzB7AuTzkQTM6oRMSyCVC0UFbERgZ+pCMmkQR4Hv9aKDOCkJZhDEidLoIanSpE5Ip2nUtpAZ5HlnJBjMxRKgodPESgleAjMxx3A7sZg7JFWO3kSbxNxVM1ktGH42nuaRdE0kpw3yfJ+EDXipCcCKEfgJbWjCBiufMyagb4Fj3SrAMl3wyLO1H7PlU5PR1ONu4rkpzSqLJiAYVhOBH5DgsFGg66x5aY36UMHhRf4nD5uqUjmWmsBwuAtbObrNS2fD3ZEhbw6ZCdacnXyU0awyk+zE8FvqgLWamzJcpwLjwF1CyvOUtr28jaojyQ5j7fQv8G2SB9YVNgsjkUVDJ5rbkGanxoM6O/0BjySJ7vLg/Z9nc6QqJ+Iz69Sm5v3/9htwCyTCs1agAgAAAABJRU5ErkJggg==";function N(t,e,n,s,u,i){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,a.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,a.zw)(n.student.name),1),(0,r._)("td",null,(0,a.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",onChange:e[0]||(e[0]=t=>i.arrivedOrLeft(n.student,t.srcElement.checked))},null,32)]),(0,r.wy)((0,r._)("td",null,[(0,r._)("img",{onClick:e[1]||(e[1]=(...t)=>i.deleteStudent&&i.deleteStudent(...t)),src:W})],512),[[d.F8,n.edit]])],2)}var R={name:"studentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("arrived-or-left",t,e)},deleteStudent(){confirm(`Delete ${this.student.name}?`)&&this.$emit("delete-student",this.student)}}};const T=(0,v.Z)(R,[["render",N],["__scopeId","data-v-107bd458"]]);var Y=T,z={name:"StudentTable",components:{StudentRow:Y},emits:["student-arrived-or-left"],props:{students:Array},data(){return{editTable:!1}},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(t){this.$emit("delete-student",t)}}};const M=(0,v.Z)(z,[["render",V],["__scopeId","data-v-5e3e4b17"]]);var Q=M,X={name:"App",components:{NewStudentForm:g,StudentMessage:k,StudentTable:Q},data(){return{students:[],mostRecentStudent:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((t=>alert("Unable to fatch student list")))},newStudentAdded(t){this.$student_api.addStudent(t).then((()=>{this.updateStudents()})).catch((t=>{let e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft(t,e){t.present=e,this.$student_api.updateStudent(t).then((()=>{this.mostRecentStudent=t,this.updateStudents()})).catch((()=>alert("Unable a update student")))},studentDeleted(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.mostRecentStudent={}})).catch((()=>alert("Unable to delete student")))}}};const F=(0,v.Z)(X,[["render",u]]);var H=F,q=n(6154);let K="/api/students";var P={getAllStudents(){return q.Z.get(K).then((t=>t.data))},addStudent(t){return q.Z.post(K,t).then((t=>t.data))},updateStudent(t){return q.Z.patch(`${K}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return q.Z["delete"](`${K}/${t}`).then((t=>t.data))}};let $=(0,d.ri)(H);$.config.globalProperties.$student_api=P,$.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,s){if(!d){var u=1/0;for(o=0;o<t.length;o++){d=t[o][0],r=t[o][1],s=t[o][2];for(var a=!0,i=0;i<d.length;i++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](d[i])}))?d.splice(i--,1):(a=!1,s<u&&(u=s));if(a){t.splice(o--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var o=t.length;o>0&&t[o-1][2]>s;o--)t[o]=t[o-1];t[o]=[d,r,s]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,s,u=d[0],a=d[1],i=d[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var o=i(n)}for(e&&e(d);l<u.length;l++)s=u[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(o)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(8516)}));d=n.O(d)})();
//# sourceMappingURL=app.6b2450a6.js.map