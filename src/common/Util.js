// dayjs 라이브러리 선언
import dayjs from 'dayjs';


/* 공통코드 작성하는 곳 */
const someUtilFunc1 = (a,b) => {
    return a+b;
 }

 const toDay = () => {
    return dayjs().format('YYYY-MM-DD');
 }
 

/* 공통코드 EXPORT */
export{
      someUtilFunc1
    , toDay
}; 