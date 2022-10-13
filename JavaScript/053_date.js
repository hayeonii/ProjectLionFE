Date()

let d = new Date()
d.getDate() // 13
d.getMonth() // 9 // 0월부터 시작함
d.getDay() // 4 // 0부터 시작 // 0 = 일요일

switch (d.getDay()) {
    case 0:
        console.log('일요일');
        break;
    case 1:
        console.log('월요일');
        break;
    case 2:
        console.log('화요일');
        break;
    case 3:
        console.log('수요일');
        break;
    case 4:
        console.log('목요일');
        break;
    case 5:
        console.log('금요일');
        break;
    case 6:
        console.log('토요일');
        break;
    default:
        console.log('날짜의 양식이 잘못되었습니다.')
        break;
}

d.getHours()
d.getMinutes()
d.getSeconds()

d.getFullYear() // d.getYear() // 1900년도부터 연도 계산 -> 쓰지 않음!!!

// 2023년 1월
new Date(2023, 0)

// 2023년 1월 20일 10시
new Date(2023, 0, 20, 10)

// 가독성이 좋다! 근데 왜 월이 +1이 되지 않는 걸까?
// 그냥 회사 컨벤션 따라가기 ..
new Date('2023/1/20/10:00:00')

// Date는 브라우저 시간 기준으로 시간이 설정된다
today = new Date()
// UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60 // -9 


today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';
