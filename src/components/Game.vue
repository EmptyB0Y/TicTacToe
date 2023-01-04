<template>
  <div class="hello">
    <h1>{{ this.counter }} MOVES</h1>
    <div class="grid-container"  v-if="grid != null">
      <button class="grid-item" id="top-left" @click="checkWin($event)"> {{ grid["top-left"] }}</button>
      <button class="grid-item" id="top-middle" @click="checkWin($event)">{{ grid["top-middle"] }}</button>
      <button class="grid-item" id="top-right" @click="checkWin($event)">{{ grid["top-right"] }}</button>
      <button class="grid-item" id="middle-left" @click="checkWin($event)">{{ grid["middle-left"] }}</button>
      <button class="grid-item" id="middle-middle" @click="checkWin($event)">{{ grid["middle-middle"] }}</button>
      <button class="grid-item" id="middle-right" @click="checkWin($event)">{{ grid["middle-right"] }}</button>
      <button class="grid-item" id="bottom-left" @click="checkWin($event)">{{ grid["bottom-left"] }}</button>
      <button class="grid-item" id="bottom-middle" @click="checkWin($event)">{{ grid["bottom-middle"] }}</button>
      <button class="grid-item" id="bottom-right" @click="checkWin($event)">{{ grid["bottom-right"] }}</button>
    </div>
    <div v-else>
      {{ winner }} WON !
    </div>

  </div>
</template>

<script>

export default {
  data: function () {
    let grid = Array(9)
    grid["top-left"] = " "
    grid["top-middle"] = " "
    grid["top-right"] = " "
    grid["middle-left"] = " "
    grid["middle-middle"] = " "
    grid["middle-right"] = " "
    grid["bottom-left"] = " "
    grid["bottom-middle"] = " "
    grid["bottom-right"] = " "

    return {
      winner: "",
      counter: 0,
      grid
    }
  },
  name: 'GamePanel',
  methods: {
        checkWin(e){
          if(this.grid[e.target.id] == " "){
            this.counter++
            if(this.counter%2 == 0){
              this.grid[e.target.id] = "X"
            }
            else{
              this.grid[e.target.id] = "O"
            }
            console.log(Object.entries(this.grid))
            if(
              (this.grid["top-left"] === this.grid["top-middle"] && this.grid["top-left"] === this.grid["top-right"] && this.grid["top-left"] != " ") ||
              (this.grid["top-left"] === this.grid["middle-middle"] && this.grid["top-left"] === this.grid["bottom-right"] && this.grid["top-left"] != " ") ||
              (this.grid["top-left"] === this.grid["middle-left"] && this.grid["top-left"] === this.grid["bottom-left"] && this.grid["top-left"] != " ") ||

              (this.grid["bottom-left"] === this.grid["bottom-middle"] && this.grid["bottom-left"] === this.grid["bottom-right"] && this.grid["bottom-left"] != " ") ||
              (this.grid["top-right"] === this.grid["middle-middle"] && this.grid["top-right"] === this.grid["bottom-left"] && this.grid["top-right"] != " ") ||
              (this.grid["top-right"] === this.grid["middle-right"] && this.grid["top-right"] === this.grid["bottom-right"] && this.grid["top-right"] != " ") ||

              (this.grid["middle-left"] === this.grid["middle-middle"] && this.grid["middle-left"] === this.grid["middle-right"] && this.grid["middle-left"] != " ") ||
              (this.grid["top-middle"] === this.grid["middle-middle"] && this.grid["top-middle"] === this.grid["bottom-middle"] && this.grid["top-middle"] != " ")
            ){
              this.winner = this.grid[e.target.id]
              this.grid = null
            }
            else {
              let pass = true
              for(let i = 0; i < Object.entries(this.grid).length;i++){
                if(Object.entries(this.grid).at(i)[1] == " "){
                  pass = false
                }
              }
              if(pass){
                this.winner = "NOBODY"
                this.grid = null 
              }
            }
          }
        }
      }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  background-color: #2196F3;
  padding: 10px;
  width: 400px;
  height: 400px;
  margin: auto;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
