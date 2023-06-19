import Header from "../../components/common/header/mainHeader";
import Category from "../../components/category/category";
import { good } from "../../assets";
import { bad } from "../../assets";
import { comment } from "../../assets";
import { charactor1 } from "../../assets";
import { upload } from "../../assets";
import "../ask/index.css";

const Ask = () => {
  return (
    <div>
      <Header />
      <Category />
      <div className="post">
        <div className="postBox">
          디자인 알려주세요 
        </div>
        <img src={charactor1} className="postImg" />
        <p className="writer">박휘응</p>
        <img src={good} className="postGood" />
        <p className="postNum1">10</p>
        <img src={bad} className="postBad" />
        <p className="postNum2">1</p>
        <img src={comment} className="postComment" />
        <p className="postNum3">3</p>
        <p className="postContent">피그마 각각의 객체들 그룹화 단축키 알려주세요.</p>
      </div>
      <div>
        <p className="pComment">답변</p>
        <img src={comment} className="imgComment" />
        <input type="text" placeholder="답변을 작성해주세요." className="inputComment" />
        <img src={upload} className="upload" />
      </div>
      <div>
        <img src={charactor1} className="commentImg1" />
        <p className="commentWriter1">오정수</p>
        <div className="comment1">
          <p className="">피그마 (Figma)에 대해서 들어보셨나요? UX / UI Design을 공부하시는 분이라면, 한번쯤은 들어봤을 것 같습니다. 현재는 스케치가 현업에서 제일 많이 쓰이고 유명하지만 피그마도 그에 못지않게 강력한 기능로 유명해지고 있는 디자인 프로그램입니다.
</p>
        </div>
      </div>
      <div>
        <img src={charactor1} className="commentImg2" />
        <p className="commentWriter2">오정수</p>
        <div className="comment2">
          <p>피그마 (Figma)에 대해서 들어보셨나요? UX / UI Design을 공부하시는 분이라면, 한번쯤은 들어봤을 것 같습니다. 현재는 스케치가 현업에서 제일 많이 쓰이고 유명하지만 피그마도 그에 못지않게 강력한 기능로 유명해지고 있는 디자인 프로그램입니다.
</p>
        </div>
        
      </div>
    </div>
  );
};

export default Ask;