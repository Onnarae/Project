/**
질문 저장
 */
function goSave(){
		if(!checkEmpty(write.t_title,"질문 제목 입력!")) return;
		if(!checkEmpty(write.t_content,"질문 내용 입력!")) return;
		
		/*		첨부파일 용량, 확장자 검사 */	
		var maxSize  = 1024 * 1024 * 1;  // 첨부 용량 설정 2MB
//		var maxSize  = 100; // 첨부 용량 설정 2MB
		var msg =" 첨부파일 사이즈는 1MB 이내로 등록 가능합니다.";
		
		var fileName = write.t_attach.value;
		if(fileName != ""){
			var pathFileName = fileName.lastIndexOf(".")+1;    //확장자 제외한 경로+파일명
			var extension = (fileName.substr(pathFileName)).toLowerCase();	//확장자명
			//파일명.확장자
//			if(extension != "jpg" && extension != "gif" && extension != "png"){
//				alert(extension +" 형식 파일은 업로드 안됩니다.이미지 파일만 가능!");
//				return;
//			}		
		}
		//첨부 용량 체크		
		var file = write.t_attach;
		if(file.value !=""){
			var fileSize = 0;
			// 브라우저 확인
			var browser=navigator.appName;
			// 익스플로러일 경우
			if (browser=="Microsoft Internet Explorer"){
				var oas = new ActiveXObject("Scripting.FileSystemObject");
				fileSize = oas.getFile(file.value).size;
			}else {
			// 익스플로러가 아닐경우
				fileSize = file.files[0].size;
			}
			if(fileSize > maxSize){
				alert(msg);
				return;
			}	
		}
/*		첨부파일 용량, 확장자 검사 */
		
		write.method="post";
		write.action="";
		write.submit();
	}
/**
답변 저장
 */
function goAnswerSave(){
		if(!checkEmpty(write.t_title,"답변 제목 입력!")) return;
		if(!checkEmpty(write.t_content,"답변 내용 입력!")) return;
		
		/*		첨부파일 용량, 확장자 검사 */	
		var maxSize  = 1024 * 1024 * 1;  // 첨부 용량 설정 2MB
//		var maxSize  = 100; // 첨부 용량 설정 2MB
		var msg =" 첨부파일 사이즈는 1MB 이내로 등록 가능합니다.";
		
		var fileName = write.t_attach.value;
		if(fileName != ""){
			var pathFileName = fileName.lastIndexOf(".")+1;    //확장자 제외한 경로+파일명
			var extension = (fileName.substr(pathFileName)).toLowerCase();	//확장자명
			//파일명.확장자
//			if(extension != "jpg" && extension != "gif" && extension != "png"){
//				alert(extension +" 형식 파일은 업로드 안됩니다.이미지 파일만 가능!");
//				return;
//			}		
		}
		//첨부 용량 체크		
		var file = write.t_attach;
		if(file.value !=""){
			var fileSize = 0;
			// 브라우저 확인
			var browser=navigator.appName;
			// 익스플로러일 경우
			if (browser=="Microsoft Internet Explorer"){
				var oas = new ActiveXObject("Scripting.FileSystemObject");
				fileSize = oas.getFile(file.value).size;
			}else {
			// 익스플로러가 아닐경우
				fileSize = file.files[0].size;
			}
			if(fileSize > maxSize){
				alert(msg);
				return;
			}	
		}
/*		첨부파일 용량, 확장자 검사 */
		
		write.method="post";
		write.action="";
		write.submit();
	}