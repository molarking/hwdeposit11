var ans; //答案
var counter = 0 
var coin = 0;
var addcoin = 0; 
var a; //作答答案
var ad;

var seconds = 13; 
var foo; 



$(document).ready(function(){
    if(sessionStorage.key("totalcoin")==null)
        $("#coin").text("目前積分 : 0");
    else if(parseInt(sessionStorage.getItem("totalcoin"))<0){ 
      $("#coin").text("目前積分 : 0");
      sessionStorage.setItem('totalcoin',0);
      }
      else{
        $("#coin").text("目前積分 : "+parseInt(sessionStorage.getItem("totalcoin")));
      }

}
)

  
  
    function gettool(){
      
     var num;
     if(localStorage.getItem("tool")==null)
     localStorage.setItem("tool",1);
     else{
     num=parseInt(localStorage.getItem("tool"));
     num++;
     localStorage.setItem("tool",JSON.stringify(num));
     }
     
    
     
  
    }
  

$(document).ready(function(){
  $("#content").hide();
  $("#seconds").hide();
  $(".nextone").hide();
  
  $(".end").hide();
  $("#a").hide();
  $("#b").hide();
  $("#c").hide();
  $("#d").hide();
  $(".question").show(function(){
    $(".question").click(function(){
      showQuestion();
      if(sessionStorage.key("totalcoin")==null)
      sessionStorage.setItem("totalcoin",JSON.stringify(coin));
      else coin=parseInt(sessionStorage.getItem("totalcoin"));
      

      $(".question").hide();
      $(".usetoy").hide();
      $(".return").hide();
    });
  });
  $(".usetoy").show(function(){
    $(".usetoy").click(function(){
      
      
      $(".question").hide();
      $(".usetoy").hide();
       $(".return").hide();
    });
  });
});
$(document).ready(function(){
  $(".end").hide();
 });
 
$(document).ready(function(){
  $('.option').click(function(){
    a = $(this).attr("id");
  $("#a").attr('disabled', true);
  $("#b").attr('disabled', true);
  $("#c").attr('disabled', true);
  $("#d").attr('disabled', true);
    answerQuestion();
  });
});
$(document).ready(function(){
  $('.nextone').click(function(){
    showQuestion();
    seconds = 13;
  });
});

$(document).ready(function(){
  $("#a").attr('disabled', true);
  $("#b").attr('disabled', true);
  $("#c").attr('disabled', true);
  $("#d").attr('disabled', true);
});


function countsecond() {
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;
    if(seconds<13&&seconds>9)
      $("#a").show();
    else if(seconds<=9&&seconds>6){
      $("#a").hide();
      $("#b").show();
    }
    else if(seconds<=6&&seconds>3){
      $("#b").hide();
      $("#c").show();
    }
    else {
      $("#c").hide();
      $("#d").show();
    }
    
   
    if (seconds == 0) {
        clearInterval(foo);
        answerQuestion();
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").hide();
        $("#d").attr('disabled', true);
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        countsecond()
    }, 1000);
}




function showQuestion(){
  console.log(questions.length);
  ad = 1;
  var random = Math.floor(Math.random()*1100)%parseInt(questions.length);
  var q = questions.splice(random,1)[0];
  counter+=1;
  seconds = 13;
  document.getElementById("seconds").innerHTML = seconds;
    countdownTimer();
  $(document).ready(function(){
    $("#counter").show();
    $("#content").show();
    $("#seconds").show();
    
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    
   
    
    $("#content").text("問題"+ counter+":"+q.content);
    $("#a").text(q.a);
    $("#b").text(q.b);
    $("#c").text(q.c);
    $("#d").text(q.d);
    ans = q.answer;
    $(".option").removeClass(" btn-danger");
    $(".option").removeClass(" btn-success");
    $("#a").attr('disabled', false);
    $("#b").attr('disabled', false);
    $("#c").attr('disabled', false);
    $("#d").attr('disabled', false);
    $(".nextone").hide();
    
    
  });
}

function usetool(){
  
  $(document).ready(function(){
    
  });
}

function answerQuestion(){
  var playerans = a;
    if(ans == 'a'){
      $(document).ready(function(){
        $("#a").show();
        $("#a").addClass(" btn-success");
     });
    }else if(ans == 'b'){
      $(document).ready(function(){
        $("#b").show();
        $("#b").addClass(" btn-success");
      });
    }else if(ans == 'c'){
      $(document).ready(function(){
        $("#c").show();
        $("#c").addClass(" btn-success");
      });
    }else if(ans == 'd'){
      $(document).ready(function(){
        $("#d").show();
        $("#d").addClass(" btn-success");
      });
    }
  
clearInterval(foo);
  if(playerans == ans){
    addcoin+=10;
    if(playerans == 'a'){
      $(document).ready(function(){
        $("#a").addClass(" btn-success");
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
     });
    }else if(playerans == 'b'){
      $(document).ready(function(){
        $("#b").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'c'){
      $(document).ready(function(){
        $("#c").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'd'){
      $(document).ready(function(){
        $("#d").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
      });
    }
  }else{
    addcoin-=15;
    if(playerans == 'a'){
      $(document).ready(function(){
        
        $("#a").addClass(" btn-danger");
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
     });
    }else if(playerans == 'b'){
      $(document).ready(function(){
        
        $("#b").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'c'){
      $(document).ready(function(){
        
        $("#c").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'd'){
        
      $(document).ready(function(){
        $("#d").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
      });
    }
  }
  if(counter>=5){
      Gameover();
  }else{
    $(document).ready(function(){
      if(ad == 1)
      {
        $('.nextone').show();
        $('.nextone').text("NEXT");
        a = 0;
        console.log(score);
      }
    
      
    });
  }
}
function Gameover(){
   $(document).ready(function(){
      $('.end').show(function(){
        $('.end').click(function(){
          $("#a").hide();
          $("#b").hide();
          $("#c").hide();
          $("#d").hide();
          $("#counter").text("本局結果 :");
          $("#counter").addClass("coin" );
          $("#content").text(addcoin+" 分");
          $("#content").addClass("coin");
         coin+=addcoin;
         sessionStorage.setItem('totalcoin',JSON.stringify(coin));
          $('.end').hide();
          $('.return').show();
          $('#seconds').hide();
         });
      });
  });
}

var questions = [
  { content: "哪裡擁有世界最大的貨櫃港?", a: "釜山", b: "洛杉磯", c: "深圳", d: "香港", answer: "d" },
  { content: "人類生存最基本三要素不包含何者", a: "網路", b: "陽光", c: "空氣", d: "水", answer: "a" },
  { content: "孔雀的英文是", a: "pineapple", b: "peekaboo", c: "peanut", d: "peacock", answer: "d" },
  { content: "動植物學名是用哪一種語言訂定的", a: "德語", b: "英語", c: "法語", d: "拉丁語", answer: "d" },
  { content: "日本與台灣時差幾個小時", a: "0小時", b: "2小時", c: "1小時", d: "3小時", answer: "c" },
  { content: "下列何者非晚清四大遣責小說", a: "二十年目睹之怪狀", b: "儒林外史", c: "孽海花", d: "官場現形記", answer: "b" },
  { content: "目前加入台藍最大咖籃球明星為何", a: "Godzilla", b: "Dwight Howard", c: "Stephen Curry", d: "Lady Gaga", answer: "b" },
  { content: "給邊長求面積使用公式為何", a: "柯西不等式", b: "畢氏定理", c: "海龍公式", d: "底*高/2", answer: "c" },
  { content: " 921地震是因為哪個斷層", a: "車籠埔斷層", b: "梅山斷層", c: "獅潭斷層", d: "竹東斷層", answer: "a" },
  { content: " 一般成人健康的鼻子每天製造多少鼻涕", a: "0.05公升", b: "1公升", c: "0.1公升", d: "0.5公升", answer: "d" },
  { content: " 奇異果原產地在哪", a: "澳洲雪梨", b: "台灣屏東", c: "中國長江", d: "美國舊金山", answer: "c" },
  { content: " 可以組成直角三角形的三邊長", a: "2 3 4", b: "5 10 12", c: "9 40 41", d: "7 23 24", answer: "c" },
  { content: " 何人改良了造紙技術", a: "諸葛亮", b: "蔡琴", c: "蔡倫", d: "秦始皇", answer: "c" },
  { content: "下列哪一個部分不屬於 CSS Box", a: "element", b: "box", c: "padding", d: "margin", answer: "b" },
  { content: " CSS 分層是利用什麼標記構建的分層", a: "dir", b: "div", c: "dis", d: "dif", answer: "b" },
  { content: " 下列哪一個選項不是 CSS 的優點", a: "減少網頁程式碼", b: "提高刷新速度", c: "提高下載速度", d: "對元件的控制力強", answer: "c" },
  { content: " 表格標記的基本結構是", a: "tr", b: "br", c: "table", d: "bg", answer: "c" },
  { content: " 以下哪種格式的影像可以表現動態畫面", a: "JPG", b: "PNG", c: "GIF", d: "TIF", answer: "c" },
  { content: " 若要調整區塊之間的距離，應該設定以下哪一個屬性", a: "margin", b: "padding", c: "border", d: "text-align", answer: "a" },
  { content: " 對e^x做微分的答案是", a: "1", b: "0", c: "xe", d: "e^x", answer: "d" },
  { content: " 正式馬拉松所規定的距離，其典故有何意義", a: "河流的長度", b: "國土的寬度", c: "逃跑的距離", d: "傳訊所費的距離", answer: "d" },
  { content: " 何者不能求平面三角形的面積", a: "內積", b: "海龍公式", c: "外積", d: "底*高/2", answer: "c" },
  { content: " 可樂最早是作為甚麼而發明", a: "一位名人", b: "糖果", c: "感冒糖漿", d: "動物名", answer: "c" },
  { content: " 撲克牌總共有幾張", a: "50", b: "51", c: "52", d: "54", answer: "d" },
  { content: " 法國大革命期間，是法國第幾共和", a: "第一共和", b: "第二共和", c: "第四共和", d: "第三共和", answer: "a" },
  { content: " 明國初年是幾年", a: "1911", b: "1922", c: "1912", d: "1900", answer: "c" },
  { content: " 美國在日本哪兩個地方投下原子彈", a: "東京 大阪", b: "長崎 四國", c: "廣島 九州", d: "廣島 長崎", answer: "d" },
  { content: " 何者不曾為中國首都", a: "北京", b: "西安", c: "蘭州", d: "洛陽", answer: "c" },
  { content: " 三國的建國順序", a: "蜀魏吳", b: "魏蜀吳", c: "蜀吳魏", d: "吳魏蜀", answer: "b" },
  { content: " 質能轉換公式為", a: "E = c^2", b: "E = cm^2", c: "E = mc^2", d: "E = mc", answer: "c" },
  { content: " 楊過被列為新五絕之一，請問被封為甚麼", a: "西狂", b: "南僧", c: "東邪", d: "北俠", answer: "a" },
  { content: " 下列學校何者不是公立大學", a: "海洋大學", b: "政治大學", c: "文化大學", d: "陽明大學", answer: "c" },
  { content: " 若把三角形放大兩倍，各角的角度會", a: "變為2倍", b: "不變", c: "變為1/2倍", d: "變為1.5倍", answer: "b" },
  { content: " 何者不是超級瑪莉裡面的角色", a: "耀西", b: "庫霸", c: "佛地魔", d: "路易吉", answer: "c" },
  { content: " 傳說倉頡有幾隻眼睛", a: "4", b: "1", c: "2", d: "3", answer: "a" },
  { content: " 根據法律，商家月營業額超過多少就要開立發票", a: "30萬", b: "20萬", c: "10萬", d: "15萬", answer: "b" },
  { content: " 哪一個火山爆發導致龐貝城滅城", a: "喜馬拉雅山", b: "維蘇威火山", c: "阿爾卑斯山", d: "安地斯山", answer: "b" },
  { content: " 漢摩拉比法典適合種刑法主張", a: "應報理論", b: "綜合理論", c: "平等理論", d: "預防理論", answer: "a" },
  { content: " 因天冷，何處有長達30公里的地下城市", a: "斯德哥爾摩", b: "聖彼得堡", c: "蒙特婁", d: "哈爾濱", answer: "c" },
  { content: " 請問世界盃足球賽歷史中的「上帝之手」跟哪位足球員有關", a: "梅西", b: "貝克漢", c: "羅納度", d: "馬拉度納", answer: "d" },
  { content: " 被譽為「東方神犬」是何種狗", a: "哈士奇", b: "黃金獵犬", c: "藏敖", d: "大麥町", answer: "c" },
  { content: " 下列何者不是治療癌症的方法", a: "手術", b: "標靶藥物", c: "化學療法", d: "核磁共振", answer: "d" },
  { content: " 撒哈拉沙漠的形成原因是", a: "溫室效應", b: "四面皆無靠海", c: "地處副熱帶高壓帶", d: "古人過度開發", answer: "c" },
  { content: " 時尚雜誌Vogue美國版主編，「穿著Prada的惡魔」暗指對象為何者", a: "Karl Lagerfeld", b: "Miroslava Duma", c: "Tyra Banks", d: "Anna Wintour", answer: "d" },
  { content: " 下列何者不是溫室氣體", a: "氫", b: "水氣", c: "二氧化碳", d: "甲烷", answer: "a" },
  { content: " 兩河流域文化是哪兩條河", a: "牛河和綠樹村邊河", b: "黃河和長江", c: "幼發拉底河和底格里斯河", d: "萊茵河和多瑙河", answer: "c" },
  { content: " 我國男生的結婚年齡下限是", a: "16歲", b: "15歲", c: "20歲", d: "18歲", answer: "d" },
  { content: " 下列何者不是四大網球公開賽之一", a: "英國網球公開賽", b: "澳洲網球公開賽", c: "溫布頓網球公開賽", d: "美國網球公開賽", answer: "a" },
  { content: " 在前人的基礎上推導出微積分基本理論的人是", a: "愛因斯坦", b: "牛頓", c: "富蘭克林", d: "畢卡索", answer: "b" },
   { content: " 中華民國總統大選幾年舉辦一次", a: "沒舉辦過", b: "總統民調過低就會舉辦", c: "4年", d: "3年", answer: "c" },
  { content: " 下列詩人稱號何者錯誤", a: "詩天子 王昌齡", b: "詩豪 白居易", c: "詩鬼 李賀", d: "詩囚 孟郊", answer: "b" },
  { content: " 提出「自由放任」的市場經濟原則的是", a: "張善政", b: "希拉蕊", c: "亞當斯密", d: "亞瑟", answer: "c" },
  { content: " 一大氣壓下，純水在多少度C時密度最大", a: "0", b: "4", c: "3", d: "6", answer: "b" },
  { content: " 黎巴嫩的官方語言是", a: "黎巴嫩語", b: "法語", c: "阿拉伯語", d: "英語", answer: "c" },
  { content: " 「臨表泣涕，不知所云」出自誰筆下", a: "杜甫", b: "諸葛亮", c: "李白", d: "司馬光", answer: "b" }
  
]

 



