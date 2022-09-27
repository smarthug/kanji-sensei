import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [clipboard, setClipboard] = useState("");
  useEffect(() => {
    // console.log("life goes on");
    // navigator.clipboard.readText().then((clipText) => setClipboard(clipText));
    // 로컬스토러지에서 get 하는 코드 넣어야겠다 ...
    if(localStorage.hasPermission==="true"){

      handleClick()
    }
  }, []);

  function handleClick() {
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
      console.log(result);
      if (result.state === "granted" || result.state === "prompt") {
        /* write to the clipboard now */
        // setTimeout(() => {
        //   navigator.clipboard
        //     .readText()
        //     .then((clipText) => setClipboard(clipText));
        // }, 2000);


        // navigator.clipboard
        //   .readText()
        //   .then((clipText) => setClipboard(clipText));
        localStorage.setItem("hasPermission","true")

        //https://ja.dict.naver.com/#/search?query=${clipText}&range=all


        navigator.clipboard
          .readText()
          .then((clipText) => {


            setClipboard(clipText)
            window.open(`https://ja.dict.naver.com/#/search?query=${clipText}&range=all`, "_blank");
          });
      }
    });
  }
  return (
    <div className="App">
      <h1>클립보드에 복사된 한자 : {clipboard}</h1>
      <button onClick={handleClick}>복사한 한자 사전 찾기</button>
      {/* <h2>{clipboard}</h2> */}
      {/* <div>내가 마지막으로 복사한 텍스트를 가지고 네이버사전으로 이동하기</div> */}
      {/* <div>버츄얼라이즈 넣을까??</div> */}
    </div>
  );
}
