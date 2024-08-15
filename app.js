const GRID_SIZE = 10;
const PLAYER = 'P';
let treasureX = Math.floor(Math.random() * GRID_SIZE);
let treasureY = Math.floor(Math.random() * GRID_SIZE);
let grid = [];
let questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Processing Union", "Computer Personal Unit", "Central Processor Unit"],
        correctOption: 'a'
    },

    {
        question: "What is a large storage device?",
        options: ["RAM", "SSD", "Harddisk", "Flash Drive"],
        correctOption: 'c'
    },
    {
        question: "What is the main circuit board?",
        options: ["Motherboard", "Processor", "Chipset", "RAM"],
        correctOption: 'a'
    },
    {
        question: "What does SSD stand for?",
        options: ["Solid State Drive", "Solid Storage Disk", "Secondary Storage Device", "Small Storage Device"],
        correctOption: 'a'
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"],
        correctOption: 'a'
    },
    {
        question: "What does GPU stand for?",
        options: ["General Processing Unit", "Graphics Processing Unit", "General Processor Unit", "Graphics Processor Unit"],
        correctOption: 'b'
    },
    {
        question: "What is the primary OS for Mac?",
        options: ["Windows", "Linux", "MacOS", "Unix"],
        correctOption: 'c'
    },
    {
        question: "What is a common web browser?",
        options: ["Chrome", "Firefox", "Edge", "Safari"],
        correctOption: 'b'
    },
    {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program", "HyperText Transport Protocol"],
        correctOption: 'a'
    },
    {
        question: "What is the primary language for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctOption: 'c'
    },
    {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Uniform Resource Link", "Uniform Reference Locator", "Uniform Reference Link"],
        correctOption: 'a'
    },
    {
        question: "What is something that can be copied but never seen, can be modified but never touched, and can be destroyed but never broken?",
        options: ["Memory", "Code", "Shadow", "Image"],
        correctOption: 'b'
    },
    {
        question: "I am a structure where information is stored and retrieved. What am I, if I can be a stack, queue, or tree?",
        options: ["Pointer", "Database", "Algorithm", "Data structure"],
        correctOption: 'd'
    },
    {
        question: "I can be split into 0s and 1s, but I am not binary myself. I am essential for instructions but am not a CPU. What am I?",
        options: ["Byte", "Bit", "Hardware", "Software"],
        correctOption: 'a'
    },
    {
        question: "What allows you to perform multiple tasks simultaneously, but never truly does any task at the same time?",
        options: ["Time-sharing", "Hyper-threading", "Parallel processing", "Multitasking in computers"],
        correctOption: 'd'
    },
    {
        question: "I am a system that can solve complex problems quickly, but when the problem is simple, I slow down. What am I?",
        options: ["A computer", "An algorithm", "A neural network", "A processor"],
        correctOption: 'b'
    },
    {
        question: "What is a device that listens to all your commands but can’t speak back to you?",
        options: ["A keyboard", "A touchpad", "A speaker", "A microphone"],
        correctOption: 'd'
    },
    {
        question: "What grows only when it is cut, and thrives when you use it less?",
        options: ["A beard", "A firewall", "A hedge", "A tree"],
        correctOption: 'a'
    },
    {
        question: "I can hold immense amounts of data, yet I am neither heavy nor tangible. What am I?",
        options: ["A hard drive", "A USB stick", "RAM", "Cloud storage"],
        correctOption: 'd'
    },
    {
        question: "What can be used to encrypt your secrets but never needs a key to unlock?",
        options: ["A password", "A lock", "A safe", "A cipher algorithm"],
        correctOption: 'd'
    },
    {
        question: "I am invisible but essential, and without me, no website will function. What am I?",
        options: ["JavaScript", "CSS", "HTML", "Internet protocol"],
        correctOption: 'd'
    },
    {
        question: "I travel around the world but stay in one corner. What am I?",
        options: ["A map", "A globe", "A postage stamp", "A satellite"],
        correctOption: 'c'
    },
    {
        question: "I am both a wave and a particle, and without me, you wouldn't see colors. What am I?",
        options: ["Electricity", "Light", "Heat", "Sound"],
        correctOption: 'b'
    },
    {
        question: "I am invisible but exert force, and I can bend the path of objects. What am I?",
        options: ["Magnetism", "Electricity", "Gravity", "Wind"],
        correctOption: 'c'
    },
    {
        question: "The more you have of me, the less you see. What am I?",
        options: ["Fog", "Smoke", "Darkness", "Light"],
        correctOption: 'c'
    },
    {
        question: "I am measured in joules, and I can cause change but never be created or destroyed. What am I?",
        options: ["Power", "Energy", "Work", "Force"],
        correctOption: 'b'
    },
    {
        question: "I am essential for life, yet you can’t see me or touch me, and I am part of every cell in your body. What am I?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Water"],
        correctOption: 'a'
    },
    {
        question: "I am not alive, yet I grow; I don't have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?",
        options: ["A virus", "A tree", "Fire", "A fungus"],
        correctOption: 'c'
    },
    {
        question: "I can turn into gas, liquid, or solid, yet I’m always the same element. What am I?",
        options: ["Water", "Carbon", "Nitrogen", "Oxygen"],
        correctOption: 'b'
    },
    {
        question: "I am used to make energy, but I am not consumed; I am found in every living thing. What am I?",
        options: ["Oxygen", "Glucose", "ATP (adenosine triphosphate)", "Carbon dioxide"],
        correctOption: 'c'
    },
    {
        question: "I react with metals and produce hydrogen gas; my number is 1 on the periodic table. What am I?",
        options: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
        correctOption: 'd'
    },
    {
        question: "I can live without a brain but need a heart. What am I?",
        options: ["A tree", "A fungus", "A jellyfish", "A bacteria"],
        correctOption: 'c'
    },
    {
        question: "I can be inherited but not always seen, and I influence how you look and act. What am I?",
        options: ["Culture", "Genes", "Environment", "Diet"],
        correctOption: 'b'
    },
    {
        question: "I am made of cells, but I am not alive. I grow and change, but I am not an organism. What am I?",
        options: ["A crystal", "A virus", "A plant", "A mineral"],
        correctOption: 'b'
    },
    {
        question: "I help you breathe but am not part of your body. I can be found in the air and without me, life is difficult. What am I?",
        options: ["Carbon dioxide", "Water vapor", "Nitrogen", "Oxygen"],
        correctOption: 'd'
    },
    {
        question: "I exist in a cycle of life and death, and I am essential for the flow of energy. What am I?",
        options: ["A carbon cycle", "A nitrogen cycle", "A food chain", "A water cycle"],
        correctOption: 'c'
    },
    {
        question: "I am not a number, but I help you measure things. I can be found in a triangle and a circle. What am I?",
        options: ["Degree", "Angle", "Pi", "Radius"],
        correctOption: 'c'
    },
    {
        question: "I am both a number and a position, and I have a square but never a cube. What am I?",
        options: ["A fraction", "A root", "A whole number", "A prime number"],
        correctOption: 'b'
    },
    {
        question: "What is the smallest positive integer that can be divided by all numbers from 1 to 9 without leaving a remainder?",
        options: ["1260", "5040", "630", "2520"],
        correctOption: 'd'
    },
    {
        question: "I have keys but no locks. I have space but no room. You can enter, but not leave. What am I?",
        options: ["A map", "A piano", "A house", "A keyboard"],
        correctOption: 'd'
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        options: ["A second", "The letter 'M'", "A decade", "A century"],
        correctOption: 'b'
    },
    {
        question: "I can be cracked, made, told, and played. What am I?",
        options: ["A riddle", "A code", "A joke", "A song"],
        correctOption: 'c'
    },
    {
        question: "I am tall when I’m young, and I’m short when I’m old. What am I?",
        options: ["A building", "A candle", "A tree", "A shadow"],
        correctOption: 'b'
    },
    {
        question: "I am light as a feather, yet the strongest man can't hold me for much longer than a minute. What am I?",
        options: ["A leaf", "A feather", "A balloon", "Breath"],
        correctOption: 'd'
    },
    {
        question: "What can be broken, but is never held?",
        options: ["A rule", "A promise", "A heart", "A glass"],
        correctOption: 'b'
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        options: ["Knowledge", "Money", "Time", "Footsteps"],
        correctOption: 'd'
    },
    {
        question: "I am full of keys but can't open any door. What am I?",
        options: ["A lock", "A piano", "A code", "A keyboard"],
        correctOption: 'b'
    },
    {
        question: "What has a heart that doesn't beat?",
        options: ["An artichoke", "A statue", "A clock", "A painting"],
        correctOption: 'a'
    },
    {
        question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
        options: ["A globe", "A map", "A picture", "A puzzle"],
        correctOption: 'b'
    },
    {
        question: "I have a neck but no head, two arms but no hands. What am I?",
        options: ["A shirt", "A tree", "A robot", "A clock"],
        correctOption: 'a'
    },
    {
        question: "I can travel around the world but stay in one corner. What am I?",
        options: ["A letter", "A map", "A postcard", "A postage stamp"],
        correctOption: 'd'
    }
    

   
    
];

document.addEventListener("DOMContentLoaded", () => {
    const gridElement = document.getElementById('grid');
    const modal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const submitButton = document.getElementById('submit-answer');
    const startGameButton = document.getElementById('start-game');
    const playerNameInput = document.getElementById('player-name');
    const departmentInput = document.getElementById('department');
    let timerInterval; 
    let isGameOver = false; 
    let timeRemaining = 30 * 60; 

    startGameButton.addEventListener('click', () => {
        playerNameInput.disabled = true;
        departmentInput.disabled = true;
        startTimer();
    });

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        initializeGrid();
    }

    function initializeGrid() {
        for (let i = 0; i < GRID_SIZE; i++) {
            grid[i] = [];
            for (let j = 0; j < GRID_SIZE; j++) {
                grid[i][j] = '.';
                const cell = createGridCell(i, j);
                gridElement.appendChild(cell);
            }
        }
    }

    function createGridCell(x, y) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('click', () => handleCellClick(x, y, cell));
        return cell;
    }

    function handleCellClick(x, y, cell) {
        if (grid[x][y] === PLAYER || isGameOver) return; 

        showQuestion((isCorrect) => {
            if (isCorrect) {
                grid[x][y] = PLAYER;
                cell.textContent = PLAYER;
                cell.classList.add('player');

                if (x === treasureX && y === treasureY) {
                    alert("Congratulations! You found the treasure!");
                    isGameOver = true;
                    revealTreasure();
                }
            }
        });
    }

    function showQuestion(callback) {
        if (questions.length === 0) {
            revealTreasure();
            alert("Better luck next time! The treasure has been revealed.");
            isGameOver = true;
            return;
        }

        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions.splice(randomIndex, 1)[0]; 

        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionLabel = document.createElement('label');
            optionLabel.classList.add('option-label');
            optionLabel.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'option';
            radioInput.value = String.fromCharCode(97 + index);
            optionLabel.prepend(radioInput);
            optionsContainer.appendChild(optionLabel);
        });

        modal.classList.add('show');

        submitButton.onclick = () => {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption && selectedOption.value === question.correctOption) {
                modal.classList.remove('show');
                callback(true);
            } else {
                alert("Incorrect! Try again.");
                modal.classList.remove('show');
                showQuestion(callback);
            }
        };
    }

    function revealTreasure() {
        const treasureCell = gridElement.children[treasureX * GRID_SIZE + treasureY];
        treasureCell.textContent = 'T';
        treasureCell.classList.add('treasure');
    }

    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `Time remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Game over! Time's up!");
            isGameOver = true;
        }

        timeRemaining--;
    }
});