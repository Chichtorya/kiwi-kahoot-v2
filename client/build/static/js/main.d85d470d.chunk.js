(this["webpackJsonpkahoot-clone"]=this["webpackJsonpkahoot-clone"]||[]).push([[0],{159:function(e,t,s){},160:function(e,t,s){},167:function(e,t,s){},171:function(e,t,s){},176:function(e,t){},180:function(e,t){},182:function(e,t){},192:function(e,t){},194:function(e,t){},221:function(e,t){},223:function(e,t){},224:function(e,t){},229:function(e,t){},231:function(e,t){},250:function(e,t){},262:function(e,t){},265:function(e,t){},305:function(e,t){},308:function(e,t,s){},309:function(e,t,s){},310:function(e,t,s){},311:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s(161),i=s.n(a),c=(s(167),s(6)),r=s(7),o=s(8),l=s(9),d=s(317),u=s(318),j=s(5),h=s(314),b=s(13),m=s(36),O={quiz:{},nickname:"",selectedPin:0,quizToEdit:{},iduser:null,loggedIn:!1},p="SELECTED_QUIZ",x="NICKNAME",v="SELECTED_PIN",g="QUIZ_TO_EDIT",w="SET_IDUSER",f="GET_IDUSER";function N(e){return{type:g,payload:e}}s(171);var q=s.p+"static/media/Kwizz.d5e2e8d0.svg",k=s.p+"static/media/Kwizzard--test-pixel.94c8341f.svg",y=s.p+"static/media/gameer.e2489b75.png",z=s.p+"static/media/white-star.149bd8da.svg",C=s(0);function S(){return Object(C.jsx)("div",{className:"back ",children:Object(C.jsxs)("div",{className:"container grid1",children:[Object(C.jsxs)("div",{className:"topl",children:[Object(C.jsx)("img",{className:"star",src:z,alt:""}),Object(C.jsx)("img",{className:"star1",src:z,alt:""}),Object(C.jsx)("img",{className:"star2",src:z,alt:""})]}),Object(C.jsx)("img",{className:"star1 middle",src:z,alt:""}),Object(C.jsx)("img",{className:"star2 middle",src:z,alt:""}),Object(C.jsxs)("div",{className:"botm-right",children:[Object(C.jsx)("img",{className:"star3",src:z,alt:""}),Object(C.jsx)("img",{className:"star",src:z,alt:""}),Object(C.jsx)("img",{className:"star",src:z,alt:""})]})]})})}s(173);var Q=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={pin:"",nickname:"",toggle:!1},e.handleInput=e.handleInput.bind(Object(j.a)(e)),e.handleToggle=e.handleToggle.bind(Object(j.a)(e)),e.handleNicknameInput=e.handleNicknameInput.bind(Object(j.a)(e)),e.handleGo=e.handleGo.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState({pin:e.target.value})}},{key:"handleToggle",value:function(){this.props.selectedPin(this.state.pin),this.setState({toggle:!0})}},{key:"handleNicknameInput",value:function(e){this.setState({nickname:e.target.value})}},{key:"handleGo",value:function(){this.props.handleNickname(this.state.nickname)}},{key:"handleGo1",value:function(){}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"component-container",children:[Object(C.jsx)("div",{children:Object(C.jsx)(S,{})}),this.state.toggle?Object(C.jsxs)("div",{className:"landing-wrapper",children:[Object(C.jsx)("div",{className:"logo-container",children:Object(C.jsx)("img",{src:q,alt:"Kwizz logo",className:"logo"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{type:"text",value:this.state.nickname,placeholder:"Nickname",onChange:this.handleNicknameInput,className:"input-user"}),Object(C.jsx)(h.a,{to:"/player",children:Object(C.jsx)("button",{onClick:this.handleGo,className:"btn-enter",children:"OK, go!"})})]})]}):Object(C.jsxs)("div",{className:"landing-wrapper",children:[Object(C.jsx)("div",{className:"logo-container",children:Object(C.jsx)("img",{src:q,alt:"Kwizz logo",className:"logo"})}),Object(C.jsxs)("div",{className:"player-input-wrapper",children:[Object(C.jsx)("input",{type:"number",value:this.state.pin,placeholder:"Kwizz! PIN",onChange:this.handleInput,className:"input-user"}),Object(C.jsx)("button",{onClick:this.handleToggle,className:"btn-enter",children:"Enter"})]})]}),Object(C.jsxs)("div",{className:"logo-host",children:[Object(C.jsx)("img",{src:y,alt:"",className:"kwizzard"}),Object(C.jsx)("div",{className:"btn-host",children:Object(C.jsx)(h.a,{to:"/change",children:Object(C.jsx)("button",{id:"atag",children:"Role: Player"})})})]})]})}}]),s}(n.Component),I=Object(b.b)(null,{handleNickname:function(e){return{type:x,payload:e}},selectedPin:function(e){return{type:v,payload:e}}})(Q),A=s(11),T=s.n(A),E=s(315),P=(s(44),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={id:"",quizzes:[],redirect:!1},n.setRedirect=n.setRedirect.bind(Object(j.a)(n)),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.iduser;this.setState({id:e}),this.getQuizzes(e)}},{key:"getQuizzes",value:function(e){var t=this;T.a.get("http://localhost:3030/getQuizzes",{params:{idu:e}}).then((function(e){t.setState({quizzes:e.data})}))}},{key:"setRedirect",value:function(e){this.props.selectedQuiz(e),this.setState({redirect:!0})}},{key:"deleteQuiz",value:function(e){var t=this;T.a.delete("http://localhost:3030/deletequiz/",{params:{idquiz:e}}).then((function(e){200===e.status?t.getQuizzes(t.state.id):alert("Something went wrong :(")}))}},{key:"render",value:function(){var e=this;if(this.state.redirect)return Object(C.jsx)(E.a,{to:"/game"});var t=this.state.quizzes.map((function(t){return Object(C.jsxs)("div",{className:"kwizz-container",children:[Object(C.jsx)("h1",{className:"kwizz-info kwizz-title",children:t.quiz_name}),Object(C.jsx)("p",{className:"kwizz-info kwizz-desc",children:t.info}),Object(C.jsxs)("div",{className:"btn-container",children:[Object(C.jsx)("button",{onClick:function(){return e.setRedirect(t)},className:"btn-play",children:"Play"}),Object(C.jsx)("button",{onClick:function(){return e.deleteQuiz(t.id)},className:"btn-play",children:"Delete"}),Object(C.jsx)(h.a,{to:"/host/questions",children:Object(C.jsx)("button",{onClick:function(){return e.props.editingQuiz(t)},className:"btn-play",children:"Edit"})})]})]},t.id)}));this.state.id;return Object(C.jsxs)("div",{className:"mapped-container",children:[Object(C.jsx)("div",{className:"host-logo-container",children:Object(C.jsx)("img",{src:q,alt:"kwizz logo",className:"logo"})}),Object(C.jsx)("div",{className:"newKwizz",children:Object(C.jsx)(h.a,{to:"/host/newquiz",className:"btn-link",children:Object(C.jsx)("button",{className:"btn-new",children:"New Kwizz!"})})}),Object(C.jsx)("div",{className:"mapped-Kwizzes-container",children:t}),Object(C.jsxs)("div",{className:"logo-host",children:[Object(C.jsx)("img",{src:k,alt:"",className:"kwizzard"}),Object(C.jsx)("div",{className:"btn-host",children:Object(C.jsx)(h.a,{to:"/change",children:Object(C.jsxs)("button",{id:"atag",children:["Role: Host   ",Object(C.jsxs)("p",{children:["ID: ",this.props.iduser]})]})})})]})]})}}]),s}(n.Component)),D=Object(b.b)((function(e){return{iduser:e.iduser,pin:e.selectedPin,quiz:e.quizToEdit}}),(function(e){return{selectedQuiz:function(t){return e({type:p,payload:t})},editingQuiz:function(t){return e(N(t))}}}))(P),K=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={quiz_name:"",info:"",redirect:!1},e.handleInput=e.handleInput.bind(Object(j.a)(e)),e.handleTextarea=e.handleTextarea.bind(Object(j.a)(e)),e.createQuiz=e.createQuiz.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState({quiz_name:e.target.value})}},{key:"handleTextarea",value:function(e){this.setState({info:e.target.value})}},{key:"createQuiz",value:function(){var e=this;T.a.post("http://localhost:3030/newquiz",{idcreater:this.props.idcreater,name:this.state.quiz_name,info:this.state.info}).then((function(t){e.props.editingQuiz(t.data[0]),e.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?Object(C.jsx)(E.a,{to:"/host/questions"}):Object(C.jsx)("div",{className:"mapped-container",children:Object(C.jsxs)("div",{className:"new-kwizz-form",children:[Object(C.jsx)("label",{className:"kwizz-desc kwizz-info",children:"New Kwizz Title"}),Object(C.jsx)("input",{className:"title-input",onChange:this.handleInput,type:"text"}),Object(C.jsx)("label",{className:"kwizz-desc kwizz-info",children:"Description"}),Object(C.jsx)("textarea",{className:"desc-input",onChange:this.handleTextarea}),Object(C.jsx)("div",{className:"kwizz-info ok-go-div",children:Object(C.jsx)("button",{onClick:this.createQuiz,className:"btn-play  ok-go",children:"Ok, Go"})})]})})}}]),s}(n.Component);var B=Object(b.b)((function(e){return{idcreater:e.iduser}}),{editingQuiz:N})(K),M=s(49),G=s(48),U=s.n(G),_=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={time:{},seconds:20},e.timer=0,e.startTimer=e.startTimer.bind(Object(j.a)(e)),e.countDown=e.countDown.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"secondsToTime",value:function(e){var t=e%3600,s=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(s)}}},{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e}),this.startTimer()}},{key:"startTimer",value:function(){0==this.timer&&(this.timer=setInterval(this.countDown,1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0==e&&clearInterval(this.timer)}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"timer",children:["Seconds Left: ",this.state.time.s]})}}]),s}(n.Component),L=(s(46),s.p+"static/media/triangle.f38fff2e.svg"),R=s.p+"static/media/diamond.63ee4522.svg",W=s.p+"static/media/square.841d434e.svg",Y=s.p+"static/media/circle.fefd1946.svg";function J(e){return Object(C.jsxs)("div",{className:"questions-container",children:[Object(C.jsx)(_,{}),Object(C.jsx)("h1",{className:"player-name",children:e.question}),Object(C.jsxs)("div",{className:"questions-grid",children:[Object(C.jsxs)("div",{className:"question q1",children:[Object(C.jsx)("div",{className:"shape-container",children:Object(C.jsx)("img",{src:L,alt:"",className:"shape-question"})}),Object(C.jsx)("p",{id:"player-join",children:e.answer1})]}),Object(C.jsxs)("div",{className:"question q2",children:[Object(C.jsx)("div",{className:"shape-container",children:Object(C.jsx)("img",{src:R,alt:"",className:"shape-question"})}),Object(C.jsx)("p",{id:"player-join",children:e.answer2})]}),Object(C.jsxs)("div",{className:"question q3",children:[Object(C.jsx)("div",{className:"shape-container",children:Object(C.jsx)("img",{src:W,alt:"",className:"shape-question"})}),Object(C.jsx)("p",{id:"player-join",children:e.answer3})]}),Object(C.jsxs)("div",{className:"question q4",children:[Object(C.jsx)("div",{className:"shape-container",children:Object(C.jsx)("img",{src:Y,alt:"",className:"shape-question"})}),Object(C.jsx)("p",{id:"player-join",children:e.answer4})]})]})]})}var Z=s.p+"static/media/jerm.b0086623.png",H=s.p+"static/media/jerm-zoom.e0bd5cb8.png";s(89);function $(){return Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("img",{src:Z,height:"400px",className:"jeremy"}),Object(C.jsx)("img",{src:H,height:"550px",className:"zoom"})]})}function F(e){return Object(C.jsxs)("div",{className:"game-over",children:[Object(C.jsx)($,{}),Object(C.jsx)("h1",{className:"leaderBoard-title",children:"Game Over"}),Object(C.jsx)("br",{}),Object(C.jsxs)("h2",{className:"leaderBoard",children:["1st Place: ",e.leaderboard[0].name]}),Object(C.jsxs)("h2",{className:"leaderBoard",children:["2nd Place: ",e.leaderboard[1].name]}),Object(C.jsxs)("h2",{className:"leaderBoard",children:["Last Place: ",e.leaderboard.pop().name]}),Object(C.jsx)("br",{}),Object(C.jsx)(h.a,{to:"/host",children:Object(C.jsx)("button",{className:"btn-newGame",children:"Start a new Game?"})})]})}function V(e){return Object(C.jsx)("div",{children:e.lastQuestion?Object(C.jsx)(F,{leaderboard:e.leaderboard}):Object(C.jsxs)("div",{className:"question-over-wrapper",children:[Object(C.jsx)("div",{className:"center",children:Object(C.jsx)("h1",{className:"player-name",children:"Question Over"})}),Object(C.jsx)("div",{className:"center",children:Object(C.jsx)("button",{className:"btn-new",onClick:e.nextQuestion,children:"Next Question"})})]})})}var X=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={pin:0,timer:20,isLive:!1,questionOver:!1,gameOver:!1,currentQuestion:0,questions:[],players:[],playerCounter:0,leaderBoard:[]},e.questionOver=e.questionOver.bind(Object(j.a)(e)),e.nextQuestion=e.nextQuestion.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;T.a.get("http://localhost:3030/getquestions",{params:{idquiz:this.props.quiz.id}}).then((function(t){e.setState({questions:t.data})}));this.socket=U()("http://127.0.0.1:3030"),this.generatePin(),this.socket.on("room-joined",(function(t){e.addPlayer(t.name,t.id)})),this.socket.on("player-answer",(function(t){e.submitAnswer(t.name,t.answer)}))}},{key:"generatePin",value:function(){var e=Math.floor(9e3*Math.random(),1e4);this.setState({pin:e}),this.socket.emit("host-join",{pin:e})}},{key:"startGame",value:function(){this.state.players[0]?(this.nextQuestion(),this.setState({isLive:!0})):alert("You need at least 3 players to start")}},{key:"questionOver",value:function(){var e=this.state,t=e.pin,s=e.players;this.socket.emit("question-over",{pin:t});var n=Object(M.a)(s);n.forEach((function(e){e.qAnswered=!1,e.answeredCorrect=!1})),this.getLeaderBoard(),this.setState({questionOver:!0,currentQuestion:this.state.currentQuestion+1,timer:20,players:n})}},{key:"timeKeeper",value:function(){var e=20,t=Object(M.a)(this.state.players);function s(){var s=this;return e>0?function(){var n=0;t.forEach((function(e){e.qAnswered&&++n})),t.forEach((function(t){t.answeredCorrect&&(t.score+=10*e+1e3,s.socket.emit("sent-info",{id:t.id,score:t.score,answeredCorrect:t.answeredCorrect}))})),n===t.length&&(e=0),e-=1}():(clearInterval(n),void s.questionOver())}this.setState({questionOver:!1}),s=s.bind(this);var n=setInterval((function(){s()}),1e3);return n}},{key:"nextQuestion",value:function(){var e=this.state,t=e.pin,s=e.questions,n=e.currentQuestion;this.timeKeeper(),n===s.length?this.setState({gameOver:!0}):this.socket.emit("next-question",{pin:t}),this.setState({questionOver:!1})}},{key:"addPlayer",value:function(e,t){var s={id:t,name:e,score:0,qAnswered:!1,answeredCorrect:!1},n=Object(M.a)(this.state.players);n.push(s),this.setState({players:n,playerCounter:this.state.playerCounter+1})}},{key:"submitAnswer",value:function(e,t){var s=this.state.players.filter((function(t){return t.name===e})),n=this.state.players.filter((function(t){return t.name!==e}));s[0].qAnswered=!0,t===this.state.questions[this.state.currentQuestion].correctanswer?s[0].answeredCorrect=!0:s[0].answeredCorrect=!1,n.push(s[0]),this.setState({players:n})}},{key:"getLeaderBoard",value:function(){var e=Object(M.a)(this.state.players).sort((function(e,t){return t.score-e.score}));this.setState({leaderBoard:e})}},{key:"render",value:function(){var e=this,t=this.state,s=t.pin,n=t.questions,a=t.currentQuestion,i=t.isLive,c=t.questionOver,r=t.gameOver,o=this.state.players.map((function(e){return Object(C.jsx)("p",{className:"player-name",children:e.name},e.id)}));return Object(C.jsxs)("div",{className:"component-container",children:[Object(C.jsxs)("div",{className:"pin",children:[Object(C.jsx)("p",{id:"player-pin",children:"Kwizz Pin"}),Object(C.jsx)("h1",{children:s})]}),i||c||r?!i||c||r?Object(C.jsx)(V,{nextQuestion:this.nextQuestion,leaderboard:this.state.leaderBoard,lastQuestion:this.state.questions.length===this.state.currentQuestion}):Object(C.jsx)(J,{question:n[a].question,answer1:n[a].answer1,answer2:n[a].answer2,answer3:n[a].answer3,answer4:n[a].answer4,questionOver:this.questionOver}):Object(C.jsxs)("div",{className:"btn-players",children:[Object(C.jsx)("button",{onClick:function(){return e.startGame()},className:"btn-play",children:"Play"}),Object(C.jsx)("p",{className:"player-name",id:"player-join",children:"Players joined!"}),o]})]})}}]),s}(n.Component);var ee=Object(b.b)((function(e){return{quiz:e.quiz}}))(X),te=(s(159),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={questions:[],quiz:{},newName:"",newInfo:"",toggle:!1},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.setState({quiz:this.props.quizToEdit}),this.getQuestions()}},{key:"getQuestions",value:function(){var e=this,t=this.props.quizToEdit.id;T.a.get("http://localhost:3030/getquestions",{params:{idquiz:t}}).then((function(t){e.setState({questions:t.data})}))}},{key:"deleteQuestion",value:function(e){var t=this;T.a.delete("http://localhost:3030/deletequestion/",{params:{idquiz:e}}).then((function(e){t.getQuestions()}))}},{key:"displayEdit",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"updateQuiz",value:function(){var e=this,t=this.state,s=t.newName,n=t.newInfo,a=t.quiz;this.setState({toggle:!this.state.toggle}),s&&n?T.a.put("http://localhost:3030/updatequiz",{newName:s,newInfo:n,id:a.id}).then((function(t){e.handleUpdatedQuiz(a.id)})):alert("All fields must be completed")}},{key:"handleUpdatedQuiz",value:function(e){var t=this;T.a.get("http://localhost:3030/getquiz",{params:{id:this.props.match.params.id}}).then((function(e){console.log(e.status),t.props.history.push("/host")}))}},{key:"render",value:function(){var e=this,t=this.state.questions;if(t)var s=t.map((function(t){return Object(C.jsxs)("div",{className:"question-container",children:[Object(C.jsx)("h1",{children:t.question}),Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:["1: ",t.answer1]}),Object(C.jsxs)("li",{children:["2: ",t.answer2]}),Object(C.jsxs)("li",{children:["3: ",t.answer3]}),Object(C.jsxs)("li",{children:["4: ",t.answer4]}),Object(C.jsxs)("li",{children:["Correct: ",t.correctanswer]})]}),Object(C.jsxs)("div",{className:"btn-container-edit",children:[Object(C.jsx)(h.a,{to:"/host/editquestion/".concat(t.id),children:Object(C.jsx)("button",{onClick:function(){return console.log("quesid",t.id)},className:"btn-play",children:"Edit"})}),Object(C.jsx)("button",{onClick:function(){return e.deleteQuestion(t.id)},className:"btn-play",children:"Delete"})]})]},t.id)}));return Object(C.jsxs)("div",{className:"mapped-container",children:[this.state.toggle?Object(C.jsxs)("div",{className:"toggle-container",children:[Object(C.jsx)("div",{className:"btn-done-div",children:Object(C.jsx)(h.a,{to:"/host",children:Object(C.jsx)("button",{className:"btn-play btn-done",children:"Done"})})}),Object(C.jsxs)("div",{className:"kwizz-container-edit",children:[Object(C.jsx)("input",{placeholder:this.state.quiz.quiz_name,onChange:function(t){return e.setState({newName:t.target.value})},className:"title-input input-edit "}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{placeholder:this.state.quiz.info,onChange:function(t){return e.setState({newInfo:t.target.value})},className:"desc-input input-edit"}),Object(C.jsxs)("div",{className:"btn-container-edit",children:[Object(C.jsx)("button",{onClick:function(){return e.updateQuiz()},className:"btn-play",children:"Save"}),Object(C.jsx)("button",{onClick:function(){return e.displayEdit()},className:"btn-play",children:"Cancel"})]})]})]}):Object(C.jsxs)("div",{className:"toggle-container",children:[Object(C.jsx)("div",{className:"btn-done-div",children:Object(C.jsx)(h.a,{to:"/host",children:Object(C.jsx)("button",{className:"btn-play btn-done",children:"Done"})})}),Object(C.jsxs)("div",{className:"kwizz-container-edit",children:[Object(C.jsx)("h1",{className:"kwizz-title",children:this.state.quiz.quiz_name}),Object(C.jsx)("br",{}),Object(C.jsx)("p",{className:"kwizz-info kwizz-desc",children:this.state.quiz.info}),Object(C.jsx)("div",{className:"btn-update",children:Object(C.jsx)("button",{onClick:function(){return e.displayEdit()},className:"btn-play",children:"Update"})})]})]}),Object(C.jsxs)("div",{className:"question-edit-wrapper",children:[Object(C.jsx)("div",{className:"add-quesiton-div",children:Object(C.jsx)(h.a,{to:"/host/newquestion/".concat(this.props.quizToEdit.id),className:"btn-link",children:Object(C.jsx)("button",{className:"btn-new",id:"add-question-btn",children:"Add Question"})})}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("div",{className:"mapped-questions",children:s})]})]})}}]),s}(n.Component));var se=Object(b.b)((function(e){return{quizToEdit:e.quizToEdit}}),(function(e){return{editingQuiz:function(t){return e(N(t))}}}))(te),ne=(s(160),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={question:"",answer1:"",answer2:"",answer3:"",answer4:"",correctAnswer:0,redirect:!1},e.addQuestion=e.addQuestion.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"addQuestion",value:function(){var e=this,t=this.state,s=t.question,n=t.answer1,a=t.answer2,i=t.answer3,c=t.answer4,r=t.correctAnswer,o=this.props.match.params.id;if(s&&n&&a&&i&&c&&r){T.a.post("http://localhost:3030/newquestion",{question:s,answer1:n,answer2:a,answer3:i,answer4:c,correctAnswer:r,id:o}).then((function(t){200===t.status?e.setState({redirect:!0}):alert("Something went wrong :(")}))}else alert("All fields must be completed")}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(C.jsx)(E.a,{to:"/host/questions"}):Object(C.jsxs)("div",{className:"background",children:[Object(C.jsx)(h.a,{to:"/host/questions",className:"btn-go-back",children:"go back pls :)"}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-question-wrapper",children:[Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Question"}),Object(C.jsx)("input",{onChange:function(t){return e.setState({question:t.target.value})}})]}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer1"}),Object(C.jsx)("input",{onChange:function(t){return e.setState({answer1:t.target.value})},height:"100"})]}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer2"}),Object(C.jsx)("input",{onChange:function(t){return e.setState({answer2:t.target.value})}})]}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer3"}),Object(C.jsx)("input",{onChange:function(t){return e.setState({answer3:t.target.value})}})]}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer4"}),Object(C.jsx)("input",{onChange:function(t){return e.setState({answer4:t.target.value})}})]}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Correct answer"}),Object(C.jsx)("input",{type:"number",min:"1",max:"4",onChange:function(t){return e.setState({correctAnswer:t.target.value})}})]}),Object(C.jsx)("div",{className:"next",children:Object(C.jsx)("button",{onClick:this.addQuestion,className:"btn-new",children:"Next"})})]})]})}}]),s}(n.Component));function ae(e){return Object(C.jsxs)("div",{className:"answer-container",children:[Object(C.jsx)("div",{className:"q1",onClick:function(){return e.submitAnswer(1)},children:Object(C.jsx)("img",{src:L,alt:"",className:"shape"})}),Object(C.jsx)("div",{className:"q2",onClick:function(){return e.submitAnswer(2)},children:Object(C.jsx)("img",{src:R,alt:"",className:" shape"})}),Object(C.jsx)("div",{className:"q3",onClick:function(){return e.submitAnswer(3)},children:Object(C.jsx)("img",{src:W,alt:"",className:"shape"})}),Object(C.jsx)("div",{className:"q4",onClick:function(){return e.submitAnswer(4)},children:Object(C.jsx)("img",{src:Y,alt:"",className:"shape"})})]})}var ie=Object(C.jsx)("svg",{className:"path check",xmlns:"http://www.w3.org/2000/svg",width:"360",height:"279.8",fill:"none",viewBox:"0 0 360 279.8",children:Object(C.jsx)("switch",{children:Object(C.jsx)("g",{children:Object(C.jsx)("path",{className:"st0",id:"fill",fill:"none",d:"M26.9,128.8c0,0,101.2,102.1,102.1,102.1s204-204,204-204"})})})});function ce(){return Object(C.jsx)("div",{className:"check-wrapper",children:ie})}var re=Object(C.jsx)("svg",{className:"path xmark",xmlns:"http://www.w3.org/2000/svg",width:"360",height:"279.8",viewBox:"0 0 360 279.8",children:Object(C.jsx)("switch",{children:Object(C.jsxs)("g",{children:[Object(C.jsx)("line",{className:"st0",x1:"78",y1:"37.9",x2:"282",y2:"241.9"}),Object(C.jsx)("line",{className:"st0",x1:"282",y1:"37.9",x2:"78",y2:"241.9"})]})})});function oe(){return Object(C.jsx)("div",{className:"check-wrapper",children:re})}function le(e){return Object(C.jsx)("div",{children:e.answeredCorrect?Object(C.jsxs)("div",{className:"answer correct",children:[Object(C.jsx)("h1",{className:"answer-indicator",children:"Correct"}),Object(C.jsx)(ce,{})]}):Object(C.jsxs)("div",{className:"answer incorrect",children:[Object(C.jsx)("h1",{className:"answer-indicator",children:"Incorrect"}),Object(C.jsx)(oe,{})]})})}var de=s.p+"static/media/load-circle-outline.f20b64cf.svg",ue=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={pinCorrect:!1,gameStarted:!1,questionOver:!1,answerSubmitted:!1,answeredCorrect:!1,score:0},e.submitAnswer=e.submitAnswer.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.socket=U()("http://127.0.0.1:3030"),this.socket.emit("player-joined",this.props.selectedPin),this.socket.emit("player-add",this.props),this.socket.on("room-joined",(function(e){console.log("Quiz data: "+e)})),this.socket.on("question-over",(function(){e.setState({questionOver:!0})})),this.socket.on("next-question",(function(){console.log("hit"),e.setState({gameStarted:!0,questionOver:!1,answerSubmitted:!1,answeredCorrect:!1})})),this.socket.on("sent-info",(function(t){e.setState({answeredCorrect:t.answeredCorrect,score:e.state.score+t.score})}))}},{key:"submitAnswer",value:function(e){this.socket.emit("question-answered",{name:this.props.nickname,answer:e,pin:this.props.selectedPin}),this.setState({answerSubmitted:!0})}},{key:"render",value:function(){var e=this.state,t=e.gameStarted,s=e.questionOver,n=e.answerSubmitted;return Object(C.jsxs)("div",{className:"player-container",children:[Object(C.jsxs)("div",{className:"status-bar",children:[Object(C.jsxs)("p",{className:"player-info",id:"pin",children:["PIN: ",this.props.selectedPin]}),Object(C.jsx)(h.a,{to:"/",children:Object(C.jsx)("button",{children:"another game ?"})})]}),t||s?!t||s||n?t&&!s&&n?Object(C.jsxs)("div",{className:"waiting-for-results",children:[Object(C.jsx)("p",{className:"answer-indicator",id:"too-fast",children:"Did You answer too fast????"}),Object(C.jsx)("img",{src:de,alt:"",className:"load-circle"})]}):Object(C.jsx)(le,{answeredCorrect:this.state.answeredCorrect}):Object(C.jsx)(ae,{submitAnswer:this.submitAnswer}):Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{children:["You're in!",Object(C.jsx)("br",{}),"Do you see your nickname on the screen?"]}),Object(C.jsxs)("div",{className:"answer-container",children:[Object(C.jsx)("div",{className:" q-blank q"}),Object(C.jsx)("div",{className:" q-blank q"}),Object(C.jsx)("div",{className:" q-blank q"}),Object(C.jsx)("div",{className:" q-blank q"})]})]}),Object(C.jsxs)("div",{className:"status-bar",children:[Object(C.jsx)("p",{className:"player-info",children:this.props.nickname}),Object(C.jsx)("div",{className:t&&!s&&n?"status-bar-hidden":"status-bar-score",children:this.state.score})]})]})}}]),s}(n.Component);var je=Object(b.b)((function(e){return{selectedPin:e.selectedPin,nickname:e.nickname}}))(ue),he=s(47),be=(s(312),Object(he.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object.assign({},e,{quiz:t.payload});case x:return Object.assign({},e,{nickname:t.payload});case v:return Object.assign({},e,{selectedPin:t.payload});case g:return Object.assign({},e,{quizToEdit:t.payload});case w:return Object(m.a)(Object(m.a)({},e),{},{loggedIn:!0,iduser:t.payload});case f:return Object.assign({},e,{iduser:t.payload});default:return e}}))),me=be;s(308);s(92).config();var Oe=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={username:"",password:""},e.change=e.change.bind(Object(j.a)(e)),e}return Object(r.a)(s,[{key:"change",value:function(){var e=this,t=this.state,s=t.username,n=t.password;s&&n?T.a.post("http://localhost:3030/change",{username:s,password:n}).then((function(t){var s=t.data,n=s.message,a=s.id;"ok"===n?e.props.setIdUser(a):console.log("k co data")})).catch((function(e){console.error(e),alert("Something went wrong :(")})):alert("Please enter all fields")}},{key:"render",value:function(){var e=this;return this.props.loggedIn?Object(C.jsx)(E.a,{to:"/host"}):Object(C.jsx)("div",{className:"login-wrapper",children:Object(C.jsxs)("div",{className:"login-form",children:[Object(C.jsx)("h1",{children:"Login"}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Username:"}),Object(C.jsx)("input",{type:"text",onChange:function(t){return e.setState({username:t.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Password:"}),Object(C.jsx)("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})}})]}),Object(C.jsx)("button",{onClick:this.change,children:"Login"})]})})}}]),s}(n.Component);var pe=Object(b.b)((function(e){return{iduser:e.iduser,loggedIn:e.loggedIn}}),(function(e){return{setIdUser:function(t){return e({type:w,payload:t})}}}))(Oe),xe=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={id:0,question:"",answer1:"",answer2:"",answer3:"",answer4:"",correctAnswer:""},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"getQuestion",value:function(){var e=this;T.a.get("http://localhost:3030/getquestion",{params:{id:this.props.match.params.id}}).then((function(t){var s=t.data[0];console.log(s),console.log(s.id),e.setState({id:s.id,question:s.question,answer1:s.answer1,answer2:s.answer2,answer3:s.answer3,answer4:s.answer4,correctAnswer:s.correctanswer,redirect:!1})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}},{key:"updateQuestion",value:function(){var e=this,t=this.state,s=t.question,n=t.answer1,a=t.answer2,i=t.answer3,c=t.answer4,r=t.correctAnswer,o=t.id;s&&n&&a&&i&&c&&r&&o?T.a.put("http://localhost:3030/updatequestion",{question:s,answer1:n,answer2:a,answer3:i,answer4:c,correctAnswer:r,id:o}).then((function(t){200===t.status?e.setState({redirect:!0}):alert("Something went wrong :(")})):alert("All fields must be completed")}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(C.jsx)(E.a,{to:"/host/questions"}):Object(C.jsxs)("div",{className:"mapped-container",children:[Object(C.jsx)(h.a,{to:"/host/questions",className:"btn-link",children:"go back"}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Question"}),Object(C.jsx)("input",{value:this.state.question,onChange:function(t){return e.setState({question:t.target.value})}})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer1"}),Object(C.jsx)("input",{value:this.state.answer1,onChange:function(t){return e.setState({answer1:t.target.value})}})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer2"}),Object(C.jsx)("input",{value:this.state.answer2,onChange:function(t){return e.setState({answer2:t.target.value})}})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer3"}),Object(C.jsx)("input",{value:this.state.answer3,onChange:function(t){return e.setState({answer3:t.target.value})}})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Answer4"}),Object(C.jsx)("input",{value:this.state.answer4,onChange:function(t){return e.setState({answer4:t.target.value})}})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"new-q",children:[Object(C.jsx)("label",{children:"Correct Answer"}),Object(C.jsx)("input",{type:"number",value:this.state.correctAnswer,onChange:function(t){return e.setState({correctAnswer:t.target.value})}}),Object(C.jsx)("button",{onClick:function(){return e.updateQuestion()},children:"Update"})]})]})}}]),s}(n.Component),ve=(s(309),s(310),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)(u.a,{path:"/",exact:!0,component:I}),Object(C.jsx)(u.a,{path:"/game",component:ee}),Object(C.jsx)(u.a,{path:"/host",exact:!0,component:D}),Object(C.jsx)(u.a,{path:"/host/newQuiz",component:B}),Object(C.jsx)(u.a,{path:"/host/questions",component:se}),Object(C.jsx)(u.a,{path:"/host/newquestion/:id",component:ne}),Object(C.jsx)(u.a,{path:"/host/editquestion/:id",component:xe}),Object(C.jsx)(u.a,{path:"/player",component:je}),Object(C.jsx)(u.a,{path:"/change",component:pe})]})})}}]),s}(n.Component)),ge=ve;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=s(316);i.a.render(Object(C.jsx)(b.a,{store:me,children:Object(C.jsx)(we.a,{children:Object(C.jsx)(ge,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,s){},46:function(e,t,s){},89:function(e,t,s){}},[[311,1,2]]]);
//# sourceMappingURL=main.d85d470d.chunk.js.map