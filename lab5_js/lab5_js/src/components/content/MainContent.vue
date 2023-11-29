<template>
  <div class="content">
    <h2>Завдання для лаборатонрої</h2>
    <img src="../../assets/variant3.jpg" alt="" />
    <div class="inputElements">
      <div class="inputBlock">
        <p>xn:</p>
        <input type="number" v-model="xn" />
        <p>xk:</p>
        <input type="number" v-model="xk" />
        <p>xh:</p>
        <input type="number" v-model="xh" />
      </div>
      <div class="inputBlock" style="margin-left: 15px">
        <p>yn:</p>
        <input type="number" v-model="yn" />
        <p>yk:</p>
        <input type="number" v-model="yk" />
        <p>yh:</p>
        <input type="number" v-model="yh" />
      </div>
      <div class="inputBlock" style="margin-left: 15px">
        <p>Значення R</p>
        <input type="number" v-model="R" />
      </div>
    </div>
    <button class="button_my" @click="calculate">Розрахувати</button>

    <table class="table">
  <tr>
    <th>X</th>
    <th>Y</th>
    <th>Результат</th>
  </tr>
  <tr v-for="point in result" :key="point.x" :class="{ 'inRegion': point.isInRegion, 'notInRegion': !point.isInRegion }">
    <td>{{ point.x }}</td>
    <td>{{ point.y }}</td>
    <td>{{ point.isInRegion ? "В області" : "Не в області" }}</td>
  </tr>
</table>

  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      xn: -5,
      xk: 5,
      yn: -5,
      yk: 5,
      xh: 1,
      yh: 1,
      R: 4,
      result: [],
    };
  },
  methods: {
    calculate() {
      this.result = [];
      for (let x = this.xn; x <= this.xk; x += this.xh) {
        for (let y = this.yn; y <= this.yk; y += this.yh) {
          const isInRegion = this.isIn(x, y);
          this.result.push({
            x,
            y,
            isInRegion,
          });
        }
      }
    },

    isIn(x, y) {
      var R = this.R;

      if (x >= 0 && x <= R) {
        if (y >= 0 && y <= R) {
          if ((x - 0) * (x - 0) + (y - 0) * (y - 0) <= R * R) {
            return true;
          }
        }
      }
      else if (x >= 0 && x <= R / 2) {
        if (y <= 0 && y >= -R) {
          return true;
        }
      }
      else if (x <= 0 && x >= -R) {
        if (y >= 0 && y <= R / 2) {
          if (y <= 0.5 * x + R / 2) {
            return true;
          }
        }
      }


      return false;
    },
  },
};
</script>

<style scoped src="../../components/content/MainContent.css"></style>
