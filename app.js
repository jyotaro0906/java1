for (let i = 1; i < 51; i++){
  remainder_4 = i % 4
  remainder_10 = i % 10
  if(i == 50){
    alert('50回カウントが終わりました。');
  }
  else if(remainder_10 == 0){
    console.log('今' + i +  '回ループしました。');
    if (remainder_4 == 0 ){
      console.log('4で割れる数です。' + i);
    }
  }
}