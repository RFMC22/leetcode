var romanToInt = function(s) {
  var number = {
   I:1,
   V:5,
   X:10,
   L:50,
   C:100,
   D:500,
   M:1000
 }
   var num = number[s.charAt(0)];
   var cur, pre;
   
   for(var i = 1;i < s.length;i++){
     cur = number[s.charAt(i)];
     pre = number[s.charAt(i-1)];
     if(cur <= pre){
      num += cur;
     }else{
       num = num - pre*2 + cur;
     }
   }
   return num;
 };