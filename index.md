<!DOCTYPE html>
<html>

<head>
    <meta name = "viewport" content = "width = device-width">
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="my-vue-app">

     <div class="topCards" v-on:click="addCard">
        <div class="topCardsClass">
            <img id="AC" src="Cards/AC.jpg">
            <span>{{counter[0]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="2C" src="Cards/2C.jpg">
            <span>{{counter[1]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="3D" src="Cards/3D.jpg">
            <span>{{counter[2]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="4S" src="Cards/4S.jpg">
            <span>{{counter[3]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="5H" src="Cards/5H.jpg">
            <span>{{counter[4]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="6C" src="Cards/6C.jpg">
            <span>{{counter[5]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="7D" src="Cards/7D.jpg">
            <span>{{counter[6]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="8S" src="Cards/8S.jpg">
            <span>{{counter[7]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="9H" src="Cards/9H.jpg">
            <span>{{counter[8]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="10C" src="Cards/10C.jpg">
            <span>{{counter[9]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="JD" src="Cards/JD.jpg">
            <span>{{counter[10]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="QS" src="Cards/QS.jpg">
            <span>{{counter[11]}}</span>
        </div>
        <div class="topCardsClass">
            <img id="KH" src="Cards/KH.jpg">
            <span>{{counter[12]}}</span>
        </div>
        
    </div>

     <div id="yourCards" v-on:click="removeCard">
     	<img id="yc1">
     	<img id="yc2">
        <img id="yc3">
     </div>

     <div class="buttons">
        <button id="add" v-on:click="add">Add</button>
        <button id="newGame" v-on:click="newGame">New Game</button>
    </div>

    <div id="equity">
        <p>{{equity}}%</p>
    </div>

   </div>

</body>
<script src="vue.js"></script>
</html>
