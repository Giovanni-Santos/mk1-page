// Obtém todas as divs com classe "cage", "subz", "scorp", etc.
const divs = document.querySelectorAll('.cage, .subz, .scorp, .raid, .shang, .liu, .kung');
const title = document.querySelector('.title');

// Importar os lutadores individuais
const cage = document.getElementById("cageImg");
const subZero = document.getElementById("subImg");
const scorpion = document.getElementById("scorpImg");
const raiden = document.getElementById("raidImg");
const shangTsung = document.getElementById("shangImg");
const liuKang = document.getElementById("liuImg");
const kungLao = document.getElementById("kungImg");

// Importar storys
const cageStory = document.getElementById("cageStory");
const subZeroStory = document.getElementById("subZeroStory");
const scorpionStory = document.getElementById("scorpionStory");
const raidenStory = document.getElementById("raidenStory");
const shangTsungStory = document.getElementById("shangTsungStory");
const liuKangStory = document.getElementById("liuKangStory");
const kungLaoStory = document.getElementById("kungLaoStory");
const closeStory = document.querySelectorAll(".closeStory");
const story = document.querySelectorAll(".story");
const block = document.querySelector(".block");

const home = document.querySelector(".home");

// Importar áudios
function playSong(){
  const mkSong = document.getElementById("mkSong");
  mkSong.currentTime = 0;
  mkSong.volume = 0.3;
  mkSong.play();
}

function playSelect(){
  const selectSound = document.getElementById("mk1Select");
  selectSound.currentTime = 0;
  selectSound.volume = 1;
  selectSound.play();
}

function johnnySound(){
  const johnny = document.getElementById("johnny");
  johnny.currentTime = 0;
  johnny.volume = 1;
  johnny.play();
}

function subZeroSound(){
  const subZero = document.getElementById("subZero");
  subZero.currentTime = 0;
  subZero.volume = 1;
  subZero.play();
}

function scorpionSound(){
  const scorpion = document.getElementById("scorpion");
  scorpion.currentTime = 0;
  scorpion.volume = 1;
  scorpion.play();
}

function raidenSound(){
  const raiden = document.getElementById("raiden");
  raiden.currentTime = 0;
  raiden.volume = 1;
  raiden.play();
}

function shangTsungSound(){
  const shangTsung = document.getElementById("shangTsung");
  shangTsung.currentTime = 0;
  shangTsung.volume = 1;
  shangTsung.play();
}

function liuKangSound(){
  const liuKang = document.getElementById("liuKang");
  liuKang.currentTime = 0;
  liuKang.volume = 1;
  liuKang.play();
}

function kungLaoSound(){
  const kungLao = document.getElementById("kungLao");
  kungLao.currentTime = 0;
  kungLao.volume = 1;
  kungLao.play();
}

// Obtém todas as imagens dentro da div com id "fighterSprite"
const fighterImages = document.querySelectorAll('#fighterSprite img');

setTimeout(function(){
  setTimeout(function(){
    title.style.color = "red";
  },100);
  setTimeout(function(){
    title.style.color = "yellow";
  },200);
  setTimeout(function(){
    title.style.color = "red";
  }, 300);
  setTimeout(function(){
    title.style.color = "yellow";
  }, 400);
  setTimeout(function(){
    title.style.color = "red";
  },500);
  setTimeout(function(){
    title.style.color = "yellow";
  },600);
  setTimeout(function(){
    title.style.color = "red";
  }, 700);
  setTimeout(function(){
    title.style.color = "yellow";
  }, 800);
  setTimeout(function(){
    title.style.color = "red";
  }, 900);
  setTimeout(function(){
    title.style.color = "yellow";
  }, 1000);
}, 500);

// Itera sobre cada div
divs.forEach((div, index) => {
  // Adiciona um ouvinte de evento de mouseover para cada div
  div.addEventListener('mouseover', () => {
    // Esconde todas as imagens de lutadores
    fighterImages.forEach(image => {
      image.style.display = 'none';
    });
    playSelect();
    
    // Mostra a imagem correspondente ao índice da div sobre a qual o mouse passou
    fighterImages[index].style.display = 'block';
  });
});

closeStory.forEach(function (button){
  button.addEventListener("click", function(){
    var stories = document.querySelectorAll(".story");
    stories.forEach(function (story){
      story.style.display = "none";
      block.style.display = "none";
    });
  });
});

cage.addEventListener("click", function(){
  johnnySound();
  cageStory.style.display = "block";
  block.style.display = "block";
});

subZero.addEventListener("click", function(){
  subZeroSound();
  subZeroStory.style.display = "block";
  block.style.display = "block";
});

scorpion.addEventListener("click", function(){
  scorpionSound();
  scorpionStory.style.display = "block";
  block.style.display = "block";
});

raiden.addEventListener("click", function(){
  raidenSound();
  raidenStory.style.display = "block";
  block.style.display = "block";
});

shangTsung.addEventListener("click", function(){
  shangTsungSound();
  shangTsungStory.style.display = "block";
  block.style.display = "block";
});

liuKang.addEventListener("click", function(){
  liuKangSound();
  liuKangStory.style.display = "block";
  block.style.display = "block";
});

kungLao.addEventListener("click", function(){
  kungLaoSound();
  kungLaoStory.style.display = "block";
  block.style.display = "block";
});

home.addEventListener("click", function(){
  window.location = 'index.html';
})

playSong();