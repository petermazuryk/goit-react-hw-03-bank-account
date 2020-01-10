(this["webpackJsonpgoit-react-hw-03-bank-account"]=this["webpackJsonpgoit-react-hw-03-bank-account"]||[]).push([[0],{16:function(t,e,n){t.exports={controls:"Controls_controls__1n9H8"}},17:function(t,e,n){t.exports={balance:"Balance_balance__31-S1"}},18:function(t,e,n){t.exports={history:"TransactionHistory_history__CT2TH"}},19:function(t,e,n){t.exports={dashboard:"Dashboard_dashboard__p4DRQ"}},20:function(t,e,n){t.exports=n(37)},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(2),c=n.n(o),l=n(13),s=n(14),i=n(7),u=n(8),p=n(10),m=n(9),b=n(11),h=n(12),d=n.n(h),f=n(16),y=n.n(f),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={amount:""},n.handleInput=function(t){var e=t.target.value;n.setState({amount:Number(e)})},n.handleClick=function(t){"deposit"===t.target.name?n.props.onDeposit(Number(n.state.amount)):n.props.onWithdraw(Number(n.state.amount)),n.setState({amount:""})},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("section",{className:y.a.controls},r.a.createElement("input",{type:"number",name:"amount",id:this.props.amountId,onChange:this.handleInput,value:this.state.amount}),r.a.createElement("button",{type:"button",name:"deposit",onClick:this.handleClick},"Deposit"),r.a.createElement("button",{type:"button",name:"withdraw",onClick:this.handleClick},"Withdraw"))}}]),e}(a.Component),E=n(17),g=n.n(E),v=function(t){var e=t.withdraw,n=t.deposit,a=t.balance;return r.a.createElement("section",{className:g.a.balance},r.a.createElement("span",null,e,"$"),r.a.createElement("span",null,n,"$"),r.a.createElement("span",null,"Balance: ",a,"$"))},w=n(18),j=n.n(w),D=function(t){var e=t.allTransactions;return r.a.createElement("table",{className:j.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){var e=t.id,n=t.type,a=t.amount,o=t.date;return r.a.createElement("tr",{key:e},r.a.createElement("td",null,n),r.a.createElement("td",null,a,"$"),r.a.createElement("td",null,o))}))))},k=n(5),S=(n(33),function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){console.log(n)}}),_=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){console.log("err")}return null},I=n(19),C=n.n(I);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0},n.generateIds={amountInput:d.a.generate()},n.handleDeposit=function(t){if(t<=0)k.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else{var e={id:d.a.generate(),type:"income",amount:t,date:(new Date).toLocaleString()};n.setState((function(n){return{balance:n.balance+t,transactions:[].concat(Object(s.a)(n.transactions),[e])}}))}},n.handleWithdraw=function(t){if(t>n.state.balance)k.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else if(t<=0)k.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else{var e={id:d.a.generate(),type:"expenses",amount:t,date:(new Date).toLocaleString()};n.setState((function(n){return{balance:n.balance-t,transactions:[].concat(Object(s.a)(n.transactions),[e])}}))}},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=_("transactions"),e=_("balance");t&&this.setState({balance:e,transactions:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state,a=n.transactions,r=n.balance;e.transactions!==a&&(S("transactions",a),S("balance",r))}},{key:"render",value:function(){var t=this.state,e=t.transactions,n=t.balance,a=this.generateIds.amountInput,o=e.reduce((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,Object(l.a)({},e.type,e.amount+t[e.type]))}),{income:0,expenses:0});return r.a.createElement("div",{className:C.a.dashboard},r.a.createElement(O,{amountId:a,onDeposit:this.handleDeposit,onWithdraw:this.handleWithdraw}),r.a.createElement(v,{withdraw:o.expenses,deposit:o.income,balance:n}),r.a.createElement(D,{allTransactions:e}),r.a.createElement(k.a,null))}}]),e}(a.Component),P=function(){return r.a.createElement(x,null)};n(36);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1dcf62c0.chunk.js.map