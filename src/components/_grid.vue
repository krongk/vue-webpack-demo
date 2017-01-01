<template>
  <div>
    <!-- grid style from F7 -->
  </div>
</template>

<script>
  export default {
    name: 'gird'
  }
</script>

<style>
/* === Grid === */
.row {
 display: -webkit-box;
 display: -ms-flexbox;
 display: -webkit-flex;
 display: flex;
 -webkit-box-pack: justify;
 -ms-flex-pack: justify;
 -webkit-justify-content: space-between;
 justify-content: space-between;
 -webkit-box-lines: multiple;
 -moz-box-lines: multiple;
 -webkit-flex-wrap: wrap;
 -ms-flex-wrap: wrap;
 flex-wrap: wrap;
 -webkit-box-align: start;
 -ms-flex-align: start;
 -webkit-align-items: flex-start;
 align-items: flex-start;
}
.row > [class*="col-"] {
 box-sizing: border-box;
}
.row .col-auto {
 width: 100%;
}
.row .col-100 {
 width: 100%;
 width: -webkit-calc((100% - 15px*0) / 1);
 width: calc((100% - 15px*0) / 1);
}
.row.no-gutter .col-100 {
 width: 100%;
}
.row .col-95 {
 width: 95%;
 width: -webkit-calc((100% - 15px*0.05263157894736836) / 1.0526315789473684);
 width: calc((100% - 15px*0.05263157894736836) / 1.0526315789473684);
}
.row.no-gutter .col-95 {
 width: 95%;
}
.row .col-90 {
 width: 90%;
 width: -webkit-calc((100% - 15px*0.11111111111111116) / 1.1111111111111112);
 width: calc((100% - 15px*0.11111111111111116) / 1.1111111111111112);
}
.row.no-gutter .col-90 {
 width: 90%;
}
.row .col-85 {
 width: 85%;
 width: -webkit-calc((100% - 15px*0.17647058823529416) / 1.1764705882352942);
 width: calc((100% - 15px*0.17647058823529416) / 1.1764705882352942);
}
.row.no-gutter .col-85 {
 width: 85%;
}
.row .col-80 {
 width: 80%;
 width: -webkit-calc((100% - 15px*0.25) / 1.25);
 width: calc((100% - 15px*0.25) / 1.25);
}
.row.no-gutter .col-80 {
 width: 80%;
}
.row .col-75 {
 width: 75%;
 width: -webkit-calc((100% - 15px*0.33333333333333326) / 1.3333333333333333);
 width: calc((100% - 15px*0.33333333333333326) / 1.3333333333333333);
}
.row.no-gutter .col-75 {
 width: 75%;
}
.row .col-70 {
 width: 70%;
 width: -webkit-calc((100% - 15px*0.4285714285714286) / 1.4285714285714286);
 width: calc((100% - 15px*0.4285714285714286) / 1.4285714285714286);
}
.row.no-gutter .col-70 {
 width: 70%;
}
.row .col-66 {
 width: 66.66666666666666%;
 width: -webkit-calc((100% - 15px*0.5000000000000002) / 1.5000000000000002);
 width: calc((100% - 15px*0.5000000000000002) / 1.5000000000000002);
}
.row.no-gutter .col-66 {
 width: 66.66666666666666%;
}
.row .col-65 {
 width: 65%;
 width: -webkit-calc((100% - 15px*0.5384615384615385) / 1.5384615384615385);
 width: calc((100% - 15px*0.5384615384615385) / 1.5384615384615385);
}
.row.no-gutter .col-65 {
 width: 65%;
}
.row .col-60 {
 width: 60%;
 width: -webkit-calc((100% - 15px*0.6666666666666667) / 1.6666666666666667);
 width: calc((100% - 15px*0.6666666666666667) / 1.6666666666666667);
}
.row.no-gutter .col-60 {
 width: 60%;
}
.row .col-55 {
 width: 55%;
 width: -webkit-calc((100% - 15px*0.8181818181818181) / 1.8181818181818181);
 width: calc((100% - 15px*0.8181818181818181) / 1.8181818181818181);
}
.row.no-gutter .col-55 {
 width: 55%;
}
.row .col-50 {
 width: 50%;
 width: -webkit-calc((100% - 15px*1) / 2);
 width: calc((100% - 15px*1) / 2);
}
.row.no-gutter .col-50 {
 width: 50%;
}
.row .col-45 {
 width: 45%;
 width: -webkit-calc((100% - 15px*1.2222222222222223) / 2.2222222222222223);
 width: calc((100% - 15px*1.2222222222222223) / 2.2222222222222223);
}
.row.no-gutter .col-45 {
 width: 45%;
}
.row .col-40 {
 width: 40%;
 width: -webkit-calc((100% - 15px*1.5) / 2.5);
 width: calc((100% - 15px*1.5) / 2.5);
}
.row.no-gutter .col-40 {
 width: 40%;
}
.row .col-35 {
 width: 35%;
 width: -webkit-calc((100% - 15px*1.8571428571428572) / 2.857142857142857);
 width: calc((100% - 15px*1.8571428571428572) / 2.857142857142857);
}
.row.no-gutter .col-35 {
 width: 35%;
}
.row .col-33 {
 width: 33.333333333333336%;
 width: -webkit-calc((100% - 15px*2) / 3);
 width: calc((100% - 15px*2) / 3);
}
.row.no-gutter .col-33 {
 width: 33.333333333333336%;
}
.row .col-30 {
 width: 30%;
 width: -webkit-calc((100% - 15px*2.3333333333333335) / 3.3333333333333335);
 width: calc((100% - 15px*2.3333333333333335) / 3.3333333333333335);
}
.row.no-gutter .col-30 {
 width: 30%;
}
.row .col-25 {
 width: 25%;
 width: -webkit-calc((100% - 15px*3) / 4);
 width: calc((100% - 15px*3) / 4);
}
.row.no-gutter .col-25 {
 width: 25%;
}
.row .col-20 {
 width: 20%;
 width: -webkit-calc((100% - 15px*4) / 5);
 width: calc((100% - 15px*4) / 5);
}
.row.no-gutter .col-20 {
 width: 20%;
}
.row .col-15 {
 width: 15%;
 width: -webkit-calc((100% - 15px*5.666666666666667) / 6.666666666666667);
 width: calc((100% - 15px*5.666666666666667) / 6.666666666666667);
}
.row.no-gutter .col-15 {
 width: 15%;
}
.row .col-10 {
 width: 10%;
 width: -webkit-calc((100% - 15px*9) / 10);
 width: calc((100% - 15px*9) / 10);
}
.row.no-gutter .col-10 {
 width: 10%;
}
.row .col-5 {
 width: 5%;
 width: -webkit-calc((100% - 15px*19) / 20);
 width: calc((100% - 15px*19) / 20);
}
.row.no-gutter .col-5 {
 width: 5%;
}
.row .col-auto:nth-last-child(1),
.row .col-auto:nth-last-child(1) ~ .col-auto {
 width: 100%;
 width: -webkit-calc((100% - 15px*0) / 1);
 width: calc((100% - 15px*0) / 1);
}
.row.no-gutter .col-auto:nth-last-child(1),
.row.no-gutter .col-auto:nth-last-child(1) ~ .col-auto {
 width: 100%;
}
.row .col-auto:nth-last-child(2),
.row .col-auto:nth-last-child(2) ~ .col-auto {
 width: 50%;
 width: -webkit-calc((100% - 15px*1) / 2);
 width: calc((100% - 15px*1) / 2);
}
.row.no-gutter .col-auto:nth-last-child(2),
.row.no-gutter .col-auto:nth-last-child(2) ~ .col-auto {
 width: 50%;
}
.row .col-auto:nth-last-child(3),
.row .col-auto:nth-last-child(3) ~ .col-auto {
 width: 33.33333333%;
 width: -webkit-calc((100% - 15px*2) / 3);
 width: calc((100% - 15px*2) / 3);
}
.row.no-gutter .col-auto:nth-last-child(3),
.row.no-gutter .col-auto:nth-last-child(3) ~ .col-auto {
 width: 33.33333333%;
}
.row .col-auto:nth-last-child(4),
.row .col-auto:nth-last-child(4) ~ .col-auto {
 width: 25%;
 width: -webkit-calc((100% - 15px*3) / 4);
 width: calc((100% - 15px*3) / 4);
}
.row.no-gutter .col-auto:nth-last-child(4),
.row.no-gutter .col-auto:nth-last-child(4) ~ .col-auto {
 width: 25%;
}
.row .col-auto:nth-last-child(5),
.row .col-auto:nth-last-child(5) ~ .col-auto {
 width: 20%;
 width: -webkit-calc((100% - 15px*4) / 5);
 width: calc((100% - 15px*4) / 5);
}
.row.no-gutter .col-auto:nth-last-child(5),
.row.no-gutter .col-auto:nth-last-child(5) ~ .col-auto {
 width: 20%;
}
.row .col-auto:nth-last-child(6),
.row .col-auto:nth-last-child(6) ~ .col-auto {
 width: 16.66666667%;
 width: -webkit-calc((100% - 15px*5) / 6);
 width: calc((100% - 15px*5) / 6);
}
.row.no-gutter .col-auto:nth-last-child(6),
.row.no-gutter .col-auto:nth-last-child(6) ~ .col-auto {
 width: 16.66666667%;
}
.row .col-auto:nth-last-child(7),
.row .col-auto:nth-last-child(7) ~ .col-auto {
 width: 14.28571429%;
 width: -webkit-calc((100% - 15px*6) / 7);
 width: calc((100% - 15px*6) / 7);
}
.row.no-gutter .col-auto:nth-last-child(7),
.row.no-gutter .col-auto:nth-last-child(7) ~ .col-auto {
 width: 14.28571429%;
}
.row .col-auto:nth-last-child(8),
.row .col-auto:nth-last-child(8) ~ .col-auto {
 width: 12.5%;
 width: -webkit-calc((100% - 15px*7) / 8);
 width: calc((100% - 15px*7) / 8);
}
.row.no-gutter .col-auto:nth-last-child(8),
.row.no-gutter .col-auto:nth-last-child(8) ~ .col-auto {
 width: 12.5%;
}
.row .col-auto:nth-last-child(9),
.row .col-auto:nth-last-child(9) ~ .col-auto {
 width: 11.11111111%;
 width: -webkit-calc((100% - 15px*8) / 9);
 width: calc((100% - 15px*8) / 9);
}
.row.no-gutter .col-auto:nth-last-child(9),
.row.no-gutter .col-auto:nth-last-child(9) ~ .col-auto {
 width: 11.11111111%;
}
.row .col-auto:nth-last-child(10),
.row .col-auto:nth-last-child(10) ~ .col-auto {
 width: 10%;
 width: -webkit-calc((100% - 15px*9) / 10);
 width: calc((100% - 15px*9) / 10);
}
.row.no-gutter .col-auto:nth-last-child(10),
.row.no-gutter .col-auto:nth-last-child(10) ~ .col-auto {
 width: 10%;
}
.row .col-auto:nth-last-child(11),
.row .col-auto:nth-last-child(11) ~ .col-auto {
 width: 9.09090909%;
 width: -webkit-calc((100% - 15px*10) / 11);
 width: calc((100% - 15px*10) / 11);
}
.row.no-gutter .col-auto:nth-last-child(11),
.row.no-gutter .col-auto:nth-last-child(11) ~ .col-auto {
 width: 9.09090909%;
}
.row .col-auto:nth-last-child(12),
.row .col-auto:nth-last-child(12) ~ .col-auto {
 width: 8.33333333%;
 width: -webkit-calc((100% - 15px*11) / 12);
 width: calc((100% - 15px*11) / 12);
}
.row.no-gutter .col-auto:nth-last-child(12),
.row.no-gutter .col-auto:nth-last-child(12) ~ .col-auto {
 width: 8.33333333%;
}
.row .col-auto:nth-last-child(13),
.row .col-auto:nth-last-child(13) ~ .col-auto {
 width: 7.69230769%;
 width: -webkit-calc((100% - 15px*12) / 13);
 width: calc((100% - 15px*12) / 13);
}
.row.no-gutter .col-auto:nth-last-child(13),
.row.no-gutter .col-auto:nth-last-child(13) ~ .col-auto {
 width: 7.69230769%;
}
.row .col-auto:nth-last-child(14),
.row .col-auto:nth-last-child(14) ~ .col-auto {
 width: 7.14285714%;
 width: -webkit-calc((100% - 15px*13) / 14);
 width: calc((100% - 15px*13) / 14);
}
.row.no-gutter .col-auto:nth-last-child(14),
.row.no-gutter .col-auto:nth-last-child(14) ~ .col-auto {
 width: 7.14285714%;
}
.row .col-auto:nth-last-child(15),
.row .col-auto:nth-last-child(15) ~ .col-auto {
 width: 6.66666667%;
 width: -webkit-calc((100% - 15px*14) / 15);
 width: calc((100% - 15px*14) / 15);
}
.row.no-gutter .col-auto:nth-last-child(15),
.row.no-gutter .col-auto:nth-last-child(15) ~ .col-auto {
 width: 6.66666667%;
}
.row .col-auto:nth-last-child(16),
.row .col-auto:nth-last-child(16) ~ .col-auto {
 width: 6.25%;
 width: -webkit-calc((100% - 15px*15) / 16);
 width: calc((100% - 15px*15) / 16);
}
.row.no-gutter .col-auto:nth-last-child(16),
.row.no-gutter .col-auto:nth-last-child(16) ~ .col-auto {
 width: 6.25%;
}
.row .col-auto:nth-last-child(17),
.row .col-auto:nth-last-child(17) ~ .col-auto {
 width: 5.88235294%;
 width: -webkit-calc((100% - 15px*16) / 17);
 width: calc((100% - 15px*16) / 17);
}
.row.no-gutter .col-auto:nth-last-child(17),
.row.no-gutter .col-auto:nth-last-child(17) ~ .col-auto {
 width: 5.88235294%;
}
.row .col-auto:nth-last-child(18),
.row .col-auto:nth-last-child(18) ~ .col-auto {
 width: 5.55555556%;
 width: -webkit-calc((100% - 15px*17) / 18);
 width: calc((100% - 15px*17) / 18);
}
.row.no-gutter .col-auto:nth-last-child(18),
.row.no-gutter .col-auto:nth-last-child(18) ~ .col-auto {
 width: 5.55555556%;
}
.row .col-auto:nth-last-child(19),
.row .col-auto:nth-last-child(19) ~ .col-auto {
 width: 5.26315789%;
 width: -webkit-calc((100% - 15px*18) / 19);
 width: calc((100% - 15px*18) / 19);
}
.row.no-gutter .col-auto:nth-last-child(19),
.row.no-gutter .col-auto:nth-last-child(19) ~ .col-auto {
 width: 5.26315789%;
}
.row .col-auto:nth-last-child(20),
.row .col-auto:nth-last-child(20) ~ .col-auto {
 width: 5%;
 width: -webkit-calc((100% - 15px*19) / 20);
 width: calc((100% - 15px*19) / 20);
}
.row.no-gutter .col-auto:nth-last-child(20),
.row.no-gutter .col-auto:nth-last-child(20) ~ .col-auto {
 width: 5%;
}
.row .col-auto:nth-last-child(21),
.row .col-auto:nth-last-child(21) ~ .col-auto {
 width: 4.76190476%;
 width: -webkit-calc((100% - 15px*20) / 21);
 width: calc((100% - 15px*20) / 21);
}
.row.no-gutter .col-auto:nth-last-child(21),
.row.no-gutter .col-auto:nth-last-child(21) ~ .col-auto {
 width: 4.76190476%;
}
@media all and (min-width: 768px) {
 .row .tablet-100 {
   width: 100%;
   width: -webkit-calc((100% - 15px*0) / 1);
   width: calc((100% - 15px*0) / 1);
 }
 .row.no-gutter .tablet-100 {
   width: 100%;
 }
 .row .tablet-95 {
   width: 95%;
   width: -webkit-calc((100% - 15px*0.05263157894736836) / 1.0526315789473684);
   width: calc((100% - 15px*0.05263157894736836) / 1.0526315789473684);
 }
 .row.no-gutter .tablet-95 {
   width: 95%;
 }
 .row .tablet-90 {
   width: 90%;
   width: -webkit-calc((100% - 15px*0.11111111111111116) / 1.1111111111111112);
   width: calc((100% - 15px*0.11111111111111116) / 1.1111111111111112);
 }
 .row.no-gutter .tablet-90 {
   width: 90%;
 }
 .row .tablet-85 {
   width: 85%;
   width: -webkit-calc((100% - 15px*0.17647058823529416) / 1.1764705882352942);
   width: calc((100% - 15px*0.17647058823529416) / 1.1764705882352942);
 }
 .row.no-gutter .tablet-85 {
   width: 85%;
 }
 .row .tablet-80 {
   width: 80%;
   width: -webkit-calc((100% - 15px*0.25) / 1.25);
   width: calc((100% - 15px*0.25) / 1.25);
 }
 .row.no-gutter .tablet-80 {
   width: 80%;
 }
 .row .tablet-75 {
   width: 75%;
   width: -webkit-calc((100% - 15px*0.33333333333333326) / 1.3333333333333333);
   width: calc((100% - 15px*0.33333333333333326) / 1.3333333333333333);
 }
 .row.no-gutter .tablet-75 {
   width: 75%;
 }
 .row .tablet-70 {
   width: 70%;
   width: -webkit-calc((100% - 15px*0.4285714285714286) / 1.4285714285714286);
   width: calc((100% - 15px*0.4285714285714286) / 1.4285714285714286);
 }
 .row.no-gutter .tablet-70 {
   width: 70%;
 }
 .row .tablet-66 {
   width: 66.66666666666666%;
   width: -webkit-calc((100% - 15px*0.5000000000000002) / 1.5000000000000002);
   width: calc((100% - 15px*0.5000000000000002) / 1.5000000000000002);
 }
 .row.no-gutter .tablet-66 {
   width: 66.66666666666666%;
 }
 .row .tablet-65 {
   width: 65%;
   width: -webkit-calc((100% - 15px*0.5384615384615385) / 1.5384615384615385);
   width: calc((100% - 15px*0.5384615384615385) / 1.5384615384615385);
 }
 .row.no-gutter .tablet-65 {
   width: 65%;
 }
 .row .tablet-60 {
   width: 60%;
   width: -webkit-calc((100% - 15px*0.6666666666666667) / 1.6666666666666667);
   width: calc((100% - 15px*0.6666666666666667) / 1.6666666666666667);
 }
 .row.no-gutter .tablet-60 {
   width: 60%;
 }
 .row .tablet-55 {
   width: 55%;
   width: -webkit-calc((100% - 15px*0.8181818181818181) / 1.8181818181818181);
   width: calc((100% - 15px*0.8181818181818181) / 1.8181818181818181);
 }
 .row.no-gutter .tablet-55 {
   width: 55%;
 }
 .row .tablet-50 {
   width: 50%;
   width: -webkit-calc((100% - 15px*1) / 2);
   width: calc((100% - 15px*1) / 2);
 }
 .row.no-gutter .tablet-50 {
   width: 50%;
 }
 .row .tablet-45 {
   width: 45%;
   width: -webkit-calc((100% - 15px*1.2222222222222223) / 2.2222222222222223);
   width: calc((100% - 15px*1.2222222222222223) / 2.2222222222222223);
 }
 .row.no-gutter .tablet-45 {
   width: 45%;
 }
 .row .tablet-40 {
   width: 40%;
   width: -webkit-calc((100% - 15px*1.5) / 2.5);
   width: calc((100% - 15px*1.5) / 2.5);
 }
 .row.no-gutter .tablet-40 {
   width: 40%;
 }
 .row .tablet-35 {
   width: 35%;
   width: -webkit-calc((100% - 15px*1.8571428571428572) / 2.857142857142857);
   width: calc((100% - 15px*1.8571428571428572) / 2.857142857142857);
 }
 .row.no-gutter .tablet-35 {
   width: 35%;
 }
 .row .tablet-33 {
   width: 33.333333333333336%;
   width: -webkit-calc((100% - 15px*2) / 3);
   width: calc((100% - 15px*2) / 3);
 }
 .row.no-gutter .tablet-33 {
   width: 33.333333333333336%;
 }
 .row .tablet-30 {
   width: 30%;
   width: -webkit-calc((100% - 15px*2.3333333333333335) / 3.3333333333333335);
   width: calc((100% - 15px*2.3333333333333335) / 3.3333333333333335);
 }
 .row.no-gutter .tablet-30 {
   width: 30%;
 }
 .row .tablet-25 {
   width: 25%;
   width: -webkit-calc((100% - 15px*3) / 4);
   width: calc((100% - 15px*3) / 4);
 }
 .row.no-gutter .tablet-25 {
   width: 25%;
 }
 .row .tablet-20 {
   width: 20%;
   width: -webkit-calc((100% - 15px*4) / 5);
   width: calc((100% - 15px*4) / 5);
 }
 .row.no-gutter .tablet-20 {
   width: 20%;
 }
 .row .tablet-15 {
   width: 15%;
   width: -webkit-calc((100% - 15px*5.666666666666667) / 6.666666666666667);
   width: calc((100% - 15px*5.666666666666667) / 6.666666666666667);
 }
 .row.no-gutter .tablet-15 {
   width: 15%;
 }
 .row .tablet-10 {
   width: 10%;
   width: -webkit-calc((100% - 15px*9) / 10);
   width: calc((100% - 15px*9) / 10);
 }
 .row.no-gutter .tablet-10 {
   width: 10%;
 }
 .row .tablet-5 {
   width: 5%;
   width: -webkit-calc((100% - 15px*19) / 20);
   width: calc((100% - 15px*19) / 20);
 }
 .row.no-gutter .tablet-5 {
   width: 5%;
 }
 .row .tablet-auto:nth-last-child(1),
 .row .tablet-auto:nth-last-child(1) ~ .col-auto {
   width: 100%;
   width: -webkit-calc((100% - 15px*0) / 1);
   width: calc((100% - 15px*0) / 1);
 }
 .row.no-gutter .tablet-auto:nth-last-child(1),
 .row.no-gutter .tablet-auto:nth-last-child(1) ~ .tablet-auto {
   width: 100%;
 }
 .row .tablet-auto:nth-last-child(2),
 .row .tablet-auto:nth-last-child(2) ~ .col-auto {
   width: 50%;
   width: -webkit-calc((100% - 15px*1) / 2);
   width: calc((100% - 15px*1) / 2);
 }
 .row.no-gutter .tablet-auto:nth-last-child(2),
 .row.no-gutter .tablet-auto:nth-last-child(2) ~ .tablet-auto {
   width: 50%;
 }
 .row .tablet-auto:nth-last-child(3),
 .row .tablet-auto:nth-last-child(3) ~ .col-auto {
   width: 33.33333333%;
   width: -webkit-calc((100% - 15px*2) / 3);
   width: calc((100% - 15px*2) / 3);
 }
 .row.no-gutter .tablet-auto:nth-last-child(3),
 .row.no-gutter .tablet-auto:nth-last-child(3) ~ .tablet-auto {
   width: 33.33333333%;
 }
 .row .tablet-auto:nth-last-child(4),
 .row .tablet-auto:nth-last-child(4) ~ .col-auto {
   width: 25%;
   width: -webkit-calc((100% - 15px*3) / 4);
   width: calc((100% - 15px*3) / 4);
 }
 .row.no-gutter .tablet-auto:nth-last-child(4),
 .row.no-gutter .tablet-auto:nth-last-child(4) ~ .tablet-auto {
   width: 25%;
 }
 .row .tablet-auto:nth-last-child(5),
 .row .tablet-auto:nth-last-child(5) ~ .col-auto {
   width: 20%;
   width: -webkit-calc((100% - 15px*4) / 5);
   width: calc((100% - 15px*4) / 5);
 }
 .row.no-gutter .tablet-auto:nth-last-child(5),
 .row.no-gutter .tablet-auto:nth-last-child(5) ~ .tablet-auto {
   width: 20%;
 }
 .row .tablet-auto:nth-last-child(6),
 .row .tablet-auto:nth-last-child(6) ~ .col-auto {
   width: 16.66666667%;
   width: -webkit-calc((100% - 15px*5) / 6);
   width: calc((100% - 15px*5) / 6);
 }
 .row.no-gutter .tablet-auto:nth-last-child(6),
 .row.no-gutter .tablet-auto:nth-last-child(6) ~ .tablet-auto {
   width: 16.66666667%;
 }
 .row .tablet-auto:nth-last-child(7),
 .row .tablet-auto:nth-last-child(7) ~ .col-auto {
   width: 14.28571429%;
   width: -webkit-calc((100% - 15px*6) / 7);
   width: calc((100% - 15px*6) / 7);
 }
 .row.no-gutter .tablet-auto:nth-last-child(7),
 .row.no-gutter .tablet-auto:nth-last-child(7) ~ .tablet-auto {
   width: 14.28571429%;
 }
 .row .tablet-auto:nth-last-child(8),
 .row .tablet-auto:nth-last-child(8) ~ .col-auto {
   width: 12.5%;
   width: -webkit-calc((100% - 15px*7) / 8);
   width: calc((100% - 15px*7) / 8);
 }
 .row.no-gutter .tablet-auto:nth-last-child(8),
 .row.no-gutter .tablet-auto:nth-last-child(8) ~ .tablet-auto {
   width: 12.5%;
 }
 .row .tablet-auto:nth-last-child(9),
 .row .tablet-auto:nth-last-child(9) ~ .col-auto {
   width: 11.11111111%;
   width: -webkit-calc((100% - 15px*8) / 9);
   width: calc((100% - 15px*8) / 9);
 }
 .row.no-gutter .tablet-auto:nth-last-child(9),
 .row.no-gutter .tablet-auto:nth-last-child(9) ~ .tablet-auto {
   width: 11.11111111%;
 }
 .row .tablet-auto:nth-last-child(10),
 .row .tablet-auto:nth-last-child(10) ~ .col-auto {
   width: 10%;
   width: -webkit-calc((100% - 15px*9) / 10);
   width: calc((100% - 15px*9) / 10);
 }
 .row.no-gutter .tablet-auto:nth-last-child(10),
 .row.no-gutter .tablet-auto:nth-last-child(10) ~ .tablet-auto {
   width: 10%;
 }
 .row .tablet-auto:nth-last-child(11),
 .row .tablet-auto:nth-last-child(11) ~ .col-auto {
   width: 9.09090909%;
   width: -webkit-calc((100% - 15px*10) / 11);
   width: calc((100% - 15px*10) / 11);
 }
 .row.no-gutter .tablet-auto:nth-last-child(11),
 .row.no-gutter .tablet-auto:nth-last-child(11) ~ .tablet-auto {
   width: 9.09090909%;
 }
 .row .tablet-auto:nth-last-child(12),
 .row .tablet-auto:nth-last-child(12) ~ .col-auto {
   width: 8.33333333%;
   width: -webkit-calc((100% - 15px*11) / 12);
   width: calc((100% - 15px*11) / 12);
 }
 .row.no-gutter .tablet-auto:nth-last-child(12),
 .row.no-gutter .tablet-auto:nth-last-child(12) ~ .tablet-auto {
   width: 8.33333333%;
 }
 .row .tablet-auto:nth-last-child(13),
 .row .tablet-auto:nth-last-child(13) ~ .col-auto {
   width: 7.69230769%;
   width: -webkit-calc((100% - 15px*12) / 13);
   width: calc((100% - 15px*12) / 13);
 }
 .row.no-gutter .tablet-auto:nth-last-child(13),
 .row.no-gutter .tablet-auto:nth-last-child(13) ~ .tablet-auto {
   width: 7.69230769%;
 }
 .row .tablet-auto:nth-last-child(14),
 .row .tablet-auto:nth-last-child(14) ~ .col-auto {
   width: 7.14285714%;
   width: -webkit-calc((100% - 15px*13) / 14);
   width: calc((100% - 15px*13) / 14);
 }
 .row.no-gutter .tablet-auto:nth-last-child(14),
 .row.no-gutter .tablet-auto:nth-last-child(14) ~ .tablet-auto {
   width: 7.14285714%;
 }
 .row .tablet-auto:nth-last-child(15),
 .row .tablet-auto:nth-last-child(15) ~ .col-auto {
   width: 6.66666667%;
   width: -webkit-calc((100% - 15px*14) / 15);
   width: calc((100% - 15px*14) / 15);
 }
 .row.no-gutter .tablet-auto:nth-last-child(15),
 .row.no-gutter .tablet-auto:nth-last-child(15) ~ .tablet-auto {
   width: 6.66666667%;
 }
 .row .tablet-auto:nth-last-child(16),
 .row .tablet-auto:nth-last-child(16) ~ .col-auto {
   width: 6.25%;
   width: -webkit-calc((100% - 15px*15) / 16);
   width: calc((100% - 15px*15) / 16);
 }
 .row.no-gutter .tablet-auto:nth-last-child(16),
 .row.no-gutter .tablet-auto:nth-last-child(16) ~ .tablet-auto {
   width: 6.25%;
 }
 .row .tablet-auto:nth-last-child(17),
 .row .tablet-auto:nth-last-child(17) ~ .col-auto {
   width: 5.88235294%;
   width: -webkit-calc((100% - 15px*16) / 17);
   width: calc((100% - 15px*16) / 17);
 }
 .row.no-gutter .tablet-auto:nth-last-child(17),
 .row.no-gutter .tablet-auto:nth-last-child(17) ~ .tablet-auto {
   width: 5.88235294%;
 }
 .row .tablet-auto:nth-last-child(18),
 .row .tablet-auto:nth-last-child(18) ~ .col-auto {
   width: 5.55555556%;
   width: -webkit-calc((100% - 15px*17) / 18);
   width: calc((100% - 15px*17) / 18);
 }
 .row.no-gutter .tablet-auto:nth-last-child(18),
 .row.no-gutter .tablet-auto:nth-last-child(18) ~ .tablet-auto {
   width: 5.55555556%;
 }
 .row .tablet-auto:nth-last-child(19),
 .row .tablet-auto:nth-last-child(19) ~ .col-auto {
   width: 5.26315789%;
   width: -webkit-calc((100% - 15px*18) / 19);
   width: calc((100% - 15px*18) / 19);
 }
 .row.no-gutter .tablet-auto:nth-last-child(19),
 .row.no-gutter .tablet-auto:nth-last-child(19) ~ .tablet-auto {
   width: 5.26315789%;
 }
 .row .tablet-auto:nth-last-child(20),
 .row .tablet-auto:nth-last-child(20) ~ .col-auto {
   width: 5%;
   width: -webkit-calc((100% - 15px*19) / 20);
   width: calc((100% - 15px*19) / 20);
 }
 .row.no-gutter .tablet-auto:nth-last-child(20),
 .row.no-gutter .tablet-auto:nth-last-child(20) ~ .tablet-auto {
   width: 5%;
 }
 .row .tablet-auto:nth-last-child(21),
 .row .tablet-auto:nth-last-child(21) ~ .col-auto {
   width: 4.76190476%;
   width: -webkit-calc((100% - 15px*20) / 21);
   width: calc((100% - 15px*20) / 21);
 }
 .row.no-gutter .tablet-auto:nth-last-child(21),
 .row.no-gutter .tablet-auto:nth-last-child(21) ~ .tablet-auto {
   width: 4.76190476%;
 }
}
</style>
