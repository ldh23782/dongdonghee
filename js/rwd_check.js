
(function($){
	//각 디바이스별 크기 기준 설정
  let mobile=768, tablet=1240,laptop=1366, pc=1600;
	// 기본 디바이스 명칭설정
	let nowSize;
	const device =['mobile','tablet','laptop','pc','pcfull'];
  let beforeW = $(window).outerWidth(true); // 마진,패딩값을 고려했을때 사용하는것.. true 적게되면 마진,패딩값 포함해서 나옴
// 각 디바이스 상황에 맞는 data처리
//-----------------------------------------------------------------------------------------
const DeviceDate = function(wid){
switch(wid){
	case device[0]:
		conBox.load('./temp/main_mob.html');
		break;
	case device[1]:
			conBox.load('./temp/main_tab.html');
		break;
	case device[2]:
	case device[3]:
	case device[4]:
		conBox.load('./temp/main_pc.html');
	break;
	}
};

   //---------------------------------------------------------------------------------------
  //디바이스 크기 체크
	const DeviceSet = function(winW){
	if(winW <= mobile){
		nowSize = device[0];
	}else if(winW > mobile && winW <= tablet){
		nowSize = device[1];
	}else if(winW > tablet && winW <= laptop){
		nowSize = device[2];
	}else if(winW > laptop && winW <= pc){
		nowSize = device[3];
	}else{
		nowSize = device[4];
	}
	return nowSize;
};
let beforeDevice = DeviceSet(beforeW);
DeviceDate(beforeDevice);


  // console.log(nowSize)
  // 파이어폭스인가 아닌가 판단
  let browser = navigator.userAgent.toLowerCase();
  if(browser.indexOf('firefox') !== -1){
    nowb = 'firefox';
  }else{
    nowb = 'other';
  }

//   console.log(nowb);
	// 사이즈 변경 체크
	$(window).on('resize',function(){
		let afterW = $(window).outerWidth(true);
		let afterDevice = DeviceSet(afterW);
		if( beforeDevice !== afterDevice){
			// location.reload();
			window.location = window.location;
		}
  });
})(jQuery);
