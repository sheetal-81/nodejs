// script.js

let questions = [
	{
		prompt: `What is Node.js?`,
		options: [
		    
		    "A programming language",
		    "A JavaScript runtime environment",
		    "A database system",
		    "A web browser",
		],
		answer: "A JavaScript runtime environment",
	    },
	    {
		prompt: `What is the purpose of Node.js?`,
		options: [
		    "To run JavaScript code outside of a web browser",
		    "To create HTML markup",
		    "To manage databases",
		    "To style web pages",
		],
		answer: "To run JavaScript code outside of a web browser",
	    },
	    {
		prompt: `What is npm?`,
		options: [
		    
		    "Node Programming Module",
		    "Node Project Manager",
		    "Node Package Module",
		    "Node Package Manager",
		],
		answer: "Node Package Manager",
	    },
	    {
		prompt: `How do you install packages using npm in Node.js?`,
		options: [
		    "npm install packageName",
		    "npm add packageName",
		    "npm get packageName",
		    "npm remove packageName",
		],
		answer: "npm install packageName",
	    },
	    {
		prompt: `What is the purpose of the "require" function in Node.js?`,
		options: [
		   
		    "To export modules",
		    "To install packages",
		    "To import modules",
		    "To run JavaScript code",
		],
		answer: "To import modules",
	    },
	    {
		prompt: `How do you create a server in Node.js?`,
		options: [
		    "Using the http module",
		    "Using the fs module",
		    "Using the path module",
		    "Using the os module",
		],
		answer: "Using the http module",
	    },
	    {
		prompt: `What is the purpose of the "listen" method in Node.js?`,
		options: [
		    
		    "To stop a server",
		    "To import modules",
		    "To start a server",
		    "To export modules",
		],
		answer: "To start a server",
	    },
	    {
		prompt: `What is Express.js?`,
		options: [
		    "A web application framework for Node.js",
		    "A database management system",
		    "A package manager for Node.js",
		    "A JavaScript runtime environment",
		],
		answer: "A web application framework for Node.js",
	    },
	    {
		prompt: `How do you install Express.js in a Node.js project?`,
		options: [
		    
		    "npm add express",
		    "npm get express",
		    "npm install express",
		    "npm remove express",
		],
		answer: "npm install express",
	    },
	    {
		prompt: `What is the purpose of middleware in Express.js?`,
		options: [
		    "To handle incoming requests",
		    "To define route handlers",
		    "To manage databases",
		    "To create HTML markup",
		],
		answer: "To handle incoming requests",
	    },
	    {
		prompt: `What is the purpose of the "get" method in Express.js?`,
		options: [
		    
		    "To define route handlers for POST requests",
		    "To define route handlers for PUT requests",
		    "To define route handlers for GET requests",
		    "To define route handlers for DELETE requests",
		],
		answer: "To define route handlers for GET requests",
	    },
	    {
		prompt: `What is the purpose of the "post" method in Express.js?`,
		options: [
		    "To define route handlers for POST requests",
		    "To define route handlers for GET requests",
		    "To define route handlers for PUT requests",
		    "To define route handlers for DELETE requests",
		],
		answer: "To define route handlers for POST requests",
	    },
	    {
		prompt: `What is the purpose of the "put" method in Express.js?`,
		options: [
		    
		    "To define route handlers for GET requests",
		    "To define route handlers for POST requests",
		    "To define route handlers for DELETE requests",
		    "To define route handlers for PUT requests",
		],
		answer: "To define route handlers for PUT requests",
	    },
	    {
		prompt: `What is the purpose of the "delete" method in Express.js?`,
		options: [
		    "To define route handlers for DELETE requests",
		    "To define route handlers for GET requests",
		    "To define route handlers for POST requests",
		    "To define route handlers for PUT requests",
		],
		answer: "To define route handlers for DELETE requests",
	    },
	    {
		prompt: `What is the purpose of the "next" function in Express.js middleware?`,
		options: [
		   
		    "To send a response to the client",
		    "To handle incoming requests",
		    "To pass control to the next middleware function",
		    "To define route handlers",
		],
		answer: "To pass control to the next middleware function",
	    },
	    {
		prompt: `What is the purpose of the "res" object in Express.js route handlers?`,
		options: [
		    "To send a response to the client",
		    "To pass control to the next middleware function",
		    "To handle incoming requests",
		    "To define route handlers",
		],
		answer: "To send a response to the client",
	    },
	    {
		prompt: `What is the purpose of the "req" object in Express.js route handlers?`,
		options: [
		    "To handle incoming requests",
		    "To send a response to the client",
		    "To pass control to the next middleware function",
		    "To define route handlers",
		],
		answer: "To handle incoming requests",
	    },
	    {
		prompt: `What is the purpose of the "send" method in Express.js route handlers?`,
		options: [
		    
		    "To pass control to the next middleware function",
		    "To send a response to the client",
		    "To handle incoming requests",
		    "To define route handlers",
		],
		answer: "To send a response to the client",
	    },
	    {
		prompt: `What is the purpose of the "json" method in Express.js route handlers?`,
		options: [
		    
		    "To pass control to the next middleware function",
		    "To handle incoming requests",
		    "To define route handlers",
		    "To send a JSON response to the client",
		],
		answer: "To send a JSON response to the client",
	    },
	    {
		prompt: `What is the purpose of the "sendFile" method in Express.js route handlers?`,
		options: [
		   
		    "To pass control to the next middleware function",
		    "To handle incoming requests",
		    "To send a file as a response to the client",
		    "To define route handlers",
		],
		answer: "To send a file as a response to the client",
	    },
	    {
		prompt: `What is the purpose of the "render" method in Express.js route handlers?`,
		options: [
		    
		    "To pass control to the next middleware function",
		    "To handle incoming requests",
		    "To render a view template",
		    "To define route handlers",
		],
		answer: "To render a view template",
	    },
	    {
		prompt: `What is the purpose of the "status" method in Express.js route handlers?`,
		options: [
		    
		    "To pass control to the next middleware function",
		    "To handle incoming requests",
		    "To set the HTTP status code of the response",
		    "To define route handlers",
		],
		answer: "To set the HTTP status code of the response",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
