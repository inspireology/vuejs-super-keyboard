<template>
    <div class="VueSuperKeyboard">
      <pre v-text="$attrs"/>
      <div class="keyboard">
        <div class="keyboard-row" v-for="(row, rowIndex) in rows">
          <div class="key"
               v-for="(key, keyIndex) in row"
               v-on:click="receiveInput"
               v-bind:keyUniqueId="keyIndex"
               v-bind:rowIndex="rowIndex"
               v-bind:keyIndex="keyIndex"
          > {{ keyIndex }} </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
//  module.exports = {
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      count: 0,
      display: ' ', // Display could be an array of values so that undo could work
      shift: '', //
      capsLock: '',
      control: '',
      alt: '',
      rows: [
        // keys inheriting from other keys ie: a key inheriting caps behavior from another
        // Multiple presses of a key with accent key scrolling through the various accent types
        // Action keys as a subtype object of keys (interface?)
        // Input keys as a separate object
        {
          // { label: '', unique: '', caps: '', action: '', style: '', class: '', modifiers: { shift: '', control: '', alt: '', super: '' } },
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '0': {},
          'backspace': { action: 'backspace' }
        }, {
          'tab': { action: 'tab' },
          'Q': { lower: 'q' },
          'W': { lower: 'w' },
          'E': { lower: 'e' },
          'R': { lower: 'r' },
          'T': { lower: 't' },
          'Y': { lower: 'y' },
          'U': { lower: 'u' },
          'I': { lower: 'i' },
          'O': { lower: 'o' },
          'P': { lower: 'p' },
          '{': { lower: '{' },
          '}': { lower: '}' },
          '|': { lower: '|' }
        }, {
          'caps-lock': { action: 'caps' },
          'A': { lower: 'a' },
          'S': { lower: 's' },
          'D': { lower: 'd' },
          'F': { lower: 'f' },
          'G': { lower: 'g' },
          'H': { lower: 'h' },
          'J': { lower: 'j' },
          'K': { lower: 'k' },
          'L': { lower: 'l' },
          ':': { lower: ':' },
          '"': { lower: '"' },
          'Return ': { action: 'Return ' }
        }, {
          'Shift': { action: 'shift' },
          'Z': { lower: 'z' },
          'X': { lower: 'x' },
          'C': { lower: 'c' },
          'V': { lower: 'v' },
          'B': { lower: 'b' },
          'N': { lower: 'n' },
          'M': { lower: 'm' },
          '<': { lower: '<' },
          '>': { lower: '>' },
          '?': { lower: '?' },
          'Shift_': { action: 'shift' }
        }, {
          'Control': { action: 'control' },
          'Super':   { action: 'super' },
          'Alt':     { action: 'alt' },
          'Space':   {},
          '@':       {},
          'left':    {},
          'down':    {},
          'up':      {},
          'right':   {}
        }
      ]
    }
  },
  // props: ['rows'],
  methods: {
    receiveInput: function (event: ) {
      let keyAttributes = event.srcElement.attributes;

      let enteredCharacter = '';

      enteredCharacter = keyAttributes.keyUniqueId.value;
      let keyId:number = keyAttributes.keyIndex.value;
      let rowId:number = keyAttributes.rowIndex.value;
      let key          = this.rows[rowId][keyId];
      //let key   = this.rows[rowId];

      console.log(enteredCharacter);
      console.log(rowId);
      console.log(keyId);
      console.log(key);
      console.log('Component Version!');

      // console.log(event.srcElement.attributes.unique);
      // this.display = event.srcElement.attributes.unique.value;
      this.display += enteredCharacter;
    }
  },

  template: `
         <div class="keyboard">
             <div class="keyboard-row" v-for="(row, rowIndex) in rows">
                 <div class="key"
                      v-for="(key, keyIndex) in row"
                      v-on:click="receiveInput"
                      v-bind:keyUniqueId="keyIndex"
                      v-bind:rowIndex="rowIndex"
                      v-bind:keyIndex="keyIndex"
                 > {{ keyIndex }} </div>
             </div>
         </div>
     `
}})
</script>

<style scoped>
  .key {
    width: 60px;
    height: 60px;
    float: left;
    clear: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    flex-grow: 1;
    border-radius: 5px;
    border-color: white;
    border-width: 1px;
    border-style: solid;
    background-color: hsla(89, 0%, 100%, 0.4);

    transition: background-color 0.2s;
    user-select: none;
  }

  .key:hover {
    background-color: hsla(89, 0%, 100%, 0.7);
  }

  .key:active {
    background-color: hsla(89, 0%, 100%, 1);
  }

  .keyboard-row {
    width: 100%;
    clear: both;
    float: left;

    display: flex;
    flex-direction: row;
  }

  .keyboard {
    /* backdrop-filter: blur(2px); */
    display: flex;
    flex-direction: column;
    background-color: hsla(89, 0%, 100%, 0.5);
  }

  body {
    /*background-image: url("../assets/kristopher-roller-zepnJQycr4U-unsplash_1280.jpg")*/
  }
</style>
