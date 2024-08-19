window.onload = (function(){
	
	var mark = ['firstMove', 'secondMove'];
	var order = 0;
	var count = 0;
	
	var n, nx, ny, b, i;
	
   //クリックしたら色が変わる
	$('td').click(function(){
	  $(this).addClass(mark[order]);
	  
	  count++;
	    //判定処理
	    n = $('.cell').index(this); // セル番号
	    nx = n % 3;      // x座標
	    ny = (n - nx)/3; // y座標
	    b = false;       // 勝敗決定
	    
	    //ターン制御
	    turn_action();
	 
	    // 横方向判定
	    for(i=0; i<3; i++){
	      if(!$('.cell').eq(ny*3 + i).hasClass(mark[order])){
	        break;
	      }
	    }
	    if(i==3){
	        b = true;
	    }
	    if(!b){
	      for(i=0; i<3; i++){
	        if(!$('.cell').eq(i*3 + nx).hasClass(mark[order])){
	          break;
	        }
	      }
	      if(i==3){
	        b = true;
	      }
	    }
	    // 斜め判定
	    if(!b && (n==0 || n==4 || n==8)){
	      b = ($('.cell').eq(0).hasClass(mark[order])
	          && $('.cell').eq(4).hasClass(mark[order])
	          && $('.cell').eq(8).hasClass(mark[order]))
	    }
	    if(!b && (n==2 || n==4 || n==6)){
	      b = ($('.cell').eq(2).hasClass(mark[order])
	          && $('.cell').eq(4).hasClass(mark[order])
	          && $('.cell').eq(6).hasClass(mark[order]))
	    }
	    if(b){
	      if(mark[order] == 'firstMove'){
	         $('table').addClass('firstWins');
	      } else if(mark[order] == 'secondMove') {
	        $('table').addClass('secondWins');
	      }
	    }
	    if (count == 9 && !b) {
	        $('table').addClass('drow');
	    }
	    
	  order = ++order%2;
	  
	});
	
	
	$('.reset').click(function(){
	  reset();
	  turn_action();
	});
		
	function turn_action() {
      if (count%2==1) {
        $(".text").text("青の番");
      } else {
        $(".text").text("赤の番");
      }
    }
        
    //リセット処理
    function reset() {
      $('table').removeClass();
      $('td').removeClass('firstMove secondMove')
      count = 0;
      order = 0;
      trun = 0;
    }
    
});

