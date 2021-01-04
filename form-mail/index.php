<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- charset 설정 -->
    <meta charset="UTF-8">
    <!-- ie 호환성보기 무시 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 모바일을 위한 viewport설정 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
    <title>문의메일</title>
    <link rel="stylesheet" type="text/css" href="./email.css">
  </head>
 
  <body>
  <script>
    document.addEventListener("DOMContentLoaded", function(){
      document.getElementById('email').value='';
      document.getElementById('name').value='';
      document.getElementById('message').value='';
    });  
  </script>
  <form action="contact.php" method="post">
    <section class="contact_form" id="contact_form">
<center><p><h3>컨설팅 문의</h3>
      <table width="0" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><img src="images/back_1.jpg" width="568" height="19" /></td>
  </tr>
  <tr>
    <td><table width="0" border="0" cellspacing="0" cellpadding="0" >
      <tr>
        <td><img src="images/back_3.jpg" width="21" height="472" /></td>
        <td width="525" align="center">
     
        <table width="100" border="0" cellpadding="0" cellspacing="5">
		      <tr>
            <th width="100" align="right">이메일</th>
            <td width="500" align="left">
              <input type="text" style="BORDER-RIGHT: #cccccc 1px solid; BORDER-TOP: #cccccc 1px solid; BORDER-LEFT: #cccccc 1px solid; WIDTH: 350px; COLOR: #333333; BORDER-BOTTOM: #cccccc 1px solid; HEIGHT: 20px" id="email" name="email"
              size="32" />
            </td>
          </tr>
          <tr>
            <th width="100" align="right"><font color="#663300">제목</font></th>
            <td width="500" align="left"><input type="text" style="BORDER-RIGHT: #cccccc 1px solid; BORDER-TOP: #cccccc 1px solid; BORDER-LEFT: #cccccc 1px solid; WIDTH: 350px; COLOR: #333333; BORDER-BOTTOM: #cccccc 1px solid; HEIGHT: 20px" id="name" name="name"
             size="32" /></td>
          </tr>
          <tr>
            <th align="center"><font color="#663300">내용</font></th>
            <td align="left"><textarea style="BORDER-RIGHT: #cccccc 1px solid; BORDER-TOP: #cccccc 1px solid; BORDER-LEFT: #cccccc 1px solid; WIDTH: 350px; COLOR: #333333; BORDER-BOTTOM: #cccccc 1px solid; HEIGHT: 198px" id="message" name="message"
             rows="5" cols="26"></textarea></td>
          </tr>
          <tr align="right">
            <td colspan="2">(회신이 필요한 경우 연락처를 남겨주세요.)<p></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td  align="right"><input name="submit" type="image" value="신청하기" src="images/ok.jpg"  />
              
          </tr>
        </table></td>
        <td><img src="images/back_4.jpg" width="22" height="472" /></td>
      </tr>
    </table>
    </td>
  </tr>
  <tr>
    <td><img src="images/back_2.jpg" width="568" height="19" /></td>
  </tr>
</table>
</form>
  </body>
 
</html>