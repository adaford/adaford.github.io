var App = new Vue({
  el: '#my-vue-app',
  data: {
    //cards : ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
    card_pics : ["AC", "2C", "3D", "4S", "5H", "6C", "7D", "8S", "9H", "10C", "JD", "QS", "KH"],
    counter : Array(13).fill(4),
    current_cards : [0,0,0],
    equity : 0,

    //convert card to picture on screen
    addPicture : function() {
      if (this.current_cards[0] != 0) {
        document.getElementById('yc1').src = "Cards/" + this.current_cards[0] + ".jpg"
      }
      else{
        document.getElementById('yc1').src = "Cards/blank.jpg"
      }

      if (this.current_cards[1] != 0) {
        document.getElementById('yc2').src = "Cards/" + this.current_cards[1] + ".jpg"
      }
      else{
        document.getElementById('yc2').src = "Cards/blank.jpg"
      }
      
      if (this.current_cards[2] != 0) {
        document.getElementById('yc3').src = "Cards/" + this.current_cards[2] + ".jpg"
      }
      else{
        document.getElementById('yc3').src = "Cards/blank.jpg"
      }

    },

    changeCounter : function(id,val) {
      let index = this.card_pics.indexOf(id)
      val = this.counter[index] + val
      this.$set(this.counter, index, val)
    },

    calculateEquity : function() {
      if (this.current_cards[0] != 0 && this.current_cards[1] != 0 && this.current_cards[2] == 0) {
        left = this.card_pics.indexOf(this.current_cards[0]) + 1
        right = this.card_pics.indexOf(this.current_cards[1]) + 1
        if (right == 1) {right = 14}
        let expectedValue = 0
        let cardsLeft = 0
        for (i = 0; i < this.counter.length; i++) {
          if ((i == 0 && right == 14) || (i + 1 == left || i + 1 == right))  {expectedValue -= this.counter[i] * 2}
          else if (i + 1 > Math.min(left,right) && i + 1 < Math.max(left,right)) {expectedValue += this.counter[i]}
          else {expectedValue -= this.counter[i]}
          cardsLeft += this.counter[i]
        }
        this.equity = (expectedValue / cardsLeft * 100).toFixed(2)
      }
      else {
        this.equity = 0
      }

      if (this.equity == 0) { document.getElementById("equity").style.color = "Black"}

      else if (this.equity > 0) {document.getElementById("equity").style.color = "Green"}
      else {document.getElementById("equity").style.color = "Red"}
    }
  }, 

  methods: {
  	newGame : function() {
      this.counter = Array(13).fill(4)
      this.current_cards = [0,0,0]
      this.addPicture()
      this.calculateEquity()
    },

    addCard : function(event) {
      if (this.counter[this.card_pics.indexOf(event.target.id)] > 0 && this.current_cards.includes(0)) {
        if (this.current_cards[0] == 0) {this.current_cards[0] = event.target.id}
        else if (this.current_cards[1] == 0) {this.current_cards[1] = event.target.id}
        else if (this.current_cards[2] == 0) {this.current_cards[2] = event.target.id}
        this.changeCounter(event.target.id, -1)
        this.calculateEquity()
      }
      else{
        console.log("error card number")
        return
      }
      
      this.addPicture()
    },

    removeCard : function(event) {
      let index = parseInt(event.target.id[2]) - 1
      this.changeCounter(this.current_cards[index], 1)
      this.current_cards[index] = 0
      this.addPicture()
      this.calculateEquity()
    },

    add : function() {
      this.current_cards[0] = 0
      this.current_cards[1] = 0
      this.current_cards[2] = 0
      this.addPicture()
      this.equity = 0
    }
  }

});




